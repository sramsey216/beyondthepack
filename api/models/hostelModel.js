'use strict';

var db = require('../../dbconnection');

var Hostel = {  
    list: function(callback) {  
        return db.query('call listHostels()', callback);  
    },  

    getById: function(id, callback) {  
        return db.query('call getHostel(?)', [id], callback);  
    }, 

    create: function(hostel, callback) {   
        return db.query("call createHostel(?,?,?,?,?,?,?,?,?,?,?)", 
            [ 
                hostel.name, hostel.email, hostel.phone, 
                hostel.street1, hostel.street2, hostel.city, 
                hostel.province, hostel.zip, hostel.country,
                hostel.lat, hostel.lon
            ], callback);  
    },  

    update: function(id, hostel, callback) {
        return db.query("call updateHostel(?,?,?,?,?,?,?,?,?,?,?,?)", 
            [ 
                id, hostel.name, hostel.email, hostel.phone, 
                hostel.street1, hostel.street2, hostel.city, 
                hostel.province, hostel.zip, hostel.country,
                hostel.lat, hostel.lon
            ], callback);
    },

    delete: function(id, callback) {  
        return db.query('call deleteHostel(?)', [id], callback);  
    }   
};  

module.exports = Hostel;