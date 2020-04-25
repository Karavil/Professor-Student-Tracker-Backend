import express, { Request, Response } from "express";
import { getStudent, getStudents, createStudent } from "./students.helper";
import { validate, validationErrors } from "../../../validation/validate";

import deadlinesRouter from "./deadlines/deadlines.router";

const router = express.Router({ mergeParams: true });

router.use("/:studentId/deadlines", validate("hasStudentId"), deadlinesRouter);

// GET requests to /api/professors/:professorId/students/
router.get("/", (req: Request, res: Response) => {
   try {
      getStudents(Number.parseInt(req.params.professorId), res);
   } catch (e) {
      res.status(500).json({ message: e.message });
   }
});

// GET requests to /api/professors/:professorId/students/:studentId
router.get(
   "/:studentId",
   validate("hasStudentId"),
   (req: Request, res: Response) => {
      try {
         // Errors from the user input validation
         const errors = validationErrors(req);
         // If there are no errors, add to database and resolve response
         if (errors.isEmpty()) {
            getStudent(Number.parseInt(req.params.studentId), res);
         } else {
            // Send errors to the user so they can fix it
            res.status(400).json({
               message: "Error while processing GET Request",
               errors: errors.array(),
            });
         }
      } catch (e) {
         res.status(500).json({ message: e.message });
      }
   }
);

// POST requests to /api/professors
router.post("/", validate("createStudent"), (req: Request, res: Response) => {
   try {
      // Errors from the user input validation
      const errors = validationErrors(req);
      if (errors.isEmpty()) {
         createStudent(req.body, Number.parseInt(req.params.professorId), res);
      } else {
         res.status(400).json({
            message: "Error while processing POST Request",
            errors: errors.array(),
         });
      }
   } catch (e) {
      res.status(500).json({ message: e.message });
   }
});

export default router;
