import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },  // Title of the quiz
  courseId: {type: String, required: true}, // courseId
  description: { type: String},  // WYSIWYG editor content
  quizType: {
    type: String,
    enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
    default: "Graded Quiz",
  },
  published: {type: Boolean, default: false},
  points: { type: Number, required: true },  // Sum of the points of all questions
  assignmentGroup: {
    type: String,
    enum: ["Quizzes", "Exams", "Assignments", "Project"],
    default: "Quizzes",
  },
  assignedTo: {
    type: String,
    default: "EveryOne",
  },
  shuffleAnswers: { type: Boolean, default: true },  // Shuffle answers
  timeLimit: { type: Number, default: 20 },  // Time limit in minutes
  multipleAttempts: { type: Boolean, default: false },  // Allow multiple attempts
  showCorrectAnswers: { type: String },  // If and when correct answers are shown to students
  accessCode: { type: String, default: "" },  // Passcode for accessing the quiz
  oneQuestionAtATime: { type: Boolean, default: true },  // Display one question at a time
  webcamRequired: { type: Boolean, default: false },  // Webcam requirement
  lockQuestionsAfterAnswering: { type: Boolean, default: false },  // Lock questions after answering
  dueDate: { type: Date },  // Due date for the quiz
  availableDate: { type: Date },  // Date quiz becomes available
  untilDate: { type: Date },  // Date quiz is available until
  questionList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]  // List of question IDs
},
{ collection: "quizzes" });

export default quizSchema;
