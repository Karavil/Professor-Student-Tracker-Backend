import express from "express";
import bodyParser from "body-parser";

import studentsRouter from "./students/students.router";

const app = express();

app.use(bodyParser.json());
app.use("/students", studentsRouter);

export default app;
