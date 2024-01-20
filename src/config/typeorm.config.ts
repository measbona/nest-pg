import { DataSource, DataSourceOptions } from "typeorm"

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres", // change this to your postgresql username
  password: "postgres", // change this to your postgresql password
  database: "nest-pg", // change this to your postgresql database
  entities: ["dist/**/*.entity{.ts,.js}"], // NOTE: Entity might be in a different folder
  migrations: ["dist/migrations/*.js"],
  synchronize: true,
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource
