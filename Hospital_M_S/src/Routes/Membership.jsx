import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Alert from "../Components/Alert";
import { Link } from "react-router-dom";
const Membership = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  const Enamount=150;
  const Preamount=49;
  const Buamount=99;
  return (
    <div>
      <Alert/>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1
              data-aos="fade-left"
              className="sm:text-4xl text-3xl font-bold title-font mb-2 text-cyan-600"
            >
              Membership Plans
            </h1>
            <p
              data-aos="fade-right"
              className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500"
            >
              Choose a plan that fits your healthcare needs. We offer both Free
              and Premium plans with Monthly and Annual billing options.
            </p>
            <div
              data-aos="fade-up"
              className="flex mx-auto border-2 border-cyan-600 rounded overflow-hidden mt-6"
            >
              <button className="py-1 px-4 bg-cyan-600 text-white focus:outline-none">
                Monthly
              </button>
              <button className="py-1 px-4 focus:outline-none">Annually</button>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 " data-aos="fade-down">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  BASIC
                </h2>
                <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  Free
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Access to Book Appointments
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Basic Health Tips
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Limited Access to Specialists
                </p>
                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  Choose Plan
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Access basic medical services and appointment booking.
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-cyan-600 flex flex-col relative overflow-hidden">
                <span className="bg-cyan-700 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span>
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  PREMIUM
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$49</span>
                  <span className="text-lg ml-1 font-normal text-gray-500">
                    /mo
                  </span>
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Unlimited Appointments
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Priority Access to Specialists
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Access to Premium Health Resources
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Exclusive Discounts on Services
                </p>
                <Link to={`/checkout?amount=${Preamount}`} className="flex items-center mt-auto text-white bg-cyan-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-cyan-600 rounded">
                  Choose Plan
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
                <p className="text-xs text-gray-500 mt-3">
                  Get the most out of our healthcare services with priority
                  access and more.
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  BUSINESS
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$99</span>
                  <span className="text-lg ml-1 font-normal text-gray-500">
                    /mo
                  </span>
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Health Coverage for Teams
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  On-site Medical Services
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Custom Health Plans
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Dedicated Account Manager
                </p>
                <Link to={`/checkout?amount=${Buamount}`} className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  Choose Plan
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
                <p className="text-xs text-gray-500 mt-3">
                  Ideal for companies and organizations seeking comprehensive
                  health services.
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  ENTERPRISE
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$150</span>
                  <span className="text-lg ml-1 font-normal text-gray-500">
                    /mo
                  </span>
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  All Business Plan Features
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  24/7 Healthcare Access
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Customized Wellness Programs
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Regular Health Assessments
                </p>
                <Link to={`/checkout?amount=${Enamount}`} 
       className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  Choose Plan
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
                <p className="text-xs text-gray-500 mt-3">
                  Perfect for large enterprises requiring extensive healthcare
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto p-8">
        <h1
          data-aos="zoom-in"
          className="text-3xl font-bold text-center text-cyan-600 mb-8"
        >
          Payment Options
        </h1>
        <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Credit/Debit Card Option */}
          <div data-aos="zoom-in-left" className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <img
                src="http://bptccul.com/wp-content/uploads/2021/12/Visa.png"
                alt="Credit/Debit Card"
                className="w-20 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">Credit/Debit Card</h2>
              <p className="text-gray-600 mb-4">
                Pay securely using your credit or debit card.
              </p>
              <button className="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700">
                Choose Card
              </button>
            </div>
          </div>

          {/* PayPal Option */}
          <div className="w-full md:w-1/3 p-4" data-aos="zoom-in-left">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <img
                src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15.fit_scale.size_1028x578.v1602794215.png"
                alt="PayPal"
                className="w-20 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">PayPal</h2>
              <p className="text-gray-600 mb-4">
                Use your PayPal account for a fast and secure payment.
              </p>
              <button className="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700">
                Choose PayPal
              </button>
            </div>
          </div>

          {/* Bank Transfer Option */}
          <div className="w-full md:w-1/3 p-4" data-aos="zoom-in-left">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <img
                src="https://img.freepik.com/free-vector/bank-building-with-cityscape_1284-52265.jpg?w=360&t=st=1721757548~exp=1721758148~hmac=de9a03eb2b336e760bf282a81b513c67a2b52e3ffa82086ef00234e47622e86e"
                alt="Bank Transfer"
                className="w-20 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">Bank Transfer</h2>
              <p className="text-gray-600 mb-4">
                Transfer directly from your bank account.
              </p>
              <button className="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700">
                Choose Bank Transfer
              </button>
            </div>
          </div>
          {/* esewa Transfer Option */}
          <div className="w-full md:w-1/3 p-4" data-aos="zoom-in-left">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <img
                src="https://cdn.esewa.com.np/ui/images/esewa_og.png?500"
                alt="Bank Transfer"
                className="w-20 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">E sewa</h2>
              <p className="text-gray-600 mb-4">
                Transfer from your esewa account for national use.
              </p>
              <button className="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700">
                Choose Esewa
              </button>
            </div>
          </div>
          {/* khalti Transfer Option */}
          <div className="w-full md:w-1/3 p-4" data-aos="zoom-in-right">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <img
                src="https://cdn-images-1.medium.com/max/1197/1*xqUNa2hUbiis04Z2XTr4Jw.png"
                alt="Bank Transfer"
                className="w-20 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">Khalti</h2>
              <p className="text-gray-600 mb-4">
                Transfer directly from your khalti account.One of the most used
                method to tranfer funds.
              </p>
              <button className="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700">
                Choose Khalti
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
