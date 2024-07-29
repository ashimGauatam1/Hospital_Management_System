import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DoctorPage = () => {
  const { doctorName } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        // Fetch doctor's details
        const doctorResponse = await axios.get(`http://localhost:8080/api/doctors/${doctorName}`);
        setDoctor(doctorResponse.data);

        // Fetch appointments for the doctor
        const appointmentsResponse = await axios.get(`http://localhost:8080/api/appointments/doctor/${doctorName}`);
        setAppointments(appointmentsResponse.data);
      } catch (error) {
        console.error("Error fetching doctor's data or appointments:", error);
      }
    };

    fetchDoctor();
  }, [doctorName]);

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{doctor.name}</h1>
      <p><strong>Specialty:</strong> {doctor.specialty}</p>
      <p><strong>Contact:</strong> {doctor.contact}</p>

      <h2>Appointments</h2>
      {appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment._id}>
              <strong>Name:</strong> {appointment.name}<br />
              <strong>Email:</strong> {appointment.email}<br />
              <strong>Phone:</strong> {appointment.phone}<br />
              <strong>Date:</strong> {appointment.date}<br />
              <strong>Time:</strong> {appointment.time}<br />
              <strong>Problem:</strong> {appointment.problem}<br />
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments found for this doctor.</p>
      )}
    </div>
  );
};

export default DoctorPage;
