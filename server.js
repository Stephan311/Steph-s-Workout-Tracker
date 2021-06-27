const express = require("express");
const mongojs = require("mongojs")
const path = require('path');

const app = express()

const databaseUrl = "workoutdb";
const collections = ["excersise"]
const db = mongojs(databaseUrl, collections);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

db.on("error", error => {
    console.log("Databsde Error:", error);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
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

//route for adding an excersise

app.post("/exercise", ({ body }, res) => {
    const exercise = body;
  
    db.excersise.save(exercise, (error, saved) => {
      if (error) {
        console.log(error);
      } else {
        res.send(saved);
      }
    });
  });


app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
  
//107