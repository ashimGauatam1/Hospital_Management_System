import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Routes/Home';
import Signup from './Routes/Signup';
import Navbar from './Components/Navbar';
import Membership from './Routes/Membership';
import BookAppointment from './Routes/Bookappointment';
import Login from './Routes/Login';
import Profile from './Routes/Profile';
import Contact from './Routes/Contact';
import About from './Routes/About';

function App() {
  const [authToken, setAuthToken] = useState(null);
  // const handlelogin=(authToken)=>{
  //   setAuthToken(authToken);
  // }
    useEffect(()=>{
     const token= localStorage.getItem('token');
      setAuthToken(token);
    },[])  
  
  const handleLogout = () => {
    setAuthToken(null);
    localStorage.removeItem('token');
  };
  setTimeout(()=>{
    handleLogout();
  },[24*60*60*1000])
  const isAuthenticated = !!authToken;
  return (
    <BrowserRouter>
    <Navbar isAuthenticated={isAuthenticated}  handleLogout={handleLogout}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/membership' element={<Membership />}/>
        <Route path='/appointment' element={<BookAppointment authToken={authToken} isAuthenticated={isAuthenticated}/>}/>
        <Route path='/profile' element={<Profile authToken={authToken}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
