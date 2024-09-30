import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import Home from './Routes/Home';
import Signup from './Routes/Signup';
import Navbar from './Components/Navbar';
import Membership from './Routes/Membership';
import BookAppointment from './Routes/Bookappointment';
import Profile from './Routes/Profile';
import Contact from './Routes/Contact';
import About from './Routes/About';
import Payment from './Components/Checkoutform';
import Login from './Routes/Login';
import Otp_verify from './Routes/Otp_verify';
import MedicineSearch from './Routes/DrugInfo';
import Admin from './Routes/Special_Routes/Admin';
import DoctorPage from './Routes/Special_Routes/Doctorpage';
import DoctorLogin from './Routes/Special_Routes/Doctor_login';
import Patient_info from './Routes/Special_Routes/Patient_info';
import Staff from './Routes/Special_Routes/Staff';
import Staffs from './Routes/Staffs';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/admin'&& location.pathname !== '/doctorpage'&& location.pathname !== '/doctorlogin' &&!location.pathname.startsWith('/patient_info/');

  const [authToken, setAuthToken] = useState(null);
  const [userType,SetuserType]=useState("");
  useEffect(() => {
    const token = localStorage.getItem('token');
    const tokenTimestamp = localStorage.getItem('tokenTimestamp');
    const user_type=localStorage.getItem('user_type');
    SetuserType(user_type);
    if (token && tokenTimestamp) {
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000;

      if (now - parseInt(tokenTimestamp) >= oneDay) {
        handleLogout();
      } else {
        setAuthToken(token);
        const remainingTime = oneDay - (now - parseInt(tokenTimestamp));
        setLogoutTimeout(remainingTime);
      }
    }
  }, []);
  const setLogoutTimeout = (timeout) => {
    setTimeout(() => {
      handleLogout();
    }, timeout);
  };
  const handleLogout = () => {
    setAuthToken(null);
    window.location.reload();
    localStorage.removeItem('token');
    localStorage.removeItem('tokenTimestamp');
    localStorage.removeItem('user_type');
    sessionStorage.removeItem('doctor-token');
  };
  const isAuthenticated = !!authToken;
  const ismember=!!userType;
 return (
    <div>
  {showNavbar && <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />}
  <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/membership' element={<Membership />}/>
        <Route path='/appointment' element={<BookAppointment authToken={authToken}  ismember={ismember} isAuthenticated={isAuthenticated}/>}/>
        <Route path='/profile' element={<Profile authToken={authToken} isAuthenticated={isAuthenticated}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/checkout' element={<Payment authToken={authToken} isAuthenticated={isAuthenticated}/>}/>
        <Route element={<Login handleLogout={handleLogout}/>}/>
        <Route path='/otpverification' element={<Otp_verify isAuthenticated={isAuthenticated}/>}/>
        <Route path='/medicineinfo' element={<MedicineSearch/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/staffs' element={<Staffs/>}/>
        <Route path='/doctorpage' element={<DoctorPage handleLogout={handleLogout} />}/>
        <Route path='/doctorlogin' element={<DoctorLogin/>}/>
        <Route path='/staff' element={<Staff/>} />
        <Route path='/patient_info/:id' element={<Patient_info/>}/>
      </Routes>
    </div>
  );
}


const AppWrapper = () => (
  <BrowserRouter>
      <App />
  </BrowserRouter>
);

export default AppWrapper;
