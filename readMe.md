Steps to setup the backend framework

1. Clone the repo
2. Install the required packages

```
npm i
```

To start the backend framework

```
npm start
```

To generate the migration

```
npx generate-migration --name=migrationName
```

To apply the migration

```
npx run-migration
```

# About Custom Backend Framework

This framework utilizes the `my-custom-backend-framework` npm package, which is freely available on the npm registry.

It provides various methods, decorators, and utilities that enhance its functionality. Built as a wrapper around Express.js, this framework leverages Express.js for routing and middleware. Additionally, it includes support for a custom ORM designed for PostgreSQL. The database connection is managed using the `pg` library, which creates and supplies a connection pool.
