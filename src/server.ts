import express from "express";

import cors from "cors";

import authenticator from "./utils/authentication/auth.middleware";

import authRouter from "./auth/auth.router";
import studentsRouter from "./students/students.router";
import profileRouter from "./profile/profile.router";

const app = express();

// CORS addon
app.use(cors());
// Requests are sent in JSON format, so we have to parse it
app.use(express.json());

// Used to register and log in.
app.use("/auth", authRouter);

// This route requires JSON web token with professor ID to access
// This is generated after logging in
app.use("/profile", authenticator, profileRouter);
app.use("/students", authenticator, studentsRouter);

// Handle 404 - Last route if nothing happens before this
app.use(function (req, res, next) {
   res.status(404);
   res.send("404: Route Not Found");
});

export default app;
