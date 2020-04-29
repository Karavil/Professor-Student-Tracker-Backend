import { body, param, validationResult } from "express-validator";

// Used to validate HTTP requests made by the user to the server
export const validate = (method: string) => {
   switch (method) {
      case "registerProfessor": {
         return [
            body("first_name", "Should be a string").isString(),
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
            body("first_name", "Should be a string").isString(),
            body("last_name", "Should be a string").isString(),
            body("email", "Should be a valid email").isEmail().normalizeEmail(),
            body("phone_number", "Invalid phone number").isMobilePhone("any"),
         ];
      }
      case "editStudent": {
         return [
            body("first_name", "Should be a string").isString().optional(),
            body("last_name", "Should be a string").isString().optional(),
            body("email", "Should be a valid email")
               .isEmail()
               .normalizeEmail()
               .optional(),
            body("phone_number", "Invalid phone number")
               .isMobilePhone("any")
               .optional(),
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
               "Invalid deadline id. Make sure it is included in your request parameter (url)."
            ).isNumeric(),
         ];
      }
      case "hasLoginInfo": {
         return [
            body("email", "Please provide a valid email")
               .isEmail()
               .normalizeEmail(),
            body("password", "Please provide a valid password").isString(),
         ];
      }
      case "hasNotificationId": {
         return [
            param(
               "notificationId",
               "Invalid notification id, please provide it in your request parameter (url)"
            ),
         ];
      }
      case "createNotification": {
         return [
            body("message", "Please provide a message").isString(),
            body(
               "notify_time",
               "Please provide a time this notification should be sent in ISO8601 format."
            ).isISO8601(),
         ];
      }
   }
};

// Returns the errors from validations specified above
export const validationErrors = (req: any) => {
   return validationResult(req);
};
