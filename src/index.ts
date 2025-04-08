import { Register } from "my-custom-backend-framework";
import { MyAPI, Users } from "./api";
import { MiddlewareA, MiddlewareB } from "./middleware";

Register.register(MyAPI, Users); // Register the API and ORM classes
Register.registerMiddleware("mymethod", [new MiddlewareA(), new MiddlewareB()]);
