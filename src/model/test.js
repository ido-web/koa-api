import mongoose from '../config/DBHelper.js'

const Schema = mongoose.Schema

const TestSchema = new Schema({
	'name': {
		type:'String'
	},
	'age':{
		type:'Number'
	},
	'email':{
		type:'String'
	}
})

const testModel = mongoose.model('users',TestSchema);

export default testModel;