import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "typeorm",
    // 可确保每次运行应用程序时实体都将与数据库同步。
    synchronize: true,
    logging: false,
    // 所有需要在连接中使用的每个实体都必须加到这里
    // 之后当我们创建更多实体时，我们可以设置整个目录
    entities: [User],
    // entities: [__dirname + "/entity/*.ts"],
    migrations: [],
    subscribers: [],
})
