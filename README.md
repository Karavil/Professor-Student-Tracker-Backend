# `POST` /api/professors/

**

### Request:

+ Headers:
    No specific headers needed.

+ Url Params:
    No specific query parameters needed.

+ Body:
```
{
    "first_name": "first",
    "last_name": "last",
    "email": "firstlast@edu.com",
    "password": "coolpass123"
}
```

***


### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Duplicate email submitted. Only one account allowed per email"
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Professor with the same email already in database. Duplicate accounts are not allowed"
}
```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **201**

+ Body:
```
{
    "id": 3,
    "first_name": "first",
    "last_name": "last",
    "email": "firstlast@edu.com",
    "password": "coolpass123"
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Should be a string",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Should be a string",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Should be a valid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Should be a valid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Should be a string",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Should be a string",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Should be a valid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Should be a valid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Should be a string",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Should be a string",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Should be a string",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Should be a string",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Should be a string",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Should be a string",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Should be a string",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Should be a string",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Should be a string",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Missing input",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Should be a string",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Missing input",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Should be a string",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Invalid value",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Should be a string",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Invalid value",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid value",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Required field",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Not a string",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Required field",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Not a string",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Required field",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Not a string",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Required field",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Not a string",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Invalid first_name",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid first_name",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Invalid first_name",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid first_name",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST request",
    "errors": [
        {
            "msg": "Invalid first_name",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid first_name",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Invalid password",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing GET request",
    "errors": [
        {
            "msg": "Invalid first_name",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid first_name",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing GET request",
    "errors": [
        {
            "msg": "Invalid first_name",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid first_name",
            "param": "first_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid last_name",
            "param": "last_name",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Invalid email",
            "param": "password",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **404**

+ Body:
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot POST /api/professors</pre>
</body>
</html>

```
***


# `GET` /api/professors/1/students

**

### Request:

+ Headers:
    No specific headers needed.

+ Url Params:
    No specific query parameters needed.

+ Body:
    No specific body attributes needed.

***


### Response:

+ Status: **200**

+ Body:
```
{
    "students": []
}
```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "students": null
}
```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "message": "Students for professor found.",
    "students": null
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "message": "Students for professor found.",
    "students": []
}
```
***
### Response:

+ Status: **404**

+ Body:
```
{
    "message": "Student with id 1 not found."
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "message": "Students for professor found.",
    "students": []
}
```
***
### Response:

+ Status: **500**

+ Body:
```
{
    "message": "\n\u001b[31mInvalid \u001b[1m`prisma.professor.findOne()`\u001b[22m invocation in\u001b[39m\n\u001b[31m\u001b[4m/Users/alpkaravil/Lambda/Builds/BetterProfessor/Backend/src/api/professors/students/students.helper.ts:39:48\u001b[24m\u001b[39m\n\n{\n  where: {\n\u001b[2m\u001b[32m\u001b[2m?   id?: Int,\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m\u001b[32m\u001b[39m\u001b[22m\u001b[2m\u001b[32m\u001b[2m?   email?: String\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m\u001b[32m\u001b[39m\u001b[22m  }\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m}\n\nArgument \u001b[1mwhere\u001b[22m of type \u001b[1mProfessorWhereUniqueInput\u001b[22m needs \u001b[92mat least one\u001b[39m argument. Available args are listed in \u001b[2m\u001b[32mgreen\u001b[39m\u001b[22m.\n\n\u001b[2mNote: Lines with \u001b[32m?\u001b[39m are optional\u001b[22m\u001b[2m.\u001b[22m\n"
}
```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **500**

+ Body:
```
{
    "message": "\n\u001b[31mInvalid \u001b[1m`prisma.student.findOne()`\u001b[22m invocation in\u001b[39m\n\u001b[31m\u001b[4m/Users/alpkaravil/Lambda/Builds/BetterProfessor/Backend/src/api/professors/students/students.helper.ts:16:44\u001b[24m\u001b[39m\n\n{\n  where: {\n    id: \u001b[91mNaN\u001b[39m\u001b[2m\u001b[22m\n        \u001b[91m~~~\u001b[39m\n\u001b[2m\u001b[22m  }\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m}\n\nArgument \u001b[1mid\u001b[22m: Got invalid value \u001b[91mNaN\u001b[39m on \u001b[1mprisma.findOneStudent\u001b[22m. Provided \u001b[91mFloat\u001b[39m, expected \u001b[92mInt\u001b[39m.\n\n"
}
```
***
### Response:

+ Status: **500**

+ Body:
```
{
    "message": "\n\u001b[31mInvalid \u001b[1m`prisma.student.findOne()`\u001b[22m invocation in\u001b[39m\n\u001b[31m\u001b[4m/Users/alpkaravil/Lambda/Builds/BetterProfessor/Backend/src/api/professors/students/students.helper.ts:16:44\u001b[24m\u001b[39m\n\n{\n  where: {\n    id: \u001b[91mNaN\u001b[39m\u001b[2m\u001b[22m\n        \u001b[91m~~~\u001b[39m\n\u001b[2m\u001b[22m  }\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m}\n\nArgument \u001b[1mid\u001b[22m: Got invalid value \u001b[91mNaN\u001b[39m on \u001b[1mprisma.findOneStudent\u001b[22m. Provided \u001b[91mFloat\u001b[39m, expected \u001b[92mInt\u001b[39m.\n\n"
}
```
***
### Response:

+ Status: **500**

+ Body:
```
{
    "message": "\n\u001b[31mInvalid \u001b[1m`prisma.student.findOne()`\u001b[22m invocation in\u001b[39m\n\u001b[31m\u001b[4m/Users/alpkaravil/Lambda/Builds/BetterProfessor/Backend/src/api/professors/students/students.helper.ts:16:44\u001b[24m\u001b[39m\n\n{\n  where: {\n    id: \u001b[91mNaN\u001b[39m\u001b[2m\u001b[22m\n        \u001b[91m~~~\u001b[39m\n\u001b[2m\u001b[22m  }\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m}\n\nArgument \u001b[1mid\u001b[22m: Got invalid value \u001b[91mNaN\u001b[39m on \u001b[1mprisma.findOneStudent\u001b[22m. Provided \u001b[91mFloat\u001b[39m, expected \u001b[92mInt\u001b[39m.\n\n"
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "message": "Students for professor found.",
    "students": []
}
```
***
### Response:

+ Status: **500**

+ Body:
```
{
    "message": "\n\u001b[31mInvalid \u001b[1m`prisma.professor.findOne()`\u001b[22m invocation in\u001b[39m\n\u001b[31m\u001b[4m/Users/alpkaravil/Lambda/Builds/BetterProfessor/Backend/src/api/professors/students/students.helper.ts:42:11\u001b[24m\u001b[39m\n\n{\n  where: {\n    id: \u001b[91mNaN\u001b[39m\u001b[2m\u001b[22m\n        \u001b[91m~~~\u001b[39m\n\u001b[2m\u001b[22m  }\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m}\n\nArgument \u001b[1mid\u001b[22m: Got invalid value \u001b[91mNaN\u001b[39m on \u001b[1mprisma.findOneProfessor\u001b[22m. Provided \u001b[91mFloat\u001b[39m, expected \u001b[92mInt\u001b[39m.\n\n"
}
```
***
### Response:

+ Status: **500**

+ Body:
```
{
    "message": "\n\u001b[31mInvalid \u001b[1m`prisma.professor.findOne()`\u001b[22m invocation in\u001b[39m\n\u001b[31m\u001b[4m/Users/alpkaravil/Lambda/Builds/BetterProfessor/Backend/src/api/professors/students/students.helper.ts:41:11\u001b[24m\u001b[39m\n\n{\n  where: {\n    id: \u001b[91mNaN\u001b[39m\u001b[2m\u001b[22m\n        \u001b[91m~~~\u001b[39m\n\u001b[2m\u001b[22m  }\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m}\n\nArgument \u001b[1mid\u001b[22m: Got invalid value \u001b[91mNaN\u001b[39m on \u001b[1mprisma.findOneProfessor\u001b[22m. Provided \u001b[91mFloat\u001b[39m, expected \u001b[92mInt\u001b[39m.\n\n"
}
```
***
### Response:

+ Status: **500**

+ Body:
```
{
    "message": "\n\u001b[31mInvalid \u001b[1m`prisma.professor.findOne()`\u001b[22m invocation in\u001b[39m\n\u001b[31m\u001b[4m/Users/alpkaravil/Lambda/Builds/BetterProfessor/Backend/src/api/professors/students/students.helper.ts:41:11\u001b[24m\u001b[39m\n\n{\n  where: {\n    id: \u001b[91mNaN\u001b[39m\u001b[2m\u001b[22m\n        \u001b[91m~~~\u001b[39m\n\u001b[2m\u001b[22m  }\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m}\n\nArgument \u001b[1mid\u001b[22m: Got invalid value \u001b[91mNaN\u001b[39m on \u001b[1mprisma.findOneProfessor\u001b[22m. Provided \u001b[91mFloat\u001b[39m, expected \u001b[92mInt\u001b[39m.\n\n"
}
```
***
### Response:

+ Status: **404**

+ Body:
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /api/professors/1/students/</pre>
</body>
</html>

```
***
### Response:

+ Status: **404**

+ Body:
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /api/professors/1/students</pre>
</body>
</html>

```
***
### Response:

+ Status: **404**

+ Body:
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /api/professors/1/students/</pre>
</body>
</html>

```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "message": "Professor found.",
    "professor": {
        "id": 1,
        "first_name": "Alp",
        "last_name": "Karavil",
        "email": "email@edu.com",
        "password": "hashedPass"
    }
}
```
***
### Response:

+ Status: **404**

+ Body:
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /api/professors/1/students</pre>
</body>
</html>

```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **500**

+ Body:
```
{
    "message": "\n\u001b[31mInvalid \u001b[1m`prisma.professor.findOne()`\u001b[22m invocation in\u001b[39m\n\u001b[31m\u001b[4m/Users/alpkaravil/Lambda/Builds/BetterProfessor/Backend/src/api/professors/students/students.helper.ts:42:11\u001b[24m\u001b[39m\n\n{\n  where: {\n    id: \u001b[91mNaN\u001b[39m\u001b[2m\u001b[22m\n        \u001b[91m~~~\u001b[39m\n\u001b[2m\u001b[22m  }\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m}\n\nArgument \u001b[1mid\u001b[22m: Got invalid value \u001b[91mNaN\u001b[39m on \u001b[1mprisma.findOneProfessor\u001b[22m. Provided \u001b[91mFloat\u001b[39m, expected \u001b[92mInt\u001b[39m.\n\n"
}
```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **500**

+ Body:
```
{
    "message": "\n\u001b[31mInvalid \u001b[1m`prisma.professor.findOne()`\u001b[22m invocation in\u001b[39m\n\u001b[31m\u001b[4m/Users/alpkaravil/Lambda/Builds/BetterProfessor/Backend/src/api/professors/students/students.helper.ts:42:11\u001b[24m\u001b[39m\n\n{\n  where: {\n    id: \u001b[91mNaN\u001b[39m\u001b[2m\u001b[22m\n        \u001b[91m~~~\u001b[39m\n\u001b[2m\u001b[22m  }\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m}\n\nArgument \u001b[1mid\u001b[22m: Got invalid value \u001b[91mNaN\u001b[39m on \u001b[1mprisma.findOneProfessor\u001b[22m. Provided \u001b[91mFloat\u001b[39m, expected \u001b[92mInt\u001b[39m.\n\n"
}
```
***


# `POST` /api/professors/1/students

**

### Request:

+ Headers:
    No specific headers needed.

+ Url Params:
    No specific query parameters needed.

+ Body:
```
{
  "first_name": "Student",
  "last_name": "McStudent",
  "email": "student@school.edu",
  "phone_number": "13054873567"
}
```

***


### Response:

+ Status: **201**

+ Body:
```
{
    "id": 5,
    "first_name": "Student",
    "last_name": "McStudent",
    "email": "student@school.edu",
    "phone_number": "13054873567",
    "professorId": 1
}
```
***
### Response:

+ Status: **201**

+ Body:
```
{
    "id": 4,
    "first_name": "Student",
    "last_name": "McStudent",
    "email": "student@school.edu",
    "phone_number": "13054873567",
    "professorId": 1
}
```
***
### Response:

+ Status: **201**

+ Body:
```
{
    "id": 3,
    "first_name": "Student",
    "last_name": "McStudent",
    "email": "student@school.edu",
    "phone_number": "13054873567",
    "professorId": 1
}
```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **500**

+ Body:
```
"Database error while creating new professor input."
```
***
### Response:

+ Status: **500**

+ Body:
```
"Database error while creating new professor input."
```
***
### Response:

+ Status: **500**

+ Body:
```
"Database error while creating new professor input."
```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST Request",
    "errors": [
        {
            "value": "+1-305-487-3567dwa",
            "msg": "Invalid phone number",
            "param": "phone_number",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **0**

+ Body:
```

```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST Request",
    "errors": [
        {
            "value": "+1-305-487-3567",
            "msg": "Invalid phone number",
            "param": "phone_number",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST Request",
    "errors": [
        {
            "value": "3054873567",
            "msg": "Invalid phone number",
            "param": "phone_number",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST Request",
    "errors": [
        {
            "value": "13054873567",
            "msg": "Invalid phone number",
            "param": "phone_number",
            "location": "body"
        }
    ]
}
```
***
### Response:

+ Status: **400**

+ Body:
```
{
    "message": "Error while processing POST Request",
    "errors": [
        {
            "value": "+13054873567",
            "msg": "Invalid phone number",
            "param": "phone_number",
            "location": "body"
        }
    ]
}
```
***


# `GET` /api/students/3/deadlines

**

### Request:

+ Headers:
    No specific headers needed.

+ Url Params:
    No specific query parameters needed.

+ Body:
    No specific body attributes needed.

***


### Response:

+ Status: **200**

+ Body:
```
{
    "deadlines": [
        {
            "id": 1,
            "name": "cool deadline",
            "description": "deeeeaaadddliiiinnneeee!",
            "due_date": "2020-09-09T00:00:00.000Z",
            "studentId": 3
        }
    ]
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "deadlines": [
        {
            "id": 1,
            "name": "cool deadline",
            "description": "deeeeaaadddliiiinnneeee!",
            "due_date": "2020-09-09T00:00:00.000Z",
            "studentId": 3
        }
    ]
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "deadlines": [
        {
            "id": 1,
            "name": "cool deadline",
            "description": "deeeeaaadddliiiinnneeee!",
            "due_date": "2020-09-09T00:00:00.000Z",
            "studentId": 3
        }
    ]
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "deadlines": [
        {
            "id": 1,
            "name": "cool deadline",
            "description": "deeeeaaadddliiiinnneeee!",
            "due_date": "2020-09-09T00:00:00.000Z",
            "studentId": 3
        }
    ]
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "deadlines": []
}
```
***


# `GET` /api/students/3/deadlines/1

**

### Request:

+ Headers:
    No specific headers needed.

+ Url Params:
    No specific query parameters needed.

+ Body:
    No specific body attributes needed.

***


### Response:

+ Status: **200**

+ Body:
```
{
    "message": "Deadline found",
    "deadline": {
        "id": 1,
        "name": "cool deadline",
        "description": "deeeeaaadddliiiinnneeee!",
        "due_date": "2020-09-09T00:00:00.000Z",
        "studentId": 3
    }
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "deadlines": [
        {
            "id": 1,
            "name": "cool deadline",
            "description": "deeeeaaadddliiiinnneeee!",
            "due_date": "2020-09-09T00:00:00.000Z",
            "studentId": 3
        }
    ]
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "student": {
        "id": 3,
        "first_name": "Student",
        "last_name": "McStudent",
        "email": "student@school.edu",
        "phone_number": "13054873567",
        "professorId": 1,
        "deadlines": [
            {
                "id": 1,
                "name": "cool deadline",
                "description": "deeeeaaadddliiiinnneeee!",
                "due_date": "2020-09-09T00:00:00.000Z",
                "studentId": 3
            }
        ]
    }
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "student": {
        "id": 3,
        "first_name": "Student",
        "last_name": "McStudent",
        "email": "student@school.edu",
        "phone_number": "13054873567",
        "professorId": 1,
        "deadlines": [
            {
                "id": 1,
                "name": "cool deadline",
                "description": "deeeeaaadddliiiinnneeee!",
                "due_date": "2020-09-09T00:00:00.000Z",
                "studentId": 3
            }
        ]
    }
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "student": {
        "id": 3,
        "first_name": "Student",
        "last_name": "McStudent",
        "email": "student@school.edu",
        "phone_number": "13054873567",
        "professorId": 1
    }
}
```
***
### Response:

+ Status: **404**

+ Body:
```
{
    "message": "Student with id 2 not found."
}
```
***
### Response:

+ Status: **404**

+ Body:
```
{
    "message": "Student with id 1 not found."
}
```
***
### Response:

+ Status: **404**

+ Body:
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /api/students</pre>
</body>
</html>

```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "deadlines": [
        {
            "id": 1,
            "name": "cool deadline",
            "description": "deeeeaaadddliiiinnneeee!",
            "due_date": "2020-09-09T00:00:00.000Z",
            "studentId": 3
        }
    ]
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "deadlines": [
        {
            "id": 1,
            "name": "cool deadline",
            "description": "deeeeaaadddliiiinnneeee!",
            "due_date": "2020-09-09T00:00:00.000Z",
            "studentId": 3
        }
    ]
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "student": {
        "id": 4,
        "first_name": "Student",
        "last_name": "McStudent",
        "email": "student@school.edu",
        "phone_number": "13054873567",
        "professorId": 1
    }
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "student": {
        "id": 4,
        "first_name": "Student",
        "last_name": "McStudent",
        "email": "student@school.edu",
        "phone_number": "13054873567",
        "professorId": 1
    }
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "student": {
        "id": 3,
        "first_name": "Student",
        "last_name": "McStudent",
        "email": "student@school.edu",
        "phone_number": "13054873567",
        "professorId": 1
    }
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "student": {
        "id": 3,
        "first_name": "Student",
        "last_name": "McStudent",
        "email": "student@school.edu",
        "phone_number": "13054873567",
        "professorId": 1
    }
}
```
***
### Response:

+ Status: **404**

+ Body:
```
{
    "message": "Student with id 2 not found."
}
```
***
### Response:

+ Status: **200**

+ Body:
```
{
    "student": {
        "id": 3,
        "first_name": "Student",
        "last_name": "McStudent",
        "email": "student@school.edu",
        "phone_number": "13054873567",
        "professorId": 1
    }
}
```
***
### Response:

+ Status: **404**

+ Body:
```
{
    "message": "Student with id 1 not found."
}
```
***
### Response:

+ Status: **404**

+ Body:
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /students/1</pre>
</body>
</html>

```
***


# `POST` /api/professors/1/students/3/deadlines

**

### Request:

+ Headers:
    No specific headers needed.

+ Url Params:
    No specific query parameters needed.

+ Body:
```
{
    "name": "cool deadline",
    "description": "deeeeaaadddliiiinnneeee!",
    "due_date": "2020-09-09"
}
```

***


### Response:

+ Status: **201**

+ Body:
```
{
    "id": 1,
    "name": "cool deadline",
    "description": "deeeeaaadddliiiinnneeee!",
    "due_date": "2020-09-09T00:00:00.000Z",
    "studentId": 3
}
```
***
### Response:

+ Status: **500**

+ Body:
```
{
    "message": "\n\u001b[31mInvalid \u001b[1m`prisma.deadline.create()`\u001b[22m invocation in\u001b[39m\n\u001b[31m\u001b[4m/Users/alpkaravil/Lambda/Builds/BetterProfessor/Backend/src/api/professors/students/deadlines/deadlines.helper.ts:65:49\u001b[24m\u001b[39m\n\n{\n  data: {\n    name: \u001b[2m'cool deadline'\u001b[22m\u001b[2m,\u001b[22m\n\u001b[2m\u001b[22m    description: \u001b[2m'deeeeaaadddliiiinnneeee!'\u001b[22m\u001b[2m,\u001b[22m\n\u001b[2m\u001b[22m    due_date: \u001b[91m'2020-09-09'\u001b[39m\u001b[2m,\u001b[22m\n              \u001b[91m~~~~~~~~~~~~\u001b[39m\n\u001b[2m\u001b[22m    student: {\n      connect: {\n        id: \u001b[2m3\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m      }\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m    }\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m  }\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m}\n\nArgument \u001b[1mdue_date\u001b[22m: Got invalid value \u001b[91m'2020-09-09'\u001b[39m on \u001b[1mprisma.createOneDeadline\u001b[22m. Provided \u001b[91mString\u001b[39m, expected \u001b[92mDateTime\u001b[39m.\n\n"
}
```
***
### Response:

+ Status: **500**

+ Body:
```
{
    "message": "\n\u001b[31mInvalid \u001b[1m`prisma.deadline.create()`\u001b[22m invocation in\u001b[39m\n\u001b[31m\u001b[4m/Users/alpkaravil/Lambda/Builds/BetterProfessor/Backend/src/api/professors/students/deadlines/deadlines.helper.ts:65:49\u001b[24m\u001b[39m\n\n{\n  data: {\n    name: \u001b[2m'cool deadline'\u001b[22m\u001b[2m,\u001b[22m\n\u001b[2m\u001b[22m    description: \u001b[2m'deeeeaaadddliiiinnneeee!'\u001b[22m\u001b[2m,\u001b[22m\n\u001b[2m\u001b[22m    due_date: \u001b[91m'2020-09-09'\u001b[39m\u001b[2m,\u001b[22m\n              \u001b[91m~~~~~~~~~~~~\u001b[39m\n\u001b[2m\u001b[22m    student: {\n      connect: {\n        id: \u001b[2m3\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m      }\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m    }\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m  }\u001b[2m\u001b[22m\n\u001b[2m\u001b[22m}\n\nArgument \u001b[1mdue_date\u001b[22m: Got invalid value \u001b[91m'2020-09-09'\u001b[39m on \u001b[1mprisma.createOneDeadline\u001b[22m. Provided \u001b[91mString\u001b[39m, expected \u001b[92mDateTime\u001b[39m.\n\n"
}
```
***
### Response:

+ Status: **0**

+ Body:
```

```
***


# `GET` /api/students/3/deadlines/1

**

### Request:

+ Headers:
    No specific headers needed.

+ Url Params:
    No specific query parameters needed.

+ Body:
    No specific body attributes needed.

***


### Response:

+ Status: **200**

+ Body:
```
{
    "message": "Deadline found",
    "deadline": {
        "id": 1,
        "name": "cool deadline",
        "description": "deeeeaaadddliiiinnneeee!",
        "due_date": "2020-09-09T00:00:00.000Z",
        "studentId": 3
    }
}
```
***
### Response:

+ Status: **404**

+ Body:
```
{
    "message": "Deadline with id 2 not found."
}
```
***


