import express, { Request, Response, NextFunction } from "express";
import { getProfessor, createProfessor } from "./professors.helper";
import { validate, validationErrors } from "../../validation/validate";

import studentsRouter from "./students/students.router";

const router = express.Router();

router.use(
   "/:professorId/students",
   validate("hasProfessorId"),
   studentsRouter
);

/**
 * Both requests in this file are validated for their content before
 * they are passed into the function. This helps stop internal server errors
 * where the user might submit data that is not accepted by the database, or in
 * some cases where they don't submit data for required fields.
 *
 * This is done through the express-validator package in the professor.helper.ts
 * file.
 *
 *
 */

// GET requests to /api/professors/:id
router.get(
   "/:professorId",
   validate("hasProfessorId"),
   (req: Request, res: Response) => {
      try {
         // Errors from the user input validation
         const errors = validationErrors(req);
         if (errors.isEmpty()) {
            getProfessor(Number.parseInt(req.params.professorId), res);
         } else {
            // Send errors to the user so they can fix it
            res.status(400).json({
               message: "Error while processing GET request",
               errors: errors.array(),
            });
         }
      } catch (e) {
         res.status(500).json({ message: e.message });
      }
   }
);

// POST requests to /api/professors
router.post("/", validate("createProfessor"), (req: Request, res: Response) => {
   try {
      // Errors from the user input validation
      const errors = validationErrors(req);
      if (errors.isEmpty()) {
         createProfessor(req.body, res);
      } else {
         res.status(400).json({
            message: "Error while processing POST request",
            errors: errors.array(),
         });
      }
   } catch (e) {
      res.status(500).json({ message: e.message });
   }
});

export default router;
