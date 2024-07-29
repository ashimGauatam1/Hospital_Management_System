import React from 'react';
import staffs from '../assets/objects/Staffs';

const Staffs = () => {
    return (
        <div className='py-20'>
            <div className="p-6 max-w-auto mx-auto bg-white shadow-lg rounded-lg ml-5">
                <h1 className="text-2xl font-bold mb-6 text-center text-cyan-600">Hospital Staffs</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {staffs.map((staff, index) => (
                        <div key={index} className="relative p-4 border border-gray-300 rounded-lg shadow-md bg-gray-50 transition-transform transform hover:bg-cyan-100 hover:shadow-lg">
                            <img
                                src={staff.image}
                                alt={staff.name}
                                className="w-full h-48 object-cover rounded-t-lg mb-4"
                            />
                            <h2 className="text-xl font-semibold mb-2 text-cyan-600">{staff.name}</h2>
                            <p><strong>Department:</strong> {staff.department}</p>
                            <p><strong>Qualification:</strong> {staff.qualification}</p>
                            <p><strong>Experience:</strong> {staff.experience}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Staffs;
