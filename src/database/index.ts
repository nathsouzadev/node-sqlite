import { DataSource, DataSourceOptions } from "typeorm"
import { User } from "../entities/User"
require('dotenv').config()

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.URL_DATABASE,
    // type: "sqlite",
    // database: "./src/database/db.sqlite",
    entities: [
        User
    ],
    migrations: [
        "./src/database/migrations/*.ts"
    ]
})  

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source inicializado!")
    })
    .catch((error) => {
        console.error(error)
    })
