'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Centers = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import path from 'path';
// import fs from 'fs';
// import cloudinary from 'cloudinary';

// dotenv.config();
var Op = _models2.default.sequelize.Op;

var Center = _models2.default.Centers;
var Event = _models2.default.Events;

var sortSearchRequest = function sortSearchRequest(search, filterBy) {
  var reqSearch = void 0;
  // Search with location, title, price, capacity
  if (filterBy === 'location') {
    reqSearch = search.map(function (value) {
      if (value !== '') {
        return {
          location: _defineProperty({}, Op.iLike, '%' + value + '%')
        };
      }
    });
  } else if (filterBy === 'price') {
    reqSearch = search.map(function (value) {
      if (value !== '') {
        return {
          price: _defineProperty({}, Op.iLike, '%' + value + '%')
        };
      }
    });
  } else if (filterBy === 'capacity') {
    reqSearch = search.map(function (value) {
      if (value !== '') {
        return {
          capacity: _defineProperty({}, Op.iLike, '%' + value + '%')
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
 * @class Center
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
      return Center.findOne({
        where: {
          title: req.body.title,
          location: req.body.location
        }
      }).then(function (centers) {
        // return this if  center name is taken
        if (centers) {
          if (centers.length > 0) {
            return res.status(400).json({
              message: 'Center already exist',
              statusCode: 400
            });
          }
        }

        // cloudinary.config({
        //     cloud_name: 'dcbqn1c10',
        //     api_key: '441952115171911',
        //     api_secret: 'RMaPGLJFey85McETvjNUkH_6SyE'
        // });
        // cloudinary.uploader.upload(req.files.image.path, (res) => {
        //     console.log(res);
        // });

        return Center.create({
          title: req.body.title,
          img_url: req.body.img_url,
          location: req.body.location,
          description: req.body.description,
          facilities: req.body.facilities,
          capacity: parseInt(req.body.capacity, 10),
          price: parseInt(req.body.price, 10)
        }).then(function (center) {
          return res.status(201).send({
            statusCode: 201,
            message: 'Center has been created',
            center: center
          });
        }).catch(function (err) {
          return res.status(500).send({
            statusCode: 500,
            success: false,
            message: 'Center cannot be created',
            error: err
          });
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
          message: 'Center id is not a number',
          error: true
        });
      }

      Center.findById(centerId).then(function (centr) {
        if (!centr) {
          return res.status(404).send({
            statusCode: 404,
            message: 'Center not Found with ' + centerId
          });
        }

        Center.update({
          title: req.body.title || center.title,
          img_url: req.body.img_url || center.img_url,
          location: req.body.location || center.location,
          description: req.body.description || center.description,
          facilities: req.body.facilities || center.facilities,
          capacity: parseInt(req.body.capacity, 10) || center.capacity,
          price: parseInt(req.body.price, 10) || center.price
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
              centr.event = event.rows;
              return res.status(200).send({
                statusCode: 200,
                message: 'Center has been updated',
                events: event.rows,
                centr: centr
              });
            }).catch(function (err) {
              if (err) {
                return res.status(500).send({
                  statusCode: 500,
                  message: 'Error getting events'
                });
              }
            });
          }
        }).catch(function (err) {
          return res.status(500).send({
            error: true,
            message: 'Error Updating center',
            errorMessage: err
          });
        });
      }).catch(function (error) {
        return res.status(500).send({
          error: true,
          message: 'Error finding center',
          errorMessage: error
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
          message: 'Center id is not a number',
          error: true
        });
      }

      Center.findOne({
        where: {
          id: centerId
        }
      }).then(function (centr) {
        if (!centr) {
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
          order: [['id', order]],
          limit: limitValue
        }).then(function (event) {
          centr.event = event.rows;
          return res.status(200).send({
            statusCode: 200,
            message: 'Center with id: ' + centerId + ' was found',
            events: event.rows,
            centr: centr
          });
        }).catch(function (err) {
          if (err) {
            return res.status(500).send({
              statusCode: 500,
              message: 'Error getting center details'
            });
          }
        });
      }).catch(function (err) {
        if (err) {
          return res.status(500).send({
            statusCode: 500,
            message: 'Error getting center details'
          });
        }
      });
    }

    /**
       * Get Centers record
       *
       * @API GET request '/api/v1/centers[?search=<search-query>&limit=<limit>&order=<desc || asc>]'
       *
       * @param {object} req - HTTP Request
       * @param {object} res - HTTP Response
       * @returns {object} Class instance
       * @memberof Centers
       */

  }, {
    key: 'getCenters',
    value: function getCenters(req, res) {
      var limitValue = parseInt(req.query.limit, 10) || process.env.DATA_LIMIT;
      var pageValue = req.query.next || 0;
      var order = req.query.order || 'desc';
      if (req.query.search || req.query.limit) {
        var filterBy = void 0,
            reqSearch = void 0;
        if (req.query.filter) {
          filterBy = req.query.filter;
        }
        var search = req.query.search.split(' ');

        reqSearch = sortSearchRequest(search, filterBy);
        Center.findAll({
          where: _defineProperty({}, Op.or, reqSearch),
          order: [['id', order]],
          limit: limitValue,
          offset: pageValue > 1 ? pageValue * limitValue - limitValue : pageValue
        }).then(function (searchResults) {
          if (searchResults.length <= 0) {
            return res.status(404).send({
              statusCode: 404,
              message: 'Center(s) do not match your search result'
            });
          }

          return res.status(200).send({
            statusCode: 200,
            message: 'Successful Centers!',
            page: pageValue ? parseInt(pageValue, 10) : parseInt(pageValue + 1, 10),
            totalCount: searchResults.length,
            pageCount: Math.ceil(searchResults.length / limitValue),
            pageSize: parseInt(searchResults.length, 10),
            centers: searchResults
          });
        });
      } else {
        Center.findAndCountAll({
          order: [['id', order]],
          limit: limitValue,
          offset: pageValue > 1 ? pageValue * limitValue - limitValue : pageValue
        }).then(function (center) {
          if (!center) {
            return res.status(404).send({
              statusCode: 404,
              message: 'No result found'
            });
          }

          return res.status(200).send({
            statusCode: 200,
            message: 'Successful Centers!',
            page: pageValue ? parseInt(pageValue, 10) : parseInt(pageValue + 1, 10),
            totalCount: center.count,
            pageCount: Math.ceil(center.count / limitValue),
            pageSize: parseInt(center.rows.length, 10),
            centers: center.rows
          });
        }).catch(function (err) {
          return res.status(500).send({
            statusCode: 500,
            message: 'Internal server Error!',
            error: err
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
      Center.findById(centerId).then(function (deletedCenter) {
        if (!deletedCenter) {
          return res.status(400).send({
            statusCode: 400,
            message: 'Center not found with id : ' + centerId
          });
        }
        Center.destroy({
          where: {
            id: centerId
          }
        }).then(function () {
          return res.status(200).send({
            statusCode: 200,
            message: 'This Center has been deleted'
          });
        });
      }).catch(function () {
        return res.status(500).send({
          statusCode: 500,
          message: 'Error deleting Center'
        });
      });
    }
  }]);

  return Centers;
}();

exports.default = Centers;
//# sourceMappingURL=center.js.map