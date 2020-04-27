import express from "express";

import bodyParser from "body-parser";

import authenticator from "./utils/authentication/auth.middleware";

import authRouter from "./auth/auth.router";
import studentsRouter from "./students/students.router";

const app = express();

app.use(bodyParser.json());
app.use("/auth", authRouter);

app.use(authenticator);
app.use("/students", studentsRouter);

export default app;
