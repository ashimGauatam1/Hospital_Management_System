import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import doctors from "../assets/objects/Doctor";
import Alert from "../Components/Alert";

const BookAppointment = ({ isAuthenticated, authToken, ismember }) => {
  const [type, SetType] = useState("");
  const [message, setMessage] = useState("");
  const [alerts, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    doctorName: "",
    doctorId: "",
    date: "",
    age: "",
    time: "",
    problem: "",
  });

  const getRandomDoctor = () => {
    const randomIndex = Math.floor(Math.random() * doctors.length);
    const randomDoctor = doctors[randomIndex];
    return {
      name: randomDoctor.name,
      id: randomDoctor.id,
    };
  };

  const fetchUser = async () => {
    setLoading(true);

    try {
      const appointmentData = {
        ...data,
        doctorName: data.doctorName || getRandomDoctor().name,
        doctorId: data.doctorId || getRandomDoctor().id,
      };

      const response = await axios.post(
        "http://localhost:8080/api/appoint/register",
        appointmentData,
        {
          headers: { "auth-token": authToken },
        }
      );

      if (response.status === 200) {
        setData(response.data);
        SetType("success");
        setMessage(
          "Appointment booked successfully. You will be informed further through mail and phone."
        );
        setAlert(true);
      } else {
        SetType("danger");
        setMessage("Something went wrong.");
        setAlert(true);
      }
    } catch (error) {
      console.error(error);
      SetType("danger");
      setMessage("An error occurred while booking the appointment.");
      setAlert(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "doctor") {
      const selectedDoctor = doctors.find((doctor) => doctor.name === value);
      setData({
        ...data,
        doctorName: selectedDoctor.name,
        doctorId: selectedDoctor.id,
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser();
  };

  return (
    <>
      {!isAuthenticated ? (
        <>
          {alerts && (
            <div className="ml-5 py-20 -mb-20">
              <Alert
                type={type}
                message={message}
                onClose={() => setAlert(false)}
              />
            </div>
          )}
          <div className="py-20 flex justify-center items-center min-h-screen">
            <img
              data-aos="zoom-in"
              className="w-50 h-50"
              src="https://img.freepik.com/free-vector/403-error-forbidden-with-police-concept-illustration_114360-1904.jpg?t=st=1722009703~exp=1722013303~hmac=f8743ec79b03629cd8f7be7a5632551c77d7ed3ac0ce8847be37ac115ee55a67&w=360"
              alt="Error 403 Forbidden"
            />
          </div>
          <h1 className="-mt-20 text-center font-serif font-extrabold text-cyan-800">
            PLEASE LOGIN/SIGN UP FIRST
          </h1>
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
                    Booking will be considered as confirmed and you will be
                    notified further on the given contact details
                  </li>
                  <li className="text-sm text-gray-700 font-bold">
                    You will be able to see the appointments on the doctor’s
                    profile
                  </li>
                </ul>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-600 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Your Full Name"
                    required
                    maxLength={50}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={data.age}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-600 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Your age "
                    required
                    maxLength={2}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={data.phone}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-600 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Your phone number here"
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
                    id="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-600 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Your email here"
                    required
                    maxLength={50}
                    onChange={handleChange}
                  />
                </div>
                {ismember && (
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
                      value={data.doctorName}
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
                )}
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
                    className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-cyan-600 focus:ring-indigo-500 sm:text-sm"
                    required
                    onChange={handleChange}
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
                    className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-cyan-600 focus:ring-indigo-500 sm:text-sm"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="problem"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Problem Description
                  </label>
                  <textarea
                    name="problem"
                    id="problem"
                    className="mt-1 block w-full h-24 rounded-md border-gray-300 shadow-sm focus:border-cyan-600 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Describe your problem here"
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  {loading ? "Booking..." : "Book Appointment"}
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BookAppointment;
