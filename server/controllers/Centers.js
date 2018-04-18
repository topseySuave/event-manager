import models from '../models';

const { Op } = models.sequelize;
const centersModel = models.Centers;
const Event = models.Events;
const attributes = ['id', 'title', 'img_url', 'location', 'description', 'facilities', 'capacity', 'price'];
const eventAttributes = ['id', 'title', 'img_url', 'description', 'startDate', 'endDate', 'centerId'];

const sortSearchRequest = (search, searchBy) => {
  let reqSearch;
  // Search with location, title, price, capacity
  if (searchBy === 'location') {
    reqSearch = search.map((value) => {
      if (value !== '') {
        return {
          location: {
            [Op.iLike]: `%${value}%`
          }
        };
      }
    });
  } else if (searchBy === 'price') {
    reqSearch = search.map((value) => {
      if (value !== '') {
        value = parseInt(value, 10);
        return {
          price: {
            [Op.gte]: `${value}`
          }
        };
      }
    });
  } else if (searchBy === 'capacity') {
    reqSearch = search.map((value) => {
      if (value !== '') {
        value = parseInt(value, 10);
        return {
          capacity: {
            [Op.gte]: `${value}`
          }
        };
      }
    });
  } else {
    reqSearch = search.map((value) => {
      if (value !== '') {
        return {
          title: {
            [Op.iLike]: `%${value}%`
          }
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
export class Centers {
  /**
     * Add Centers record
     *
     * @API POST request '/api/v1/centers'
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Centers
     */
  createCenter(req, res) {
    // check if center name already exist
    return centersModel.findOne({
      where: {
        title: req.body.title,
        location: req.body.location
      }
    })
      .then((existingCenter) => {
        // return this if center name is taken
        if (existingCenter) {
          return res.status(400).json({
            message: 'Centers already exist',
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
        })
          .then((addedCenter) => {
            if (addedCenter) {
              res.status(201).send({
                statusCode: 201,
                message: 'Centers has been created',
                center: addedCenter
              });
            }
          });
      });
  }

  /**
     * Update Or Modify Centers record
     *
     * @API POST request '/api/v1/centers/:id'
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Centers
     */
  updateCenter(req, res) {
    const order = req.query.order || 'desc';
    const limitValue = req.query.limit || process.env.DATA_LIMIT;
    const centerId = parseInt(req.params.id, 10);
    if (isNaN(centerId)) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Centers id is not a number'
      });
    }

    centersModel.findById(centerId)
      .then((foundCenter) => {
        if (!foundCenter) {
          return res.status(404).send({
            statusCode: 404,
            message: `Center with the id of ${centerId} was not Found`
          });
        }

        centersModel.update(
          {
            title: req.body.title || foundCenter.title,
            img_url: req.body.img_url || foundCenter.img_url,
            location: req.body.location || foundCenter.location,
            description: req.body.description || foundCenter.description,
            facilities: req.body.facilities || foundCenter.facilities,
            capacity: parseInt(req.body.capacity, 10) || foundCenter.capacity,
            price: parseInt(req.body.price, 10) || foundCenter.price,
          },
          {
            where: {
              id: centerId
            }
          }
        )
          .then((updatedCenter) => {
            if (updatedCenter) {
              Event.findAndCountAll({
                where: {
                  centerId,
                  startDate: {
                    [Op.gte]: new Date().toDateString()
                  }
                },
                order: [
                  ['id', order]
                ],
                limit: limitValue
              })
                .then((event) => {
                  foundCenter.events = event.rows;
                  return res.status(200).send({
                    statusCode: 200,
                    message: 'Centers has been updated',
                    center: foundCenter,
                    events: event.rows,
                  });
                })
                .catch((err) => {
                  if (err) {
                    return res.status(400).send({
                      statusCode: 400,
                      message: 'Error getting events'
                    });
                  }
                });
            }
          })
          .catch(err => res.status(400).send({
            message: 'Error Updating center',
            errorMessage: err
          }));
      });
  }

  /**
     * Get Centers by id
     *
     * @API GET request '/api/v1/centers/:id'
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Centers
     */
  getCenter(req, res) {
    const order = req.query.order || 'desc';
    const limitValue = req.query.limit || process.env.DATA_LIMIT;
    const centerId = parseInt(req.params.id, 10);
    if (isNaN(centerId)) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Centers id is not a number'
      });
    }

    centersModel.findOne({
      where: {
        id: centerId
      },
      attributes
    })
      .then((foundCenter) => {
        if (!foundCenter) {
          return res.status(404).send({
            statusCode: 404,
            message: `Center with id: ${centerId} does not exist`,
          });
        }

        return Event.findAndCountAll({
          where: {
            centerId,
            startDate: {
              [Op.gte]: new Date().toDateString()
            }
          },
          attributes: eventAttributes,
          order: [
            ['id', order]
          ],
          limit: limitValue
        })
          .then((event) => {
            foundCenter['events'] = event.rows;
            return res.status(200).send({
              statusCode: 200,
              message: `Center with id: ${centerId} was found`,
              center: foundCenter,
              events: event.rows,
            });
          });
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
  getCenters(req, res) {
    const limitValue = parseInt(req.query.limit, 10) || process.env.DATA_LIMIT;
    const pageValue = req.query.next || 0;
    const order = req.query.order || 'desc';
    if (req.query.search || req.query.limit) {
      let searchBy, reqSearch;
      if (req.query.searchBy) {
          searchBy = req.query.searchBy;
      }
      const search = req.query.search.split(' ');

      reqSearch = sortSearchRequest(search, searchBy);
      centersModel.findAll({
        where: {
          [Op.or]: reqSearch
        },
        order: [
          ['id', order]
        ],
        attributes,
        limit: limitValue,
        offset: (pageValue > 1) ? (pageValue * limitValue) - limitValue : pageValue
      })
        .then((searchResults) => {
          if (searchResults.length <= 0) {
            return res.status(404).send({
              statusCode: 404,
              message: 'Centers(s) do not match your search result'
            });
          }

          return res.status(200).send({
            statusCode: 200,
            message: 'Successful Centers!',
            centers: searchResults,
            page: (pageValue) ? parseInt(pageValue, 10) : parseInt(pageValue + 1, 10),
            totalCount: searchResults.length,
            pageCount: Math.ceil(searchResults.length / limitValue),
            pageSize: parseInt(searchResults.length, 10),
          });
        });
    } else {
      centersModel.findAndCountAll({
        order: [
          ['id', order]
        ],
        attributes,
        limit: limitValue,
        offset: (pageValue > 1) ? (pageValue * limitValue) - limitValue : pageValue
      })
        .then(center => res.status(200).send({
          statusCode: 200,
          message: 'Successful Centers!',
          centers: center.rows,
          page: (pageValue) ? parseInt(pageValue, 10) : parseInt(pageValue + 1, 10),
          totalCount: center.count,
          pageCount: Math.ceil(center.count / limitValue),
          pageSize: parseInt(center.rows.length, 10),
        }));
    }
  }

  /**
     * Delete Centers record
     *
     * @API DELETE request '/api/v1/centers/:id'
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Centers
     */
  deleteCenter(req, res) {
    const centerId = parseInt(req.params.id, 10);
    if (isNaN(centerId)) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Centers id is not a number'
      });
    }

    centersModel.findById(centerId)
      .then((deletedCenter) => {
        if (!deletedCenter) {
          return res.status(404).send({
            statusCode: 404,
            message: `Center not found with id : ${centerId}`
          });
        }

        centersModel
          .destroy({
            where: {
              id: centerId,
            }
          })
          .then(() => res.status(200).send({
            statusCode: 200,
            message: 'This Centers has been deleted',
            center: deletedCenter
          }));
      })
      .catch((err) => {
        res.status(400).send({
          statusCode: 400,
          message: 'Centers not found',
          error: err
        });
      });
  }
}

export default Centers;
