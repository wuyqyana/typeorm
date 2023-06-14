
const jwt = require('jsonwebtoken')
import { User } from "../entity/User"
import { AppDataSource } from "../data-source"

const userRepository =  AppDataSource.getRepository(User)

export const login = async (ctx) => {
	const account = ctx.request.body.account;
	const pwd = ctx.request.body.pwd;
	const result = await userRepository.findOneBy({
    account
	})
	if (result) {
		// 能找到对应的账号
		if (result.pwd == pwd) {
			// 账号密码正确，返回token
			ctx.body = {
				token: result.token,
				msg: '登录成功',
				account
			};
		} else {
			// 密码错误
			ctx.body = {
				msg: '密码错误',
				account
			};
		}
	} else {
		// 找不到对应的账号，直接插入一个
		const token = jwt.sign({ account, pwd }, 'secret', { expiresIn: 3600 })
		const res = await userRepository.save({account, pwd, token})
		ctx.body = {
			msg: '注册并登录成功',
			...res
		}
	}
}


