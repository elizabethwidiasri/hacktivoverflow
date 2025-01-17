baseURL= http://localhost:3000

--------USER--------

1. register

endpoint: {baseURL}/users/register
method: POST

headers: none 
body: 
  username: type string, required
  email: type string, required
  password: type string, required

success response:
  status 201
  content example
{
    "message": "register success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRlZTM2Zjg3MTNjNTc1Nzk2Y2U2YSIsImVtYWlsIjoibmF0aEBtYWlsLmNvbSIsImlhdCI6MTU3NDIzNTcwMn0.VjhhXghJzLhzoPkNZ1PH7yZxzZR7A_vqG6zDXyE9FJw",
    "user": {
        "_id": "5dd4ee36f8713c575796ce6a",
        "username": "nath",
        "email": "nath@mail.com",
        "password": "$2b$10$RqNf8sQDXTqDylEzewt5zOeWti0.iUgSDe3mfq2IDtk3YNwmMhID2",
        "createdAt": "2019-11-20T07:41:42.033Z",
        "updatedAt": "2019-11-20T07:41:42.033Z"
    }
}

2. login

endpoint: {baseURL}/users/login
method: POST

headers: none
body: 
  email: type string, required
  password: type string, required

success response:
  status 200
  content example
content example

{
    "message": "login success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDRlZTM2Zjg3MTNjNTc1Nzk2Y2U2YSIsImVtYWlsIjoibmF0aEBtYWlsLmNvbSIsImlhdCI6MTU3NDIzNTg0MH0.dVEqPLqxkgKqG8kwreLl76HkoS0bZe2K0CPYtCIBOPs"
}

--------QUESTION [CRUD]--------

1. create
endpoint: {baseURL}/questions
method: POST

headers: token
body: 
  title: type string, required
  description: type string, required

success response:
  status 200
  content example
content example

{
    "message": "Successfuly creating your question",
    "question": {
        "upVotes": [],
        "downVotes": [],
        "answers": [],
        "_id": "5dd50c5f5b2f217ddc182642",
        "userId": "5dd4ee36f8713c575796ce6a",
        "title": "this is the title of my first question",
        "description": "this is the description of my first question",
        "createdAt": "2019-11-20T09:50:23.907Z",
        "updatedAt": "2019-11-20T09:50:23.907Z"
    }
}

2. read

findAll 
endpoint: {baseURL}/questions
method: GET

headers: none
body: none

success response:
  status 200
  content example
content example
[
    {
        "upVotes": [],
        "downVotes": [],
        "answers": [],
        "_id": "5dd50c5f5b2f217ddc182642",
        "userId": "5dd4ee36f8713c575796ce6a",
        "title": "this is the title of my first question",
        "description": "this is the description of my first question",
        "createdAt": "2019-11-20T09:50:23.907Z",
        "updatedAt": "2019-11-20T09:50:23.907Z"
    },
    {
        "upVotes": [],
        "downVotes": [],
        "answers": [],
        "_id": "5dd50f44350ae97f97641e7e",
        "userId": "5dd4ee36f8713c575796ce6a",
        "title": "this is the title of my second question",
        "description": "this is the description of my second question",
        "createdAt": "2019-11-20T10:02:44.607Z",
        "updatedAt": "2019-11-20T10:02:44.607Z"
    }
]

findOne
endpoint: {baseURL}/questions/:id
method: GET

headers: token
body: none

success response:
  status 200
  content example
content example
[
    {
        "upVotes": [],
        "downVotes": [],
        "answers": [],
        "_id": "5dd50c5f5b2f217ddc182642",
        "userId": "5dd4ee36f8713c575796ce6a",
        "title": "this is the title of my first question",
        "description": "this is the description of my first question",
        "createdAt": "2019-11-20T09:50:23.907Z",
        "updatedAt": "2019-11-20T09:50:23.907Z"
    }
]

3. updated
endpoint: {baseURL}/questions
method: PATCH

headers: token
body: 
  title: type string, required
  description: type string, required

success response:
  status 200
  content example
content example
{
    "upVotes": [],
    "downVotes": [],
    "answers": [],
    "_id": "5dd50c5f5b2f217ddc182642",
    "userId": "5dd4ee36f8713c575796ce6a",
    "title": "first title evur",
    "description": "tryna update things",
    "createdAt": "2019-11-20T09:50:23.907Z",
    "updatedAt": "2019-11-20T10:37:40.640Z"
}

4. delete
endpoint: {baseURL}//question
method: DELETE

headers: token
body: none

success response:
  status 200
  content example
content example
{
    "upVotes": [],
    "downVotes": [],
    "answers": [],
    "_id": "5dd51813e6d9ab11b268439c",
    "userId": "5dd4ee36f8713c575796ce6a",
    "title": "3rd",
    "description": "my 3rd question",
    "createdAt": "2019-11-20T10:40:19.742Z",
    "updatedAt": "2019-11-20T10:40:19.742Z"
}

--------ANSWER [CRU]--------

1. create
endpoint: {baseURL}/answers
method: POST

headers: token
body: 
  description: type string, required

success response:
  status 200
  content example
content example
{
    "upVotes": [],
    "downVotes": [],
    "_id": "5dd558a33183be1dc1e652ba",
    "userId": "5dd4ee36f8713c575796ce6a",
    "questionId": "5dd51d50acb37d1894e4ea2f",
    "description": "this is the answer",
    "createdAt": "2019-11-20T15:15:47.220Z",
    "updatedAt": "2019-11-20T15:15:47.220Z"
}

2. read

findAll

endpoint: {baseURL}/answers
method: GET

headers: none
body: none

success response:
  status 200
  content example
[
    {
        "upVotes": [],
        "downVotes": [],
        "_id": "5dd558a33183be1dc1e652ba",
        "userId": "5dd4ee36f8713c575796ce6a",
        "questionId": "5dd51d50acb37d1894e4ea2f",
        "description": "this is the answer",
        "createdAt": "2019-11-20T15:15:47.220Z",
        "updatedAt": "2019-11-20T15:15:47.220Z"
    },
    {
        "upVotes": [],
        "downVotes": [],
        "_id": "5dd55a793183be1dc1e652bc",
        "userId": "5dd4ee36f8713c575796ce6a",
        "questionId": "5dd51d50acb37d1894e4ea2f",
        "description": "this is another answer",
        "createdAt": "2019-11-20T15:23:37.958Z",
        "updatedAt": "2019-11-20T15:23:37.958Z"
    },
    {
        "upVotes": [],
        "downVotes": [],
        "_id": "5dd55c9a708f2720d43f0753",
        "userId": "5dd4ee36f8713c575796ce6a",
        "questionId": "5dd51d50acb37d1894e4ea2f",
        "description": "this is another answer COBA",
        "createdAt": "2019-11-20T15:32:42.466Z",
        "updatedAt": "2019-11-20T15:32:42.466Z"
    }
]

findOne
endpoint: {baseURL}/answers
method: GET

headers: token
body: none

success response:
  status 200
  content example

{
        "upVotes": [],
        "downVotes": [],
        "_id": "5dd558a33183be1dc1e652ba",
        "userId": "5dd4ee36f8713c575796ce6a",
        "questionId": "5dd51d50acb37d1894e4ea2f",
        "description": "this is the answer",
        "createdAt": "2019-11-20T15:15:47.220Z",
        "updatedAt": "2019-11-20T15:15:47.220Z"
    }


3. update
endpoint: {baseURL}/answers
method: PATCH

headers: token
body: 
  description: type string, required

success response:
  status 200
  content example
content example
{
        "upVotes": [],
        "downVotes": [],
        "_id": "5dd558a33183be1dc1e652ba",
        "userId": "5dd4ee36f8713c575796ce6a",
        "questionId": "5dd51d50acb37d1894e4ea2f",
        "description": "updated is the answer",
        "createdAt": "2019-11-20T15:15:47.220Z",
        "updatedAt": "2019-11-20T15:15:47.220Z"
    }
