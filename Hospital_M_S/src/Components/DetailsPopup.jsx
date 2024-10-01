import React from 'react';

const DetailsPopup = ({ isOpen, onClose, details }) => {
  if (!isOpen) return null;

  const hasDetails = Array.isArray(details) && details.length > 0;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg max-w-lg mx-4 relative z-10 p-6">
        <h2 className="text-2xl font-semibold mb-4">Appointment Details</h2>

        <div className="max-h-[400px] overflow-y-auto space-y-4">
          {hasDetails ? (
            details.map((item, index) => (
              item.response ? (
                <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
                  <p className="text-lg font-semibold">Doctor Name:</p>
                  <p>{item.doctorname || 'N/A'}</p>
                  <p className="text-lg font-semibold">Date:</p>
                  <p>{item.Date.split('T')[0] || 'N/A'}</p>
                  <p className="text-lg font-semibold">Problem:</p>
                  <p>{item.problem || 'N/A'}</p>
                  <p className="text-lg font-semibold">Response:</p>
                  <p>{item.response || 'N/A'}</p>
                  <p className="text-lg font-semibold">Medicine Used:</p>
                  <p>{item.medicine || 'N/A'}</p>
                </div>
              ) : <p className="text-center text-gray-600">No details available</p> 
            ))
          ) : (
            <p className="text-center text-gray-600">No details available</p>
          )}
        </div>

        <button
          onClick={onClose}
          className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailsPopup;
