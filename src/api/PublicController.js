const svgCaptcha = require('svg-captcha');

class PublicController {
	constructor() {}
	// 获取验证码。
	async getCaptcha(ctx) {
		const width = ctx.query.width;
		const height = ctx.query.height;
		const newCaptcha = svgCaptcha.create({
			size: 4, // 验证码长度
			width: width?width:160,
			height: height?height:60,
			fontSize: 50,
			ignoreChars: '0oO1ilI', // 验证码字符中排除 0o1i
			// noise: 2, // 干扰线条的数量
			noise:Math.floor(Math.random() * 5),  // 随机最大4条线
			color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
			background: '#eee' // 验证码图片背景颜色
		})
		ctx.body = {
			code: 200,
			data: newCaptcha.data,
		}
	}
}

export default new PublicController()
