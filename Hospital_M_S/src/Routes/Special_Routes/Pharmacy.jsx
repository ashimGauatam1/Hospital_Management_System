"use client";

import { useState } from "react";
import axios from "axios";
import Alert from "../../Components/Alert";
import { Aside } from "../../Components/aside";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
};

const Pharmacy = () => {
  const [appointmentId, setAppointmentId] = useState("");
  const [appointmentData, setAppointmentData] = useState(null);
  const [medicines, setMedicines] = useState([]);
  const [billAmount, setBillAmount] = useState(0);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/appoint/pharmacy/${appointmentId}`);
      setAppointmentData(response.data.data);
      setMedicines([]);
    } catch (error) {
      Alert('error', 'Appointment not found or an error occurred');
      setAppointmentData(null);
    }
  };

  const addMedicine = () => {
    setMedicines([...medicines, { name: '', quantity: 0, price: 0 }]);
  };

  const handleMedicineChange = (index, field, value) => {
    const updatedMedicines = [...medicines];
    if (field === "quantity") {
      updatedMedicines[index][field] = parseInt(value) || 0; 
    } else if (field === "price") {
      updatedMedicines[index][field] = parseFloat(value) || 0; 
    } else {
      updatedMedicines[index][field] = value; 
    }
    setMedicines(updatedMedicines);
    calculateBill(updatedMedicines);
  };

  const calculateBill = (medicines) => {
    const total = medicines.reduce((sum, medicine) => sum + (medicine.price || 0) * (medicine.quantity || 0), 0);
    setBillAmount(total);
  };

  const handlePrintBill = () => {
    const printContent = document.getElementById("bill");
    const win = window.open("");
    win.document.write(`
      <html>
      <head>
        <title>Print Bill</title>
        <style>
          body { font-family: Arial, sans-serif; }
          .header { text-align: center; }
          .table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          .table th, .table td { border: 1px solid #333; padding: 8px; }
          .table th { background-color: #4CAF50; color: white; }
          .total { font-weight: bold; font-size: 1.2em; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>City Hospital</h1>
          <h2>Pokhara, Baggar</h2>
          <p>Phone: +977-1234567890</p>
          <hr />
          <h2>Bill Receipt</h2>
        </div>
        <p><strong>Patient Name:</strong> ${appointmentData.name}</p>
        <p><strong>Problem:</strong> ${appointmentData.problem}</p>
        <p><strong>Date:</strong> ${formatDate(appointmentData.date)}</p>
        <p><strong>Doctor:</strong> ${appointmentData.doctorName}</p>
        <table class="table">
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${medicines.map(medicine => `
              <tr>
                <td>${medicine.name}</td>
                <td>${medicine.quantity}</td>
                <td>${medicine.price.toFixed(2)}</td>
                <td>${(medicine.price * medicine.quantity).toFixed(2)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <div class="total">Total: Rs${billAmount.toFixed(2)}</div>
        <hr />
        <p>Thank you for visiting City Hospital!</p>
      </body>
      </html>
    `);
    win.document.close();
    win.print();
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen">
      <Aside />
      <div className="flex-1 p-8 bg-gradient-to-r from-green-400 to-blue-500 mx-60 mr-0">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">Pharmacy Management</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Search Appointment by ID</h2>
          <input
            type="text"
            id="appointmentId"
            name="appointmentId"
            value={appointmentId}
            onChange={(e) => setAppointmentId(e.target.value)}
            placeholder="Enter Appointment ID"
            className="border p-2 mb-4 w-full rounded shadow focus:border-green-500 focus:ring focus:ring-green-200 transition"
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition"
          >
            Search
          </button>
        </div>

        {appointmentData && (
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Appointment Details</h2>
            <p><strong>Patient Name:</strong> {appointmentData.name}</p>
            <p><strong>Problem:</strong> {appointmentData.problem}</p>
            <p><strong>Date:</strong> {formatDate(appointmentData.date)}</p>
            <p><strong>Doctor:</strong> {appointmentData.doctorName}</p>
            <p><strong>Medicines:</strong> {appointmentData.medicine}</p>

            <h3 className="text-lg font-semibold mt-4">Medicines</h3>
            <table className="min-w-full mt-2 border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Medicine Name</th>
                  <th className="border border-gray-300 p-2">Quantity</th>
                  <th className="border border-gray-300 p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {medicines.map((medicine, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        placeholder="Medicine Name"
                        value={medicine.name}
                        onChange={(e) => handleMedicineChange(index, "name", e.target.value)}
                        className="border p-1 rounded w-full focus:border-green-500 focus:ring focus:ring-green-200 transition"
                      />
                    </td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="number"
                        placeholder="Quantity"
                        value={medicine.quantity || ''}
                        onChange={(e) => handleMedicineChange(index, "quantity", e.target.value)}
                        className="border p-1 rounded w-full focus:border-green-500 focus:ring focus:ring-green-200 transition"
                      />
                    </td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="number"
                        placeholder="Price"
                        value={medicine.price || ''}
                        onChange={(e) => handleMedicineChange(index, "price", e.target.value)}
                        className="border p-1 rounded w-full focus:border-green-500 focus:ring focus:ring-green-200 transition"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={addMedicine} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition mb-4 mt-4">
              Add Medicine
            </button>
            <h3 className="text-lg font-semibold mt-4">Total Bill: Rs.{billAmount.toFixed(2)}</h3>
            <button
              onClick={handlePrintBill}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition"
            >
              Print Bill
            </button>
            
          </div>
        )}

        {appointmentData && (
          <div id="bill" className="hidden"></div>
        )}
      </div>
    </div>
  );
};

export default Pharmacy;
