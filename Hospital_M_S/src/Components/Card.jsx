
import React from 'react';

const Card = ({ date, time, problem }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-gray-900 rounded-lg overflow-hidden my-4  " >
      <div className="p-4">
        <h3 className="text-xl font-bold text-cyan-500 text-center">Appointment Details</h3>
        <div className="mt-2">
          <div className="flex justify-between">
            <span className="text-cyan-700 font-bold">Date:</span>
            <span className="text-gray-900 font-bold">{date}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-cyan-700 font-bold">Time:</span>
            <span className="text-gray-900 font-bold">{time}</span>
          </div>
          <div className="mt-2">
            <span className="text-cyan-800 font-bold">Problem:</span>
            <p className="text-gray-900 font-bold mt-1">{problem}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
