import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS  
    }
  }); 
  const sendEmail = async (to, subject, html) => {
    try {
      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        html,
      });
      console.log('Email sent: ', info.response);
      return { success: true };
    } catch (error) {
      console.error('Error sending email: ', error);
      return { success: false, error };
    }
  };
  
 export default  sendEmail;