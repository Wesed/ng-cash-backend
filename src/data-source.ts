import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Account } from "./entity/Account"
import { Transaction } from "./entity/Transaction"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "root",
    database: "ng-cash",
    synchronize: true,
    logging: false,
    entities: [User, Account, Transaction],
    migrations: [],
    subscribers: [],
})


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
