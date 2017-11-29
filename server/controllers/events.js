// import {events} from '../db';
import models from '../models';

const event = models.Events;

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
    getEvent(req, res){
        const eventId = parseInt(req.params.id);
        event.findById(eventId)
            .then((event) => {
                if (!event) {
                    return res.status(404).json({ statusCode: 404, message: `Event with id: ${eventId} does not exist` });
                }
                return res.status(200).json({ statusCode: 200, message: `Event with id: ${eventId} was found`, event });
            });
        return this;
    }

    /**
     * Get Multiple Event record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Events
     */
    getEvents(req, res){
        if (req.query && req.query.sort) {
            if (req.query.order && req.query.order === 'desc') {
                event.findAll({
                    order: [
                        ['id', 'DESC']
                    ]
                })
                .then((returnedEvent) => {
                    if (!returnedEvent) {
                        return res.status(400).json({ statusCode: 400, message: 'No Event found' });
                    }
                    return res.status(201).json({
                        statusCode: 201,
                        message: 'Event(s) found',
                        center: returnedEvent
                    });
                })
                .catch(() => res.status(500).json({ statusCode: 500, message: 'Error sorting Events' }));
            }
        } else if (req.query.search && req.query.limit) {
            const limitValue = parseInt(req.query.limit) || 10;
            const search = req.query.search.split(' ');

            //Search with Title
            const titleResp = search.map((value) => {
                return {
                    title: {
                        $iLike: `%${value}%`
                    }
                };
            });

            event.findAll({
                where: {
                    title: titleResp
                },
                order: [
                    ['id', 'ASC']
                ],
                limit: limitValue,
            })
            .then((searchResults) => {
                if (searchResults.length <= 0) {
                    return res.status(400).json({
                        statusCode: 400,
                        message: 'Event(s) do not match your search result'
                    });
                }
                return res.status(200).json({
                    statusCode: 200,
                    message: 'The Events found',
                    searchResults
                });
            });
        } else {
            const limitValue = parseInt(req.query.limit) || 10;
            const pageValue = req.query.next - 1 || 0;

            event.findAndCountAll({
                limit: limitValue,
                offset: pageValue * limitValue
            })
            .then((event) => {
                if (event.length === 0) {
                    return res.status(404).json({
                        statusCode: 404,
                        message: 'No result found',
                    });
                }
                res.status(200).json({
                    statusCode: 200,
                    message: 'Successful Events!',
                    page: pageValue + 1,
                    totalCount: event.count,
                    pageCount: Math.ceil(event.count / limitValue),
                    pageSize: parseInt(event.rows.length, 10),
                    events: event.rows,
                });
            })
            .catch(err => res.status(500).send(err));
        }
        return this;
    }

    /**
     * Create Event record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Events
     */
    createEvent (req, res) {
        let title,
            date_time;

        if (req.body.title !== null) {
            title = req.body.title;
            // title = req.body.title.trim().toLowerCase();
        }
        if (req.body.dateTime !== '') {
            date_time = req.body.dateTime;
        }

        if (!title){
            return res.status(400).json({ statusCode: 400, error: 'You need to fill in a Title for the Event' });
        }

        return event.create({
            title: req.body.title,
            img_url: req.body.img_url,
            location: req.body.location,
            description: req.body.description,
            date: req.body.date,
            centerId: parseInt(req.body.centerId),
            userId: parseInt(req.body.userId),
        })
        .then((event) => {
            res.status(201).json({ statusCode: 201, message: 'Event has been created', event });
        })
        .catch((err) => res.status(500).json({
            statusCode: 500,
            success: false,
            message: 'Event cannot be created',
            error: err
        }));
    }

    /**
     * Update a single Event record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Events
     */
    updateEvent(req, res){
        const eventId = parseInt(req.params.id);
        if (isNaN(eventId)) {
            return res.status(400).json({
                message: 'Event id is not a number' ,
                error: true
            });
        }

        event.findById(eventId)
            .then((event) => {
                if (!event) {
                    return res.status(400).json({
                        statusCode: 400,
                        message: `Event not Found with ${eventId}`
                    });
                }

                event.update({
                    title: req.body.title || event.title,
                    img_url: req.body.img_url || event.img_url,
                    description: req.body.description || event.description,
                    date: req.body.date || event.date,
                    centerId: parseInt(req.body.centerId) || event.centerId,
                    userId: parseInt(req.currentUser) || event.userId,
                })
                .then(() => res.status(201).json({ statusCode: 201, event }))
                .catch(error => res.status(500).json(error));
            })
            .catch(error => res.status(500).json(error));
        return this;

    }

    /**
     * Delete an Event record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Events
     */
    deleteEvent(req, res){
        const eventId = parseInt(req.params.id);
        if (isNaN(eventId)) {
            return res.status(400).json({ statusCode: 400, message: 'Event id is not a number' });
        }
        event.findById(eventId)
            .then((deletedEvent) => {
                if (!deletedEvent) {
                    return res.status(400).json({
                        statusCode: 400,
                        message: `Event not found with id : ${eventId}`
                    });
                }
                event.destroy({
                    where: {
                        id: eventId,
                    }
                })
                .then(() => res.status(200).json({ statusCode: 200, message: 'This Event has been deleted' }));
            })
            .catch(() => res.status(500).json({ statusCode: 500, message: 'Error deleting Event' }));
        return this;
    }
}

export default Events