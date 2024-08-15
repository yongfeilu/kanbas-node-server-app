import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  id: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  module: {
    type: String,
    required: true,
    trim: true
  }
});

const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  course: {
    type: String,
    required: true,
    trim: true
  },
  lessons: [lessonSchema]  // Embedding the lessons array as a sub-document
}, 
{
  collection: "modules"
});


export default moduleSchema;