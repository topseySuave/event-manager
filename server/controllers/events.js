// import Sequelize from '../config';
import models from '../models';

const Event = models.Events;
const CenterModel = models.Centers;
const Op = models.sequelize.Op;

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
export class Events {
  /**
     * Get a single Event record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Events
     */
  getEvent(req, res) {
    const eventId = parseInt(req.params.id, 10);
    if (isNaN(eventId)) {
      return res.status(400).send({
        message: 'Event id is not a number',
        error: true
      });
    }

    Event.findById(eventId)
      .then((event) => {
        if (!event) {
          return res.status(404).send({
            statusCode: 404,
            message: `Event with id: ${eventId} does not exist`
          });
        }
        return res.status(200).send({
          statusCode: 200,
          message: `Event with id: ${eventId} was found`,
          event
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
  getEvents(req, res) {
    const order = (req.query.order) ? req.query.order : 'desc';
    if (req.query && req.query.sort) {
      if (order) {
        Event.findAll({
          order: [
            ['id', order]
          ]
        })
          .then((returnedEvent) => {
            if (!returnedEvent) {
              return res.status(400).send({
                statusCode: 400,
                message: 'No Event found'
              });
            }

            return res.status(200).send({
              statusCode: 200,
              message: 'Event(s) found',
              center: returnedEvent
            });
          })
          .catch(() => res.status(500).send({
            statusCode: 500,
            message: 'Error searching for Events'
          }));
      }
    } else if (req.query.search && req.query.limit) {
      const limitValue = parseInt(req.query.limit, 10) || 10;
      const search = req.query.search.split(' ');

      /**
      * Search with Title But Map first
      **/
      const titleResp = search.map(value => ({
        title: {
          [Op.ilike]: `%${value}%`
        }
      }));

      Event.findAll({
        where: {
          titleResp
        },
        order: [
          ['id', order]
        ],
        limit: limitValue,
      })
        .then((searchResults) => {
          if (searchResults.length <= 0) {
            return res.status(400).send({
              statusCode: 400,
              message: 'Event(s) do not match your search result'
            });
          }
          return res.status(200).send({
            statusCode: 200,
            message: 'The Events found',
            searchResults
          });
        });
    } else {
      const limitValue = parseInt(req.query.limit, 10) || 5;
      const pageValue = req.query.next || 0;

      Event.findAndCountAll({
        include: [{
          model: CenterModel,
          as: 'center'
        }],
        order: [
          ['id', order]
        ],
        limit: limitValue,
        offset: (pageValue > 1) ? (pageValue * limitValue) - limitValue : pageValue
      })
        .then((events) => {
          if (events.length === 0) {
            return res.status(404).send({
              statusCode: 404,
              message: 'No result found',
            });
          }

          res.status(200).json({
            statusCode: 200,
            message: 'Successful Events!',
            pageSize: parseInt(events.rows.length, 10),
            totalCount: events.count,
            pageCount: Math.ceil(events.count / limitValue),
            page: (pageValue) ? parseInt(pageValue, 10) : parseInt(pageValue + 1, 10),
            events: events.rows,
          });
        })
        .catch(err => res.status(500).send(err));
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
  createEvent(req, res) {
    const startDate = new Date(req.body.startDate);
    const endDate = new Date(req.body.endDate);

    // noinspection JSDuplicatedDeclaration
    Event.findOne({
      where: {
        centerId: req.body.centerId,
        startDate: {
          [Op.lte]: endDate,
          [Op.lte]: startDate
        },
        endDate: {
          [Op.gte]: startDate,
          [Op.gte]: endDate
        }
      }
    })
      .then((result) => {
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
          startDate,
          endDate,
          centerId: parseInt(req.body.centerId, 10),
          userId: parseInt(req.body.userId, 10),
        })
          .then((event) => {
            res.status(200).send({
              statusCode: 200,
              message: 'Event has been created',
              event
            });
          })
          .catch(err => res.status(500).send({
            statusCode: 500,
            success: false,
            message: 'Event cannot be created',
            error: err
          }));
      })
      .catch((err) => {
        res.status(500).send({
          statusCode: 500,
          success: false,
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
  updateEvent(req, res) {
    const eventId = parseInt(req.params.id, 10);
    if (isNaN(eventId)) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Event id is not a number',
        error: true
      });
    }

    Event.findById(eventId)
      .then((event) => {
        if (!event) {
          return res.status(400).send({
            statusCode: 400,
            message: `Event not Found with ${eventId}`
          });
        }

        Event.update(
          {
            title: req.body.title || event.title,
            img_url: req.body.img_url || event.img_url,
            description: req.body.description || event.description,
            startDate: req.body.startDate || event.startDate,
            endDate: req.body.endDate || event.endDate,
            centerId: parseInt(req.body.centerId, 10) || event.centerId,
            userId: parseInt(req.body.userId, 10) || event.userId,
          },
          {
            where: {
              id: eventId
            }
          }
        )
          .then((updatedEvent) => {
            if (updatedEvent) {
              Event.findById(eventId, {
                include: [{
                  model: CenterModel,
                  as: 'center'
                }]
              })
                .then((newEvent) => {
                  if (newEvent) {
                    res.status(201).send({
                      statusCode: 201,
                      message: 'Event has been updated accordingly',
                      event: newEvent
                    });
                  }
                });
            }
          })
          .catch(error => res.status(500).send(error));
      })
      .catch(error => res.status(500).send(error));
  }

  /**
     * Delete an Event record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Events
     */
  deleteEvent(req, res) {
    const eventId = parseInt(req.params.id, 10);
    if (isNaN(eventId)) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Event id is not a number'
      });
    }
    Event.findById(eventId)
      .then((deletedEvent) => {
        if (!deletedEvent) {
          return res.status(400).send({
            statusCode: 400,
            message: `Event not found with id : ${eventId}`
          });
        }
        Event.destroy({
          where: {
            id: eventId,
          }
        })
          .then(() => res.status(200).send({
            statusCode: 200,
            message: 'This Event has been deleted',
            event: deletedEvent
          }));
      })
      .catch(() => res.status(500).send({
        statusCode: 500,
        message: 'Error deleting Event'
      }));
  }
}

export default Events;
