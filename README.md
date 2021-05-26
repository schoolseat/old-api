# API Escola+
🇺🇸
This project is a simple api that uses [ExpressJS](https://expressjs.com/pt-br/), [KnexJS](http://knexjs.org/) and [SQLite](https://www.sqlite.org/index.html/).

## Install and run

In the project directory, you may run:

To install all dependencies.

### `yarn install`

The migration and create sqlite file.

### `yarn knex migrate:latest`

The app in the development mode.

### `yarn start`

Open [http://localhost:3333](http://localhost:3333) to view it in your browser.


# You may use postman or insomnia

### Useful exemples

| URL            | Method | Info               |
|----------------|--------|--------------------|
| /api/users     | POST   | Create an user.    |
| /api/users     | GET    | Show all users.    |
| /api/users/:id | GET    | Show user by id. |
| /api/users/:id | DELETE | Delete user by id. |
| /api/users/:id | PATCH  | Update user by id. |

### TODO:
- [x] Create routes for delete and update user.
- [ ] Create router for lessons.
- [ ] Make it 100% functional.

🇧🇷

Esse projeto é uma Api que usa [ExpressJS](https://expressjs.com/pt-br/), [KnexJS](http://knexjs.org/) e [SQLite](https://www.sqlite.org/index.html/).

## Instalação e execução

No diretorio do projeto você pode:

Para instalar as dependencias execute:

### `yarn install`

para a migração e criação do SQLite execute:

### `yarn knex migrate:latest`

E por ultimo você pode ligar a Api por meio do comando:

### `yarn start`

Abra [http://localhost:3333](http://localhost:3333) no seu navegador para visualizar a API.


# You may use postman or insomnia

### Useful exemples

| URL            | Method | Info               |
|----------------|--------|--------------------|
| /api/users     | POST   | Cria um usuario.    |
| /api/users     | GET    | Mostra os usuarios.    |
| /api/users/:id | GET    | Mostra um usuario pelo id. |
| /api/users/:id | DELETE | Deleta um usuario pelo id. |
| /api/users/:id | PATCH  | Atualiza um usuario pelo id. |

### TODO:
- [x] Create routes for delete and update user.
- [ ] Create router for lessons.
- [ ] Make it 100% functional.

## License
[MIT](https://choosealicense.com/licenses/mit/)