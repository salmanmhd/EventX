import { Router } from 'express';
import { userMiddleware } from '../middleware/user.js';
import { User } from '../db/db.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { z } from 'zod';
dotenv.config();
const KEY = process.env.SECRET;
const router = Router();

// const userMiddleware = userMiddleware;

const signInSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(4),
});

const signUpSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(4),
  email: z.string().email(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
});

router.get('/', (req, res) => {
  res.send('i am inside user');
});

router.post('/signup', async (req, res) => {
  const { username, email, password, firstName, lastName } = req.body;
  const validate = signUpSchema.safeParse(req.body);
  if (!validate.success) {
    return res.status(400).json({
      message: `bad input, please check the input`,
    });
  }

  try {
    const userExist = await User.findOne({ username });
    console.log(`userExist: ${userExist}`);
    if (userExist) {
      return res.status(409).json({
        message: 'User already exist',
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
    console.log(`user created: ${user}`);
    const token = jwt.sign({ username, hashedPassword }, KEY);
    res.status(201).json({
      message: 'User created successfully',
      token,
      user,
    });
  } catch (error) {
    console.log('something went wrong while creating user', error);
    res.status(400).json({
      message: 'something went wrong while sign up',
      error: error.message,
    });
  }
});

router.post('/signin', async (req, res) => {
  const validate = signInSchema.safeParse(req.body);
  if (!validate.success) {
    return res.status(400).json({
      message: `bad input, please check the input`,
    });
  }
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    const validatePassword = await bcrypt.compare(password, user.password);
    console.log(`validatePassword: ${validatePassword}`);
    if (user && validatePassword) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const token = jwt.sign({ username, hashedPassword }, KEY);
      res.status(200).json({
        message: 'User sign in successfully',
        token,
        user,
      });
    } else {
      res.status(401).json({
        msg: 'Wrong username or password',
      });
    }
  } catch (error) {
    res.status(400).json({
      message: 'something went wrong while sign in',
      error: error.message,
    });
  }
});

export default router;
