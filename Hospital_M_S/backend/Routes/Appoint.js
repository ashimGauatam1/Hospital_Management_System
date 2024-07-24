import express from 'express'
import Appoint from '../Schemas/Appointment_form.js';
import UserAuth from '../middleware/UserFetch.js';
const router=express.Router();

router.post('/register',UserAuth,async(req,res)=>{
    const {name,phone,email,date,time,problem}=req.body;
    const book =new Appoint({
        name,
        phone,
        email,
        date,
        time,
        problem,
        user:req.user.id
    })
    // await book.save();
    res.send(book);
})

export default router