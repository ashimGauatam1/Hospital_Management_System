import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import DetailsPopup from '../../Components/DetailsPopup';

const Patient_info = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, SetUser] = useState([]);
    const [patient, setPatient] = useState(null);
    const [history, setHistory] = useState('');
    const [popupIsOpen, setPopupIsOpen] = useState(false);
    const [response, setResponse] = useState('');
    const [medicine, setMedicine] = useState('');

    useEffect(() => {
        const fetchPatientDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/appoint/getuser/${id}`);
                if (response.status === 200) {
                    SetUser(response.data.data.user);
                    setPatient(response.data.data.patient);  
                }
            } catch (error) {
                console.error('Error fetching patient details', error);
            }
        };

        fetchPatientDetails();
    }, [id]);

    const handleResponse = async () => {
        try {
            await axios.post(`http://localhost:8080/api/v1/users/update`, {
                id: patient.user,
                response,
                medicine,
                problem: patient.problem
            }, { withCredentials: true });
    
            await axios.post(`http://localhost:8080/api/v1/appoint/update`, {
                id: patient._id,
                medicine,
            }, { withCredentials: true });
    
            await axios.post(`http://localhost:8080/api/v1/appoint/checked/${patient._id}`, {
                doctorId: null
            }, { withCredentials: true });
    
            setResponse('');
            setMedicine('');
    
            alert('Response submitted successfully');
            navigate('/doctorpage');
        } catch (error) {
            console.error('Error submitting response', error);
            alert('Failed to submit response. Please try again.');
        }
    };
    
    const openPopup = async (userId) => {
        const response = await axios.get(`http://localhost:8080/api/v1/users/gethistory/${userId}`);
        setHistory(response.data.data.user);
        setPopupIsOpen(true);
    };

    const closePopup = () => {
        setPopupIsOpen(false);
        setHistory(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-cyan-100 to-blue-100 p-10 py-10">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Patient Details</h1>

            {patient ? (
                <div className="bg-white shadow-xl rounded-xl p-8 transform transition-transform hover:scale-105 max-w-3xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-start mb-8">
                        <div className="lg:w-1/3">
                            <img
                                src={user.profile}  
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
                            <p className="text-gray-600 text-lg mb-4"><strong>Problem:</strong> {patient.problem}</p>
                        </div>
                        <button className='bg-cyan-500 text-sky-50 rounded-lg font-bold w-auto' onClick={() => openPopup(patient.user)}>Medical History</button> 
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
