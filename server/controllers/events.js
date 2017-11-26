import {events} from '../db';


module.exports = {
    createEvent: (req, res) => {
        events.push(req.body);
        return res.send({
            message: 'Success',
            error: false
        });
    },

    getEvent: (req, res) => {
        let id = parseInt(req.params.id, 10);
        events.forEach((event, index) => {
            if(event.id === id){
                return res.send({
                    message: 'Success',
                    event: event,
                    error: false
                });
            }
        });

        return res.send({
            message: 'Event not found',
            error: true
        });
    },

    updateEvent: (req, res) => {
        let id = parseInt(req.params.id, 10);
        events.forEach((event, index) => {
            if(event.id == id){
                events[it] = req.body;
                return res.send({
                    message: 'Success',
                    event: event,
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
        let id = parseInt(req.params.id, 10);
        events.forEach((event, index) => {
            if(event.id === id){
                events.splice(index, 1);
                return res.send({
                    message: 'Success',
                    event: event,
                    error: false
                });
            }
        });
        return res.send({
            message: 'Event not found',
            error: true
        });
    }
};