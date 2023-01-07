import User from '../models/User.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt'
class authController {
	async registration(req, res) {
		try {
			const errorsValidation = validationResult(req)
			if (!errorsValidation.isEmpty()) {
				return res.status(400).json({ message: 'Ошибки при регистрации', errorsValidation })
			}
			const { login, email, password } = req.body
			const candidate = await User.findOne({ email })
			if (candidate) {
				return res.status(400).json({ message: `<p>Такой пользователь есть, нажми чтобы <a href="/auth/login">войти</a> </p>` })
			}
			const hashPass = bcrypt.hashSync(password, 7)
			const user = new User({ login, email, password: hashPass })
			await user.save()
			return res.json('Успешно зареган')
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'registration error' })
		}
	}
	async login(req, res) {
		try {
			const { login, email, password } = req.body
			const user = await User.findOne({ email })
			if (!user) {
				return res.status(400).json({ message: `Пользователь ${email} не найден` })
			}
			const validPassword = bcrypt.compareSync(password, user.password)
			if (!validPassword) {
				return res.status(400).json({ message: `Логин или пароль введены неверно` })
			}
			return res.redirect('/')
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'login error' })
		}
	}
}

export default new authController()