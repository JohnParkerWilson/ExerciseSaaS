import express from 'express';

const router = express.Router();

router.get('/', async function(req, res) {
  res.send(`Hello world`);
});

export default router;
