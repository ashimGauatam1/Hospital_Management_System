// src/pages/ProfilePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Profile = ({ authToken }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    date: ''
  });
  const [userHistory, setUserHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once:true
    })
    const fetchUserData = async () => {
      try {
        console.log("Auth Token:", authToken); 
        const response = await axios.get("http://localhost:8080/api/auth/getuser", {
          headers: { 'auth-token': authToken },
        });
        if (response.status === 200) {
          setUserData(response.data);
        } else {
          alert("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Fetch User Data Error:", error);
        alert("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    const fetchUserHistory = async () => {
      try {
        console.log("Auth Token:", authToken); 
        const response = await axios.get("http://localhost:8080/api/appoint/getdata", {
          headers: { 'auth-token': authToken },
        });
        if (response.status === 200) {
          setUserHistory(response.data);
        } else {
          alert("Failed to fetch user history");
        }
      } catch (error) {
        console.error("Fetch User History Error:", error);
        alert("An error occurred while fetching data");
      }
    };

    fetchUserData();
    fetchUserHistory();
  }, [authToken]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="py-10"></div>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 data-aos='fade-up' className="text-3xl font-bold text-center text-cyan-600 mb-8">User Profile</h1>
          <div className="space-y-4">
            <div>
              <h2 data-aos='zoom-in' className="text-xl font-semibold text-gray-700">Full Name</h2>
              <p data-aos='zoom-out' className="text-gray-900">{userData.name}</p>
            </div>
            <div>
              <h2 data-aos='zoom-in' className="text-xl font-semibold text-gray-700">Email</h2>
              <p data-aos='zoom-out' className="text-gray-900">{userData.email}</p>
            </div>
            <div>
              <h2 data-aos='zoom-in' className="text-xl font-semibold text-gray-700">Date of Creation</h2>
              <p data-aos='zoom-out' className="text-gray-900">{userData.date}</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 data-aos='flip-in' className="text-2xl font-bold text-center text-gray-700 mb-4">Appointment History</h2>
          <div className="flex overflow-x-auto gap-2 ml-4 mr-4 " >
            {userHistory.map((appointment, index) => (
              <Card
                key={index}
                date={appointment.date}
                time={appointment.time}
                problem={appointment.problem}
              />
            ))}
          </div>
        </div>
       </div>
    </>
  );
};

export default Profile;
