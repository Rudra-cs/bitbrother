# BitBrother

### This webapp stores user's user details of people which is stored in the database(mongodb).

## Table Of Contents

- [Project Setup](#project-setup)
- [Project Structure](#project-structure)
  - [Backend](#backend-server)
- [Bussiness Logic](#bussiness-logic)
  - [User](#user)
- [Api Documentation](#api-documentation)
  - [Users](#users)

## Project Setup

---

### Requirements

- Node.js version 8.x or 10.x
- Recent npm(node package manager)

### To run the backend service:

```
cd server
npm install
node app
```

### Database setup:

Then to connect the db to the server follow the steps:-

1. make a file name .env
2. in that file make some changes as

```
SECRET_KEY = <secret key>
MONGO_URI = <mongodb_uri>
```

To get the uri go to the altas then to connect then choose nodejs backend then copy the uri and dont forget to give the db name and your password inside the uri

## Project Structure

---

### Backend (Server) : -

```sh
src
├── controller          # functions to connect routes to db operations
├── config              # db connection and configuration
├── midlleware          # to access req , res objects
├── models              # db models
└── routes              # express middlewares (route wise)
```

## Bussiness Logic

---

### User

1. create users this will create a new user with username and password

## API Documentation

---

## `users`

1. `GET api/user/getUser`

   get all the users from the db

2. `POST api/user/createUser`

   creates a user with specified username and a unique id

3. `PUT api/user/updateUser/{id}`

   update a user with a given id

4. `DELETE api/user/deleteUser/{id}`

   update a user with a given id
