// import {centers} from '../db';
import centers from '../models/center';

/**
 * @export
 * @class Center
 */
export class Center {

    /**
     * Add Center record
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Centers
     */
    createCenter(req, res) {
        let title,
            description,
            location;

        if (req.body.title !== null) {
            title = req.body.title.trim().toLowerCase();
        }
        if (req.body.description !== null) {
            description = req.body.description.trim().toLowerCase();
        }
        if(req.body.location !== null){
            location = req.body.location;
        }

        if (!title)
        {
            return res.status(400).json({ statusCode: 400, error: 'You need to fill in a Title for the center' });
        }
        else if (!description)
        {
            return res.status(400).json({ statusCode: 400, error: 'You need to fill in a Description for the center' });
        }
        else if(!location)
        {
            return res.status(400).json({ statusCode: 400, error: 'Location for this center should be provided' });
        }
        else if (!description && !title && !location)
        {
            return res.status(400).json({ statusCode: 400, error: 'Please enter the required details (Title, Description and Location)' });
        }

        return centers
            .create({
                title: req.body.title,
                location: req.body.location,
                description: req.body.description,
                facilities: req.body.facilities,
                capacity: req.body.capacity,
                price: req.body.price,
                eventId: req.body.eventId,
                createdAt: Date.now(),
                updatedAt: Date.now(),
            })
            .then((center) => {
                res.status(201).json({ statusCode: 201, message: 'Center has been created', center });
            })
            .catch(() => res.status(500).json({
                statusCode: 500,
                success: false,
                message: 'Center cannot be created'
            }));
    }

    updateCenter(){

    }

    getCenter(){

    }

    getCenters(){

    }
}


// module.exports = {
//     getCenters: (req, res) => {
//         res.send(centers);
//     },
//
//     createCenter: (req, res) => {
//         centers.push(req.body);
//         return res.send({
//             message: 'Success',
//             error: false
//         });
//     },
//
//     getCenter: (req, res) => {
//         let id = parseInt(req.params.id, 10);
//         centers.forEach((center, index) => {
//             if(center.id === id){
//                 return res.send({
//                     message: 'Success',
//                     event: center,
//                     error: false
//                 });
//             }
//         });
//
//         return res.send({
//             message: 'Center not found',
//             error: true
//         });
//     },
//
//     updateCenter: (req, res) => {
//         let r = parseInt(req.params.id, 10);
//         centers.forEach((center, index) => {
//             if(center.id == r){
//                 centers[index] = req.body;
//                 return res.send({
//                     message: 'Success',
//                     event: center,
//                     error: false
//                 });
//             }
//         });
//         return res.send({
//             message: 'event not found',
//             error: true
//         });
//     },
//
//     deleteEvent: (req, res) => {
//         let r = parseInt(req.params.id, 10);
//         centers.forEach((center, index) => {
//             if(center.id === r){
//                 centers.splice(index, 1);
//                 return res.send({
//                     message: 'Success',
//                     event: center,
//                     error: false
//                 });
//             }
//         });
//         return res.send({
//             message: 'Event not found',
//             error: true
//         });
//     }
//
//     // Actual Database Implementation
//     // create(req, res) {
//     //     return Center
//     //         .create({
//     //             title: req.body.title,
//     //             img_url: req.body.img_url,
//     //             location: req.body.location,
//     //             price: req.body.price,
//     //             capacity: req.body.capacity,
//     //             description: req.body.description,
//     //         })
//     //         .then(center => res.status(201).send(center))
//     //         .catch(err => res.status(400).send(err));
//     // },
// };