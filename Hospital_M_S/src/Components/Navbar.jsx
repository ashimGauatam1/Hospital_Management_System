import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Routes/Login';

const Navbar = ({ isAuthenticated, handleLogout }) => {
  const [showLogin, setShowLogin] = useState(false);
  
  return (
    <>
      <div>
        <header className="text-gray-600 body-font fixed w-full bg-white shadow-md z-20 ">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link to={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img 
                src="https://img.freepik.com/free-vector/hospital-illustration-with-green-leafs_1394-713.jpg?t=st=1721709848~exp=1721713448~hmac=85609a8e7bd54ec36582d45e518306abd247a39d041a2c661254c1d7b64c2494&w=360" 
                className="h-10 w-10 rounded-full" 
                alt="City Hospital"
              />
              <span className="ml-3 text-xl">City Hospital</span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link to="/appointment" className="mr-5 hover:text-gray-900">Book Appointment</Link>
              <Link to="/membership" className="mr-5 hover:text-gray-900">Memberships</Link>
              {
                !isAuthenticated ?
                <>
                  <button 
                    onClick={() => setShowLogin(true)} 
                    className="mr-5 hover:text-gray-900"
                  >
                    Login
                  </button>
                  <Link to="/register" className="mr-5 hover:text-gray-900">Sign Up</Link>
                </>
                :
                <button onClick={handleLogout} className="mr-5 hover:text-gray-900">Log Out</button>
              }
            </nav>
            <Link to={'/profile'} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
              Your Profile
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </header>
        {showLogin && <Login setShowLogin={setShowLogin} />}
      </div>
    </>
  );
}

export default Navbar;
