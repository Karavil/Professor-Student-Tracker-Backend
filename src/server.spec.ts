import request from "supertest";
import server from "./server";

require("dotenv").config();

describe("server", function () {
   let token = "";
   let professor = {
      first_name: "Test",
      last_name: "User",
      email: "testemail" + Math.random() * 10000 + "@school.edu",
      password: "coolPass123",
   };
   describe("POST /auth/register", function () {
      it("Should register account", async function () {
         await request(server)
            .post("/auth/register")
            .send(professor)
            .then((res) => {
               expect(res.status).toBe(201);
               expect(res.body.data).toBeDefined();
            });
      });

      it("Should not register account without required fields", async function () {
         await request(server)
            .post("/auth/register")
            .send({
               first_name: "First",
               last_name: "Last",
               email: "coolemail@school.edu",
            })
            .then((res) => {
               expect(res.status).toBe(400);
            });
      });
   });

   describe("POST /auth/login", function () {
      it("Should log in account with correct credentials", async function () {
         await request(server)
            .post("/auth/login")
            .send({ email: professor.email, password: professor.password })
            .then((res) => {
               expect(res.status).toBe(200);
               expect(res.body.token).toBeDefined();
               token = res.body.token;
            });
      });

      it("Should not log in account with incorrect credentials", async function () {
         await request(server)
            .post("/auth/login")
            .send({ email: professor.email, password: "wrongPass" })
            .then((res) => {
               expect(res.status).toBe(401);
            });
      });
   });

   describe("POST /students", function () {
      const student = {
         first_name: "Test",
         last_name: "Student",
         email: "student@school.edu",
         phone_number: "3050002822",
      };
      it("should return 401 when accessing students without token", function () {
         return request(server)
            .post("/students")
            .send(student)
            .then((res) => {
               expect(res.status).toBe(401);
            });
      });
      it("should return 200 and list of students when accessing jokes with token", function () {
         return request(server)
            .post("/students")
            .set("Authorization", token)
            .send(student)
            .then((res) => {
               expect(res.status).toBe(201);
               expect(res.body.id).toBeDefined();
            });
      });
   });

   describe("GET /students", function () {
      it("should return 401 when accessing students without token", function () {
         return request(server)
            .get("/students")
            .then((res) => {
               expect(res.status).toBe(401);
            });
      });
      it("should return 200 and list of students when accessing jokes with token", function () {
         return request(server)
            .get("/students")
            .set("Authorization", token)
            .then((res) => {
               expect(res.status).toBe(200);
               expect(res.body.students.length).toBeGreaterThan(0);
            });
      });
   });
});
