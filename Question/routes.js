import * as dao from "./dao.js";

export default function QuestionRoutes(app) {

    const createQuestion = async (req, res) => {
        const question = await dao.createQuestion(req.body);
        res.json(question);
    };

    const deleteQuestion = async (req, res) => {
        const status = await dao.deleteQuestion(req.params.questionId);
        res.json(status);
    };

    const findAllQuestions = async (req, res) => {
        const { title } = req.query;
        if (title) {
            const questions = await dao.findQuestionsByPartialTitle(title);
            res.json(questions);
            return;
        }
        const questions = await dao.findAllQuestions();
        res.json(questions);
    };

    const findQuestionsByQuiz = async (req, res) => {
        const { quizId } = req.params;
       
        if (quizId) {
            const questions = await dao.findQuestionsByQuiz(quizId);
            res.json(questions);
            return;
        }
    };

    const findQuestionById = async (req, res) => {
        const question = await dao.findQuestionById(req.params.questionId);
        res.json(question);
    };

    const updateQuestion = async (req, res) => {
        const { questionId } = req.params;
        const status = await dao.updateQuestion(questionId, req.body);
        res.json(status);
    };

    app.post("/api/quizzes/:quizId/questions", createQuestion);
    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:quizId/questions", findQuestionsByQuiz);
    app.get("/api/questions/:questionId", findQuestionById);
    app.put("/api/questions/:questionId", updateQuestion);
    app.delete("/api/questions/:questionId", deleteQuestion);
}
