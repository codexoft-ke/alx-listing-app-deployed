import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 p-6 text-center">
            <p>&copy; {new Date().getFullYear()} MyStay. All rights reserved.</p>
            <div className="mt-2 text-sm">
                <span className="mr-4 cursor-pointer hover:text-white">Privacy Policy</span>
                <span className="mr-4 cursor-pointer hover:text-white">Terms of Service</span>
                <span className="cursor-pointer hover:text-white">Contact Us</span>
            </div>
        </footer>
    );
};

export default Footer;
