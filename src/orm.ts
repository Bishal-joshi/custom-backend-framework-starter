import { MyORM } from "my-custom-backend-framework";
import { Pool } from "pg";
import { Posts, Users } from "./model";

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "framework",
  password: "mysecretpassword",
  database: "framework_db",
});

const myORM = new MyORM(pool, [Users, Posts]);
export default myORM;
