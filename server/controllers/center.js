import models from '../models';

// dotenv.config();
const Center = models.Centers;
const Events = models.Events;

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
        return Center.create({
            title: req.body.title,
            img_url: req.body.img_url,
            location: req.body.location,
            description: req.body.description,
            facilities: req.body.facilities,
            capacity: parseInt(req.body.capacity),
            price: parseInt(req.body.price)
        })
            .then((center) => {
                return res.status(201).send({
                    statusCode: 201,
                    message: 'Center has been created',
                    center
                });
            })
            .catch((err) => res.status(500).send({
                statusCode: 500,
                success: false,
                message: 'Center cannot be created',
                error: err
            }));
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
        let centerId = parseInt(req.params.id);
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

                Center.update({
                    title: req.body.title || center.title,
                    img_url: req.body.img_url || center.img_url,
                    location: req.body.location || center.location,
                    description: req.body.description || center.description,
                    facilities: req.body.facilities.split(',') || center.facilities,
                    capacity: parseInt(req.body.capacity) || center.capacity,
                    price: parseInt(req.body.price) || center.price,
                })
                    .then((center) => res.status(200).send({
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
        let centerId = parseInt(req.params.id);
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
            include: [{
                model: Events,
                centerId: centerId,
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
        let limitValue = parseInt(req.query.limit) || 10;
        let pageValue = req.query.next - 1 || 0;
        let order = (req.query.order === 'desc') ? req.query.order : 'asc';
        if (req.query.search || req.query.limit) {
            let search = req.query.search.split(',');

            //Search with location, title, price, capacity
            let locationResp = search.map((value) => {
                if (value !== '')
                    return {
                        location: {
                            $iLike: `%${value}%`
                        }
                    };
            });

            let respTitle = search.map((value) => {
                if (value !== '')
                    return {
                        title: {
                            $iLike: `%${value}%`
                        }
                    };
            });

            // let respCapacity = search.map((value) => {
            //     return {
            //         capacity: {
            //             $ilike: `%${value}%`
            //         }
            //     }
            // });
            //
            // let respPrice = search.map((value) => {
            //     return {
            //         price: {
            //             $ilike: `%${value}%`
            //         }
            //     }
            // });

            Center.findAll({
                where: {
                    $or: locationResp.concat(respTitle)
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

                    console.log(Math.ceil(searchResults.length / limitValue));

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
        const centerId = parseInt(req.params.id);
        if (isNaN(centerId)) {
            return res.status(400).send({
                statusCode: 400,
                message: 'Center id is not a number'
            });
        }
        Center.findOne(centerId)
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