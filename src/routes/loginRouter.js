import Router from 'koa-router'
import LoginController from '../api/LoginController'

const router = new Router()

router.post('/forgetPassword', LoginController.forgetPassword)

export default router