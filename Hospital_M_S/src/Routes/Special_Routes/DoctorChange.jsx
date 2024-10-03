"use client"

import { useEffect, useState } from "react"
import { Plus, Trash } from "lucide-react"
import { Link } from "react-router-dom"
import axios from "axios"

const DoctorChange = () => {
  const [doctors, setDoctors] = useState([])

  const [newDoctor, setNewDoctor] = useState({
    name: "",
    speciality: "",
    email: "",
    phone: "",
    photo: "",
  })
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  const handleInputChange = (e) => {
    setNewDoctor({ ...newDoctor, [e.target.name]: e.target.value })
  }

  const handleRegister = () => {
    setDoctors([...doctors, { id: doctors.length + 1, ...newDoctor, photo: "https://via.placeholder.com/50" }])
    setNewDoctor({ name: "", speciality: "", email: "", phone: "", photo: "" })
    setShowRegisterModal(false)
  }

  
  const handleDelete = (id) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== id))
  }

  useEffect(()=>{
    const fetchDoctors=async()=>{
        const response=await axios.get("http://localhost:8080/api/v1/doctor/getdoctors")
        setDoctors(response.data.data)
    }
    fetchDoctors()
  },[])

  return (
    <div>
      <header className="fixed right-0 top-0 left-60 bg-purple-100 py-3 px-4 h-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <button type="button" className="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition">
                <span className="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                  </svg>
                </span>
                <span className="text-sm">Home page</span>
              </button>
            </div>
            <div className="text-lg font-bold font-serif">Doctors</div>
            <div>
              <button type="button" className="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition">
                <span className="text-sm">Book</span>
                <span className="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow">
            <div className="px-4 py-6 text-center border-b">
              <h1 className="text-xl font-bold leading-none"><span className="text-teal-700 font-bold">City Hospital</span> Staff</h1>
            </div>
            <div className="p-4">
              <ul className="space-y-1">
                <li>
                  <a href="javascript:void(0)" className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                      <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                    </svg>Home
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                    </svg>Pharmacy
                  </a>
                </li>
                <li>
                  <Link to={'/doctorchange'} className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                      <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7A2 2 0 0 1 2.825 3h6.793L9.828 3zm1.415 1.418l-.586-.586H2.825a1 1 0 0 0-.998.867l.636 7a1 1 0 0 0 1 .867h10.349a1 1 0 0 0 1-1.117l-.636-7a1 1 0 0 0-.867-.998h-3.982l-.586.586a1 1 0 0 1-1.415 0zM6 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4-3a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                    </svg>Doctors
                  </Link>
                </li>
                <li>
                  <a href="javascript:void(0)" className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                    </svg>Staff
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex flex-col min-h-screen bg-gradient-to-r from-teal-400 to-indigo-500 py-20">
        {showRegisterModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Register New Doctor</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                <input
                  type="text"
                  name="name"
                  value={newDoctor.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="border p-2 mb-4 w-full"
                  required
                />
                <input
                  type="text"
                  name="speciality"
                  value={newDoctor.speciality}
                  onChange={handleInputChange}
                  placeholder="Speciality"
                  className="border p-2 mb-4 w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={newDoctor.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="border p-2 mb-4 w-full"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={newDoctor.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="border p-2 mb-4 w-full"
                  required
                />
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                    onClick={() => setShowRegisterModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-teal-600 text-white px-4 py-2 rounded"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="flex-grow bg-white rounded-lg shadow-lg overflow-hidden mt-4 ml-64 mr-4">
          <div className="flex items-center justify-between p-4 bg-teal-600 text-white rounded-t-lg shadow-md">
            <h2 className="text-2xl font-bold">Doctors List</h2>
            <button
              onClick={() => setShowRegisterModal(true)}
              className="text-white hover:bg-teal-500 transition-colors p-2 rounded flex items-center shadow-sm"
            >
              <Plus className="w-5 h-5 mr-1" />
              Register Doctor
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-gray-700">
              <thead>
                <tr className="bg-purple-400">
                  <th className="p-4">S.N.</th>
                  <th className="p-4">Doctor ID</th>
                  <th className="p-4">Photo</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Speciality</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor, index) => (
                  <tr key={doctor.id} className="border-b border-gray-300 transition-transform duration-200 transform hover:bg-teal-100">
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{doctor.doctorid}</td>
                    <td className="p-4">
                      <img src={doctor.photo} alt={doctor.name} className="w-12 h-12 rounded-full" />
                    </td>
                    <td className="p-4">{doctor.name}</td>
                    <td className="p-4">{doctor.specialization}</td>
                    <td className="p-4">{doctor.email}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleDelete(doctor.id)}
                        className="text-red-600 hover:text-red-500 transition-colors transform hover:scale-105"
                      >
                        <Trash className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorChange
