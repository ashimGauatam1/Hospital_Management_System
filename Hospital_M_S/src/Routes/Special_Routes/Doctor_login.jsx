import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
    const [data,Setdata]=useState([
      {"doctorid":'',
      "password":''}
    ]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

    const handlechange=(e)=>{
        const {name,value}=e.target;
        Setdata({
            ...data,
            [name]:value
        })
    }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/api/v1/doctor/login',data);
     if (response.status === 200) {
      console.log(response.data.data);
        sessionStorage.setItem('doctor-token',response.data.data.id)
        sessionStorage.setItem('photo',response.data.data.photo)
        navigate('/doctor/doctorpage')
      }
    } catch (err) {
      setError('Invalid id or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-50">
      <div className="w-full max-w-md bg-gray-100 shadow-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login</h1>
        {error && <div className="mb-4 text-red-600 font-bold text-center">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label  className="block text-sm font-medium text-gray-700">ID</label>
            <input
              type="text"
              id="doctorid"
              name="doctorid"
              
              onChange={handlechange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handlechange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-cyan-600 text-white font-semibold rounded-md shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
