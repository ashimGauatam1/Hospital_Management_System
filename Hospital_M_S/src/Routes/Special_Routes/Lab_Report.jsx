import React, { useState } from 'react';
import { Aside } from '../../Components/aside';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const LabReportsPage = () => {
  const [labRequests, setLabRequests] = useState([
    {
      appointmentId: 'A12345',
      sampleType: 'Blood',
      charge: 50,
      additionalDetails: 'Test for blood sugar levels',
      status: 'Pending',
      result: null,
    },
    {
      appointmentId: 'A67890',
      sampleType: 'Urine',
      charge: 30,
      additionalDetails: 'Routine urine analysis',
      status: 'Completed',
      result: 'Normal',
    },
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState('');
  const [currentAppointmentId, setCurrentAppointmentId] = useState(null);
  const [pdfGenerated, setPdfGenerated] = useState(false); 

  const handleSubmitResult = async (appointmentId) => {
    const labRequest = labRequests.find(request => request.appointmentId === appointmentId);
    if (!labRequest) return;

    if (!result.trim()) {
      alert('Please enter a result before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://your-backend-api.com/lab-reports', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ appointmentId, result }),
      });

      if (response.ok) {
        const updatedRequests = labRequests.map((request) => {
          if (request.appointmentId === appointmentId) {
            return { ...request, status: 'Completed', result: result };
          }
          return request;
        });

        setLabRequests(updatedRequests);
        alert('Result submitted successfully!');
        generatePDFReport(labRequest); 
        setResult('');
        setCurrentAppointmentId(null);
      } else {
        alert('Failed to submit the result. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting result:', error);
      alert('An error occurred while submitting the result.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generatePDFReport = (labRequest) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Lab Report', 105, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.text(`Appointment ID: ${labRequest.appointmentId}`, 20, 40);
    doc.text(`Sample Type: ${labRequest.sampleType}`, 20, 50);
    doc.text(`Charge: $${labRequest.charge}`, 20, 60);
    doc.text(`Additional Details: ${labRequest.additionalDetails}`, 20, 70);
    doc.text(`Result: ${labRequest.result || 'Pending'}`, 20, 80);

    doc.autoTable({
      startY: 90,
      head: [['Investigation', 'Result', 'Reference Value', 'Unit']],
      body: [
        ['Hemoglobin', '12.5', '13.0 - 17.0', 'g/dL'],
        ['RBC Count', '5.2', '4.5 - 5.5', 'mill/cumm'],
        ['Packed Cell Volume', '57.5', '40 - 50', '%'],
        ['Mean Corpuscular Volume', '87.75', '83 - 101', 'fL'],
        ['Platelet Count', '150000', '150000 - 410000', 'cumm'],
        // Add additional rows as needed
      ],
    });

    doc.text('****End of Report****', 105, doc.internal.pageSize.height - 20, { align: 'center' });

    doc.save(`Lab_Report_${labRequest.appointmentId}.pdf`);

    setPdfGenerated(true);
    setTimeout(() => setPdfGenerated(false), 3000); 
  };

  return (
    <>
      <Aside />
      <div className="container mx-auto p-6 space-y-8">
        <h2 className="text-3xl font-semibold text-yellow-600 mb-4">All Lab Reports</h2>

        {pdfGenerated && <p className="text-green-600">PDF generated and saved successfully!</p>}

        {labRequests.length > 0 ? (
          <ul className="space-y-6">
            {labRequests.map((request, index) => (
              <li
                key={index}
                className="p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl transition duration-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg text-blue-600">
                      Appointment ID: {request.appointmentId}
                    </h3>
                    <p>Status:
                      <span
                        className={`font-bold ${request.status === 'Completed' ? 'text-green-600' : 'text-red-600'}`}
                      >
                        {request.status}
                      </span>
                    </p>
                    <p>Sample Type: {request.sampleType}</p>
                    <p>Charge: ${request.charge}</p>
                    <p>Additional Details: {request.additionalDetails}</p>
                    {request.status === 'Completed' && request.result && (
                      <p className="mt-2 font-bold text-green-600">Result: {request.result}</p>
                    )}
                  </div>

                  {request.status === 'Pending' && (
                    <div>
                      <button
                        onClick={() => {
                          setCurrentAppointmentId(request.appointmentId);
                          setResult('');
                        }}
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                      >
                        Submit Result
                      </button>
                    </div>
                  )}
                </div>
                {currentAppointmentId === request.appointmentId && request.status === 'Pending' && (
                  <div className="mt-4">
                    <textarea
                      value={result}
                      onChange={(e) => setResult(e.target.value)}
                      className="p-2 w-full border border-gray-300 rounded-md"
                      placeholder="Enter the test result"
                    />
                    <button
                      onClick={() => handleSubmitResult(request.appointmentId)}
                      className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Result'}
                    </button>
                  </div>
                )}
              </li>
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
