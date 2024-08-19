import model from "./model.js";

export const createQuiz = (quiz) => {
    delete quiz._id
    return model.create(quiz);
}  

export const findAllQuizzes = () => model.find();

// Find quizzes by course ID
export const findQuizzesByCourse = (courseId) => model.find({ courseId: courseId });

export const findQuizzesByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return Quiz.find({
      title: { $regex: regex }
    });
};

export const findQuizById = (quizId) => model.findById(quizId);

export const findQuizByTitle = (title) =>  model.findOne({ title: title });

export const updateQuiz = (quizId, quiz) =>  model.updateOne({ _id: quizId }, { $set: quiz });

export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });