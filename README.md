<div align="center">

<h1>Admin Analytics API</h1>

Functional Backend implementation of REST api with NodeJS(Express) MongoDB w/ Prisma and Jest Tests.

<a href="https://github.com/biantris/restris/actions">
  <img alt="Tests Passing" src="https://github.com/biantris/restris/actions/workflows/test.yml/badge.svg" />
</a>

</div>

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

### Routes

- `open/` open route

##### User

- `api/` userCreate
- `api/auth` userAuthentication
- `api/:id` userGetById

### Auth Flow

- [x] Login
- [x] Validate user token
- [x] Logout

### Getting Started

- clone this repo

```sh
# install dependencies
> yarn
# or
> yarn install

# copy .env file
> cp .env.example .env

# start project
> yarn start

# open in
http://localhost:8080/open
```

### 🔗 Demo:

🔗 https://admin-analytics-api.fly.dev
