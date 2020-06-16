import nodemailer from 'nodemailer';

async function sendMail(sendInfo) {
	// 邮件发送信息
	 // let sendInfo = {
		//  code:'1234',
		//  expire:'2020-10-15',
		//  email:'805999439@qq.com',
		//  user:'ido'
	 // };
	 // 重置密码的链接
  let url = 'http://www.baidu.com';
	 
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",  // 发件服务器的域名。
    port: 587,
    secure: false, 
    auth: {
      user: '805999439@qq.com', // generated ethereal user
      pass: 'mfjrtndbyalcbbda', // generated ethereal password
    },
  });
 
 let info = await transporter.sendMail({
    from: '"认证邮件" <805999439@qq.com>', // 发件人的地址。
    to: sendInfo.email, // 接收者的地址
    subject: sendInfo.user ? `你好，开发者, ${sendInfo.user}！,《ido-web》注册码`:'《ido-web》注册码', // Subject line
    text: `您的邀请码是${sendInfo.code},邀请码过期时间:${sendInfo.expire}`, // plain text body
    html: `
		<div style="border: 1px solid #dcdcdc;color: #676767;width: 600px; margin: 0 auto; padding-bottom: 50px;position: relative;">
		        <div style="height: 60px; background: #393d49; line-height: 60px; color: #58a36f; font-size: 18px;padding-left: 10px;">IDO-WEB——欢迎来到官方社区</div>
		        <div style="padding: 25px">
		          <div>您好，${sendInfo.user}您好，您的重置链接有效时间30分钟，请在${sendInfo.expire}之前重置您的密码：</div>
		          <a href="${url}" style="padding: 10px 20px; color: #fff; background: #009e94; display: inline-block;margin: 15px 0;">立即重置密码</a>
		          <div style="padding: 5px; background: #f2f2f2;">如果该邮件不是由你本人操作，请勿进行激活！否则你的邮箱将会被他人绑定。</div>
		        </div>
		        <div style="background: #fafafa; color: #b4b4b4;text-align: center; line-height: 45px; height: 45px; position: absolute; left: 0; bottom: 0;width: 100%;">系统邮件，请勿直接回复</div>
		    </div>
	`,
  });

  return "Message sent: %s", info.messageId;
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
 // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export default sendMail;
// main().catch(console.error);