import express, { Request, Response, NextFunction } from "express";
import {
   getNotification,
   getNotifications,
   createNotification,
} from "../../../utils/helpers/notifications.helper";
import { validate, validationErrors } from "../../../utils/validation/validate";
import { isNotificationOfDeadline } from "../../../utils/authentication/auth.helper";

const router = express.Router({ mergeParams: true });

// Authenticator to make the notification belongs to the deadline that is requested
const isNotificationsNotification = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   const validated = await isNotificationOfDeadline(
      Number.parseInt(req.params.notificationId),
      Number.parseInt(req.params.notificationId)
   );

   // If the notification belongs to the deadline, keep going
   if (validated) return next();

   // If the notification does not belong to the deadline, send an error
   res.status(401).json({
      message: "Requested notification is not assigned to this deadline",
   });
};

// GET requests to /api/professors/:professorId/deadlines/:deadlineID/notifications
router.get("/", (req: Request, res: Response) => {
   try {
      getNotifications(Number.parseInt(req.params.deadlineId), res);
   } catch (e) {
      res.status(500).json({ message: e.message });
   }
});

// GET requests to /api/professors/:professorId/deadlines/:deadlineId/notifications/:notificationID
router.get(
   "/:notificationId",
   validate("hasNotificationId"),
   isNotificationsNotification,
   (req: Request, res: Response) => {
      try {
         // Errors from the user input validation
         const errors = validationErrors(req);
         // If there are no errors, add to database and resolve response
         if (errors.isEmpty()) {
            getNotification(Number.parseInt(req.params.notificationId), res);
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

// POST requests to /deadlines/notifications
router.post(
   "/",
   validate("createNotification"),
   (req: Request, res: Response) => {
      try {
         // Errors from the user input validation
         const errors = validationErrors(req);
         if (errors.isEmpty()) {
            createNotification(
               req.body,
               Number.parseInt(req.params.deadlineId),
               res
            );
         } else {
            res.status(400).json({
               message: "Error while processing POST Request",
               errors: errors.array(),
            });
         }
      } catch (e) {
         res.status(500).json({ message: e.message });
      }
   }
);

export default router;
