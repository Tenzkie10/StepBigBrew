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

// Contact
app.post('/add_contact', (req, res) => {
    console.log('Received request body:', req.body);

    const sql = "INSERT INTO customer_contacts (firstname, lastname, email, phone_number, message, posted_date) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.phoneNumber,
        req.body.message,
        new Date()
    ];

    console.log('Executing SQL:', sql);
    console.log('With values:', values);

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Something unexpected has occurred', error: err });
        }
        return res.json({ success: "Contact added successfully" });
    });
});

app.get('/contacts', (req, res) => {
    const sql = "SELECT * FROM customer_contacts";  

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Something unexpected has occurred', error: err });
        }
        return res.json(results);  
    });
});

app.delete('/contacts/:id', (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM customer_contacts WHERE contact_id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Something unexpected has occurred', error: err });
        }
        return res.json({ success: "Contact deleted successfully" });
    });
});

// Order
app.post('/place_order', (req, res) => {
    console.log('Received request body:', req.body);

    const sql = "INSERT INTO customer_order (fullname, phone_number, address, order_date, order_detail) VALUES (?, ?, ?, ?, ?)";
    const values = [
        req.body.fullname,
        req.body.phone_number,
        req.body.address,
        new Date(),
        JSON.stringify(req.body.order_items)
    ];

    console.log('Executing SQL:', sql);
    console.log('With values:', values);

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Something unexpected has occurred', error: err });
        }
        return res.json({ success: "Order added successfully" });
    });
});


app.get('/orders', (req, res) => {
    const sql = "SELECT * FROM customer_order";  

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Something unexpected has occurred', error: err });
        }
        return res.json(results);  
    });
});

app.delete('/orders/:id', (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM customer_order WHERE order_id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Something unexpected has occurred', error: err });
        }
        return res.json({ success: "Contact deleted successfully" });
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
