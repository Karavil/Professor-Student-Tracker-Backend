import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const isStudentOfProfessor = async (
   professorId: number,
   studentId: number
) => {
   try {
      const students = await prisma.professor
         .findOne({
            where: {
               id: professorId,
            },
         })
         .students({
            where: {
               id: studentId,
            },
         });
      return students.length > 0;
   } catch (e) {
      return false;
   }
};

export const isDeadlineOfStudent = async (
   studentId: number,
   deadlineId: number
) => {
   try {
      const deadlines = await prisma.student
         .findOne({
            where: {
               id: studentId,
            },
         })
         .deadlines({
            where: {
               id: deadlineId,
            },
         });
      return deadlines.length > 0;
   } catch (e) {
      return false;
   }
};

export const isNotificationOfDeadline = async (
   deadlineId: number,
   notificationId: number
) => {
   try {
      const notifications = await prisma.deadline
         .findOne({
            where: {
               id: deadlineId,
            },
         })
         .notifications({
            where: {
               id: notificationId,
            },
         });
      return notifications.length > 0;
   } catch (e) {
      return false;
   }
};
