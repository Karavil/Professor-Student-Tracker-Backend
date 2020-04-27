import { Request, Response } from "express";
import { validationErrors } from "../utils/validation/validate";
import { createProfessor } from "../utils/helpers/professors.helper";

const registerUser = (req: Request, res: Response) => {
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
};

export default registerUser;
