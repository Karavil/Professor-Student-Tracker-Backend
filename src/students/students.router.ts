import express, { Response, NextFunction } from "express";

import {
   getStudent,
   getStudents,
   createStudent,
   deleteStudent,
   editStudent,
} from "../utils/helpers/students.helper";

import { isStudentOfProfessor } from "../utils/authentication/auth.helper";

import { AuthenticatedRequest } from "../utils/authentication/auth.middleware";
import { validate, validationErrors } from "../utils/validation/validate";

// For fetching deadlines for each student
import deadlinesRouter from "./deadlines/deadlines.router";

// Express router with params from previous routers merged
const router = express.Router({ mergeParams: true });

// Authenticator to make the student belongs to the professor that is logged in
const isProfessorsStudent = async (
   req: AuthenticatedRequest,
   res: Response,
   next: NextFunction
) => {
   const validated = await isStudentOfProfessor(
      req.professorId,
      Number.parseInt(req.params.studentId)
   );

   if (validated) {
      next();
   } else {
      res.status(401).json({
         message: "Student does not belong to the requested professor.",
      });
   }
};

// Route for fetching deadlines per student id
router.use(
   "/:studentId/deadlines",
   validate("hasStudentId"),
   isProfessorsStudent,
   deadlinesRouter
);

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
   isProfessorsStudent,
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

router.patch(
   "/:studentId",
   validate("hasStudentId"),
   validate("editStudent"),
   isProfessorsStudent,
   (req: AuthenticatedRequest, res: Response) => {
      try {
         // Errors from the user input validation
         const errors = validationErrors(req);
         // If there are no errors, add to database and resolve response
         if (errors.isEmpty()) {
            editStudent(Number.parseInt(req.params.studentId), req.body, res);
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
   "/:studentId",
   validate("hasStudentId"),
   isProfessorsStudent,
   (req: AuthenticatedRequest, res: Response) => {
      try {
         // Errors from the user input validation
         const errors = validationErrors(req);
         // If there are no errors, add to database and resolve response
         if (errors.isEmpty()) {
            deleteStudent(Number.parseInt(req.params.studentId), res);
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
