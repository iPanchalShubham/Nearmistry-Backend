import mongoose from "mongoose";

const schema = mongoose.Schema({
  fName: {
    type: String,
  },
  lName: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  occupation: {
    type: String,
  },
  imgUrlArray: {
    type: Array,
  },
  areaName: {
    type: String,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

export const User = mongoose.model("User", schema);
