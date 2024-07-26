import express from 'express';
import Appoint from '../Schemas/Appointment_form.js';
import UserAuth from '../middleware/UserFetch.js';

const router = express.Router();

router.post('/register', UserAuth, async (req, res) => {
  const { name, phone, email, date, time, problem, doctor } = req.body;
  const book = new Appoint({
    name,
    phone,
    email,
    doctor,
    date,
    time,
    problem,
    user: req.user.id
  });
  await book.save();
  res.send(book);
});

router.get('/getdata', UserAuth, async (req, res) => {
  const user = req.user.id;
  if (!user) {
    return res.status(401).send('Unauthorized');
  }
  const data = await Appoint.find({ user: user });
  res.send(data);
});

export default router;
