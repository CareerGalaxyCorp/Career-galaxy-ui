import React from 'react';
import { PencilSquareIcon, CameraIcon, DocumentArrowUpIcon } from '@heroicons/react/24/outline';

const ProfileOverview = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 animate-fade-in">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Profile Overview</h2>
                    <p className="text-sm text-gray-500">60% Completed</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200">
                    Save Profile
                </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-2 mb-8">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar Section */}
                <div className="w-full md:w-auto flex flex-col items-center gap-3">
                    <div className="relative group">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arshad"
                                alt="Profile"
                                className="w-full h-full object-cover bg-purple-50"
                            />
                        </div>
                        <button className="absolute bottom-1 right-1 p-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition-colors">
                            <CameraIcon className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="text-sm text-gray-500">Allowed *.jpeg, *.jpg, *.png</p>
                </div>

                {/* Details Section */}
                <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                                type="text"
                                defaultValue="+91 98765 43210"
                                className="w-full p-3 bg-gray-50 rounded-lg text-gray-800 border border-transparent focus:border-purple-300 focus:bg-white focus:ring-0 transition-colors outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                            <input
                                type="date"
                                className="w-full p-3 bg-gray-50 rounded-lg text-gray-800 border border-transparent focus:border-purple-300 focus:bg-white focus:ring-0 transition-colors outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Resume</label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                                <DocumentArrowUpIcon className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                                <span className="text-sm text-gray-500">Upload PDF</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Technical Field</label>
                            <select className="w-full p-3 bg-gray-50 rounded-lg text-gray-800 border border-transparent focus:border-purple-300 focus:bg-white focus:ring-0 transition-colors outline-none">
                                <option>Select</option>
                                <option>Frontend Developer</option>
                                <option>Backend Developer</option>
                                <option>Full Stack Developer</option>
                                <option>DevOps Engineer</option>
                                <option>AI/ML Engineer</option>
                                <option>Data Scientist</option>
                            </select>
                        </div>

                        {/* Calculated Age - Could be derived state */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                            <div className="p-3 bg-gray-50 rounded-lg text-gray-500 select-none">
                                25 (Auto-calculated)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileOverview;
