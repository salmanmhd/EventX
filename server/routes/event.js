import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('i am inside event');
});

export default router;
