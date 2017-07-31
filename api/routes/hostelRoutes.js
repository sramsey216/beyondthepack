'use strict';

module.exports = function(app) {
  var hostel = require('../controllers/hostelController');

  app.route('/hostel')
    .get(hostel.listHostels)
    .post(hostel.createHostel);

  app.route('/hostel/:id')
    .get(hostel.getHostelById)
    .put(hostel.updateHostel)
    .delete(hostel.deleteHostel);
};