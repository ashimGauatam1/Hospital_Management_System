import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
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

function App() {
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
    localStorage.removeItem('token');
    localStorage.removeItem('tokenTimestamp');
    localStorage.removeItem('user_type');
  };
  const isAuthenticated = !!authToken;
  const ismember=!!userType;
console.log(userType);
console.log(authToken)
  return (
    <BrowserRouter>
    <Navbar isAuthenticated={isAuthenticated}  handleLogout={handleLogout}/>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
