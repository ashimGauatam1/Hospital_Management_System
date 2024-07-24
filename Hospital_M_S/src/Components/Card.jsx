
import React from 'react';

const Card = ({ date, time, problem }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4  " >
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">Appointment Details</h3>
        <div className="mt-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Date:</span>
            <span className="text-gray-900">{date}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-600">Time:</span>
            <span className="text-gray-900">{time}</span>
          </div>
          <div className="mt-2">
            <span className="text-gray-600">Problem:</span>
            <p className="text-gray-900 mt-1">{problem}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
