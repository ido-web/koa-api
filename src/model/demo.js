import User from './test.js'

// 增
const user = {
	name:'ido-ui',
	age:'18',
	email:'8775@qq.com'
}

const insertMethod = async () => {
	const data = new User(user)
	const result = await data.save()
	console.log(result)
}


// 查
const findMethod = async () => {
	const result = await User.find()
	console.log(result)
}

// 改
const updateMethod = async () => {
	const result = await User.updateOne({name:'ido-ui'}, {email:'8@qq.com'})
	console.log(result)
}

// 删
const deleteMethod = async () => {
	const result = await User.deleteOne({name:'ido-ui'})
	console.log(result)
}



