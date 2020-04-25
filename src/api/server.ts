import express from "express";
import bodyParser from "body-parser";

import professorsRouter from "./professors/professors.router";
import studentsRouter from "./students/students.router";

const app = express();

app.use(bodyParser.json());
app.use("/api/professors", professorsRouter);
app.use("/api/students", studentsRouter);

export default app;
