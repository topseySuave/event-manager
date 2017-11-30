import models from '../models';
import multer from 'multer';
import Validator from 'validatorjs';

let event = models.Events;
let validation = {
    title: 'required|string',
    description: 'required|string',
    img_url: 'string',
    startDate: 'required|date',
    endDate: 'required|date',
    centerId: 'required|integer',
    userId: 'required|integer'
};

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
    getEvent(req, res){
        let eventId = parseInt(req.params.id);
        event.findById(eventId)
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
            let limitValue = parseInt(req.query.limit) || 10;
            let search = req.query.search.split(' ');

            /**
             * Search with Title But Map first**/
            let titleResp = search.map((value) => {
                return {
                    title: {
                        $iLike: `%${value}%`
                    }
                };
            });

            event.findAll({
                where: {
                    titleResp
                },
                order: [
                    ['id', 'ASC']
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
            let limitValue = 10;
            let pageValue = req.query.next - 1 || 0;

            event.findAndCountAll({
                limit: limitValue,
                offset: pageValue * limitValue
            })
            .then((event) => {
                if (event.length === 0) {
                    return res.status(404).send({
                        statusCode: 404,
                        message: 'No result found',
                    });
                }
                res.status(200).json({
                    statusCode: 200,
                    message: 'Successful Events!',
                    pageSize: parseInt(event.rows.length, 10),
                    totalCount: event.count,
                    pageCount: Math.ceil(event.count / limitValue),
                    page: pageValue + 1,
                    events: event.rows,
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
    createEvent (req, res) {
        let validate = new Validator(req.body, validation);
        if(validate.passes()) {

            // console.log('body' + req.body);
            //
            // upload(req, res, (err) => {
            //
            //     console.log('file: ' + req.file);
            //
            //     if(err){
            //         res.send({
            //             statusCode: 400,
            //             message: 'Upload Unsuccessful',
            //             error: err
            //         });
            //     }else{
            //         res.send({
            //             statusCode: 200,
            //             message: 'Upload successful..!!',
            //         });
            //     }
            // });

            let startDate = new Date(req.body.startDate);
            let endDate = new Date(req.body.endDate);

            event.findOne({
                where: {
                    centerId: req.body.centerId,
                    startDate: {
                        $gte: startDate,
                        $lte: endDate
                    },
                    endDate: {
                        $gte: startDate,
                        $lte: endDate
                    }
                }
            })
            .then((result) => {
                if(!result){
                    return res.send({
                        message: `Event center has been booked already, please specify a date after ${result} `,
                        statusCode: 400,
                        error: true
                    });
                }else{
                    return event.create({
                        title: req.body.title,
                        img_url: req.file,
                        location: req.body.location,
                        description: req.body.description,
                        startDate: startDate,
                        endDate: endDate,
                        centerId: parseInt(req.body.centerId),
                        userId: parseInt(req.body.userId),
                    })
                    .then((event) => {
                        res.status(201).send({
                            statusCode: 201,
                            message: 'Event has been created',
                            event
                        });
                    })
                    .catch((err) => res.status(500).send({
                        statusCode: 500,
                        success: false,
                        message: 'Event cannot be created',
                        error: err
                    }));
                }
            })
            .catch(err => {res.status(500).send({
                statusCode: 500,
                success: false,
                message: 'Event cannot be created',
                error: err
            })});

        }else{
            res.send(validate.errors);
        }
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
        let eventId = parseInt(req.params.id);
        if (isNaN(eventId)) {
            return res.status(400).send({
                message: 'Event id is not a number' ,
                error: true
            });
        }

        let validate = new Validator(req.body, validation);
        if(validate.passes()) {
            event.findById(eventId)
                .then((event) => {
                    if (!event) {
                        return res.status(400).send({
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
                        .then(() => res.status(201).send({
                            statusCode: 201,
                            event
                        }))
                        .catch(error => res.status(500).send(error));
                })
                .catch(error => res.status(500).send(error));
        }else{
            res.send(validate.errors);
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
    deleteEvent(req, res){
        let eventId = parseInt(req.params.id);
        if (isNaN(eventId)) {
            return res.status(400).send({
                statusCode: 400,
                message: 'Event id is not a number'
            });
        }
        event.findById(eventId)
            .then((deletedEvent) => {
                if (!deletedEvent) {
                    return res.status(400).send({
                        statusCode: 400,
                        message: `Event not found with id : ${eventId}`
                    });
                }
                event.destroy({
                    where: {
                        id: eventId,
                    }
                })
                .then(() => res.status(200).send({
                    statusCode: 200,
                    message: 'This Event has been deleted'
                }));
            })
            .catch(() => res.status(500).send({
                statusCode: 500,
                message: 'Error deleting Event'
            }));
    }
}

export default Events