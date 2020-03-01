const express = require("express");
const path = require("path");
const mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost",
    port: 0000,
    user: "root",
    password: "rootroot",
    database: "store"
})

conn.connect( (err) => {
    if (err) { return console.error(err) }
    console.log("Database is good")
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})
app.get("/style", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/style.css"));
})
app.get("/logic", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/logic.js"));
})
app.get("/jQuery", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/jQuery.js"));
})

require("./queries.js")(app, conn)

app.listen(3000, () => {
    console.log("Listening...");
})