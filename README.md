# Book Store API


   <p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest



## Features

- Register and  list  book
-  Order book and cancel order 
-  Get list of user bought books
-  Change status of order pending to delivered 
- Get all pending and cancel order list
-  When new customer is created, they get 100 point.
- Customers can buy books by only points
- Register and login  user
- User list  and get by Id
- Role-based authorization not implempented users (Admin and Custmor role}
-  API documentations by swagger






## Installation
- For environment variables   use  ".env.example" file
```bash
$ npm install
$ npx prisma db  push
$ npx prisma generate
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```





   
   
   
   
   
   
   
