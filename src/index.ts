import "reflect-metadata"
import Koa from 'koa2'
import router from './router/index'
import cors from 'koa2-cors'
import koaStatic from 'koa-static'
import { AppDataSource } from "./data-source"

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))

const app = new Koa();
const port = 9001;

app.use(cors());

// 获取静态资源文件夹
app.use(koaStatic(__dirname + '/assets'));

app.use(router.routes());

app.listen(port, () => {
    console.log('Server is running at http://localhost:' + port);
})