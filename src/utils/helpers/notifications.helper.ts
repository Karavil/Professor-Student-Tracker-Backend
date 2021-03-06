import {
   PrismaClient,
   Notification as NotificationWithId,
} from "@prisma/client";
import { Response } from "express";

/**
 *Professor object generated by the Prisma client without the id (which is auto *generated)
 */
type Notification = Omit<NotificationWithId, "id">;
type EditableNotification = Partial<Notification>;

// Prisma client for interaction with our database
const prisma = new PrismaClient();

// Get a notification from the database (with specified id)
export const getNotification = async (
   notificationId: number,
   res: Response
) => {
   try {
      // Find notification object in database
      const notification = await prisma.notification.findOne({
         where: {
            id: notificationId,
         },
      });

      // If found (not null), return it to user.
      if (notification) {
         res.status(200).json({ notification });
      } else {
         // If the notification can't be found, send an error
         res.status(404).json({
            message: `Notification with id ${notificationId} not found.`,
         });
      }
   } catch (e) {
      // Some internal database error happened
      res.status(500).json({ message: e.message });
   }
};

export const getNotifications = async (deadlineId: number, res: Response) => {
   try {
      // Find the notification by id, then find his notifications
      const notifications = await prisma.deadline
         .findOne({
            where: {
               id: deadlineId,
            },
         })
         .notifications();

      // Return list of notifications to user
      res.status(200).json({
         notifications,
      });
   } catch (e) {
      // Some internal database error happened
      res.status(500).json({ message: e.message });
   }
};

// Create a notification object in the database (validated before using)
export const createNotification = async (
   notification: Notification,
   deadlineId: number,
   res: Response
) => {
   try {
      const { message, notify_time } = notification;
      const newNotification = await prisma.notification.create({
         data: {
            message,
            notify_time: new Date(notify_time).toISOString(),
            Deadline: {
               connect: {
                  id: deadlineId,
               },
            },
         },
      });
      res.status(201).json(newNotification);
   } catch (e) {
      // Some internal database error happened
      console.log(e);
      res.status(500).json({ message: e.message });
   }
};

export const deleteNotification = async (
   notificationId: number,
   res: Response
) => {
   try {
      await prisma.notification.delete({
         where: {
            id: notificationId,
         },
      });
      res.status(200).json({
         message: `Notification with id ${notificationId} deleted.`,
      });
   } catch (e) {
      res.status(500).json({ message: e.message });
   }
};

export const editNotification = async (
   notificationId: number,
   notificationUpdates: EditableNotification,
   res: Response
) => {
   try {
      const updated = await prisma.notification.update({
         where: {
            id: notificationId,
         },
         data: notificationUpdates,
      });

      res.status(200).json({
         message: "Notification successfully updated",
         notification: updated,
      });
   } catch (e) {
      res.status(500).json({ message: e.message });
   }
};
