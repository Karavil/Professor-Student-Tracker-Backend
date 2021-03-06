import { PrismaClient, Deadline as DeadlineWithId } from "@prisma/client";
import { Response } from "express";

/**
 *Professor object generated by the Prisma client without the id (which is auto *generated)
 */
type Deadline = Omit<DeadlineWithId, "id">;
type EditableDeadline = Partial<Deadline>;

// Prisma client for interaction with our database
const prisma = new PrismaClient();

// Get a student from the database (with specified id)
export const getDeadline = async (deadlineId: number, res: Response) => {
   try {
      // Find student object in database
      const deadline = await prisma.deadline.findOne({
         where: {
            id: deadlineId,
         },
         include: {
            notifications: true,
         },
      });

      // If found (not null), return it to user.
      if (deadline) {
         res.status(200).json({ deadline });
      } else {
         // If the student can't be found, send an error
         res.status(404).json({
            message: `Deadline with id ${deadlineId} not found.`,
         });
      }
   } catch (e) {
      // Some internal database error happened
      res.status(500).json({ message: e.message });
   }
};

export const getDeadlines = async (studentId: number, res: Response) => {
   try {
      // Find the student by id, then find his deadlines
      const deadlines = await prisma.student
         .findOne({
            where: {
               id: studentId,
            },
         })
         .deadlines({
            include: {
               notifications: true,
            },
         });

      // Return list of deadlines to user
      res.status(200).json({
         deadlines,
      });
   } catch (e) {
      // Some internal database error happened
      res.status(500).json({ message: e.message });
   }
};

// Create a student object in the database (validated before using)
export const createDeadline = async (
   deadline: Deadline,
   studentId: number,
   res: Response
) => {
   try {
      const { name, due_date, description } = deadline;
      const newDeadline = await prisma.deadline.create({
         data: {
            name,
            description,
            due_date: new Date(due_date).toISOString(),
            Student: {
               connect: {
                  id: studentId,
               },
            },
         },
      });
      res.status(201).json(newDeadline);
   } catch (e) {
      // Some internal database error happened
      console.log(e);
      res.status(500).json({ message: e.message });
   }
};

export const deleteDeadline = async (deadlineId: number, res: Response) => {
   try {
      await prisma.deadline.delete({
         where: {
            id: deadlineId,
         },
      });
      res.status(200).json({
         message: `Deadline with id ${deadlineId} deleted.`,
      });
   } catch (e) {
      res.status(500).json({ message: e.message });
   }
};

export const editDeadline = async (
   deadlineId: number,
   deadlineUpdates: EditableDeadline,
   res: Response
) => {
   try {
      const updated = await prisma.deadline.update({
         where: {
            id: deadlineId,
         },
         data: deadlineUpdates,
      });

      res.status(200).json({
         message: "Deadline successfully updated",
         deadline: updated,
      });
   } catch (e) {
      res.status(500).json({ message: e.message });
   }
};
