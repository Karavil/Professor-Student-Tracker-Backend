import express, { Request, Response, NextFunction } from "express";

import notificationsRouter from "./notifications/notifications.router";

import {
   getDeadline,
   getDeadlines,
   createDeadline,
   editDeadline,
   deleteDeadline,
} from "../../utils/helpers/deadlines.helper";
import { isDeadlineOfStudent } from "../../utils/authentication/auth.helper";

import { validate, validationErrors } from "../../utils/validation/validate";

// Authenticator to make the deadline belongs to the student that is requested
const isStudentsDeadline = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   const validated = await isDeadlineOfStudent(
      Number.parseInt(req.params.studentId),
      Number.parseInt(req.params.deadlineId)
   );

   // If the deadline belongs to the student, keep going
   if (validated) return next();

   // If the deadline does not belong to the student, send an error
   res.status(401).json({
      message: "Requested deadline is not assigned to this student",
   });
};

const router = express.Router({ mergeParams: true });

router.use(
   "/:deadlineId/notifications",
   isStudentsDeadline,
   notificationsRouter
);

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
   isStudentsDeadline,
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

// POST requests to /students/deadlines
router.post("/", validate("createDeadline"), (req: Request, res: Response) => {
   try {
      // Errors from the user input validation
      const errors = validationErrors(req);
      if (errors.isEmpty()) {
         createDeadline(req.body, Number.parseInt(req.params.studentId), res);
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

router.patch(
   "/:deadlineId",
   validate("hasDeadlineId"),
   validate("editDeadline"),
   isStudentsDeadline,
   (req: Request, res: Response) => {
      try {
         // Errors from the user input validation
         const errors = validationErrors(req);
         // If there are no errors, add to database and resolve response
         if (errors.isEmpty()) {
            editDeadline(Number.parseInt(req.params.deadlineId), req.body, res);
         } else {
            // Send errors to the user so they can fix it
            res.status(400).json({
               message: "Error while processing DEL request",
               errors: errors.array(),
            });
         }
      } catch (e) {
         res.status(500).json({ message: e.message });
      }
   }
);

router.delete(
   "/:deadlineId",
   validate("hasDeadlineId"),
   isStudentsDeadline,
   (req: Request, res: Response) => {
      try {
         // Errors from the user input validation
         const errors = validationErrors(req);
         // If there are no errors, add to database and resolve response
         if (errors.isEmpty()) {
            deleteDeadline(Number.parseInt(req.params.deadlineId), res);
         } else {
            // Send errors to the user so they can fix it
            res.status(400).json({
               message: "Error while processing DEL request",
               errors: errors.array(),
            });
         }
      } catch (e) {
         res.status(500).json({ message: e.message });
      }
   }
);

export default router;
