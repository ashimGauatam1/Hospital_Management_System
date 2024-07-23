import React, { useEffect } from 'react'
import Stat from '../Components/Stat'
import Gallery from '../Components/Gallery'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Components/Footer';
import main from '../assets/img/main.png';

const Home = () => {
  useEffect(()=>{
    AOS.init({
      duration:2000,
      once:true,
    })
  },[])
  return (
    <div>
      <section 
        className="text-gray-900 body-font  relative bg-cover bg-center h-screen" 
        style={{ backgroundImage: "url('https://img.freepik.com/free-vector/hospital-flat-banners_1284-16424.jpg?t=st=1721711796~exp=1721715396~hmac=2b638f3976c6b5b80c63a496f7f8ad38c72d67e601ca866b753a67250e6b6f58&w=360')" }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-1 backdrop-blur-md"></div>
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
           <img className="rounded-full lg:w-2/6 md:w-3/6 w-5/6 mb-10  object-cover object-center" data-aos='zoom-in-up' src={main} alt="Image" />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl   text-cyan-900 font-bold" data-aos='fade-left'>Your Path To Health</h1>
            <p className="mb-8 leading-relaxed italic font-semibold mt-5" data-aos='fade-right'>Nourish your body with wholesome foods, embrace the power of movement, and cultivate a balanced mind. Each day is a step towards a healthier you. Prioritize sleep, stay hydrated, and connect with nature. Let your wellness journey be fueled by self-love and determination. Small changes lead to big results – choose to thrive.</p>
            <div className="flex justify-center -mt-5">
              <button data-aos='fade-up'className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg">Book Appointment</button>
              <button data-aos='fade-down' className="ml-4 inline-flex text-gray-900 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">Your Health</button>
            </div>
          </div>
        </div>
      </section>
      <Gallery/>
       <Stat/>
       {/* Events */}
       
       <section className="text-gray-600 body-font ">
        <div data-aos='zoom-in' className= 'text-center text-cyan-600 text-3xl font-semibold -mt-5'>Doctor's On Visit</div>
  <div className="container px-5 py-20 mx-auto " data-aos='zoom-out-right'>
    <div className="flex flex-wrap -mx-4 -my-8">
      <div className="py-8 px-4 lg:w-1/3 bg-cyan-200">
        <div className="h-full flex items-start ">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-900 pb-2 mb-2 border-b-2 border-white">Jul</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">Cardiologist</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3"> Dr. Ram Chandra Gautam</h1>
            <p className="leading-relaxed mb-5">Specializes in diagnosing and treating diseases of the cardiovascular system, including the heart and blood vessels.</p>
            <a className="inline-flex items-center">
              <img alt="blog" src="https://img.freepik.com/premium-photo/portrait-happy-successful-hindu-doctor-young-medical-practitioner-smiling-looking_321831-17342.jpg?w=740" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900"> Dr. Ram Chandra Gautam</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3 bg-red-200">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none ">
            <span className="text-gray-900 pb-2 mb-2 border-b-2 border-white">Jul</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">20</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">Neurologist</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Dr. Srijana Paudel</h1>
            <p className="leading-relaxed mb-5">Focuses on the diagnosis and treatment of disorders of the nervous system, including the brain, spinal cord, and nerves.</p>
            <a className="inline-flex items-center">
              <img alt="blog" src="https://img.freepik.com/free-photo/portrait-doctor_144627-39388.jpg?t=st=1721666865~exp=1721670465~hmac=cd61c1d957e671648a9840ed365852da59ff5d9a34db3806fc982a99d98650e9&w=360" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">Dr. Srijana Paudel</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3 bg-green-200">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-900 pb-2 mb-2 border-b-2 border-white">Jul</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">22</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">Dermatologist</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Dr. Ashok Kumar Ojha</h1>
            <p className="leading-relaxed mb-5">Specializes in the treatment of skin, hair, and nail disorders, including conditions like acne, eczema, and skin cancer</p>
            <a className="inline-flex items-center">
              <img alt="blog" src="https://img.freepik.com/premium-photo/positive-indian-man-doctor-uniform-holding-clipboard-smiling_116547-84711.jpg?w=740" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">Dr. Ashok Kumar Ojha</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  {/* download */}
  <section className="text-gray-600 body-font ">
  <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <h2 data-aos='zoom-in' className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Together Towards a Healthier Future</h2>
      <h1 data-aos='fade-down' className="md:text-3xl text-xl font-medium title-font text-gray-900">City Hospital</h1>
    </div>
    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
      <button  data-aos='fade-up' className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
        </svg>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
          <span className="title-font font-medium">Google Play</span>
        </span>
      </button>
      <button data-aos='fade-down' className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
          <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
          <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
        </svg>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-600 mb-1">Download on the</span>
          <span className="title-font font-medium">App Store</span>
        </span>
      </button>
    </div>
  </div>
</section>
<Footer/>
    </div>
  )
}

export default Home
