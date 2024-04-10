# To-Do List Backend
***To-Do List*** is a simple backend application designed for task management.  
It is built with NestJS, TypeORM, and MySQL.


# Getting Started

## Prerequisites
* NPM
  ```
  $ npm install npm@latest -g
  ```
* Docker Desktop
    * For Windows OS: https://docs.docker.com/desktop/install/windows-install/
    * For Mac OS: https://docs.docker.com/desktop/install/mac-install/
    * For Linux OS: https://docs.docker.com/desktop/install/linux-install/

## Installation

1. Clone the repository
    ```bash
    $ git clone https://github.com/panida-pov/to-do-list.git
    ```

2. Set up server and database
  * #### Using docker containers for both server and database 
    ```bash
    $ make up
    
    # or use `docker-compose` command
    $ docker-compose up -d
    ```
  * #### Using local server and database container
    Install dependencies on local machine
    ```bash
    $ cd server
    $ npm install
    ```
    Create .env file and add hostname/port for local server
    ```env
    # /to-do-list/server/.env
    HOST=localhost
    PORT=23306
    ```
    Set up docker container for database
    ```bash
    $ make up
    
    # or use `docker-compose` command
    $ docker-compose up -d
    ```
  
3. Run migrations on local machine
    ```bash
    $ make migration-run
  
    # or use `docker-compose` command
    $ docker-compose exec -it to-do-server npm run migration:run
    ```
  
## Running the app
  * ### Running on server container
    Log in to the `to-do-server` container and run
    ```bash
    # watch mode
    $ npm run start:dev
    ```
  * ### Running on local server
    ```bash
    $ cd server
    # watch mode
    $ npm run start:dev
    ```


# API Specification

#### /tasks
* `GET` : Get all tasks
* `POST` : Create a new task
#### /tasks/:id
* `GET` : Get a task
* `PATCH` : Update a task
* `DELETE` : Delete a task
#### /categories
* `GET` : Get all categories
* `POST` : Create a new category
#### /categories/:id
* `PATCH` : Update a category
* `DELETE` : Delete a category

\
&nbsp;
For more information on API, see **Swagger UI** below
* For docker server: `http://localhost:3000/api-docs`
* For local server: `http://localhost:20080/api-docs`

# Contributors
<a href="https://github.com/panida-pov/to-do-list/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=panida-pov/to-do-list" />
</a>
