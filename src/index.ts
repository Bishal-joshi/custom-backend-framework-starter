import { Register } from "my-custom-backend-framework";
import { MyAPI, Users } from "./api";
import { MiddlewareA, MiddlewareB } from "./middleware";

Register.register(MyAPI);
Register.register(Users);
Register.registerMiddleware("mymethod", [new MiddlewareA(), new MiddlewareB()]);
