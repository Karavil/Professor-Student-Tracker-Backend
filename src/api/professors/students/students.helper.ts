import { PrismaClient, Student as StudentWithId } from "@prisma/client";
import { Response } from "express";

/**
 *Professor object generated by the Prisma client without the id (which is auto *generated)
 */
type Student = Omit<StudentWithId, "id">;

// Prisma client for interaction with our database
const prisma = new PrismaClient();

// Get a professor from the database (with specified id)
export const getStudent = async (studentId: number, res: Response) => {
   try {
      // Find professor object in database
      const student = await prisma.student.findOne({
         where: {
            id: studentId,
         },
      });

      // If found (not null), return it to user.
      if (student) {
         res.status(200).json({ student });
      } else {
         // If the professor can't be found, send an error
         res.status(404).json({
            message: `Student with id ${studentId} not found.`,
         });
      }
   } catch (e) {
      // Some internal database error happened
      res.status(500).json({ message: e.message });
   }
};

export const getStudents = async (professorId: number, res: Response) => {
   try {
      // Find the professor by id, then find his students
      const students = await prisma.professor
         .findOne({
            where: {
               id: professorId,
            },
         })
         .students();

      // Return list of students to user
      res.status(200).json({
         students,
      });
   } catch (e) {
      // Some internal database error happened
      res.status(500).json({ message: e.message });
   }
};

// Create a professor object in the database (validated before using)
export const createStudent = async (
   student: Student,
   professorId: number,
   res: Response
) => {
   try {
      const newStudent = await prisma.student.create({
         data: {
            ...student,
            professor: {
               connect: {
                  id: professorId,
               },
            },
         },
      });
      res.status(201).json(newStudent);
   } catch (e) {
      res.status(500).json(
         "Database error while creating new professor input."
      );
   }
};
