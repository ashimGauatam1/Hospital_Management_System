import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({isStaff}) => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-emerald-400">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src='https://img.freepik.com/free-vector/hospital-illustration-with-green-leafs_1394-713.jpg?t=st=1721709848~exp=1721713448~hmac=85609a8e7bd54ec36582d45e518306abd247a39d041a2c661254c1d7b64c2494&w=360' className='h-10 w-10 rounded-full'/>
        <span className="ml-3 text-xl">City Hospital</span>
      </a>
      <p className="mt-2 text-sm text-white italic font-bold">Quality Care, Trusted Expertise.</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Hospital</h2>
        <nav className="list-none mb-10">
          <li>
            <Link to={'/doctor/login'} className="text-gray-600 hover:text-gray-800">Doctor</Link>
          </li>
          { isStaff =='staff' ?
          <li>
            <Link to={'/staff/'} className="text-gray-600 hover:text-gray-800">Staff</Link>
          </li>
          :<></>}
          
          <li>
            <a className="text-gray-600 hover:text-gray-800"></a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800"></a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800"></a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PROFILE</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">View Profile</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800"></a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800"></a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800"></a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">MEMBERSHIPS AND OTHERS</h2>
        <nav className="list-none mb-10">
          <li>
            <Link to={'/membership'} className="text-gray-600 hover:text-gray-800">Memberships</Link>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Insurance</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800"></a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800"></a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ABOUT CITY HOSPITAL</h2>
        <nav className="list-none mb-10">
          <li>
            <Link to={'/about'} className="text-gray-600 hover:text-gray-800">About Us</Link>
          </li>
          <li>
            <a href="/contact" className="text-gray-600 hover:text-gray-800">Contact Us</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Our location</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Saffs</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-400">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-900 text-sm text-center sm:text-left">© 2024 City Hospital —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-900 ml-1" target="_blank">@Ashim gautam</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-900">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-900">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-900">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-900">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
