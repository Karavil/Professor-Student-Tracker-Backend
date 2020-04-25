import express, { Request, Response } from "express";
import {
   getProfessor,
   createProfessor,
   validate,
   validationErrors,
} from "./professors.helper";

const router = express.Router();

// GET requests to /api/professors/:id
router.get("/:id", validate("getProfessor"), (req: Request, res: Response) => {
   try {
      // Errors from the user input validation
      const errors = validationErrors(req);
      if (errors.isEmpty()) {
         getProfessor(Number.parseInt(req.params.id), res);
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
});

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
