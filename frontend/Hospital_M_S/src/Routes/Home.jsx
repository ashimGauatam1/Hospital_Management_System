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
       {/* Events */}
       
       <section className="text-gray-600 body-font">
        <div className= 'text-center text-cyan-600 text-3xl font-semibold -mt-5'>Doctor's On Visit</div>
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-wrap -mx-4 -my-8">
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
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
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
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
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
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
    </div>
  )
}

export default Home
