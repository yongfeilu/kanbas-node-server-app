import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    number: { 
      type: String, 
      required: true, 
      unique: true,
      trim: true 
    },
    name: { 
      type: String, 
      required: true,
      trim: true 
    },
    startDate: { 
      type: Date, 
    },
    endDate: { 
      type: Date, 
    },
    department: { 
      type: String,
      trim: true 
    },
    credits: { 
      type: Number, 
      min: 0 
    },
    description: { 
      type: String, 
      trim: true 
    },
    author: {
      type: String,
      trim: true
    },
    image: {
      type: String,
      trim: true
    },
  },
  { 
    collection: "courses" 
  }
);

export default courseSchema;
