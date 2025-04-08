import {
  Register,
  Column,
  Entity,
  Middleware,
  MyORM,
  Post,
} from "my-custom-backend-framework";

@Entity("users")
export class Users {
  @Column("id")
  id: number;

  @Column("name")
  name: string;

  @Column("email")
  email: string;
}

@Entity("posts")
export class Posts {
  @Column("id")
  id: number;

  @Column("title")
  title: string;

  @Column("content")
  content: string;
}
