import { Post } from "my-custom-backend-framework";
import { Request, Response } from "express";

export class MyAPI {
  @Post("/hello-world")
  mymethod(req: Request, res: Response, next: NewableFunction) {
    res.send("Hello World!");
  }
}
