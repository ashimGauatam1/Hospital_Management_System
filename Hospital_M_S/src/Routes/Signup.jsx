import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Alert from '../Components/Alert';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [alerts, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    age: '',
    profile: null,
    password: '',
  });

  const fetchUser = async () => {
    setLoading(true);
    const { name, email, age, password, profile } = data;

    if (!name || !email || !age || !password) {
      setType('error');
      setMessage('Please fill in all fields.');
      setAlert(true);
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('age', age);
    formData.append('password', password);
    if (profile) {
      formData.append('profile', profile);
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/users/register', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.status === 200) {
        navigate(`/otpverification/${response.data.data._id}`);
      }
      if (response.status === 201) {
        setLoading(false);
        setType('success');
        setMessage("PLease rensend Otp and verify your account");
        setAlert(true);
      }
    } catch (error) {
      if(error.response.status == 401) {
        setMessage("Email Already Exists, Please Login with Credentials");
        setAlert(true);
      }else if(error.response.status == 400) {
        setMessage("Please select photo");
        setAlert(true);
      }
      else {
        setMessage('Something went wrong');
        setAlert(true);
      }
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData({ ...data, [name]: name === 'profile' ? files[0] : value });
  };

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="font-[sans-serif] bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-5 h-full">
        <div data-aos="zoom-out-right" className="max-md:order-1 p-4 mt-10">
          <img
            src="https://img.freepik.com/free-vector/private-healthcare-abstract-concept-vector-illustration-private-medicine-healthcare-insurance-paid-medical-services-health-center-specialist-consulting-clinic-facility-abstract-metaphor_335657-1543.jpg?w=360"
            className="lg:max-w-[85%] w-full h-full object-contain block mx-auto"
            alt="signup-image"
          />
        </div>
        <div data-aos="fade-up-left" className="flex items-center md:p-8 p-6 bg-cyan-700 rounded-sm h-full lg:w-11/12 lg:ml-auto">
          <form className="max-w-lg w-full mx-auto mt-20">
            <h3 className="text-3xl font-bold text-yellow-400 mb-5">Create an account</h3>
            {alerts && (
              <div className="mb-4">
                <Alert type={type} message={message} onClose={() => setAlert(false)} />
              </div>
            )}
            {['name', 'email', 'age', 'password'].map((field) => (
              <div className="mb-4" key={field}>
                <label className="text-white text-xs block mb-2">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  name={field}
                  onChange={handleChange}
                  type={field === 'password' ? 'password' : field === 'age' ? 'number' : 'text'}
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                  placeholder={`Enter ${field}`}
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="text-white text-xs block mb-2">Profile</label>
              <input
                name="profile"
                onChange={handleChange}
                type="file"
                className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
              />
            </div>
            {
              !loading ?
                <button onClick={fetchUser} type="button" className="w-full shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md bg-yellow-400 hover:bg-yellow-700 hover:text-white focus:outline-none">
                  Register
                </button>
                :
                <button disabled type="button" className="w-full shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md bg-yellow-400 hover:bg-yellow-700 hover:text-white focus:outline-none">
                  Loading
                </button>
            }
            <p className="text-sm text-white mt-8">Already have an account? <a className="text-yellow-400 font-semibold hover:underline ml-1">Login here</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
