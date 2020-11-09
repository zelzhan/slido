# Slido

## Swagger description of endpoints are here:

http://206.189.59.245/api

You can play around with the endpoint and test the functionality

## Why this technology?

### Nest.js

Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications, built with and fully supports TypeScript.
Under the hood it uses HTTP frameworks such as Express and Fastify.

In particular Nest allows to provide abstraction above the Node.js frameworks. It forces to write clean architecture far from the beginning of every application. 
Using the architecture that Nest provides, it is easy to easy to "break" the application into microservices. 

### nx/nrwl

There are a lot of pros and cons of using monorepo pattern. But the main advantages are:

* Share and reuse code easier
* Visibility to manage dependencies (e.g., if you make a change, what else will be impacted?).
* You want to make atomic changes (e.g., one operation to make a change across multiple projects).
* You want teams to collaborate more.
* You want to make large-scale changes

So, why particularly nx/nrwl? It is not only tool, but also the philosphy. It incapsulates the functionality to the libraries, which allows us to reuse them elsewhere (not only in the same application).
Also it is perfect fit for the fullstack applications like Angular and Nestjs, because both use similar architecture and allows us to reuse modules in both frontend and backend. 


### Typescript

Explicit type declarations and easier to refactor. 

### Mongodb with mongoose

Skipping the fact that Mongo is horizontally scalable NoSQL database, it is perfect for the projects where requirements are changing fast. Therefore it might be perfect choice for startups, if there are not many relationships between tables. 

### Jest

One of the advantages of Jest is speed. Jest runs tests in parallel which makes running the whole test suite so much faster. Also, you've got the possibility to use “--watch” and only run the tests affected by your changes in the editor.

### Swagger

Allows engineers to get self-generated documentation for different platforms. Enables to write API documentation, design and describe new APIs, and edit the existing ones. 

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/nest:lib my-lib` to generate a library.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm test` to execute all tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.