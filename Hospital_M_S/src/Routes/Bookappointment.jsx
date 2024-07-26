import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import doctors from "../assets/objects/Doctor";

const BookAppointment = ({ isAuthenticated, authToken, ismember }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    problem: "",
  });

  const fetchUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/appoint/register",
        data,
        {
          headers: { "auth-token": authToken },
        }
      );
      if (response.status === 200) {
        setData(response.data);
        window.location.reload();
        console.log("Appointment booked successfully");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while booking the appointment");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser();
  };

  return (
    <>
      {!isAuthenticated ? (
        <>
      <div className="py-20 flex justify-center items-center min-h-screen">
      <img
      data-aos='zoom-in'
        className="w-50 h-50"
        src="https://img.freepik.com/free-vector/403-error-forbidden-with-police-concept-illustration_114360-1904.jpg?t=st=1722009703~exp=1722013303~hmac=f8743ec79b03629cd8f7be7a5632551c77d7ed3ac0ce8847be37ac115ee55a67&w=360"
        alt="Error 403 Forbidden"
      />
    </div>
      <h1  className="-mt-20 text-center font-serif font-extrabold text-cyan-800">PLEASE LOGIN/SIGN UP FIRST</h1>
    </>
      ) : (
        <>
          <div className="py-20 flex justify-around">
            <img
              data-aos="zoom-out"
              className="w-50 h-45"
              src="https://img.freepik.com/premium-vector/online-consultation-feedback-concept-laptop-with-picture-male-pharmacist-with-medicines-his-hand_531064-7379.jpg?w=740"
              alt="Consultation"
            />
            <img
              data-aos="fade-down"
              className="w-50 h-45"
              src="https://img.freepik.com/premium-vector/turn-down-icon_1134231-5824.jpg?w=360"
              alt="Turn Down"
            />
          </div>
          <h4
            data-aos="fade-up"
            className="-mt-20 mb-5 text-3xl font-bold text-center text-cyan-900"
          >
            SCROLL TO BOOK APPOINTMENT
          </h4>
          <div className="min-h-screen bg-gray-100 py-5">
            <div
              data-aos="flip-up"
              className="text-3xl font-bold text-center text-cyan-600 mb-8 mt-20"
            >
              Here You can Book an Appointment With Random Doctors
            </div>
            <div
              data-aos="fade-left"
              className="text-center italic -mt-8 mb-5 justify-around text-gray-500"
            >
              If you have taken any memberships, you can select your desired
              doctor and book an appointment
            </div>
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
                data-aos="flip-down"
              >
                <div className="text-lg text-cyan-800 font-semibold">
                  Please Read the following points before booking an appointment
                </div>
                <ul className="list-disc list-inside space-y-4">
                  <li className="text-sm text-gray-700 font-bold">
                    Please make sure that the details are correct before booking
                    an appointment
                  </li>
                  <li className="text-sm text-gray-700 font-bold">
                    Your appointment will be confirmed within 15 minutes
                  </li>
                  <li className="text-sm text-gray-700 font-bold">
                    Make sure that the appointment time will vary
                  </li>
                  <li className="text-sm text-gray-700 font-bold">
                    You will be informed about your appointment time by phone
                    and mail, so please be on time
                  </li>
                  <li className="text-sm text-gray-700 font-bold">
                    Booking an appointment is free, but you will be charged for
                    the services
                  </li>
                  <li className="text-sm text-gray-700 font-bold">
                    If you cancel the appointment, you will not be charged, but
                    make sure to inform us at least 2 hours before.
                  </li>
                </ul>
                <div>
                  <h4 className="text-lg text-black mb-2 font-bold">
                    Enter Your Details Carefully
                  </h4>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-cyan-600 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Your Full Name"
                    required
                    maxLength={20}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-cyan-600 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Your Phone Number"
                    required
                    maxLength={10}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Your email here"
                    required
                    maxLength={50}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="doctor"
                    className="block text-cyan-700 text-sm font-medium mb-2"
                  >
                    Choose a Doctor
                  </label>
                  <select
                    id="doctor"
                    name="doctor"
                    value={data.doctor}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  >
                    <option value="" disabled>
                      Select a doctor
                    </option>
                    {doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.name}>
                        {doctor.name} - {doctor.specialty}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Appointment Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Appointment Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="problem"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Type Your Problem Here
                  </label>
                  <input
                    name="problem"
                    type="text"
                    id="problem"
                    placeholder="Type Your Problem Here"
                    required
                    onChange={handleChange}
                    className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-800"
                  >
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}{" "}
    </>
  );
};

export default BookAppointment;
