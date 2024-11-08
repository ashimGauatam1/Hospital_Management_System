import React, { useState } from 'react';
import { Aside } from '../../Components/aside';
import useLabReports from '../../hooks/useLabReports';
import usePDFGeneration from '../../hooks/usePDFGeneration';

const LabReportsPage = () => {
  const { labReports, isSubmitting, submitLabResult } = useLabReports();
  const generatePDF = usePDFGeneration();

  const [result, setResult] = useState('');
  const [currentAppointmentId, setCurrentAppointmentId] = useState(null);


  return (
    <>
      <Aside />
      <div className="container mx-auto p-6 space-y-8">
        <h2 className="text-3xl font-semibold text-yellow-600 mb-4">All Lab Reports</h2>
        
        {labReports.length > 0 ? (
          <ul className="space-y-6">
            {labReports.map((labReport, index) => (
              labReport.lab.map((report) => (
                <li key={index} className="p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl transition duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg text-teal-600">Appointment ID: {report.appointment.appointmentId}</h3>
                      <h3 className="font-semibold text-lg ">Patient Name: {report.user.name}</h3>
                      <h3>{report.date}</h3>
                      {/* <p>Status: <span className={`font-bold ${report.status == false ? 'text-green-600' : 'text-red-600'}`}>{report.status}</span></p> */}
                      <p className='font-semibold'>Sample Type: {report.sampleType}</p>
                      <p className='flex'>Charge: Rs.  <p className='font-bold text-red-500'>{report.charge}</p></p>
                      <p>Additional Details: {report.Additional}</p>
                      
                    </div>
                      <button
                        onClick={() => setCurrentAppointmentId(report.appointment.appointmentId)}
                        className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-200"
                      >
                        Submit Result
                      </button>
                    
                  </div>
                 
                </li>
              ))
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No lab reports found.</p>
        )}
      </div>
    </>
  );
};

export default LabReportsPage;
