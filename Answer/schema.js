import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  userId: { 
    type: String, 
    required: true 
  },
  questionId: { 
    type: String, 
    required: true 
  },
  quizId: { 
    type: String, 
    required: true 
  }, 
  answer: { 
    type: String, 
    required: true 
  },  // The submitted answer, could be a text, option id, etc.
  date: { 
    type: Date, 
    default: Date.now 
  }, // The date and time when the answer was submitted
  score: { 
    type: Number, 
    default: 0
  }
},
{ collection: "answers" });

export default answerSchema;
