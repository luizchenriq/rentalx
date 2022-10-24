import { DataSource } from "typeorm";

//import { Category } from "../modules/cars/entities/Category";
//import { CreateCategories1657902009418 } from "./migrations/1657902009418-CreateCategories";
//import { CreateSpecifications1666218666715 } from "./migrations/1666218666715-CreateSpecifications";

const dataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  //entities: [Category],
  entities: [
    __dirname + '/../../src/modules/**/entities/*.ts'
  ],
  //migrations: [CreateCategories1657902009418, CreateSpecifications1666218666715],
  migrations: [
    __dirname + '/../../src/database/migrations/*.ts',
  ],
});

export async function createConnection(host = "database"): Promise<DataSource> {
  await dataSource
    .setOptions({ host })
    .initialize()
    .catch((error) => console.log(error));

  return dataSource;
}

export default dataSource;
