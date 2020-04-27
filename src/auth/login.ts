import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import { validationErrors } from "../utils/validation/validate";

import jwt from "jsonwebtoken";
import { compareSync } from "bcryptjs";

const prisma = new PrismaClient();

const authenticateProfessor = async (email: string, password: string) => {
   // Find professor object in database
   const professor = await prisma.professor.findOne({
      where: {
         email,
      },
   });

   // Return true if passwords match, false if not
   if (compareSync(password, professor.password) === true) {
      return professor;
   } else {
      return null;
   }
};

const generateToken = (professorId: number) => {
   const TOKEN_SECRET = process.env.JSON_TOKEN_SECRET;
   return jwt.sign({ professorId }, TOKEN_SECRET);
};

const logInUser = async (req: Request, res: Response) => {
   try {
      // Errors from the user input validation
      const errors = validationErrors(req);
      // If there are no errors, add to database and resolve response
      if (errors.isEmpty()) {
         const professor = await authenticateProfessor(
            req.body.email,
            req.body.password
         );

         if (professor === null) {
            return res.status(401).json({ message: "Wrong password" });
         }

         res.status(200).json({
            message: "Successful login",
            token: generateToken(professor.id),
         });
      } else {
         // Send errors to the user so they can fix it
         res.status(400).json({
            message: "Error while processing POST Request",
            inputErrors: errors.array(),
         });
      }
   } catch (e) {
      res.status(500).json({ message: e.message });
   }
};

export default logInUser;
