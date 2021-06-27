const express = require("express");
const mongojs = require("mongojs")
const path = require('path');

const app = express()

const databaseUrl = "workoutdb";
const collections = ["excersise"]

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Databsde Error:", error);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/all", (req, res) => {
    db.excersise.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data)
        }
    });
});


app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
  
//107