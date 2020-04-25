import express, { Request, Response } from "express";
import {
   getDeadline,
   getDeadlines,
   createDeadline,
} from "../../../helpers/deadlines.helper";
import { validate, validationErrors } from "../../../validation/validate";

const router = express.Router({ mergeParams: true });

// GET requests to /api/professors/:professorId/students/:studentID/deadlines
router.get("/", (req: Request, res: Response) => {
   try {
      getDeadlines(Number.parseInt(req.params.studentId), res);
   } catch (e) {
      res.status(500).json({ message: e.message });
   }
});

// GET requests to /api/professors/:professorId/students/:studentId/deadlines/:deadlineID
router.get(
   "/:deadlineId",
   validate("hasDeadlineId"),
   (req: Request, res: Response) => {
      try {
         // Errors from the user input validation
         const errors = validationErrors(req);
         // If there are no errors, add to database and resolve response
         if (errors.isEmpty()) {
            getDeadline(Number.parseInt(req.params.deadlineId), res);
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

// POST requests to /api/professors/:professorId/students/:studentId/deadlines
router.post("/", validate("createDeadline"), (req: Request, res: Response) => {
   try {
      // Errors from the user input validation
      const errors = validationErrors(req);
      if (errors.isEmpty()) {
         createDeadline(req.body, Number.parseInt(req.params.id), res);
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
