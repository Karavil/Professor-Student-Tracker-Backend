import express, { Response, NextFunction } from "express";

import { getProfessor } from "../utils/helpers/professors.helper";

import { isStudentOfProfessor } from "../utils/authentication/auth.helper";

import { AuthenticatedRequest } from "../utils/authentication/auth.middleware";
import { validate, validationErrors } from "../utils/validation/validate";

// Express router with params from previous routers merged
const router = express.Router({ mergeParams: true });

// GET requests to /students
router.get("/", (req: AuthenticatedRequest, res: Response) => {
   try {
      getProfessor(req.professorId, res);
   } catch (e) {
      res.status(500).json({ message: e.message });
   }
});

export default router;
