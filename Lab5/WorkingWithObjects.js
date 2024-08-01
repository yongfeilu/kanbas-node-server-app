
const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
};

const module = {
    id: 2, title: "NodeJS Module",
    description: "Create a NodeJS server with ExpressJS",
    course: "RS201",
}

export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
    });
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });


    app.get("/lab5/assignment/score/:newScore", (req, res) => {
        const { newScore } = req.params;
        const parsedScore = parseFloat(newScore);
    
        // Check if parsedScore is a valid number
        if (isNaN(parsedScore)) {
            return res.status(400).json({ error: "Invalid score, it must be a number" });
        }
    
        assignment.score = parsedScore;
        res.json(assignment);
    });

    app.get("/lab5/assignment/completed/:newCompleted", (req, res) => {
        let { newCompleted } = req.params;
        // Convert the string to a boolean
        if (newCompleted === 'true') {
            newCompleted = true;
        } else if (newCompleted === 'false') {
            newCompleted = false;
        } else {
            return res.status(400).json({ error: "Invalid value for completed, it must be 'true' or 'false'" });
        }
        assignment.completed = newCompleted;
        res.json(assignment);
    });

    app.get("/lab5/module", (req, res) => {
        res.json(module);
    });

    app.get("/lab5/module/name", (req, res) => {
        res.json(module.title);
    });

    app.get("/lab5/module/name/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        module.title = newTitle;
        res.json(module);
    });
    
  };
  