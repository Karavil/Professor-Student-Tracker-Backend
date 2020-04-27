import { Request, Response } from "express";
import { hashSync } from "bcryptjs";

import { createProfessor } from "../utils/helpers/professors.helper";

import { validationErrors } from "../utils/validation/validate";

const SALT_ROUNDS = process.env.HASH_SALT_ROUNDS || 12;

const registerUser = (req: Request, res: Response) => {
   try {
      // Errors from the user input validation
      const errors = validationErrors(req);
      if (errors.isEmpty()) {
         const hashedPass = hashSync(req.body.password, SALT_ROUNDS);
         createProfessor({ ...req.body, password: hashedPass }, res);
      } else {
         res.status(400).json({
            message: "Error while processing POST request",
            inputErrors: errors.array(),
         });
      }
   } catch (e) {
      res.status(500).json({ message: e.message });
   }
};

export default registerUser;
