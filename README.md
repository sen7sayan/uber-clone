API Documentation
This document provides the details of the available API endpoints for user management, including user registration, login, and other possible user-related features.

1. User Registration Endpoint
Endpoint: /register
Method: POST
Authentication: None (No authentication required to access this endpoint)
Success Response: 201 (Created) - Includes a token and user data
Error Responses:
400 (Bad Request) - Validation errors or user already exists
Content-Type: application/json
Request Body
The request body must be sent as a JSON object with the following fields:

json

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
Fields:
fullname: An object containing the user's first and last name.
firstname (string): The user's first name (min. 3 characters).
lastname (string): The user's last name (no minimum length restriction).
email (string): The user's email address (must be a valid email format).
password (string): The user's password (min. 6 characters).
Validation Rules
email: Must be a valid email format.
fullname.firstname: Must be at least 3 characters long.
password: Must be at least 6 characters long.
Example Request
bash
curl -X POST http://api.example.com/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }'
Response
Success (201 Created)
If the registration is successful, the response will include the authentication token and user data:

json

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDg4NzAwLWZiYmItNDVhNy05ZmUwLTYyZTUzNmRmNzc0MCIsImlhdCI6MTY2MjI3NTYwMCwiZXhwIjoxNjYyMjgwMjAwfQ.HY5Y5_kZ9I2hL7ti5Qg4G2XoyhfzQqA5ZKDUSm_b98I",
  "user": {
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
  }
}
token (string): A JWT token used for authentication in subsequent requests.
user (object): The user's data:
firstname (string): The user's first name.
lastname (string): The user's last name.
email (string): The user's email address.
Error Responses
400 Bad Request - Validation Errors
json

{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
400 Bad Request - User Already Exists
json

{
  "message": "User already exists"
}