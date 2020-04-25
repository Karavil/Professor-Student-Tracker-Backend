import { body, param, validationResult } from "express-validator";

// Used to validate HTTP requests made by the user to the server
export const validate = (method: string) => {
   switch (method) {
      case "createProfessor": {
         return [
            body("first_name", "Should be a string")
               .isString()
               .withMessage("Should be a string"),
            body("last_name", "Should be a string").isString(),
            body("email", "Should be a valid email").isEmail().normalizeEmail(),
            body("password", "Should be a valid password").isString(),
         ];
      }
      // Used for fetching a professor with an id (GET)
      case "hasProfessorId": {
         return [
            param(
               "professorId",
               "Invalid professor id. Make sure it is included in your request parameter (url)."
            ).isNumeric(),
         ];
      }
      // Used for creating a professor object in DB (POST)
      case "createStudent": {
         return [
            body("first_name", "Should be a string")
               .isString()
               .withMessage("Should be a string"),
            body("last_name", "Should be a string").isString(),
            body("email", "Should be a valid email").isEmail().normalizeEmail(),
            body("phone_number", "Invalid phone number").isMobilePhone("any"),
         ];
      }
      // Used for fetching a professor with an id (GET)
      case "hasStudentId": {
         return [
            param(
               "studentId",
               "Invalid id. Make sure it is included in your request parameter (url)."
            ).isNumeric(),
         ];
      }
      // Used for creating a professor object in DB (POST)
      case "createDeadline": {
         return [
            body("name", "Should be a string")
               .isString()
               .withMessage("Should be a string"),
            body("description", "Should be a string").isString().optional(),
            body("due_date", "Enter a valid time (ISO8601 format)").isISO8601(),
         ];
      }
      case "hasDeadlineId": {
         return [
            param(
               "deadlineId",
               "Invalid id. Make sure it is included in your request parameter (url)."
            ).isNumeric(),
         ];
      }
   }
};

// Returns the errors from validations specified above
export const validationErrors = (req: any) => {
   return validationResult(req);
};
