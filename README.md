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

## Step-by-Step Guides

1. Clone the repository
    ```bash
    $ git clone https://github.com/panida-pov/to-do-list.git
    ```

2. Set up and run
   #### 2.1 Run server and database on Docker
      ```bash
      $ make up
      
      # or use `docker-compose` command
      $ docker-compose up -d
      ```
   #### 2.2 Run server on local and database on Docker
    * Install dependencies on local machine
    ```bash
    $ cd server
    $ npm install
    ``` 
    * Create .env file and add hostname/port for local server
    ```env
    # /to-do-list/server/.env
    HOST=localhost
    PORT=23306
    ```
    * Set up and run database container
    ```bash
    $ make up
    
    # or use `docker-compose` command
    $ docker-compose up -d
    ```
    * Run local server
    ```bash
    $ cd server
    # watch mode
    $ npm run start:dev
    ``` 
  
4. Run migrations on local machine
    ```bash
    $ make migration-run
  
    # or use `docker-compose` command
    $ docker-compose exec -it to-do-server npm run migration:run
    ```

# API Specification
See **Swagger UI** below
* For docker server: http://localhost:20080/api-docs
* For local server: http://localhost:3000/api-docs

# Contributors
<a href="https://github.com/panida-pov/to-do-list/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=panida-pov/to-do-list" />
</a>
