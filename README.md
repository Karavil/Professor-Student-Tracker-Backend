# Better Professor

-  [Postman Documentation](https://documenter.getpostman.com/view/10396314/SzfCV6E1?version=latest)

## Indices

-  [Default](#default)

   -  [Edit deadline](#1-edit-deadline)
   -  [Delete deadline](#2-delete-deadline)
   -  [Get deadline notifications](#3-get-deadline-notifications)
   -  [Create deadline notification](#4-create-deadline-notification)
   -  [Create student deadline](#5-create-student-deadline)
   -  [Get student deadlines](#6-get-student-deadlines)
   -  [Delete student](#7-delete-student)
   -  [Edit student](#8-edit-student)
   -  [Create student](#9-create-student)
   -  [Get profile (of logged in professor)](<#10-get-profile-(of-logged-in-professor)>)
   -  [Get students](#11-get-students)
   -  [Register](#12-register)
   -  [Login](#13-login)

---

## Default

### 1. Edit deadline

**_Endpoint:_**

```bash
Method: PATCH
Type: RAW
URL: https://better-professor-karavil.herokuapp.com/students/3/deadlines/1
```

**_Headers:_**

| Key           | Value                                 | Description |
| ------------- | ------------------------------------- | ----------- |
| Authorization | JWT Token (provided after logging in) |             |

**_Body:_**

```js
{
	"name": "Edited project!"
}
```

### 2. Delete deadline

**_Endpoint:_**

```bash
Method: DELETE
Type: RAW
URL: https://better-professor-karavil.herokuapp.com/students/3/deadlines/1
```

**_Headers:_**

| Key           | Value                                 | Description |
| ------------- | ------------------------------------- | ----------- |
| Authorization | JWT Token (provided after logging in) |             |

### 3. Get deadline notifications

**_Endpoint:_**

```bash
Method: GET
Type: RAW
URL: https://better-professor-karavil.herokuapp.com/students/1/deadlines/1/notifications
```

**_Headers:_**

| Key           | Value                                 | Description |
| ------------- | ------------------------------------- | ----------- |
| Authorization | JWT Token (provided after logging in) |             |

### 4. Create deadline notification

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: https://better-professor-karavil.herokuapp.com/students/3/deadlines/2/notifications
```

**_Headers:_**

| Key           | Value                                 | Description |
| ------------- | ------------------------------------- | ----------- |
| Authorization | JWT Token (provided after logging in) |             |

**_Body:_**

```js
{
	"message": "Student's project!",
	"notify_time": "2020-05-01"
}
```

### 5. Create student deadline

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: https://better-professor-karavil.herokuapp.com/students/5/deadlines
```

**_Headers:_**

| Key           | Value                                 | Description |
| ------------- | ------------------------------------- | ----------- |
| Authorization | JWT Token (provided after logging in) |             |

**_Body:_**

```js
{
	"name": "Student's project!",
	"due_date": "2020-05-01"
}
```

### 6. Get student deadlines

**_Endpoint:_**

```bash
Method: GET
Type:
URL: https://better-professor-karavil.herokuapp.com/students/3/deadlines
```

**_Headers:_**

| Key           | Value                                 | Description |
| ------------- | ------------------------------------- | ----------- |
| Authorization | JWT Token (provided after logging in) |             |

### 7. Delete student

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: https://better-professor-karavil.herokuapp.com/students/2
```

**_Headers:_**

| Key           | Value                                 | Description |
| ------------- | ------------------------------------- | ----------- |
| Authorization | JWT Token (provided after logging in) |             |

### 8. Edit student

**_Endpoint:_**

```bash
Method: PATCH
Type: RAW
URL: https://better-professor-karavil.herokuapp.com/students/3
```

**_Headers:_**

| Key           | Value                                 | Description |
| ------------- | ------------------------------------- | ----------- |
| Authorization | JWT Token (provided after logging in) |             |

**_Body:_**

```js
{
	"first_name": "EditedName",
	"last_name": "Student",
	"email": "student@school.edu",
	"phone_number": "3053321188"
}
```

### 9. Create student

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: https://better-professor-karavil.herokuapp.com/students
```

**_Headers:_**

| Key           | Value                                 | Description |
| ------------- | ------------------------------------- | ----------- |
| Authorization | JWT Token (provided after logging in) |             |

**_Body:_**

```js
{
	"first_name": "Coooooool",
	"last_name": "Student",
	"email": "student@school.edu",
	"phone_number": "3053321188"
}
```

### 10. Get profile (of logged in professor)

**_Endpoint:_**

```bash
Method: GET
Type:
URL: https://better-professor-karavil.herokuapp.com/profile
```

**_Headers:_**

| Key           | Value                                 | Description |
| ------------- | ------------------------------------- | ----------- |
| Authorization | JWT Token (provided after logging in) |             |

### 11. Get students

**_Endpoint:_**

```bash
Method: GET
Type:
URL: https://better-professor-karavil.herokuapp.com/students
```

**_Headers:_**

| Key           | Value                                 | Description |
| ------------- | ------------------------------------- | ----------- |
| Authorization | JWT Token (provided after logging in) |             |

### 12. Register

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: https://better-professor-karavil.herokuapp.com/auth/register
```

**_Body:_**

```js
{
	"first_name": "Prof",
	"last_name": "Professor",
	"email": "professor12@school.edu",
	"password": "coolPass123"
}
```

### 13. Login

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: https://better-professor-karavil.herokuapp.com/auth/login
```

**_Body:_**

```js
{
	"email": "professor12@school.edu",
	"password": "coolPass123"
}
```

---

[Back to top](#better-professor)
