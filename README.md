# API for Escola+

This project was a simple api with [ExpressJS](https://expressjs.com/pt-br/), [KnexJS](http://knexjs.org/) with [SQLite](https://www.sqlite.org/index.html/).

## `yarn install`
## Available Scripts

In the project directory, you can run:

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

### TODO:
- [ ] Create route for delete user.
- [ ] Create route for lessons.
- [ ] Leave 100% functional.
