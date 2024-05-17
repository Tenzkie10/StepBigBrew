const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 5000;

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'stepbigbrew'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.post('/add_contact', (req, res) => {
    console.log('Received request body:', req.body); // Log the request body

    const sql = "INSERT INTO customer_contacts (firstname, lastname, email, phone_number, message, posted_date) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.phoneNumber,
        req.body.message,
        new Date()
    ];

    console.log('Executing SQL:', sql); // Log the SQL query
    console.log('With values:', values); // Log the values

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Something unexpected has occurred', error: err });
        }
        return res.json({ success: "Contact added successfully" });
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
