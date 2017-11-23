// import Center from '../models/center';
import {centers} from '../dummy';

module.exports = {
    getCenters: (req, res) => {
        res.send(centers);
    },

    createCenter: (req, res) => {
        let r = centers.length;
        centers.push(req.body);
        res.send(centers[r]);
    },

    getCenter: (req, res) => {
        let r = req.params.id;
        res.send(centers[r]);
    },

    updateCenter: (req, res) => {

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