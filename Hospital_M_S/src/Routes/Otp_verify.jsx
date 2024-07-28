import React, { useEffect, useState } from 'react';
import axios from 'axios';
import image from '../assets/img/otp.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Alert from '../Components/Alert';

const Otp_verify = ({isAuthenticated}) => {
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [alerts, setAlert] = useState(false);
  const [otp, setOtp] = useState({
    enteredOtp:''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
       
      const response = await axios.post('http://localhost:8080/api/auth/verify',  otp );
      
      if (response.status === 200) {
        
        setType('success');
        setMessage('Registration Successful, now you can login');
        setAlert(true);
      } else {
        setType('error');
        setMessage('Registration UnSuccessful');
        setAlert(true);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setType('error');
      setMessage('Registration UnSuccessful');
      setAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handlechange=(e)=>{
    const {name,value}=e.target;

    setOtp({
      ...otp,
      [name]:value
    })
  }
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
 
  return (
    <>
    {!isAuthenticated ? (
        <>
          {alerts && (
    <div className="ml-5  py-20  -mb-20 bg-gray-100">
      <Alert type={type} message={message} onClose={() => setAlert(false)} />
    </div>
  )}
      <div className="py-20 flex justify-center items-center min-h-screen">
      <img
      data-aos='zoom-in'
        className="w-50 h-50"
        src="https://img.freepik.com/free-vector/403-error-forbidden-with-police-concept-illustration_114360-1904.jpg?t=st=1722009703~exp=1722013303~hmac=f8743ec79b03629cd8f7be7a5632551c77d7ed3ac0ce8847be37ac115ee55a67&w=360"
        alt="Error 403 Forbidden"
      />
    </div>
      <h1  className="-mt-20 text-center font-serif font-extrabold text-cyan-800">PLEASE LOGIN/SIGN UP FIRST</h1>
    </>
      ) : (
     
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
     <img data-aos='zoom-in' className="w-64 h-64 mr-20 -ml-20" src={image} alt="Description" />
     <div data-aos='flip-down' className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg shadow-slate-700">
        <h1 className="text-2xl font-bold text-center text-cyan-700 mb-6">OTP Verification</h1>
        <p className="text-gray-600 text-center mb-4">Enter the OTP sent to your email to verify your account.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input 
              type="text"
              required
              maxLength={6}
              onChange={handlechange}
              placeholder="Enter OTP" 
              name="enteredOtp"
              id="enteredOtp"
              className="w-full px-4 py-2 border border-cyan-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-2 bg-cyan-700 text-white font-semibold rounded-lg hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isSubmitting ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>

      </div>
    </div>
)}</>
    );
};

export default Otp_verify;
