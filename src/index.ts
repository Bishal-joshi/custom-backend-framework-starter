import { Register } from "my-custom-backend-framework";
import { MyAPI } from "./api";
import { MiddlewareA, MiddlewareB } from "./middleware";

Register.register(MyAPI);
Register.registerMiddleware("mymethod", [new MiddlewareA(), new MiddlewareB()]);
