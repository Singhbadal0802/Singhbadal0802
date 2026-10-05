import express from 'express';
import { register, login } from '../controllers/authController.js';
import { createNewUser, fetchUserData } from '../controllers/userData/userDataController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/createUserData', createNewUser)
router.post('/getUserData', fetchUserData)

export default router;