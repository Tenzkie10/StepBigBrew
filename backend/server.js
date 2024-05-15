const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'stepbigbrew'
});

connection.connect(function(err){
    if(err){
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

const query = "SELECT * FROM customer_contacts";

connection.query(query, function(err, rows, fields) {
    if(err){
        console.error("An error occurred with the query: " + err);
        return;
    }
    console.log("Query successfully executed", rows);
});

connection.end(function(err){
    if(err){
        console.error("Error closing connection: " + err.stack);
        return;
    }
    console.log("Connection closed");
});