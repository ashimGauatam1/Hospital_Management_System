import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Alert from '../Components/Alert';

const Login = ({ setShowLogin, }) => {
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [alerts, setAlert] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/users/login', data, { withCredentials: true });
      if (response.status === 200) {
        window.location.reload();
        setShowLogin(false);
        setLogoutTimeout(24 * 60 * 60 * 1000);
      }
    } catch (error) {
      setType('error');
      if(error.response.status >= 400) {
        setMessage("Invalid Credentials");
        setAlert(true);
      }
      else {
        setMessage('Something went wrong');
        setAlert(true);
      }
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
