import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
const schema = new mongoose.Schema({
  bName: {
    type: String,
  },
  bAge: {
    type: Number,
  },
  phoneNumber: {
    type: String,
  },
  btype: {
    type: String,
  },
  imgUrl: {
    type: Array,
  },
  ownerImg: {
    type: String,
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


//Declaring, assigning and exporting the volunteers_schema.
export const Businesses = mongoose.model("Businesses", schema);
