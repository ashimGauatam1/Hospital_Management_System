import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import Alert from '../../Components/Alert';
import { Aside } from '../../Components/aside';

const sampleTypes = ['Blood', 'Stool', 'Urine', 'Saliva', 'Tissue'];

const Lab = () => {
  const [appointmentId, setAppointmentId] = useState('');
  const [appointmentFound, setAppointmentFound] = useState(true);
  const [sampleType, setSampleType] = useState('');
  const [charge, setCharge] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [labRequests, setLabRequests] = useState([]);

  const handleAppointmentSearch = async (e) => {
    e.preventDefault();

    if (appointmentId.trim() !== '') {
      setAppointmentFound(true);
      Alert({
        title: "Appointment Found",
        description: `Appointment ${appointmentId} has been located.`,
        variant: "success",
      });
    } else {
      setAppointmentFound(false);
      Alert({
        title: "Appointment Not Found",
        description: "Please enter a valid appointment ID.",
        variant: "destructive",
      });
    }
  };

  const handleLabReportSubmit = async (e) => {
    e.preventDefault();

    const newLabRequest = {
      appointmentId,
      sampleType,
      charge,
      additionalDetails,
      status: 'Pending',
    };

      setLabRequests([...labRequests, newLabRequest]);

    setSampleType('');
    setCharge('');
    setAdditionalDetails('');
    
    toast({
      title: "Lab Report Requested",
      description: "The lab report has been successfully requested.",
    });
  };

  const goToAllReportsPage = () => {
    navigate('/lab-reports', { state: { labRequests } });
  };

  return (
    <>
      <Aside />
      <div className="container mx-auto p-6 space-y-8">
         <div className="flex justify-between items-center mb-6">
          <Link
          to={'/staff/lab-reports'}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            View All Reports
          </Link>
        </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Lab Report Request</h2>
          <p className="text-sm text-gray-600 mb-4">Search for an appointment and request a lab report</p>

          <form onSubmit={handleAppointmentSearch} className="space-y-4">
            <div className="flex items-end space-x-2">
              <div className="flex-1">
                <label htmlFor="appointmentId" className="block text-sm font-medium text-gray-700">Appointment ID</label>
                <input
                  id="appointmentId"
                  type="text"
                  value={appointmentId}
                  onChange={(e) => setAppointmentId(e.target.value)}
                  placeholder="Enter appointment ID"
                  className="mt-1 p-3 border-2 border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                  required
                />
              </div>
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                Search
              </button>
            </div>
          </form>
        </div>
      {appointmentFound && (
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">Add Lab Report</h2>
            <p className="text-sm text-gray-600 mb-4">Enter lab report details for Appointment {appointmentId}</p>

            <form onSubmit={handleLabReportSubmit} className="space-y-6">
                 <div>
                <label htmlFor="sampleType" className="block text-sm font-medium text-gray-700">Sample Type</label>
                <select
                  id="sampleType"
                  value={sampleType}
                  onChange={(e) => setSampleType(e.target.value)}
                  className="mt-1 p-3 border-2 border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out"
                  required
                >
                  <option value="">Select sample type</option>
                  {sampleTypes.map((type) => (
                    <option key={type} value={type.toLowerCase()}>{type}</option>
                  ))}
                </select>
              </div>

                <div>
                <label htmlFor="charge" className="block text-sm font-medium text-gray-700">Charge</label>
                <input
                  id="charge"
                  type="number"
                  value={charge}
                  onChange={(e) => setCharge(e.target.value)}
                  placeholder="Enter charge amount"
                  className="mt-1 p-3 border-2 border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out"
                  required
                />
              </div>

              {/* Additional Details Input */}
              <div>
                <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-700">Additional Details</label>
                <input
                  id="additionalDetails"
                  type="text"
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  placeholder="Enter any additional details"
                  className="mt-1 p-3 border-2 border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out"
                />
              </div>

              <button type="submit" className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
                Submit Lab Report Request
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Lab;
