import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const Profile = ({ authToken, isAuthenticated }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [userHistory, setUserHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/users/getuser", {
          withCredentials: true,
        });
        if (response.status === 200) {
          setUserData(response.data.data.user);
        } else {
          setError("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Fetch User Data Error:", error);
        setError("An error occurred while fetching user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [authToken]);

  useEffect(() => {
    const fetchUserHistory = async () => {
      if (userData._id) {
        try {
          const response = await axios.get(`http://localhost:8080/api/v1/users/gethistory/${userData._id}`);
          if (response.status === 200) {
            console.log(response.data);
            setUserHistory(response.data.data.user);
          } else {
            setError("Failed to fetch user history");
          }
        } catch (error) {
          console.error("Fetch User History Error:", error);
          setError("An error occurred while fetching user history");
        }
      }
    };

    fetchUserHistory();
  }, [userData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      {!isAuthenticated ? (
        <>
          <div className="py-20 flex justify-center items-center min-h-screen">
            <img
              data-aos='zoom-in'
              className="w-50 h-50"
              src="https://img.freepik.com/free-vector/401-error-unauthorized-concept-illustration_114360-1922.jpg?t=st=1722011111~exp=1722014711~hmac=744f9da608b725796990da2f0ebfe3ed4008e2c2135dfbccb2515bbb1936c429&w=360"
              alt="Error 403 Forbidden"
            />
          </div>
          <h1 className="-mt-20 text-center font-serif font-extrabold text-cyan-800">PLEASE LOGIN/SIGN UP FIRST</h1>
        </>
      ) : (
        <>
          <div className="py-10"></div>
          <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
              <h1 data-aos='fade-up' className="text-3xl font-bold text-center text-cyan-600 mb-8">User Profile</h1>
              <div className="flex flex-col items-center mb-4">
                <img src={userData.profile} alt="User Profile" className="w-24 h-24 rounded-full mb-4" /> 
                <h2 data-aos='zoom-in' className="text-xl font-semibold text-gray-700">Full Name</h2>
                <p data-aos='zoom-out' className="text-gray-900">{userData.name}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <h2 data-aos='zoom-in' className="text-xl font-semibold text-gray-700">Email</h2>
                  <p data-aos='zoom-out' className="text-gray-900">{userData.email}</p>
                </div>
                <div>
                  <h2 data-aos='zoom-in' className="text-xl font-semibold text-gray-700">Date of Creation</h2>
                  <p data-aos='zoom-out' className="text-gray-900">{new Date(userData.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 data-aos='flip-in' className="text-2xl font-bold text-center text-gray-700 mb-4">Appointment History</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {userHistory.map((appointment) => (
                  <Card
                    key={appointment._id}
                    date={new Date(appointment.Date).toLocaleDateString()}
                    problem={appointment.problem}
                    response={appointment.response}
                    medicine={appointment.medicine}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
