import model from "./model.js";

// Create a new answer
export const createAnswer = (answer) => {
    delete answer._id; // Ensure the _id field is not set manually
    return model.create(answer);
}

// Find all answers
export const findAllAnswers = () => model.find();

// Find answers by user ID
// export const findAnswersByUser = (userId) => model.find({ userId: userId });

// Find answers by user ID and question ID (e.g., to get a specific user's answer to a specific question)
// export const findAnswersByUserAndQuestion = (userId, questionId) => model.findOne({ userId: userId, questionId: questionId });

// Find answers by user ID and question ID (e.g., to get a specific user's answer to a specific question)
export const findAnswersByUserAndQuiz = (userId, quizId) => model.find({ userId: userId, quizId: quizId });;


// Update an answer by ID
export const updateAnswer = (answerId, answer) => model.updateOne({ _id: answerId }, { $set: answer });

// Delete an answer by ID
export const deleteAnswer = (answerId) => model.deleteOne({ _id: answerId });
