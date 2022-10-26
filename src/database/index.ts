import path = require("path");
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  entities: [ path.join(__dirname, "/../../src/modules/**/entities/*.ts") ],
  migrations: [ path.join(__dirname, "/../../src/database/migrations/*.ts") ],
});

export async function createConnection(host = "database"): Promise<DataSource> {
  await dataSource
    .setOptions({ host })
    .initialize()
    .catch((error) => console.log(error));

  return dataSource;
}

export default dataSource;
