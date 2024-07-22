import React from 'react'
import Stat from '../Components/Stat'
import Gallery from '../Components/Gallery'

const Home = () => {
  return (
    <div>
      <section className="text-gray-600 body-font -mt-20  "  >
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
           <img className="rounded-full lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" src="https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?t=st=1721566225~exp=1721569825~hmac=8771044c1976c6ba048d3a203ed71459945e98dff5ad0af1e3600b38675de971&w=740" alt="Image" />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-600">Your Path To Health</h1>
            <p className="mb-8 leading-relaxed italic ">Nourish your body with wholesome foods, embrace the power of movement, and cultivate a balanced mind. Each day is a step towards a healthier you. Prioritize sleep, stay hydrated, and connect with nature. Let your wellness journey be fueled by self-love and determination. Small changes lead to big results – choose to thrive.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg">Book Appointment</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">Your Health</button>
            </div>
          </div>
        </div>
      </section>
      <Gallery/>
       <Stat/>
    </div>
  )
}

export default Home
