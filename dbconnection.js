var mysql = require('mysql'); 

var connection = mysql.createPool({  
    host: 'sr.cappnrekavgu.us-west-2.rds.amazonaws.com',  
    user: 'btp',  
    password: 'b3y0ndth3p@ck',  
    database: 'beyondthepack'  
});  

module.exports = connection; 