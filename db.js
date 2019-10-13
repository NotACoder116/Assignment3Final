const mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Oracle_1',
    database : 'StudentInfo'
});

connection.connect((err)=> {
    if (err) 
    {
        console.log('Connection failed \n Error:'+JSON.stringify(err));
    }
    else
    {
        console.log('Connection succeed ');
    }
});

module.exports = connection;