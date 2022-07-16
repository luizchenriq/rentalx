import { DataSource } from "typeorm";

import { Category } from "../modules/cars/model/Category";
import { CreateCategories1657902009418 } from "./migrations/1657902009418-CreateCategories";

const dataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  entities: [Category],
  migrations: [CreateCategories1657902009418],
});

export async function createConnection(host = "database"): Promise<DataSource> {
  await dataSource
    .setOptions({ host })
    .initialize()
    .catch((error) => console.log(error));

  return dataSource;
}

export default dataSource;
