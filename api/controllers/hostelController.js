'use strict';

var Hostel = require('../models/hostelModel');  

exports.listHostels = function(req, res) {
    Hostel.list(function(err, rows) {
        if(err) {
            res.send(err);
        }

        res.json(rows[0] === undefined ? rows : rows[0]);
    });
};

exports.getHostelById = function(req, res) {
    Hostel.getById(req.params.id, function(err, rows) {
        if(err) {
            res.send(err)
        }

        res.json(rows[0] === undefined ? rows : rows[0]);
    });
};

exports.createHostel = function(req, res) {
    Hostel.create(req.body, function(err, rows){
        if(err) {
            res.send(err);
        }
        
        res.json(rows[0] === undefined ? rows : rows[0]);
    });
};

exports.updateHostel = function(req, res) {
    Hostel.update(req.params.id, req.body, function(err, rows){
        if(err) {
            res.send(err);
        }
        
        res.json(rows[0] === undefined ? rows : rows[0]);
    });
};

exports.deleteHostel = function(req, res) {
    Hostel.delete(req.params.id, function(err, rows) {
        if(err) {
            res.send(err)
        }

        res.json({ message: 'Hostel deleted.' });
    });
};