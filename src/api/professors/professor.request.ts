import { Request } from "express";
interface ProfessorRequest extends Request {
   professorId: number;
}

export default ProfessorRequest;
