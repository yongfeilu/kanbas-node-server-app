import * as dao from "./dao.js";

export default function AnswerRoutes(app) {

    // Create a new answer
    const createAnswer = async (req, res) => {
        try {
            const answer = await dao.createAnswer(req.body);
            res.json(answer);
        } catch (error) {
            res.status(500).send(error);
        }
    };

    // Find all answers
    const findAllAnswers = async (req, res) => {
        try {
            const answers = await dao.findAllAnswers();
            res.json(answers);
        } catch (error) {
            res.status(500).send(error);
        }
    };

    // Find answers by user ID and quiz ID
    const findAnswersByUserAndQuiz = async (req, res) => {
        const { userId, quizId } = req.params;
        try {
            const answers = await dao.findAnswersByUserAndQuiz(userId, quizId);
            res.json(answers);
        } catch (error) {
            res.status(500).send(error);
        }
    };

    // Update an answer by ID
    const updateAnswer = async (req, res) => {
        const { answerId } = req.params;
        try {
            const status = await dao.updateAnswer(answerId, req.body);
            res.json(status);
        } catch (error) {
            res.status(500).send(error);
        }
    };

    // Delete an answer by ID
    const deleteAnswer = async (req, res) => {
        const { answerId } = req.params;
        try {
            const status = await dao.deleteAnswer(answerId);
            res.json(status);
        } catch (error) {
            res.status(500).send(error);
        }
    };

    // Define the routes and bind them to the handlers
    app.post("/api/answers", createAnswer);
    app.get("/api/answers", findAllAnswers);
    app.get("/api/answers/users/:userId/quizzes/:quizId", findAnswersByUserAndQuiz);
    app.put("/api/answers/:answerId", updateAnswer);
    app.delete("/api/answers/:answerId", deleteAnswer);
}
