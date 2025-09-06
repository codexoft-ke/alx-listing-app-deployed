import React from "react";

const Header: React.FC = () => {
    return (
        <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-100 shadow-md">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600 mb-4 md:mb-0">
                MyStayLogo
            </div>

            {/* Search Bar */}
            <div className="flex-grow max-w-md mx-4">
                <input
                    type="search"
                    placeholder="Search accommodations..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-blue-500"
                />
            </div>

            {/* Sign In / Sign Up */}
            <div className="flex space-x-4 items-center">
                <button className="px-4 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
                    Sign In
                </button>
                <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition">
                    Sign Up
                </button>
            </div>

            {/* Accommodation Types */}
            <nav className="mt-4 md:mt-0 flex space-x-4 text-gray-700 text-sm font-medium">
                <span className="cursor-pointer hover:text-blue-600">Rooms</span>
                <span className="cursor-pointer hover:text-blue-600">Mansion</span>
                <span className="cursor-pointer hover:text-blue-600">Countryside</span>
                <span className="cursor-pointer hover:text-blue-600">Apartments</span>
                <span className="cursor-pointer hover:text-blue-600">Villas</span>
            </nav>
        </header>
    );
};

export default Header;
