import express from 'express';
import { handleLogin, handleLogout, handleSignup } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/signup',handleSignup);
authRouter.post('/login',handleLogin);
authRouter.post('/logout',handleLogout);

export default authRouter;