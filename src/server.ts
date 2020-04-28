import express from "express";

import cors from "cors";
import bodyParser from "body-parser";

import authenticator from "./utils/authentication/auth.middleware";

import authRouter from "./auth/auth.router";
import studentsRouter from "./students/students.router";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRouter);

app.use(authenticator);
app.use("/students", studentsRouter);

// Handle 404 - Keep this as a last route
app.use(function (req, res, next) {
   res.status(404);
   res.send("404: Route Not Found");
});

export default app;
