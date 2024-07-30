import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import DetailsPopup from '../../Components/DetailsPopup';

const Patient_info = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);
  const [history,SetHistory]=useState('');
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [response, setResponse] = useState('');
  const [medicine, setMedicine] = useState('');
  const authToken = localStorage.getItem('doctor-token');
  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/appoint/patient/${id}`, {
          headers: { 'auth-token': authToken },
        });
        if (response.status === 200) {
          setPatient(response.data.appointment);
        }
      } catch (error) {
        console.error('Error fetchaing patient details', error);
      }
    };

    fetchPatientDetails();
  }, [id, authToken]);

  const handleResponse = async () => {
    try {
      await axios.post(`http://localhost:8080/api/appoint/patient/${id}`, {
        response,
        medicine,
      }, {
        headers: { 'auth-token': authToken },
      });
      setResponse('');
      setMedicine('');
      try {
        await axios.delete(`http://localhost:8080/api/appoint/patient/${id}`, {
          headers: { 'auth-token': authToken },
        });
        console.log("success")
  
      } catch (error) {
        console.error('Error deleting patient', error);
      }
      alert('Response submitted successfully');
      navigate('/doctorpage'); 
    } catch (error) {
      console.error('Error submitting response', error);
    }
  };
  const openPopup=async(id)=>{
    const response=await axios.get(`http://localhost:8080/api/appoint/history/${id}`)
    console.log(response.data)
    SetHistory(response.data);
    setPopupIsOpen(true);
  }
  const closePopup = () => {
    setPopupIsOpen(false);
    SetHistory(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-100 to-blue-100 p-10 py-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Patient Details</h1>
      
      {patient ? (
        <div className="bg-white shadow-xl rounded-xl p-8 transform transition-transform hover:scale-105 max-w-3xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start mb-8">
            <div className="lg:w-1/3">
              <img
                src={`https://via.placeholder.com/150?text=${patient.name}`} 
                alt={patient.name}
                className="w-full h-32 object-cover rounded-full border-4 border-cyan-500 shadow-lg"
              />
            </div>
            <div className="lg:w-2/3 lg:ml-6 mt-6 lg:mt-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Patient Information</h2>
              <p className="text-gray-700 text-lg mb-2"><strong>Name:</strong> {patient.name}</p>
              <p className="text-gray-600 text-lg mb-2"><strong>Phone:</strong> {patient.phone}</p>
              <p className="text-gray-600 text-lg mb-2"><strong>Email:</strong> {patient.email}</p>
              <p className="text-gray-600 text-lg mb-2"><strong>Doctor:</strong> {patient.doctorName}</p>
              <p className="text-gray-600 text-lg mb-2"><strong>Date:</strong> {patient.date}</p>
              <p className="text-gray-600 text-lg mb-2"><strong>Time:</strong> {patient.time}</p>
              <p className="text-gray-600 text-lg mb-4"><strong>Problem:</strong> {patient.problem}</p>
            </div>
            <button className='bg-cyan-500 text-sky-50 rounded-lg font-bold w-auto'  onClick={() => openPopup(patient.user)}>Medical History</button> 
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Respond to Patient</h3>
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Write your response here..."
            className="w-full border border-gray-300 rounded-md p-4 mb-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
            rows="4"
          />
          <input
            type="text"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
            placeholder="Enter prescribed medicine here..."
            className="w-full border border-gray-300 rounded-md p-4 mb-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
          />
          <button
            onClick={handleResponse}
            className="w-full py-3 px-6 bg-cyan-600 text-white font-semibold rounded-md shadow-lg hover:bg-cyan-700 transition duration-300"
          >
            Submit Response
          </button>
          <DetailsPopup
        isOpen={popupIsOpen}
        onClose={closePopup}
        details={history}
      />
        </div>
      ) : (
        <p className="text-xl text-gray-700 text-center">Loading patient details...</p>
      )}
    </div>
  );
};

export default Patient_info;
