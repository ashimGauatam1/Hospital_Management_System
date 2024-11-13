import React from 'react';

const LabReportForm = ({ report, handleChange }) => {
  return (
    <div>
      <h4 className="font-semibold text-lg mb-4 text-gray-700">Patient Information</h4>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <div>
          <label className="block text-gray-600 font-medium mb-1">Name:</label>
          <input
            name="name"
            value={report.user.name}
            className="w-full p-3 border border-gray-300 rounded bg-gray-100"
            disabled
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">Email:</label>
          <input
            name="email"
            value={report.user.email}
            className="w-full p-3 border border-gray-300 rounded bg-gray-100"
            disabled
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">Appointment ID:</label>
          <input
            name="patientId"
            value={report.appointment.appointmentId}
            className="w-full p-3 border border-gray-300 rounded bg-gray-100"
            disabled
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">Sample Type:</label>
          <input
            name="sampleType"
            value={report.sampleType}
            className="w-full p-3 border border-gray-300 rounded bg-gray-100"
            disabled
          />
        </div>
      </div>

      {report.sampleType === 'blood' && (
        <>
          <h4 className="font-semibold text-lg mb-4 text-gray-700">Blood Sample Analysis</h4>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Sodium:</label>
              <input name="sodium" placeholder="Sodium" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Potassium:</label>
              <input name="potassium" placeholder="Potassium" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Calcium:</label>
              <input name="calcium" placeholder="Calcium" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">AST (SGOT):</label>
              <input name="AST" placeholder="AST (SGOT)" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">ALT (SGPT):</label>
              <input name="ALT" placeholder="ALT (SGPT)" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Alkaline Phosphatase:</label>
              <input name="alkalinePhosphatase" placeholder="Alkaline Phosphatase" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Bilirubin (Direct):</label>
              <input name="bilirubinDirect" placeholder="Bilirubin (Direct)" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Bilirubin (Indirect):</label>
              <input name="bilirubinIndirect" placeholder="Bilirubin (Indirect)" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" />
            </div>
          </div>
        </>
      )}

      {report.sampleType === 'stool' && (
        <>
          <h4 className="font-semibold text-lg mb-4 text-gray-700">Stool Examination</h4>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Color:</label>
              <input name="color" placeholder="Color" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Consistency:</label>
              <input name="consistency" placeholder="Consistency" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">RBCs:</label>
              <input name="RBCs" placeholder="RBCs" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">WBCs:</label>
              <input name="WBCs" placeholder="WBCs" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Parasites:</label>
              <input name="parasites" placeholder="Parasites" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LabReportForm;
