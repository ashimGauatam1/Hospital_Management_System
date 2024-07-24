import React, { useEffect } from 'react';
import image from '../assets/img/about.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    useEffect((()=>{
        AOS.init({duration:2000,
            once:true
        })
    }))
  return (
    <>
        <h1 className="text-3xl font-bold text-center text-cyan-600 py-18">About City Hospital</h1>
      <div data-aos='flip-up' className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h1 data-aos='fade-up' className="text-3xl font-bold text-center text-cyan-600 py-18">About City Hospital</h1>
        <div className="flex flex-col items-center">
          <img
            data-aos='fade-up-left'
            className="w-1/2 h-auto mb-8"
            src={image}
            alt="City Hospital"
          />
          <p className="text-lg text-gray-700 mb-4 text-center">
            Welcome to City Hospital, where our mission is to provide the highest quality healthcare services to our community. We are committed to ensuring the well-being and health of all our patients.
          </p>
          <p className="text-lg text-gray-700 mb-4 text-center">
            Our state-of-the-art facilities and highly trained medical professionals are dedicated to offering comprehensive medical care, ranging from emergency services to specialized treatments.
          </p>
          <p className="text-lg text-gray-700 text-center">
            At City Hospital, we believe in the values of compassion, integrity, and excellence. We are constantly striving to improve our services and make healthcare more accessible to everyone. Thank you for trusting us with your health.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
