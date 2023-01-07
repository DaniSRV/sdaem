import { Router } from "express";
const router = new Router();
import { check } from 'express-validator';
import authController from './authController.js';

router.post('/registration', [
	check('userpass', 'Пароль не должен быть меньше 6 и больше 32 символов').isLength({ min: 6, max: 32 })
], authController.registration)
router.post('/login', authController.login)

export default router