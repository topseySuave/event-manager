import models from '../models';
import {
  isNaNValidator,
  generatePaginationMeta,
  generatePagination
} from '../middleware/util';

const Event = models.Events;
const CenterModel = models.Centers;
const {
  Op
} = models.sequelize;
const centerAttributes = ['location'];
const attributes =
  ['id', 'title', 'img_url', 'description', 'startDate',
    'endDate', 'status', 'centerId', 'userId', 'private'];

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
    if (isNaN(eventId)) return isNaNValidator(res, eventId);

    Event.findById(eventId).then((event) => {
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
    const limitValue = parseInt(req.query.limit, 10) || process.env.DATA_LIMIT;
    const order = req.query.order ? req.query.order : 'desc';
    const pageValue = req.query.next || 0;
    let offset = (pageValue > 1) ? pageValue * limitValue - limitValue :
      pageValue;
    if (req.query && req.query.sort) {
      if (order) {
        Event.findAll({
          where: {
            private: false,
            status: 'accepted',
            startDate: {
              [Op.gte]: new Date().toDateString()
            }
          },
          order: [
            ['id', order]
          ],
          attributes
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
              events: returnedEvent
            });
          })
          .catch(() =>
            res.status(500).send({
              statusCode: 500,
              message: 'Error searching for Events'
            }));
      }
    } else if (req.query.sessionEvents) {
      const userId = parseInt(req.query.sessionEvents, 10) || 0;
      if (isNaN(userId)) return isNaNValidator(res, userId);

      Event.findAndCountAll({
        where: {
          userId
        },
        include: [{
          model: CenterModel,
          as: 'center',
          attributes: centerAttributes
        }],
        order: [
          ['id', order]
        ],
        limit: limitValue,
        attributes,
        offset
      }).then((eventsFound) => {
        if (eventsFound.count <= 0) {
          return res.status(200).send({
            statusCode: 200,
            message: 'There are no event for this user',
            events: []
          });
        }

        return res.status(200).send({
          statusCode: 200,
          message: 'The Events found',
          events: eventsFound.rows,
          meta: generatePaginationMeta(eventsFound, limitValue, pageValue)
        });
      });
    } else if (req.query.search || req.query.limit) {
      const search = req.query.search.split(' ');

      /**
       * Search with Title But Map first
       * */
      const titleResp = search.map(value => ({
        title: {
          [Op.iLike]: `%${value}%`
        }
      }));

      Event.findAndCountAll({
        where: {
          [Op.or]: titleResp,
          startDate: {
            [Op.gte]: new Date().toDateString()
          },
          private: false,
          status: 'accepted',
        },
        include: [{
          model: CenterModel,
          as: 'center',
          attributes: centerAttributes
        }],
        attributes,
        order: [
          ['id', order]
        ],
        limit: limitValue
      }).then((searchResults) => {
        if (searchResults.length <= 0) {
          return res.status(404).send({
            statusCode: 404,
            message: 'Event(s) do not match your search result'
          });
        }

        return res.status(200).send({
          statusCode: 200,
          message: 'The Events found',
          events: searchResults.rows,
          meta: generatePaginationMeta(searchResults, limitValue, pageValue)
        });
      });
    } else {
      Event.findAndCountAll({
        where: {
          startDate: {
            [Op.gte]: new Date().toDateString()
          }
        },
        include: [{
          model: CenterModel,
          as: 'center',
          attributes: centerAttributes
        }],
        attributes,
        order: [
          ['id', order]
        ],
        limit: limitValue,
        offset
      })
        .then((events) => {
          if (events.length === 0) {
            return res.status(404).send({
              statusCode: 404,
              message: 'No result found'
            });
          }

          res.status(200).json({
            statusCode: 200,
            message: 'Successful Events!',
            events: events.rows,
            meta: generatePaginationMeta(events, limitValue, pageValue)
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
        [Op.or]: [
          {
            startDate: {
              [Op.between]: [startDate, endDate]
            }
          }, {
            endDate: {
              [Op.between]: [startDate, endDate]
            }
          }, {
            startDate: {
              [Op.lte]: startDate
            },
            endDate: {
              [Op.gte]: endDate
            }
          }
        ]
      }
    })
      .then((result) => {
        if (result) {
          return res.send({
            message: 'Center has been booked for this date',
            statusCode: 400
          });
        }
        return Event.create({
          title: req.body.title,
          img_url: req.body.img_url,
          location: req.body.location,
          description: req.body.description,
          private: req.body.private,
          startDate,
          endDate,
          centerId: parseInt(req.body.centerId, 10),
          userId: parseInt(req.body.userId, 10)
        })
          .then((event) => {
            res.status(200).send({
              statusCode: 200,
              message: 'Event has been created',
              event
            });
          })
          .catch(err =>
            res.status(500).send({
              statusCode: 500,
              message: 'Event cannot be created',
              error: err
            }));
      })
      .catch((err) => {
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
  updateEvent(req, res) {
    const eventId = parseInt(req.params.id, 10);
    if (isNaN(eventId)) return isNaNValidator(res, eventId);

    if (req.query.status) {
      let { status } = req.query;
      Event.findById(eventId)
        .then((foundEvent) => {
          if (foundEvent) {
            Event.update({
              status
            }, {
              where: {
                id: foundEvent.id
              }
            }).then((updatedEvent) => {
              res.status(200).send({
                statusCode: 200,
                message: `Event has been ${status}`,
                event: updatedEvent
              });
            });
          }
        });
    } else {
      Event.findById(eventId).then((event) => {
        if (!event) {
          return res.status(400).send({
            statusCode: 400,
            message: `Event not Found with ${eventId}`
          });
        }

        Event.update({
          title: req.body.title || event.title,
          img_url: req.body.img_url || event.img_url,
          description: req.body.description || event.description,
          startDate: req.body.startDate || event.startDate,
          endDate: req.body.endDate || event.endDate,
          private: req.body.private,
          centerId: parseInt(req.body.centerId, 10) || event.centerId,
          userId: parseInt(req.body.userId, 10) || event.userId
        }, {
          where: {
            id: eventId
          }
        }).then((updatedEvent) => {
          if (updatedEvent) {
            Event.findById(eventId, {
              include: [{
                model: CenterModel,
                as: 'center',
                attributes: centerAttributes
              }],
              attributes
            }).then((newEvent) => {
              if (newEvent) {
                res.status(201).send({
                  statusCode: 201,
                  message: 'Event has been updated accordingly',
                  event: newEvent
                });
              }
            });
          }
        });
      });
    }
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
    if (isNaN(eventId)) return isNaNValidator(res, eventId);

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
            id: eventId
          }
        }).then(() =>
          res.status(200).send({
            statusCode: 200,
            message: 'This Event has been deleted',
            event: deletedEvent
          }));
      })
      .catch(() =>
        res.status(500).send({
          statusCode: 500,
          message: 'Error deleting Event'
        }));
  }
}

export default Events;
