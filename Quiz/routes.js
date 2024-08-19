import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  
    const createQuiz = async (req, res) => {
      const quiz = await dao.createQuiz(req.body);
      res.json(quiz);
    };

    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteQuiz(req.params.quizId);
        res.json(status);
    };
    
    const findAllQuizzes = async (req, res) => {
        const { name } = req.query;
        if (name) {
          const quizzes = await dao.findQuizzesByPartialName(name);
          res.json(quizzes);
          return;
        }
        const quizzes = await dao.findAllQuizzes();
        res.json(quizzes);
    };

    const findQuizzesByCourse = async (req, res) => {
        const { cid } = req.params;
        if (cid) {
            const quizzes = await dao.findQuizzesByCourse(cid);
            res.json(quizzes);
            return;
        }
    };

    const findQuizById = async (req, res) => { 
      const quiz = await dao.findQuizById(req.params.quizId);
      res.json(quiz);
    };

    const findQuizByTitle = async (req, res) => { 
      const quiz = await dao.findQuizByTitle(req.params.title);
      res.json(quiz);
    };

    const updateQuiz = async (req, res) => {
      const { quizId } = req.params;
      const status = await dao.updateQuiz(quizId, req.body);
      res.json(status);
    };

    app.post("/api/courses/:cid/quizzes", createQuiz);
    app.get("/api/quizzes", findAllQuizzes);
    app.get("/api/courses/:cid/quizzes", findQuizzesByCourse);
    app.get("/api/quizzes/:quizId", findQuizById);
    app.get("/api/quizzes/title/:title", findQuizByTitle);
    app.put("/api/quizzes/:quizId", updateQuiz);
    app.delete("/api/quizzes/:quizId", deleteQuiz);
}
