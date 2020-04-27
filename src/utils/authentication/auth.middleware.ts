import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
   professorId?: number;
}

interface DecodedToken {
   professorId: number;
}

const authenticator = (
   req: AuthenticatedRequest,
   res: Response,
   next: NextFunction
) => {
   const token = req.headers.authorization as string;
   jwt.verify(
      token,
      process.env.JSON_TOKEN_SECRET,
      (err, decoded: DecodedToken) => {
         if (err)
            return res.status(401).json({
               message: "Invalid token. Please refresh by signing in.",
            });

         req.professorId = decoded.professorId;
         next();
      }
   );
};

export default authenticator;
