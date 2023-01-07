import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import authRouter from './auth/authRouter.js'
import siteRouter from './siteRouter.js'

const app = express()

app.use('/client', express.static('../client'))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/auth', authRouter)
app.use('/', siteRouter)

try {
	mongoose.set('strictQuery', false)
	await mongoose.connect('mongodb+srv://NKStudio_IT:20401021328NK@cluster0.iv5fy2u.mongodb.net/?retryWrites=true', {
		dbName: 'sdaem',
		autoIndex: false,
	});
	app.listen(3000, () => console.log(`http://localhost:3000/`))
} catch (e) {
	console.log(e)
}

































