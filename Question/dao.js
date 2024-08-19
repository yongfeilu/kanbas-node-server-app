import model from "./model.js";

// Create a new question
export const createQuestion = (question) => {
    delete question._id; // Remove the _id if it exists to allow MongoDB to generate a new one
    return model.create(question);
};

// Retrieve all questions
export const findAllQuestions = () => model.find();

// Retrieve a question by its ID
export const findQuestionById = (questionId) => model.findById(questionId);

// Find questions by quiz ID
export const findQuestionsByQuiz = (quizId) => model.find({ quizId: quizId });

// Find questions by partial title match (case-insensitive)
export const findQuestionsByPartialTitle = (partialTitle) => {
    const regex = new RegExp(partialTitle, "i"); // 'i' makes it case-insensitive
    return model.find({ title: { $regex: regex } });
};

// Update an existing question by its ID
export const updateQuestion = (questionId, question) => {
    return model.updateOne({ _id: questionId }, { $set: question });
};

// Delete a question by its ID
export const deleteQuestion = (questionId) => model.deleteOne({ _id: questionId });
