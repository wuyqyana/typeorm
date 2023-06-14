import Router from 'koa-router'
import { login } from '../controller/User'
import bodyParser from 'koa-bodyparser'

const user = new Router();
user.use(bodyParser())

user.post('/login', login)

export default user