'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Centers = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _util = require('../middleware/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Op = _models2.default.sequelize.Op;

var centersModel = _models2.default.Centers;
var Event = _models2.default.Events;
var attributes = ['id', 'title', 'img_url', 'location', 'description', 'facilities', 'capacity', 'price'];
var eventAttributes = ['id', 'title', 'img_url', 'description', 'startDate', 'endDate', 'centerId'];

var sortSearchRequest = function sortSearchRequest(search, searchBy) {
  var reqSearch = void 0;
  // Search with location, title, price, capacity
  if (searchBy === 'location') {
    reqSearch = search.map(function (value) {
      if (value !== '') {
        return {
          location: _defineProperty({}, Op.iLike, '%' + value + '%')
        };
      }
    });
  } else if (searchBy === 'price') {
    reqSearch = search.map(function (value) {
      if (value !== '') {
        value = parseInt(value, 10);
        return {
          price: _defineProperty({}, Op.gte, '' + value)
        };
      }
    });
  } else if (searchBy === 'capacity') {
    reqSearch = search.map(function (value) {
      if (value !== '') {
        value = parseInt(value, 10);
        return {
          capacity: _defineProperty({}, Op.gte, '' + value)
        };
      }
    });
  } else {
    reqSearch = search.map(function (value) {
      if (value !== '') {
        return {
          title: _defineProperty({}, Op.iLike, '%' + value + '%')
        };
      }
    });
  }
  return reqSearch;
};

/**
 * @export
 * @class Centers
 */

var Centers = exports.Centers = function () {
  function Centers() {
    _classCallCheck(this, Centers);
  }

  _createClass(Centers, [{
    key: 'createCenter',

    /**
     * Add Center record
     *
     * @API POST request '/api/v1/centers'
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Center
     */
    value: function createCenter(req, res) {
      // check if center name already exist
      return centersModel.findOne({
        where: {
          title: req.body.title,
          location: req.body.location
        }
      }).then(function (existingCenter) {
        // return this if center name is taken
        if (existingCenter) {
          return res.status(400).json({
            message: 'Center already exist',
            statusCode: 400
          });
        }

        return centersModel.create({
          title: req.body.title,
          img_url: req.body.img_url,
          location: req.body.location,
          description: req.body.description,
          facilities: req.body.facilities,
          capacity: parseInt(req.body.capacity, 10),
          price: parseInt(req.body.price, 10)
        }).then(function (addedCenter) {
          if (addedCenter) {
            res.status(201).send({
              statusCode: 201,
              message: 'Center has been created',
              center: addedCenter
            });
          }
        });
      });
    }

    /**
     * Update Or Modify Center record
     *
     * @API POST request '/api/v1/centers/:id'
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Center
     */

  }, {
    key: 'updateCenter',
    value: function updateCenter(req, res) {
      var order = req.query.order || 'desc';
      var limitValue = req.query.limit || process.env.DATA_LIMIT;
      var centerId = parseInt(req.params.id, 10);
      if (isNaN(centerId)) {
        return res.status(400).send({
          statusCode: 400,
          message: 'Center id is not a number'
        });
      }

      centersModel.findById(centerId).then(function (foundCenter) {
        if (!foundCenter) {
          return res.status(404).send({
            statusCode: 404,
            message: 'Center with the id of ' + centerId + ' was not Found'
          });
        }

        centersModel.update({
          title: req.body.title || foundCenter.title,
          img_url: req.body.img_url || foundCenter.img_url,
          location: req.body.location || foundCenter.location,
          description: req.body.description || foundCenter.description,
          facilities: req.body.facilities || foundCenter.facilities,
          capacity: parseInt(req.body.capacity, 10) || foundCenter.capacity,
          price: parseInt(req.body.price, 10) || foundCenter.price
        }, {
          where: {
            id: centerId
          }
        }).then(function (updatedCenter) {
          if (updatedCenter) {
            Event.findAndCountAll({
              where: {
                centerId: centerId,
                startDate: _defineProperty({}, Op.gte, new Date().toDateString())
              },
              order: [['id', order]],
              limit: limitValue
            }).then(function (event) {
              foundCenter.events = event.rows;
              return res.status(200).send({
                statusCode: 200,
                message: 'Center has been updated',
                center: foundCenter,
                events: event.rows
              });
            }).catch(function (err) {
              if (err) {
                return res.status(400).send({
                  statusCode: 400,
                  message: 'Error getting events'
                });
              }
            });
          }
        }).catch(function (err) {
          return res.status(400).send({
            message: 'Error Updating center',
            errorMessage: err
          });
        });
      });
    }

    /**
     * Get Center by id
     *
     * @API GET request '/api/v1/centers/:id'
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Center
     */

  }, {
    key: 'getCenter',
    value: function getCenter(req, res) {
      var order = req.query.order || 'desc';
      var limitValue = req.query.limit || process.env.DATA_LIMIT;
      var centerId = parseInt(req.params.id, 10);
      if (isNaN(centerId)) {
        return res.status(400).send({
          statusCode: 400,
          message: 'Center id is not a number'
        });
      }

      centersModel.findOne({
        where: {
          id: centerId
        },
        attributes: attributes
      }).then(function (foundCenter) {
        if (!foundCenter) {
          return res.status(404).send({
            statusCode: 404,
            message: 'Center with id: ' + centerId + ' does not exist'
          });
        }

        return Event.findAndCountAll({
          where: {
            centerId: centerId,
            startDate: _defineProperty({}, Op.gte, new Date().toDateString())
          },
          attributes: eventAttributes,
          order: [['id', order]],
          limit: limitValue
        }).then(function (event) {
          foundCenter['events'] = event.rows;
          return res.status(200).send({
            statusCode: 200,
            message: 'Center with id: ' + centerId + ' was found',
            center: foundCenter,
            events: event.rows
          });
        });
      });
    }

    /**
     * Get Center record
     *
     * @API GET request '/api/v1/centers[?search=<search-query>&limit=<limit>&order=<desc || asc>]'
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Center
     */

  }, {
    key: 'getCenters',
    value: function getCenters(req, res) {
      var limitValue = parseInt(req.query.limit, 10) || process.env.DATA_LIMIT;
      var pageValue = req.query.next || 0;
      var order = req.query.order || 'desc';
      var basedOn = parseInt(req.query.basedOn) || 0;
      var offset = pageValue > 1 ? pageValue * limitValue - limitValue : pageValue;
      if (req.query.search || req.query.limit) {
        var searchBy = void 0,
            reqSearch = void 0;
        if (req.query.searchBy) {
          searchBy = req.query.searchBy;
        }
        var search = req.query.search.split(' ');

        reqSearch = sortSearchRequest(search, searchBy);
        centersModel.findAndCountAll({
          where: _defineProperty({}, Op.or, reqSearch),
          order: [['id', order]],
          attributes: attributes,
          limit: limitValue,
          offset: offset
        }).then(function (searchResults) {
          if (searchResults.length <= 0) {
            return res.status(404).send({
              statusCode: 404,
              message: 'Center(s) do not match your search result'
            });
          }

          var results = searchResults.rows.filter(function (center) {
            return center.id !== basedOn;
          });

          return res.status(200).send({
            statusCode: 200,
            message: 'Successful Center!',
            centers: results,
            meta: (0, _util.generatePaginationMeta)(searchResults, limitValue, pageValue)
          });
        });
      } else {
        centersModel.findAndCountAll({
          order: [['id', order]],
          attributes: attributes,
          limit: limitValue,
          offset: offset
        }).then(function (center) {
          res.status(200).send({
            statusCode: 200,
            message: 'Successful Center!',
            centers: center.rows,
            meta: (0, _util.generatePaginationMeta)(center, limitValue, pageValue)
          });
        });
      }
    }

    /**
     * Delete Center record
     *
     * @API DELETE request '/api/v1/centers/:id'
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Center
     */

  }, {
    key: 'deleteCenter',
    value: function deleteCenter(req, res) {
      var centerId = parseInt(req.params.id, 10);
      if (isNaN(centerId)) {
        return res.status(400).send({
          statusCode: 400,
          message: 'Center id is not a number'
        });
      }

      centersModel.findById(centerId).then(function (deletedCenter) {
        if (!deletedCenter) {
          return res.status(404).send({
            statusCode: 404,
            message: 'Center not found with id : ' + centerId
          });
        }

        centersModel.destroy({
          where: {
            id: centerId
          }
        }).then(function () {
          return res.status(200).send({
            statusCode: 200,
            message: 'This Center has been deleted',
            center: deletedCenter
          });
        });
      }).catch(function (err) {
        res.status(400).send({
          statusCode: 400,
          message: 'Center not found',
          error: err
        });
      });
    }
  }]);

  return Centers;
}();

exports.default = Centers;
//# sourceMappingURL=Centers.js.map