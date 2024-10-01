import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const DoctorPage = ({ handleLogout }) => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const authToken = sessionStorage.getItem("doctor-token");
  const doctorPhoto = sessionStorage.getItem("photo");

  useEffect(() => {
    if (!authToken) {
      navigate("/");
    } else {
      const fetchAppointments = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/v1/doctor/appointment/${authToken}`
          );

          setAppointments(response.data.data.Appointments || []);
          setFilteredAppointments(response.data.data.Appointments || []);
        } catch (error) {
          console.error("Error fetching appointments", error);
        }
      };
      fetchAppointments();
    }
  }, [authToken, navigate]);

  useEffect(() => {
    setFilteredAppointments(
      appointments.filter((patient) =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, appointments]);

  return (
    <div className="min-h-screen bg-cyan-50 p-8 flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <img
            src={doctorPhoto}
            alt="Doctor"
            className="h-32 w-32 rounded-full border-2 border-cyan-600 mr-4"
          />
          <h1 className="text-4xl font-extrabold text-gray-900">
            Doctor's Dashboard
          </h1>
        </div>
        <div className="flex space-x-5">
        <Link
          to={"/"}
          className="inline-flex text-white bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-800 rounded text-lg"
        >
          Home
        </Link>
        <button
          className="inline-flex text-white bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-800 rounded text-lg"
          onClick={handleLogout}
        >
          Log Out
        </button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md p-4 w-1/2 mx-auto text-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Patient Appointments
      </h2>
      {filteredAppointments.length === 0 ? (
        <div className="text-center text-xl text-gray-700 mt-10">
          <p className="animate-pulse">
            There are no appointments at the moment.
          </p>
        </div>
      ) : (
        <div className="space-y-6 flex flex-col items-center">
          {filteredAppointments.map((patient, index) => (
            <div
              key={patient._id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 w-full max-w-3xl flex flex-col space-y-4 transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <p className="text-gray-600 text-md mb-1">
                    <strong>S.N.:</strong> {index + 1}
                  </p>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {patient.name}
                  </h2>
                  <p className="text-gray-600 text-md mb-1">
                    Email: {patient.email}
                  </p>
                  <p className="text-gray-600 text-md mb-1">
                    Date: {patient.date}
                  </p>
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
