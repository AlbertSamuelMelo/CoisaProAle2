const express = require('express')
const mysql = require('mysql');

const app = express()

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
        console.log(result);
  });
});

app.get('/', function (req, res) {
  res.send('Hello World of Warcraft')
})
 
app.listen(3001)