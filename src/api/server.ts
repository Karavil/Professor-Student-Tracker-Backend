import express from "express";
import bodyParser from "body-parser";

import professorRouter from "./professors/professors.router";

const app = express();

app.use(bodyParser.json());
app.use("/api/professors", professorRouter);

export default app;
