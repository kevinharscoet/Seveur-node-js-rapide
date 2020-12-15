const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const port = 3000;

function dbconnect() {
  var mysql = require("mysql");

  console.log("Get connection ...");

  var conn = mysql.createConnection({
    database: "entrainement",
    host: "localhost",
    user: "root",
  });

  conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
  return conn;
}
const db = dbconnect();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/name", (req, res) => {
  const prenom = req.body.name || "";
    console.log(req.body.name)
  db.query(`INSERT INTO name (nom) VALUES ("${prenom}")`);
  res.status(200).json("nom enregistré");
});

app.get("/getName", (req, res, next) => {
    db.query(`SELECT * FROM name`, (err, result, field) => {
      if (err) throw err;
      res.status(200).json(result)
    })
  });

app.listen(port, () => {
  console.log(`je run sur le port ${port}`);
});