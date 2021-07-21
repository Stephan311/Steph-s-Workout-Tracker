const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongojs = require("mongojs")
const path = require('path');


const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(

    process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

}
);


  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


app.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then((dbExercise) => {
      console.log(dbExercise)
      res.json(dbExercise);
     
    })
});

app.put("/api/workouts/:id", ({ params, body }, res) => {
  console.log(body)
  db.Workout.findByIdAndUpdate(
    mongojs.ObjectId(params.id),
    {
      $push: {
        exercises: body
      }
    },
    

    (error, edited) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(edited);
        res.send(edited);
      }
    }
  );
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


    app.listen(PORT, () => {
        console.log(`App running on port ${PORT}!`);
    });




