import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.SECRET;

export function userMiddleware(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];

  const decoded = jwt.verify(token, SECRET);
  if (decoded.username) {
    req.username = decoded.username;
    next();
  } else {
    res.status(403).json({
      msg: 'You are not authenticated',
    });
  }
}
