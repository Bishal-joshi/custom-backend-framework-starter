import { Post } from "my-custom-backend-framework";
import { Request, Response } from "express";
import myORM from "./orm";

export class MyAPI {
  @Post("/hello-world")
  mymethod(req: Request, res: Response, next: NewableFunction) {
    res.send("Hello World!");
  }
}

/**
 * For demonstrating how to use the Custom ORM with a custom backend framework.
 */
export class Users {
  @Post("/insertUser")
  async insertUser(req: Request, res: Response, next: NewableFunction) {
    const result = await myORM
      .insert("users")
      .set({
        id: 1,
        name: "John Doe",
        email: "john@email.com",
      })
      .execute();
    res.send("Inserted");
  }

  @Post("/getUsers")
  async getUsers(req: Request, res: Response, next: NewableFunction) {
    const result = await myORM
      .select("id,name")
      .from("users")
      .eq("id", 1)
      .execute();
    res.send(result);
  }

  @Post("/updateUsers")
  async updateUsers(req: Request, res: Response, next: NewableFunction) {
    const result = await myORM
      .update("users")
      .set({ name: "Jane Doe" })
      .where("name", 1)
      .execute();
    res.send("updated");
  }
}
