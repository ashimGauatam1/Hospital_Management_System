"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Alert from "../../Components/Alert";

const Pharmacy = () => {
  const [appointmentId, setAppointmentId] = useState("");
  const [appointmentData, setAppointmentData] = useState(null);
  const [billAmount, setBillAmount] = useState(0);
  const [medicines, setMedicines] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/appoint/pharmacy/${appointmentId}`);
      // setAppointmentData(response.data);
      // setMedicines(response.data.medicines);
      // calculateBill(response.data.medicines);
      console.log(response.data.da);
      console.log(response);
    } catch (error) {
      Alert('error', 'Appointment not found or an error occurred');
      setAppointmentData(null);
      setMedicines([]);
      setBillAmount(0);
    }
  };

  const calculateBill = (medicines) => {
    const total = medicines.reduce((sum, medicine) => sum + medicine.price * medicine.quantity, 0);
    setBillAmount(total);
  };

  const handlePrintBill = () => {
    const printContent = document.getElementById("bill");
    const win = window.open("");
    win.document.write(printContent.innerHTML);
    win.document.close();
    win.print();
  };

  return (
    <div className="p-8 bg-gradient-to-r from-teal-400 to-indigo-500 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-white text-center">Pharmacy Management</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-4">Search Appointment by ID</h2>
        <input
          type="text"
          id="appointmentId"
          name="appointmentId"
          value={appointmentId}
          onChange={(e) => setAppointmentId(e.target.value)}
          placeholder="Enter Appointment ID"
          className="border p-2 mb-4 w-full rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500 transition"
        >
          Search
        </button>
      </div>

      {appointmentData && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Appointment Details</h2>
          <p><strong>Patient Name:</strong> {appointmentData.patientName}</p>
          <p><strong>Appointment Date:</strong> {appointmentData.date}</p>
          <h3 className="text-md font-semibold mt-4">Medicines</h3>
          <ul className="list-disc ml-6">
            {medicines.map((medicine, index) => (
              <li key={index} className="mb-2">
                {medicine.name} - ${medicine.price} x {medicine.quantity}
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mt-4">Total Bill: ${billAmount}</h3>
          <button
            onClick={handlePrintBill}
            className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500 transition"
          >
            Print Bill
          </button>
        </div>
      )}

      {appointmentData && (
        <div id="bill" className="hidden">
          <h1 className="text-center font-bold text-xl">Bill Receipt</h1>
          <p><strong>Patient Name:</strong> {appointmentData.patientName}</p>
          <p><strong>Appointment Date:</strong> {appointmentData.date}</p>
          <h3 className="text-md font-semibold mt-4">Medicines</h3>
          <ul className="list-disc ml-6">
            {medicines.map((medicine, index) => (
              <li key={index}>
                {medicine.name} - ${medicine.price} x {medicine.quantity} = ${medicine.price * medicine.quantity}
              </li>
            ))}
          </ul>
          <h3 className="font-bold mt-4">Total: ${billAmount}</h3>
        </div>
      )}
    </div>
  );
};

export default Pharmacy;
