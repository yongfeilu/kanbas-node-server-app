import express from 'express';
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import "dotenv/config";
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import session from "express-session";
import "dotenv/config";

import cors from "cors";
import CourseRoutes from './Lab5/Kanbas/Courses/routes.js';
import ModuleRoutes from "./Lab5/Kanbas/Modules/routes.js";
import AssignmentsRoutes from './Lab5/Kanbas/Assignments/routes.js';
import QuizRoutes from './Quiz/routes.js';
import QuestionRoutes from './Question/routes.js';
import AnswerRoutes from './Answer/routes.js';

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(
    cors({
        credentials: true,
        origin: process.env.NETLIFY_URL || "http://localhost:3000",
    })
);

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    //   domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));

app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentsRoutes(app);
QuizRoutes(app);
QuestionRoutes(app);
AnswerRoutes(app);
Hello(app)
Lab5(app);
app.listen(process.env.PORT || 4000)
