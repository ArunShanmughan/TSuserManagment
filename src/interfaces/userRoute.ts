import express from 'express';
import { UserController } from '../application/controllers/userController';
import { UserUseCase } from '../application/userUseCase'
import { UserRepositoryImpl } from '../infrastructure/userRepository';
import UserModel from '../infrastructure/userModel';

const router = express.Router();
const userRepo = new UserRepositoryImpl(UserModel)
const userUseCase = new UserUseCase(userRepo)
const userController = new UserController(userUseCase);

router.get('/', userController.homePage);
router.get('/loginPage', userController.loginPage);
router.get('/signUpPage', userController.signUpPage);
router.post('/signUpSubmit', userController.signUpSubmit);
router.post('/loginSubmit', userController.loginSubmit);
router.get('/logOut', userController.logOut);

export default router;