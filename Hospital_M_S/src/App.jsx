import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Routes/Home';
import Signup from './Routes/Signup';
import Navbar from './Components/Navbar';
import Membership from './Routes/Membership';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/membership' element={<Membership />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
