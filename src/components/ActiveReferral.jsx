import React from 'react';
import {
    BuildingOfficeIcon,
    MapPinIcon,
    CurrencyDollarIcon,
    CheckBadgeIcon
} from '@heroicons/react/24/outline';

const ActiveReferral = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full animate-fade-in flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">Featured Referral</h3>
                    <p className="text-sm text-gray-500">Based on your profile</p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Active
                </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-blue-200 shadow-lg">
                    L
                </div>
                <div>
                    <h4 className="font-bold text-lg text-gray-900">Senior Frontend Engineer</h4>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <BuildingOfficeIcon className="w-4 h-4" />
                        <span>Linear</span>
                        <span className="text-gray-300">•</span>
                        <MapPinIcon className="w-4 h-4" />
                        <span>Remote / San Francisco</span>
                    </div>
                </div>
            </div>

            <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-purple-50 rounded text-purple-600">
                        <CheckBadgeIcon className="w-4 h-4" />
                    </div>
                    <div>
                        <span className="block text-sm font-medium text-gray-900">Requirements</span>
                        <p className="text-xs text-gray-500">React, TypeScript, Tailwind, WebGL</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-purple-50 rounded text-purple-600">
                        <CurrencyDollarIcon className="w-4 h-4" />
                    </div>
                    <div>
                        <span className="block text-sm font-medium text-gray-900">Salary Range</span>
                        <p className="text-xs text-gray-500">$140k - $220k + Equity</p>
                    </div>
                </div>
            </div>

            <div className="mt-auto">
                <button className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl shadow-lg shadow-gray-200 transition-all hover:-translate-y-0.5 active:translate-y-0">
                    Apply with Referral
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">Referral via CTO</p>
            </div>
        </div>
    );
};

export default ActiveReferral;
