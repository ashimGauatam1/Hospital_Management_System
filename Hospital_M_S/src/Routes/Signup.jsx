import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Alert from '../Components/Alert';

const Signup = () => {
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [alerts, setAlert] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const fetchUser = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', data);
        console.log(response.data.status)
      if (response.status === 200) {
        setData(response.data);
        setType('success');
        setMessage('Registration Successful, now login');
        setAlert(true);
      }
    } catch (error) {
      if (error.response.status === 404) {
        setType('error');
        setMessage('User Already Exists');
        setAlert(true);
      } else {
        setType('error');
        setMessage('Something went wrong');
      }

    }
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div>
      <div className="font-[sans-serif] bg-white md:h-screen">
        {alerts && (
          <div className="ml-5  py-20  -mb-20">
            <Alert type={type} message={message} onClose={() => setAlert(false)} />
          </div>
        )}
        <div className="grid md:grid-cols-2 items-center gap-5 h-full">
          <div data-aos="zoom-out-right" className="max-md:order-1 p-4 mt-10">
            <img
              src="https://img.freepik.com/free-vector/private-healthcare-abstract-concept-vector-illustration-private-medicine-healthcare-insurance-paid-medical-services-health-center-specialist-consulting-clinic-facility-abstract-metaphor_335657-1543.jpg?t=st=1721715047~exp=1721718647~hmac=87f415cdba146a6837afa3ef2de934192e3070308b1a5b3f29db2811108fe88e&w=360"
              className="lg:max-w-[85%] w-full h-full object-contain block mx-auto"
              alt="login-image"
            />
          </div>

          <div data-aos="fade-up-left" className="flex items-center md:p-8 p-6 bg-cyan-700 rounded-sm h-full lg:w-11/12 lg:ml-auto">
            <form className="max-w-lg w-full mx-auto mt-20">
              <div className="mb-12">
                <img
                  src="https://img.freepik.com/free-vector/hospital-illustration-with-green-leafs_1394-713.jpg?t=st=1721709848~exp=1721713448~hmac=85609a8e7bd54ec36582d45e518306abd247a39d041a2c661254c1d7b64c2494&w=360"
                  className="h-10 w-10 rounded-full"
                />
                <h3 className="text-3xl font-bold text-yellow-400 -mb-5">Create an account</h3>
              </div>

              <div>
                <label className="text-white text-xs block mb-2">Full Name</label>
                <div className="relative flex items-center">
                  <input
                    name="name"
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                    placeholder="Enter name"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div className="mt-8">
                <label className="text-white text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                    placeholder="Enter email"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path fill="none" stroke-miterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                      <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                    </g>
                  </svg>
                </div>
              </div>

              <div className="mt-8">
                <label className="text-white text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    required
                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                    placeholder="Enter password"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31                    .994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
            </div>

            <div className="flex items-center mt-8">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
              <label htmlFor="remember-me" className="text-white ml-3 block text-sm">
                I accept the <a  className="text-yellow-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>

            <div className="mt-12">
              <button onClick={fetchUser} type="button" className="w-max shadow-xl py-3 -mt-10 px-6 text-sm text-gray-800 font-semibold rounded-md bg-transparent bg-yellow-400 hover:bg-yellow-700 hover:text-white focus:outline-none">
                Register
              </button>
             
              <p className="text-sm text-white mt-8">Already have an account? <a className="text-yellow-400 font-semibold hover:underline ml-1">Login here</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signup;
