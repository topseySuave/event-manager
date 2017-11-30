import models from '../models';
import Validator from 'validatorjs';

// dotenv.config();
const center = models.Centers;
const Events = models.Events;

const centerRules = {
    title: 'required|string',
    location: 'required|string',
    description: 'required|string'
};

/**
 * @export
 * @class Center
 */
export class Centers {

    /**
     * Add Center record
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Center
     */
    createCenter(req, res) {
        let validate = new Validator(req.body, centerRules);
        if(validate.passes()){
            console.log(typeof req.body.booked);
            return center.create({
                title: req.body.title,
                img_url: req.body.img_url,
                location: req.body.location,
                description: req.body.description,
                facilities: req.body.facilities.split(','),
                capacity: parseInt(req.body.capacity),
                price: parseInt(req.body.price)
            })
            .then((center) => {
                res.status(201).json({ statusCode: 201, message: 'Center has been created', center });
            })
            .catch((err) => res.status(500).send({
                statusCode: 500,
                success: false,
                message: 'Center cannot be created',
                error: err
            }));
        }
        else{
            res.status(400).send(validate.errors);
        }
    }

    /**
     * Update Or Modify Center record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Center
     */
    updateCenter (req, res) {
        let centerId = parseInt(req.params.id);
        if (isNaN(centerId)) {
            return res.status(400).send({
                message: 'Center id is not a number' ,
                error: true
            });
        }

        let validate = new Validator(req.body, centerRules);
        if(validate.passes()){
            center.findById(centerId)
            .then((center) => {
                if (!center) {
                    return res.status(400).send({
                        statusCode: 400,
                        message: `Center not Found with ${centerId}`
                    });
                }

                center.update({
                    title: req.body.title || center.title,
                    img_url: req.body.img_url || center.img_url,
                    location: req.body.location || center.location,
                    description: req.body.description || center.description,
                    facilities: req.body.facilities.split(',') || center.facilities,
                    capacity: parseInt(req.body.capacity) || center.capacity,
                    price: parseInt(req.body.price) || center.price,
                })
                .then(() => res.status(201).send({
                    statusCode: 201,
                    center
                }))
                .catch(error => res.status(500).send(error));
            })
            .catch(error => res.status(500).send(error));
        }else{
            res.status(400).send(validate.errors);
        }
    }

    /**
     * Get Center by id
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Center
     */
    getCenter (req, res) {
        let centerId = parseInt(req.params.id);
        center.findOne({
            where: {
                id: centerId
            },
            include: [{
                model: Events,
                as: 'events'
            }],
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
     * Get Center record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Centers
     */
    getCenters (req, res){
        let limitValue = parseInt(req.query.limit) || 10;
        let pageValue = req.query.next - 1 || 0;
        if (req.query && req.query.sort) {
            if (req.query.order && req.query.order === 'desc') {
                center.findAll({
                    order: [
                        ['id', 'DESC']
                    ]
                })
                .then((returnedCenter) => {
                    if (!returnedCenter) {
                        return res.status(400).send({
                            statusCode: 400,
                            message: 'No Center found'
                        });
                    }
                    return res.status(201).send({
                        statusCode: 201,
                        message: 'Center(s) found',
                        returnedCenter
                    });
                })
                .catch(() => res.status(500).send({
                    statusCode: 500,
                    message: 'Error sorting Centers'
                }));
            }
        } else if (req.query.search && req.query.limit) {
            let search = req.query.search.split(' ');

            //Search with Location and Title
            let locationResp = search.map((value) => {
                return {
                    location: {
                        $iLike: `%${value}%`
                    }
                };
            });

            let respTitle = search.map((value) => {
                return {
                    title: {
                        $iLike: `%${value}%`
                    }
                };
            });

            center.findAll({
                where: {
                    $or:
                        locationResp.concat(respTitle)
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
                        message: 'Center(s) do not match your search result'
                    });
                }
                return res.status(200).send({
                    statusCode: 200,
                    message: 'The Centers found',
                    searchResults
                });
            });
        } else {
            center.findAndCountAll({
                limit: limitValue,
                offset: pageValue * limitValue
            })
            .then((center) => {
                if (center.length === 0) {
                    return res.status(404).send({
                        statusCode: 404,
                        message: 'No result found',
                    });
                }
                res.status(200).send({
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
                message: 'Internal server Error !',
                error: err
            }));
        }
    }

    /**
     * Delete Center record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Center
     */
    deleteEvent (req, res) {
        const centerId = parseInt(req.params.id);
        if (isNaN(centerId)) {
            return res.status(400).send({
                statusCode: 400,
                message: 'Center id is not a number'
            });
        }
        center.findById(centerId)
            .then((deletedCenter) => {
                if (!deletedCenter) {
                    return res.status(400).send({
                        statusCode: 400,
                        message: `Center not found with id : ${centerId}`
                    });
                }
                center
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

    bookCenter(){

    }
}

export default Centers;