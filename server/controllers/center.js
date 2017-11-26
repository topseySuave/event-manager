import {centers} from '../db';

module.exports = {
    getCenters: (req, res) => {
        res.send(centers);
    },

    createCenter: (req, res) => {
        centers.push(req.body);
        return res.send({
            message: 'Success',
            error: false
        });
    },

    getCenter: (req, res) => {
        let id = parseInt(req.params.id, 10);
        centers.forEach((center, index) => {
            if(center.id === id){
                return res.send({
                    message: 'Success',
                    event: center,
                    error: false
                });
            }
        });

        return res.send({
            message: 'Center not found',
            error: true
        });
    },

    updateCenter: (req, res) => {
        let r = parseInt(req.params.id, 10);
        centers.forEach((center, index) => {
            if(center.id == r){
                centers[index] = req.body;
                return res.send({
                    message: 'Success',
                    event: center,
                    error: false
                });
            }
        });
        return res.send({
            message: 'event not found',
            error: true
        });
    },

    deleteEvent: (req, res) => {
        let r = parseInt(req.params.id, 10);
        centers.forEach((center, index) => {
            if(center.id === r){
                centers.splice(index, 1);
                return res.send({
                    message: 'Success',
                    event: center,
                    error: false
                });
            }
        });
        return res.send({
            message: 'Event not found',
            error: true
        });
    }

    // Actual Database Implementation
    // create(req, res) {
    //     return Center
    //         .create({
    //             title: req.body.title,
    //             img_url: req.body.img_url,
    //             location: req.body.location,
    //             price: req.body.price,
    //             capacity: req.body.capacity,
    //             description: req.body.description,
    //         })
    //         .then(center => res.status(201).send(center))
    //         .catch(err => res.status(400).send(err));
    // },
};