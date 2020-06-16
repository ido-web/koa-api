import sendMail from '../config/MailConfig.js'
import moment from 'moment'

class LoginController {
	constructor() {

	}
	async forgetPassword(ctx) {
		// post请求方式获取参数
		const {
			body
		} = ctx.request;
		try {
			let res = await sendMail({
				code: '1234',
				expire: moment().add(30,'minutes').format('YYYY-MM-DD HH:mm:ss'),
				email: body.email,
				user: 'ido'
			})
			ctx.body = {
				code:200,
				data:res,
				msg:'邮件发送成功'
			}
		} catch (e) {
			console.log(e)
			//TODO handle the exception
		}
	}
}

export default new LoginController()
