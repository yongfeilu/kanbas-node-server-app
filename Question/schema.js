import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  quizId: { 
    type: String, 
    required: true 
  }, 
  title: { 
    type: String, 
    required: true 
  },  // Title of the question
  type: {
    type: String,
    enum: ["TrueOrFalse", "MultiChoice", "FillInBlank"],
    required: true
  },  // Type of question
  points: { 
    type: Number, 
    required: true 
  },  // Points allocated to this question
  question: { 
    type: String, 
    required: true 
  },  // The actual question text
  correctAnswers: [{ 
    type: String, 
    required: true 
  }],  // Array of possible correct answers (could be more than one for certain question types)
  options: [{ 
    type: String 
  }],  // Array of possible options - fillinblank is empty
}, 
{ collection: "questions" });

export default questionSchema;
