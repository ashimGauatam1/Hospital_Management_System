import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DoctorPage = () => {
  const [appointments, setAppointments] = useState([]);
  const authToken = localStorage.getItem('doctor-token');
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/auth/patientlist', {
          headers: { 'auth-token': authToken },
        });
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments', error);
      }
    };

    fetchAppointments();
  }, [authToken]);

  return (
    <div className="min-h-screen bg-cyan-50 p-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Patient Appointments</h1>
      {appointments.length === 0 ? (
        <div className="text-center text-xl text-gray-700 mt-10">
          <p className="animate-pulse">There are no appointments at the moment.</p>
        </div>
      ) : (
        <div className="space-y-6 flex flex-col items-center">
          {appointments.map((patient) => (
            <div
              key={patient._id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 w-full max-w-3xl flex flex-col space-y-4 transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{patient.name}</h2>
                  <p className="text-gray-600 text-md mb-1">Email: {patient.email}</p>
                  <p className="text-gray-600 text-md mb-1">Date: {patient.date}</p>
                  </div>
                <Link
                  to={`/patient_info/${patient._id}`}
                  className="text-white bg-cyan-600 hover:bg-cyan-700 font-semibold px-4 py-2 rounded-md shadow-lg transition-transform transform hover:scale-105 mt-4 md:mt-0"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorPage;
