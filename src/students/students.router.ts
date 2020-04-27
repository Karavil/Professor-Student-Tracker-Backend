import express, { Response } from "express";

import {
   getStudent,
   getStudents,
   createStudent,
} from "../utils/helpers/students.helper";

import { AuthenticatedRequest } from "../utils/authentication/auth.middleware";
import { validate, validationErrors } from "../utils/validation/validate";

// For fetching deadlines for each student
import deadlinesRouter from "./deadlines/deadlines.router";

// Express router with params from previous routers merged
const router = express.Router({ mergeParams: true });

// Route for fetching deadlines per student id
router.use("/:studentId/deadlines", validate("hasStudentId"), deadlinesRouter);

// GET requests to /students
router.get("/", (req: AuthenticatedRequest, res: Response) => {
   try {
      getStudents(req.professorId, res);
   } catch (e) {
      res.status(500).json({ message: e.message });
   }
});

// POST requests to /students
router.post(
   "/",
   validate("createStudent"),
   (req: AuthenticatedRequest, res: Response) => {
      try {
         // Errors from the user input validation
         const errors = validationErrors(req);
         if (errors.isEmpty()) {
            createStudent(req.body, req.professorId, res);
         } else {
            res.status(400).json({
               message: "Error while processing POST AuthenticatedRequest",
               errors: errors.array(),
            });
         }
      } catch (e) {
         res.status(500).json({ message: e.message });
      }
   }
);

router.get(
   "/:studentId",
   validate("hasStudentId"),
   (req: AuthenticatedRequest, res: Response) => {
      try {
         // Errors from the user input validation
         const errors = validationErrors(req);
         // If there are no errors, add to database and resolve response
         if (errors.isEmpty()) {
            getStudent(Number.parseInt(req.params.studentId), res);
         } else {
            // Send errors to the user so they can fix it
            res.status(400).json({
               message: "Error while processing GET AuthenticatedRequest",
               errors: errors.array(),
            });
         }
      } catch (e) {
         res.status(500).json({ message: e.message });
      }
   }
);

export default router;
