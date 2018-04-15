'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Events = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import Sequelize from '../config';


var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = _models2.default.Events;
var CenterModel = _models2.default.Centers;
var Op = _models2.default.sequelize.Op;

// let storage = multer.diskStorage({
//     destination: '../server/public/images/uploads',
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname())
//     }
// });
//
// let upload = multer({ storage: storage }).array('photos', 5);

/**
 * @export
 * @class Events
 */

var Events = exports.Events = function () {
  function Events() {
    _classCallCheck(this, Events);
  }

  _createClass(Events, [{
    key: 'getEvent',

    /**
       * Get a single Event record
       *
       * @param {object} req - HTTP Request
       * @param {object} res - HTTP Response
       * @returns {object} Class instance
       * @memberof Events
       */
    value: function getEvent(req, res) {
      var eventId = parseInt(req.params.id, 10);
      if (isNaN(eventId)) {
        return res.status(400).send({
          statusCode: 400,
          message: 'Event id is not a number'
        });
      }

      Event.findById(eventId).then(function (event) {
        if (!event) {
          return res.status(404).send({
            statusCode: 404,
            message: 'Event with id: ' + eventId + ' does not exist'
          });
        }
        return res.status(200).send({
          statusCode: 200,
          message: 'Event with id: ' + eventId + ' was found',
          event: event
        });
      });
    }

    /**
       * Get Multiple Event record
       *
       * @param {object} req - HTTP Request
       * @param {object} res - HTTP Response
       * @returns {object} Class instance
       * @memberof Events
       */

  }, {
    key: 'getEvents',
    value: function getEvents(req, res) {
      var limitValue = parseInt(req.query.limit, 10) || process.env.DATA_LIMIT;
      var order = req.query.order ? req.query.order : 'desc';
      if (req.query && req.query.sort) {
        if (order) {
          Event.findAll({
            where: {
              startDate: _defineProperty({}, Op.gte, new Date().toDateString())
            },
            order: [['id', order]]
          }).then(function (returnedEvent) {
            if (!returnedEvent) {
              return res.status(400).send({
                statusCode: 400,
                message: 'No Event found'
              });
            }

            return res.status(200).send({
              statusCode: 200,
              message: 'Event(s) found',
              events: returnedEvent
            });
          }).catch(function () {
            return res.status(500).send({
              statusCode: 500,
              message: 'Error searching for Events'
            });
          });
        }
      } else if (req.query.search || req.query.limit) {
        var _where;

        var search = req.query.search.split(' ');

        /**
        * Search with Title But Map first
        * */
        var titleResp = search.map(function (value) {
          return {
            title: _defineProperty({}, Op.iLike, '%' + value + '%')
          };
        });

        Event.findAll({
          where: (_where = {}, _defineProperty(_where, Op.or, titleResp), _defineProperty(_where, 'startDate', _defineProperty({}, Op.gte, new Date().toDateString())), _where),
          order: [['id', order]],
          limit: limitValue
        }).then(function (searchResults) {
          if (searchResults.length <= 0) {
            return res.status(400).send({
              statusCode: 400,
              message: 'Event(s) do not match your search result'
            });
          }
          return res.status(200).send({
            statusCode: 200,
            message: 'The Events found',
            events: searchResults
          });
        });
      } else {
        var pageValue = req.query.next || 0;
        Event.findAndCountAll({
          where: {
            startDate: _defineProperty({}, Op.gte, new Date().toDateString())
          },
          include: [{
            model: CenterModel,
            as: 'center'
          }],
          order: [['id', order]],
          limit: limitValue,
          offset: pageValue > 1 ? pageValue * limitValue - limitValue : pageValue
        }).then(function (events) {
          if (events.length === 0) {
            return res.status(404).send({
              statusCode: 404,
              message: 'No result found'
            });
          }

          res.status(200).json({
            statusCode: 200,
            message: 'Successful Events!',
            pageSize: parseInt(events.rows.length, 10),
            totalCount: events.count,
            pageCount: Math.ceil(events.count / limitValue),
            page: pageValue ? parseInt(pageValue, 10) : parseInt(pageValue + 1, 10),
            events: events.rows
          });
        }).catch(function (err) {
          return res.status(500).send(err);
        });
      }
    }

    /**
       * Create Event record
       *
       * @param {object} req - HTTP Request
       * @param {object} res - HTTP Response
       * @returns {object} Class instance
       * @memberof Events
       */

  }, {
    key: 'createEvent',
    value: function createEvent(req, res) {
      var _startDate4, _endDate;

      var startDate = new Date(req.body.startDate);
      var endDate = new Date(req.body.endDate);

      // noinspection JSDuplicatedDeclaration
      Event.findOne({
        where: {
          centerId: req.body.centerId,
          startDate: (_startDate4 = {}, _defineProperty(_startDate4, Op.lte, endDate), _defineProperty(_startDate4, Op.lte, startDate), _startDate4),
          endDate: (_endDate = {}, _defineProperty(_endDate, Op.gte, startDate), _defineProperty(_endDate, Op.gte, endDate), _endDate)
        }
      }).then(function (result) {
        if (result !== null) {
          return res.send({
            message: 'Center has been booked for this date',
            statusCode: 400,
            error: true
          });
        }
        return Event.create({
          title: req.body.title,
          img_url: req.body.img_url,
          location: req.body.location,
          description: req.body.description,
          startDate: startDate,
          endDate: endDate,
          centerId: parseInt(req.body.centerId, 10),
          userId: parseInt(req.body.userId, 10)
        }).then(function (event) {
          res.status(200).send({
            statusCode: 200,
            message: 'Event has been created',
            event: event
          });
        }).catch(function (err) {
          return res.status(500).send({
            statusCode: 500,
            message: 'Event cannot be created',
            error: err
          });
        });
      }).catch(function (err) {
        res.status(500).send({
          statusCode: 500,
          message: 'Event cannot be created',
          error: err
        });
      });
    }

    /**
       * Update a single Event record
       *
       * @param {object} req - HTTP Request
       * @param {object} res - HTTP Response
       * @returns {object} Class instance
       * @memberof Events
       */

  }, {
    key: 'updateEvent',
    value: function updateEvent(req, res) {
      var eventId = parseInt(req.params.id, 10);
      if (isNaN(eventId)) {
        return res.status(400).send({
          statusCode: 400,
          message: 'Event id is not a number'
        });
      }

      Event.findById(eventId).then(function (event) {
        if (!event) {
          return res.status(400).send({
            statusCode: 400,
            message: 'Event not Found with ' + eventId
          });
        }

        Event.update({
          title: req.body.title || event.title,
          img_url: req.body.img_url || event.img_url,
          description: req.body.description || event.description,
          startDate: req.body.startDate || event.startDate,
          endDate: req.body.endDate || event.endDate,
          centerId: parseInt(req.body.centerId, 10) || event.centerId,
          userId: parseInt(req.body.userId, 10) || event.userId
        }, {
          where: {
            id: eventId
          }
        }).then(function (updatedEvent) {
          if (updatedEvent) {
            Event.findById(eventId, {
              include: [{
                model: CenterModel,
                as: 'center'
              }]
            }).then(function (newEvent) {
              if (newEvent) {
                res.status(201).send({
                  statusCode: 201,
                  message: 'Event has been updated accordingly',
                  event: newEvent
                });
              }
            });
          }
        }).catch(function (error) {
          return res.status(500).send(error);
        });
      }).catch(function (error) {
        return res.status(500).send(error);
      });
    }

    /**
       * Delete an Event record
       *
       * @param {object} req - HTTP Request
       * @param {object} res - HTTP Response
       * @returns {object} Class instance
       * @memberof Events
       */

  }, {
    key: 'deleteEvent',
    value: function deleteEvent(req, res) {
      var eventId = parseInt(req.params.id, 10);
      if (isNaN(eventId)) {
        return res.status(400).send({
          statusCode: 400,
          message: 'Event id is not a number'
        });
      }
      Event.findById(eventId).then(function (deletedEvent) {
        if (!deletedEvent) {
          return res.status(400).send({
            statusCode: 400,
            message: 'Event not found with id : ' + eventId
          });
        }
        Event.destroy({
          where: {
            id: eventId
          }
        }).then(function () {
          return res.status(200).send({
            statusCode: 200,
            message: 'This Event has been deleted',
            event: deletedEvent
          });
        });
      }).catch(function () {
        return res.status(500).send({
          statusCode: 500,
          message: 'Error deleting Event'
        });
      });
    }
  }]);

  return Events;
}();

exports.default = Events;
//# sourceMappingURL=events.js.map