# AXA Full Stack Assignment

This full stack monorepo shows a React frontend view (with a hardcoded login user) allowing you to enter your details to get a life insurance quote. When you switch to the '**My Insurance**' tab, you can see previous quotes and the logged in users' Contracts. This data is fetched from a Node.js backend interacting with a Postgres database.

When you get a new quote from the '**Get a Quote**' view, the added quote can be viewed from '**My Insurance**'.

The frontend look and flow is copied from [https://www.axa.ie/car-insurance/quote/your-details/](https://www.axa.ie/car-insurance/quote/your-details/).

# Startup

Please install [**Docker Desktop**](https://www.docker.com/products/docker-desktop) to run this full stack app locally:

    docker-compose up

This will run alpine node images for the Next.js frontend and Node.js backend, as well as a postgres image from Docker Hub. Node modules will be installed and a postgres data volume will be created when this compose file is started.

The app will be ready to interact with when the following is output:

    insurance-app-frontend-1  | event - compiled successfully

If you need to reset the app data, you can run the following to stop and remove the containers and delete the postgres data:

    docker-compose down && rm -rf backend/pg-data

# Stack Overview

* The frontend is written in **React** with **TypeScript**, using the [**Next.js**](https://nextjs.org/) framework (which allows for file-system based routing and SSR, among many other great features). SCSS Modules are used for CSS.

* The backend is written in **TypeScript** with **Node.js** using the [**Express**](https://expressjs.com/) framework.

* The **Postgres** database image is served from [**Docker Hub**](https://hub.docker.com/_/postgres). Startup SQL scripts are located in `./backend/sql`. See [**create_tables.sql**](./backend/sql/create_tables.sql) for the table structures, and [**fill_tables.sql**](./backend/sql/fill_tables.sql) for the starting data.

* [**Docker**](https://www.docker.com/) is used to simplify local development. Please see the [**docker-compose**](./docker-compose.yml) file for more in-depth configuration details.

# Limitations

* Since time was limited, comprehensive design documents were not made in order to spend more time programming and covering other technical parts of the assignment. Ideally, design documents would have been produced to comprehensively design the database and select technologies according to client and business requirements, considering both current and potential future needs. Of course, this would require consulting with teammates, clients, and stakeholders, something not possible over a weekend.

* Designing a user login flow and authentication was expected to take a lot of time, so the app frontend operates around a hardcoded logged in user. SQL queries are user-specific, but authentication (e.g. using OAuth 2.0) is not implemented.

* Validation is done quite quickly only in the frontend, and not comprehensively. Security, authentication, and validation are things that should not be taken lightly, and must always be thoughtfully implemented for production apps. However, doing it right takes time, so I chose to set these things aside this weekend in favour of focusing on other aspects of the app, such as the frontend views and reading/writing operations.
