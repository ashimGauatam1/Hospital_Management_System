import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Stat = () => {
  useEffect(()=>{
    AOS.init({
      duration:2000,
      once:true
    })
  },[])
  return (
    <div>
    <section className="text-gray-600 body-font -mt-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 data-aos='fade-left' className="sm:text-3xl text-2xl font-medium title-font mb-4 text-cyan-600">Impact and Performance Overview</h1>
          <p data-aos='fade-right' className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-950">
          It highlights essential figures such as downloads, user engagement, the number of doctors, and operational locations. These statistics offer valuable insights into our growth, effectiveness, and reach, demonstrating the tangible outcomes of our efforts and the scale of our operations. By examining these numbers, we gain a clearer understanding of our achievements and areas for improvement.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center" data-aos='fade-down'>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
              <p className="leading-relaxed">Users</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
  <path d="M6 3a3 3 0 00-3 3v6a3 3 0 003 3 3 3 0 006 0h2a3 3 0 006 0V6a3 3 0 00-3-3h-1a3 3 0 00-3 3v6a3 3 0 11-6 0V6a3 3 0 00-3-3H6zM8 6h2M16 6h2"></path>
</svg>

              <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
              <p className="leading-relaxed">Number of Doctors</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
              <p className="leading-relaxed">Places</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Stat
