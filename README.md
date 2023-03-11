<div align="center">

<h1>Admin Analytics API</h1>

Functional Backend implementation of REST api with NodeJS(Express) MongoDB w/ Prisma and Jest Tests.

</div>

<p align="center">🚧 WIP 🚧</p>

> **Note**
> See Front-end project [admin-analytics](https://github.com/biantris/admin-analytics)

### Tools

- [x] [TypeScript](https://www.typescriptlang.org/)
- [x] [Node](https://nodejs.org/en/)
- [x] [ExpressJS](https://expressjs.com/)
- [x] [MongoDB](https://www.mongodb.com/)
- [x] [Prisma](https://www.prisma.io/)
- [x] [Jest](https://jestjs.io/)
- [x] [Supertest](https://github.com/ladjs/supertest)
- [x] [Eslint](https://eslint.org/)
- [x] [Prettier](https://prettier.io/)
- [x] [Fly.io](https://fly.io/) (Deploy)

### Modules

- [x] userModedule

#### APIs

##### User

- [x] userCreate (POST)
- [x] userAuthentication (POST)
- [x] userGetById (GET)
- [x] userGetByEmail (GET)

### Routes

- `open/` open route

##### User

- `api/user` userCreate
- `api/user/auth` userAuthentication
- `api/user/:id` userGetById
- `api/user/email/:email` userGetByEmail

### Auth Flow

- [x] Login
- [x] Validate user token
- [x] Validate isAdmin

### Getting Started

- clone this repo

```sh
# install dependencies
> yarn
# or
> yarn install

# build project
> yarn build

# start project
> yarn start

# open in
http://localhost:8080/open
```

## 🔗 Demo:

🔗 https://admin-analytics-api-2.fly.dev/open
