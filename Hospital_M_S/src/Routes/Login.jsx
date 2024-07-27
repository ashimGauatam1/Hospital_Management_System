import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Alert from '../Components/Alert';

const Login = ({ setShowLogin, handleLogout }) => {
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [alerts, setAlert] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  // Handle logout timeout
  const setLogoutTimeout = (timeout) => {
    setTimeout(() => {
      handleLogout();
    }, timeout);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', data);
      if (response.status === 200) {
        const now = Date.now();
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('tokenTimestamp', now.toString());
        localStorage.setItem('user_type', response.data.type);
        window.location.reload();
        setShowLogin(false);
        setLogoutTimeout(24 * 60 * 60 * 1000);
      }
    } catch (error) {
      setType('error');
      setMessage(error.response?.status === 404 ? 'Invalid Credentials' : 'Something went wrong');
      setAlert(true);
    }
  };

  // Handle input changes
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
    <>
     
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={() => setShowLogin(false)}
        ></div>

        <div
          data-aos="fade-down-left"
          className="bg-white rounded-lg shadow-lg p-8 z-10 w-full max-w-lg mx-4 sm:mx-auto max-h-[90vh] overflow-auto"
        >
          <button
            className="inline-block align-right font-bold text-sm text-blue-500 hover:text-blue-800 mb-4"
            onClick={() => setShowLogin(false)}
          >
            <img
              src="https://img.freepik.com/free-photo/cancel-sign-front-side-white-background_187299-40278.jpg?t=st=1721718042~exp=1721721642~hmac=e2e74e716b749e728e35704752d805cbbd9ab360f0ae5d3d8d8deaf7be235772&w=360"
              className="h-5 w-5"
              alt="Close"
            />
          </button>
          <div className="flex flex-col items-center justify-center bg-gray-100 font-[sans-serif] h-full md:min-h-screen p-4">
            <div className="grid justify-center max-w-md mx-auto">
              <div>
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-hospital-reception-scene_23-2148837407.jpg?t=st=1721718240~exp=1721721840~hmac=7e95c8c0b40864a72b20729bf1ab983eb568f78791e56271779974e5749d63bc&w=740"
                  className="w-full object-cover rounded-2xl"
                  alt="login-image"
                />
              </div>

              <form
                className="bg-white rounded-2xl p-6 mt-[-6rem] relative z-10 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]"
                onSubmit={handleSubmit}
              >
                 {alerts && (
        <div className="ml-5 py-10 mb-0">
          <Alert type={type} message={message} onClose={() => setAlert(false)} />
        </div>
      )}
                <div className="mb-12">
                  <h3 className="text-3xl font-extrabold text-blue-600">Log in</h3>
                </div>

                <div className="relative flex items-center">
                  <input
                    name="email"
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                    placeholder="Enter email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g
                      clipPath="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        stroke-miterlimit="10"
                        strokeWidth="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>

                <div className="mt-6">
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      onChange={handleChange}
                      type="password"
                      required
                      className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                      placeholder="Enter password"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="text-gray-800 ml-2 text-sm">
                      Remember me
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
