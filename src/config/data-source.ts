import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "b8oqc3pl9qz5gpfnds4t-mysql.services.clever-cloud.com",
    port: 3306,
    username: "u1bmp1j2rshootf1",
    password: "ZC8ZQYsEOmIOgmzBTrwA",
    database: "b8oqc3pl9qz5gpfnds4t",
    entities: ["api/comentarios.ts"], // dps colocar src/models/*.ts
    migrations: ["src/migrations/**/*.ts"],
    synchronize: true,
    logging: false,
});