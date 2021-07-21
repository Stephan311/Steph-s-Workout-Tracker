const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({

  day: {
    type: Date,
    trim: true,
    required: "Date is required",
    default: () => new Date(),
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Exercise Type is required"
      },

      name: {
        type: String,
        trim: true,
        required: "Name is Required",
      },

      distance: {
        type: Number,
        trim: true,
        required: "Distance is Required",
      },

      weight: {
        type: Number,
        trim: true,
        required: "Weight is Required",
      },

      sets: {
        type: Number,
        trim: true,
        required: "Sets is Required",
      },

      reps: {
        type: Number,
        trim: true,
        required: "Reps is Required",
      },

      duration: {
        type: Number,
        trim: true,
        required: "Duration is Required",
      }
    }
  ]
});

const Workout = mongoose.model("exercise", exerciseSchema);

module.exports = Workout;