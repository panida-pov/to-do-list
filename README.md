# To-Do List Backend
***To-Do List*** is a simple backend service providing API for task management.  
It is built with NestJS, TypeORM, and MySQL.

## Live Demo
https://to-do-service-qkwa.onrender.com/api-docs

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

## Step-by-Step Guides

1. Clone the repository
    ```bash
    $ git clone https://github.com/panida-pov/to-do-list.git
    ```

2. Set up and run on Docker
      ```bash
      $ make up
      
      # or use `docker-compose` command
      $ docker-compose up -d
      ```
3. Run migrations
      ```bash
      $ make migration-run
  
      # or use `docker-compose` command
      $ docker-compose exec -it to-do-server npm run migration:run
      ```
  
**NOTE:**
To configure the database connection, create `.env` file and set your own environment variables.
```bash
  # ./server/.env

  DB_HOST=
  DB_PORT=
  DB_USER=
  DB_PASSWORD=
  DB_DBNAME=
```


# API Specification
See **Swagger UI** below <br />
http://localhost:20080/api-docs

# Contributors
<a href="https://github.com/panida-pov/to-do-list/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=panida-pov/to-do-list" />
</a>
