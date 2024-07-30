import express from 'express';
import Appoint from '../Schemas/Appointment_form.js';
import UserAuth from '../middleware/UserFetch.js';
import sendEmail from '../middleware/Gmail.js';
const router = express.Router();

router.post('/register', UserAuth, async (req, res) => {
  const { name, phone, email, date, time, problem, doctorName,doctorId ,age} = req.body;
  const book = new Appoint({
    name,
    phone,
    email,
    doctorId,
    doctorName,
    date,
    age,
    time,
    problem,
    user: req.user.id
  });
  console.log(doctorId)
  const htmlbody =
`  <h1>Appointment Confirmation</h1>
      <p>Dear ${name}
      <p>Thank you for scheduling an appointment with us. We are pleased to confirm your appointment as follows:</p>
       <p>Please note that your appointment will not be in this time you will get token number so please come through in queue with that token</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Docotor:</strong> ${doctorName}</p>
      <p><strong>Location:</strong> On site </p>
      <p>If you have any questions or need to reschedule, please do not hesitate to contact us.</p>
      <a href=${"http://localhost:5173/contact"} class="button">Contact Us</a>
      <p>We look forward to seeing you!</p>
      <p>Best regards,<br><strong>Mr. Ashim Gautam</strong></p>
      <p><br>Managinng Director</p>`
  await book.save();
  const sentemail=await sendEmail(
    email,
    "Appointment Conformation ",
    htmlbody
  )
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

router.post('/patient/:id', async (req, res) => {
  const { id } = req.params;
  const { response, medicine } = req.body;

  try {
    const appointment = await Appoint.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    appointment.response = response;
    appointment.medicine = medicine;
    await appointment.save();

    res.json({appointment});
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/patient/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appoint.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json({appointment});
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error' });
  }
})

router.delete('/patient/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Appoint.findByIdAndUpdate(
      id,
      { $unset: { doctorId: "" } },
      { new: true }
    );
        if (!result) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json({result});
    console.log("deleted")
  } catch (error) {
    res.status(500).json({ message: 'Error deleting patient', error });
  }
});

router.get('/history/:id',async(req,res)=>{
  const {id}=req.params;
  const user=await Appoint.find({user:id});
  res.json(user)
})

export default router;
