import { Middleware } from "my-custom-backend-framework";

export class MiddlewareA implements Middleware {
  handle(request, response, next) {
    console.log("Middleware A: Passing the request...");
    next(); // Continue to next middleware
  }
}
export class MiddlewareB implements Middleware {
  handle(request, response, next) {
    console.log("Middleware B: Modifying the request...");
    request.customProperty = "Custom Value"; // Modify the request
    next(); // Continue to next middleware
  }
}
