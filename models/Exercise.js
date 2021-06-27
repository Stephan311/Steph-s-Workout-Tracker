const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Exercise Type is requirwd"
  },

  name: {
    type: String,
    trim: true,
    required: "Name is Required",
  },

  distance: {
    type: Number,
    unique: true,
    required: "Distance is required",
  },

  exerciseName: {
    type: String,
    trim: true,
    required: "Name is Required",
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
});

const Exercise = mongoose.model("excersise", exerciseSchema);

module.exports = Exercise;