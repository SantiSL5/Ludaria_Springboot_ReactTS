
# Ludaria_Springboot_ReactTS

# Ludaria

Made by [`Santiago Soler Llin`](https://github.com/SantiSL5)

## Prerequisites

* [npm](https://www.npmjs.com/)
* [docker](https://www.docker.com/)
* [docker-compose](https://docs.docker.com/compose/)

## Starting up the app

1. Clone the repository.

2. Create the following .env file on the corresponding folders of the repo with this variables:

    1  /.env
      * UID=1000
      * GID=1000
      * MYSQL_DATABASE
      * MYSQL_USER
      * MYSQL_PASSWORD
      * MYSQL_ROOT_PASSWORD
      * SECRET
  
    2  /backend/springboot/src/main/resources/application.properties
      * server.port=4000
      * spring.datasource.url=jdbc:mysql://mysql_ludaria:3306/ludaria?allowPublicKeyRetrieval=true&useSSL=false
      * spring.datasource.username
      * spring.datasource.password
      * spring.app.jwtSecret=secreto
      * spring.app.jwtExpirationMs=86400000
      * spring.jpa.generate=false
      * spring.jpa.hibernate.ddl-auto=update
      * spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
      * spring.profiles.active=dev
      * logging.level.org.springframework.security=TRACE
      * spring.devtools.restart.enabled=true
      * spring.devtools.livereload.enabled=true
  
3. Create secret.ts file on /frontend/src folder with this content:

    const secrets = {
        SPRINGBOOT_APP_URL : "http://localhost:4000/api",
    }
  
    export default secrets;
  
4. Go to repo main folder and do 'docker-compose up'

      Following this steps, app is running on [localhost:3000](http://localhost:3000).

## Features

This application have the following modules.

Module | Description
:--- | :---
Home | Main page of the application where you can see a presentation page. In this page you can:<br> <ul><li>See the bestsellers products and click on them to see their details.</li><li>Visualize 4 of our most popular categories of products and click on them to see products from that category.</li></ul> |
Admin | A dashboard page where there are the CRUDs of the application only accesible by an admin user.
Profile | A profile page where you can see your shopping history and your user information.
Login | It allows you to register and login in the application.
Shop | The page that allows you to visualize the products, search products and interact with them: <ul><li>Adding a like to the product.</li><li>Adding the product to your cart.</li></ul> |
Details | In this page you can see the datails of any product of our shop. And is the page where you can interact the most with our products, you can: <ul><li>Adding a like to the product.</li><li>Adding a comment to the product and for sure rating them</li><li>You can delete your comment of the product</li><li>Adding the product to your cart.</li></ul> |
Cart | In this page if you are logged you can see your cart, add quantity of your added products and delete them from the cart. You can also checkout your products to buy them.

## Technologies

### Deploy

The technology used for deploy is [docker](https://www.docker.com/)

  * Docker
  * docker-compose
  * Env files configuration

### Frontend

The technology used for the client is [React](https://es.reactjs.org/) in its 18.3.1 version. 
    
  * Provider-Core structure
  * Consumers-Queries-Api structure
  * Routes
  * Components
      * Reusable Components
  * Authentication
      * Guards
      * JWT Token
  * Hooks
  * Pages
  * Toastr
  * State
  * UseEffect
  * React Hook Forms
  * React Data Table
  * Validation
  * Tailwind CSS
  * Flowbite Component Library
  * Material UI Component Library
  * Responsive

### Backend

The technology used for the server is [SpringBoot](https://spring.io/projects/spring-boot) in its 3.1.5 version.
And with [Java](https://www.java.com/es/) in its 17 version.

  * Models
  * Inheritance on Models, Product: Games, Puzzles Accessories
  * Controllers
  * Services
  * JPA Repositories
  * Custom SQL Queries
  * Custom Requests
  * Custom Resources
  * WebSecurityConfig
  * Custom Requests matchers
  * BlackListToken
  * Authentication JWT
  * Is Admin Permission
  * Is Auth Permission
  * TimestampedModel
  * Relationships
  * JsonManagedReference and JsonBackReference

### Database

Server uses a [MySQL](https://www.mysql.com/) database in its 8.0 version.
