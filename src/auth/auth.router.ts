import express from "express";

import logInUser from "./login";
import registerUser from "./register";

import { validate } from "../utils/validation/validate";

const router = express.Router({ mergeParams: true });

// GET requests to /api/professors/:professorId/students/:studentId
router.post("/auth/login", validate("hasLoginInfo"), logInUser);

// POST requests to /api/professors
router.post("/auth/register", validate("createProfessor"), registerUser);

export default router;
