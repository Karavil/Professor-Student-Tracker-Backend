import { validationErrors } from "../utils/validation/validate";
import { Request, Response } from "express";

const logInUser = (req: Request, res: Response) => {
   try {
      // Errors from the user input validation
      const errors = validationErrors(req);
      // If there are no errors, add to database and resolve response
      if (errors.isEmpty()) {
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
};

export default logInUser;
