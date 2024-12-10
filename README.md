# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): User's first name (minimum 3 characters).
  - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token


## `/users/login` Endpoint

### Description

Authenticates a user by validating their email and password. If the credentials are correct, a JWT token is returned and set as a cookie.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Request

```json
{
  "email": "user@example.com",
  "password": "password123"
}

### Example Response

- `user` (object):  
  - `_id` (string): Unique identifier for the user.  
  - `email` (string): User's email address (must be a valid email).  
  - `fullname` (object):  
    - `firstname` (string): User's first name (minimum 3 characters).  
    - `lastname` (string): User's last name (minimum 3 characters).  
- `token` (string): JWT Token


```json
{
  "token": "jwt.token.here",
  "user": {
    "_id": "63f7a9f3f5c83500123abcde",
    "email": "user@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    }
  }
}


