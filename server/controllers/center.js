import models from '../models';

// dotenv.config();
const { Op } = models.sequelize;
const Center = models.Centers;
const Event = models.Events;


const sortSearchRequest = (search, filterBy) => {
  let reqSearch;
  // Search with location, title, price, capacity
  if (filterBy === 'location') {
    reqSearch = search.map((value) => {
      if (value !== '') {
        return {
          location: {
            [Op.iLike]: `%${value}%`
          }
        };
      }
    });
  } else if (filterBy === 'price') {
    reqSearch = search.map((value) => {
      if (value !== '') {
        return {
          price: {
            [Op.iLike]: `%${value}%`
          }
        };
      }
    });
  } else if (filterBy === 'capacity') {
    reqSearch = search.map((value) => {
      if (value !== '') {
        return {
          capacity: {
            [Op.iLike]: `%${value}%`
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
     * Add Center record
     *
     * @API POST request '/api/v1/centers'
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Center
     */
  createCenter(req, res) {
    // check if center name already exist
    return Center.findOne({
      where: {
        title: req.body.title,
        location: req.body.location
      }
    })
      .then((centers) => {
        // return this if  center name is taken
        if (centers) {
          if (centers.length > 0) {
            return res.status(400).json({
              message: 'Center already exist',
              statusCode: 400
            });
          }
        }

        return Center.create({
          title: req.body.title,
          img_url: req.body.img_url,
          location: req.body.location,
          description: req.body.description,
          facilities: req.body.facilities,
          capacity: parseInt(req.body.capacity, 10),
          price: parseInt(req.body.price, 10)
        })
          .then(center => res.status(201).send({
            statusCode: 201,
            message: 'Center has been created',
            center
          }))

          .catch(err => res.status(400).send({
            statusCode: 400,
            success: false,
            message: 'Center cannot be created',
            error: err
          }));
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
  updateCenter(req, res) {
    const order = req.query.order || 'desc';
    const limitValue = req.query.limit || process.env.DATA_LIMIT;
    const centerId = parseInt(req.params.id, 10);
    if (isNaN(centerId)) {
      return res.status(400).send({
        message: 'Center id is not a number',
        error: true
      });
    }

    Center.findById(centerId)
      .then((centr) => {
        console.log(centr);
        if (!centr) {
          return res.status(404).send({
            statusCode: 404,
            message: `Center not Found with ${centerId}`
          });
        }

        Center.update(
          {
            title: req.body.title || centr.title,
            img_url: req.body.img_url || centr.img_url,
            location: req.body.location || centr.location,
            description: req.body.description || centr.description,
            facilities: req.body.facilities || centr.facilities,
            capacity: parseInt(req.body.capacity, 10) || centr.capacity,
            price: parseInt(req.body.price, 10) || centr.price,
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
                  centr.event = event.rows;
                  return res.status(200).send({
                    statusCode: 200,
                    message: 'Center has been updated',
                    events: event.rows,
                    centr,
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
            error: true,
            message: 'Error Updating center',
            errorMessage: err
          }));
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
  getCenter(req, res) {
    const order = req.query.order || 'desc';
    const limitValue = req.query.limit || process.env.DATA_LIMIT;
    const centerId = parseInt(req.params.id, 10);
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
    })
      .then((centr) => {
        if (!centr) {
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
          order: [
            ['id', order]
          ],
          limit: limitValue
        })
          .then((event) => {
            centr.event = event.rows;
            return res.status(200).send({
              statusCode: 200,
              message: `Center with id: ${centerId} was found`,
              events: event.rows,
              centr,
            });
          })
          .catch((err) => {
            if (err) {
              return res.status(400).send({
                statusCode: 400,
                message: 'Error getting center details'
              });
            }
          });
      })
      .catch((err) => {
        if (err) {
          return res.status(400).send({
            statusCode: 400,
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
  getCenters(req, res) {
    const limitValue = parseInt(req.query.limit, 10) || process.env.DATA_LIMIT;
    const pageValue = req.query.next || 0;
    const order = req.query.order || 'desc';
    if (req.query.search || req.query.limit) {
      let filterBy, reqSearch;
      if (req.query.filter) {
        filterBy = req.query.filter;
      }
      const search = req.query.search.split(' ');

      reqSearch = sortSearchRequest(search, filterBy);
      Center.findAll({
        where: {
          [Op.or]: reqSearch
        },
        order: [
          ['id', order]
        ],
        limit: limitValue,
        offset: (pageValue > 1) ? (pageValue * limitValue) - limitValue : pageValue
      })
        .then((searchResults) => {
          if (searchResults.length <= 0) {
            return res.status(404).send({
              statusCode: 404,
              message: 'Center(s) do not match your search result'
            });
          }

          return res.status(200).send({
            statusCode: 200,
            message: 'Successful Centers!',
            page: (pageValue) ? parseInt(pageValue, 10) : parseInt(pageValue + 1, 10),
            totalCount: searchResults.length,
            pageCount: Math.ceil(searchResults.length / limitValue),
            pageSize: parseInt(searchResults.length, 10),
            centers: searchResults,
          });
        });
    } else {
      Center.findAndCountAll({
        order: [
          ['id', order]
        ],
        limit: limitValue,
        offset: (pageValue > 1) ? (pageValue * limitValue) - limitValue : pageValue
      })
        .then((center) => {
          if (!center) {
            return res.status(404).send({
              statusCode: 404,
              message: 'No result found',
            });
          }

          return res.status(200).send({
            statusCode: 200,
            message: 'Successful Centers!',
            page: (pageValue) ? parseInt(pageValue, 10) : parseInt(pageValue + 1, 10),
            totalCount: center.count,
            pageCount: Math.ceil(center.count / limitValue),
            pageSize: parseInt(center.rows.length, 10),
            centers: center.rows,
          });
        })
        .catch(err => res.status(400).send({
          statusCode: 400,
          message: 'Couldn\'t find all centers...!',
          error: err
        }));
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
  deleteCenter(req, res) {
    const centerId = parseInt(req.params.id, 10);
    if (isNaN(centerId)) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Center id is not a number'
      });
    }
    Center.findById(centerId)
      .then((deletedCenter) => {
        if (!deletedCenter) {
          return res.status(400).send({
            statusCode: 400,
            message: `Center not found with id : ${centerId}`
          });
        }
        Center
          .destroy({
            where: {
              id: centerId,
            }
          })
          .then(() => res.status(200).send({
            statusCode: 200,
            message: 'This Center has been deleted',
            center: deletedCenter
          }));
      });
  }
}

export default Centers;
