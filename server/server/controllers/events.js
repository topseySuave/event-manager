import {events} from '../dummy';

module.exports = {
    getEvents: (req, res) => {
        res.send(events);
    },

    createEvent: (req, res) => {
        let r = events.length;
        events.push(req.body);
        res.send(events[r]);
    },

    getEvent: (req, res) => {
        let r = req.params.id;
        res.send(events[r]);
    },

    updateEvent: (req, res) => {
        let r = events.length;
        events.push(req.body);
        res.send(events[r]);
    },
};