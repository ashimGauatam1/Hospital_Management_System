import React from "react";
import staffs from '../../assets/objects/Staffs.js';
import doctors from "../../assets/objects/Doctor.js";
import { Link } from "react-router-dom";
import { Aside } from "../../Components/aside.jsx";

const Staff = () => {
    return (
        <div className="relative bg-red-50 overflow-hidden max-h-screen">
            <header className="fixed right-0 top-0 left-60 bg-purple-100 py-3 px-4 h-16">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div>
                            <button type="button" className="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition">
                                <span className="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                    </svg>
                                </span>
                                <span className="text-sm">Home page</span>
                            </button>
                        </div>
                        <div className="text-lg font-bold font-serif">Dashboard</div>
                        <div>
                            <button type="button" className="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition">
                                <span className="text-sm">Book</span>
                                <span className="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <Aside/>
            <main className="ml-60 pt-16 max-h-screen overflow-auto">
                <div className="px-6 py-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl p-8 mb-5">
                            <h1 className="text-3xl font-bold text-teal-800 mb-10">City Hospital: Together for a Healthier Community</h1>
                            <div className="flex items-center justify-between">
                                <div className="flex items-stretch">
                                    <div className="text-gray-400 text-xs">Let's get<br />connected</div>
                                    <div className="h-100 border-l mx-4"></div>
                                    <div className="flex flex-nowrap -space-x-3">
                                        <div className="h-9 w-9">
                                            <img className="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random" alt="Avatar"/>
                                        </div>
                                        <div className="h-9 w-9">
                                            <img className="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random" alt="Avatar"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <button type="button" className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16">
                                            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                                        </svg>
                                    </button>
                                    <button type="button" className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                                        Open
                                    </button>
                                </div>
                            </div>

                            <hr className="my-10" />

                            <div className="grid grid-cols-2 gap-x-20">
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Staffs</h2>
                                    <div className="col-span-2">
                                        <div className="p-4 bg-blue-100 rounded-xl text-gray-800">
                                            <div className="font-bold text-xl leading-none">Staff Members</div>
                                            <div className="mt-2">
                                                {staffs.slice(0, 3).map((staff, index) => (
                                                    <div key={index} className="flex items-center justify-between p-2 border-b">
                                                        <div>{staff.name}</div>
                                                        <div>{staff.role}</div>
                                                    </div>
                                                ))}
                                            </div>
                                            <a href="javascript:void(0)" className="text-sm text-pink-700 font-bold hover:underline">See more</a>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Doctors</h2>
                                    <div className="col-span-2">
                                        <div className="p-4 bg-blue-100 rounded-xl text-gray-800">
                                            <div className="font-bold text-xl leading-none">Doctor Members</div>
                                            <div className="mt-2">
                                                {doctors.slice(0, 3).map((doctor, index) => (
                                                    <div key={index} className="flex items-center justify-between p-2 border-b">
                                                        <div>{doctor.name}</div>
                                                        <div>{doctor.specialization}</div>
                                                    </div>
                                                ))}
                                            </div>
                                            <a href="javascript:void(0)" className="text-sm text-pink-700 font-bold hover:underline">See more</a>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Appointments</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                            <div className="flex justify-between">
                                                <div className="text-gray-400 text-xs">Number 10</div>
                                                <div className="text-gray-400 text-xs">4h</div>
                                            </div>
                                            <a href="javascript:void(0)" className="font-bold hover:text-yellow-800 hover:underline">Blog and social posts</a>
                                            <div className="text-sm text-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                                </svg>Deadline is today
                                            </div>
                                        </div>
                                        <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                            <div className="flex justify-between">
                                                <div className="text-gray-400 text-xs">Grace Aroma</div>
                                                <div className="text-gray-400 text-xs">7d</div>
                                            </div>
                                            <a href="javascript:void(0)" className="font-bold hover:text-yellow-800 hover:underline">New campaign review</a>
                                            <div className="text-sm text-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                                </svg>New feedback
                                            </div>
                                        </div>
                                        <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                            <div className="flex justify-between">
                                                <div className="text-gray-400 text-xs">Petz App</div>
                                                <div className="text-gray-400 text-xs">2h</div>
                                            </div>
                                            <a href="javascript:void(0)" className="font-bold hover:text-yellow-800 hover:underline">Cross-platform and browser QA</a>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0)" className="text-sm text-pink-700 font-bold hover:underline">See more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Staff;
