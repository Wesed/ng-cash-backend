import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Account } from "./entity/Account"
import { Transaction } from "./entity/Transaction"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "ec2-52-1-17-228.compute-1.amazonaws.com",
    port: 5432,
    username: "rfrxjpxlnulzth",
    password:"b361f646142d716c41a0c7240ee1f60a0444402559217a71a83014cdbbd814f3",
    database: "d10sm9hudre1a6",
    synchronize: false,
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
