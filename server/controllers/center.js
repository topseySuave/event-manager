import models from '../models';
// import path from 'path';
// import fs from 'fs';
// import cloudinary from 'cloudinary';

// dotenv.config();
const Center = models.Centers;
const { Events } = models;


const sortSearchRequest = (search, filterBy) => {
  let reqSearch;
  // Search with location, title, price, capacity
  if (filterBy === 'location') {
    reqSearch = search.map((value) => {
      if (value !== '') {
        return {
          location: {
            $iLike: `%${value}%`
          }
        };
      }
    });
  } else if (filterBy === 'title') {
    reqSearch = search.map((value) => {
      if (value !== '') {
        return {
          title: {
            $iLike: `%${value}%`
          }
        };
      }
    });
  } else if (filterBy === 'price') {
    reqSearch = search.map((value) => {
      if (value !== '') {
        return {
          price: {
            $iLike: `%${value}%`
          }
        };
      }
    });
  } else if (filterBy === 'capacity') {
    reqSearch = search.map((value) => {
      if (value !== '') {
        return {
          capacity: {
            $iLike: `%${value}%`
          }
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
        })
          .then(center => res.status(201).send({
            statusCode: 201,
            message: 'Center has been created',
            center
          }))

          .catch(err => res.status(500).send({
            statusCode: 500,
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
    const centerId = parseInt(req.params.id, 10);
    if (isNaN(centerId)) {
      return res.status(400).send({
        message: 'Center id is not a number',
        error: true
      });
    }

    Center.findById(centerId)
      .then((center) => {
        if (!center) {
          return res.status(404).send({
            statusCode: 404,
            message: `Center not Found with ${centerId}`
          });
        }

        Center.update(
          {
            title: req.body.title || center.title,
            img_url: req.body.img_url || center.img_url,
            location: req.body.location || center.location,
            description: req.body.description || center.description,
            facilities: req.body.facilities || center.facilities,
            capacity: parseInt(req.body.capacity, 10) || center.capacity,
            price: parseInt(req.body.price, 10) || center.price,
          },
          {
            where: {
              id: req.body.id
            }
          }
        )
          .then(centerUpdated => res.status(200).send({
            statusCode: 200,
            message: 'Center has been created',
            center
          }))
          .catch(error => res.status(500).send(error));
      })
      .catch(error => res.status(500).send(error));
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
      },
      include: [
        {
          model: Events,
          as: 'events'
        }
      ],
      order: [
        ['id', 'desc']
      ]
    })
      .then((centr) => {
        if (!centr) {
          return res.status(404).send({
            statusCode: 404,
            message: `Center with id: ${centerId} does not exist`,
          });
        }

        return res.status(200).send({
          statusCode: 200,
          message: `Center with id: ${centerId} was found`,
          centr,
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
    const limitValue = parseInt(req.query.limit, 10) || 20;
    const pageValue = req.query.next - 1 || 0;
    const order = (req.query.order) ? req.query.order : 'desc';
    if (req.query.search || req.query.limit) {
      let filterBy, reqSearch;
      if (req.query.filter) {
        filterBy = req.query.filter;
      }
      const search = req.query.search.split(',');

      reqSearch = sortSearchRequest(search, filterBy);
      Center.findAll({
        where: {
          $or: reqSearch
        },
        order: [
          ['id', order]
        ],
        limit: limitValue,
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
            page: pageValue + 1,
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
        offset: pageValue * limitValue
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
            page: pageValue + 1,
            totalCount: center.count,
            pageCount: Math.ceil(center.count / limitValue),
            pageSize: parseInt(center.rows.length, 10),
            centers: center.rows,
          });
        })
        .catch(err => res.status(500).send({
          statusCode: 500,
          message: 'Internal server Error!',
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
            message: 'This Center has been deleted'
          }));
      })
      .catch(() => res.status(500).send({
        statusCode: 500,
        message: 'Error deleting Center'
      }));
  }
}

export default Centers;
