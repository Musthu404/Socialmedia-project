const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors'); // Import the cors middleware


app.use(express.json());
app.use(cors()); // Enable CORS for all routes



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
});

db.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log("Connected to the database");
    }
});

app.post("/api/post", (req, res) => {
    const { user_name, password } = req.body;

    const post = {
        user_name,
        password
    };

    let sql = 'INSERT INTO usercred SET ?';

    db.query(sql, post, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log(result, 'Data added');
            res.send('Data added successfully');
        }
    });
});



const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
