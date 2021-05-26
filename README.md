# API for Escola+

This project was a simple api with [ExpressJS](https://expressjs.com/pt-br/), [KnexJS](http://knexjs.org/) with [SQLite](https://www.sqlite.org/index.html/).

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install all dependencies.
### `yarn knex migrate:latest`

Runs the migration and create sqlite file.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3333](http://localhost:3333) to view it in the browser.

### Using exemples

| URL            | Method | Info               |
|----------------|--------|--------------------|
| /api/users     | POST   | Create an user.    |
| /api/users     | GET    | Show all users.    |
| /api/users/:id | GET    | Show user with id. |
| /api/users/:id | DELETE | Delete user with id. |
| /api/users/:id | PATCH  | Update user with id. |

# use postman or insomnia
### TODO:
- [x] Create routes for delete and update user.
- [ ] Create router for lessons.
- [ ] Leave 100% functional.
