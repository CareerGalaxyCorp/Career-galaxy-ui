import React, { useEffect, useState } from 'react';
import {
    BellIcon,
    Bars3Icon,
    ChevronDownIcon
} from '@heroicons/react/24/outline';

const Navbar = ({ onMenuClick }) => {
    const [user, setUser] = useState({ fullName: 'User' });

    useEffect(() => {
        try {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && typeof storedUser === 'object') {
                setUser(storedUser);
            }
        } catch (error) {
            console.error("Failed to parse user from localStorage", error);
        }
    }, []);

    return (
        <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="p-2 -ml-2 text-gray-600 rounded-lg lg:hidden hover:bg-gray-100"
                >
                    <Bars3Icon className="w-6 h-6" />
                </button>

                <div>
                    <h1 className="text-lg font-semibold text-gray-800">Welcome back, {(user?.name || user?.fullName || 'User').split(' ')[0]} 👋</h1>
                    <p className="text-xs text-gray-500 hidden sm:block">Here's what's happening with your applications today.</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative p-2 text-gray-500 transition-colors rounded-full hover:bg-gray-100">
                    <BellIcon className="w-6 h-6" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="h-8 w-px bg-gray-200 mx-1 hidden sm:block"></div>

                <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-full hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                    <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.fullName || user?.name || user?.email || 'User'}`}
                        alt="Profile"
                        className="w-8 h-8 rounded-full bg-purple-100"
                    />
                    <div className="hidden sm:block text-left">
                        <p className="text-sm font-medium text-gray-700">{user?.fullName || user?.name || user?.email?.split('@')[0] || 'User'}</p>
                        <p className="text-xs text-gray-500">Frontend Dev</p>
                    </div>
                    <ChevronDownIcon className="w-4 h-4 text-gray-400 hidden sm:block" />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
