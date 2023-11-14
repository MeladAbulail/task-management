import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black w-full p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-2xl">Agriadventure</div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-black focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-black hover:text-gray-300 transition duration-300">Home</a>
          <a href="#" className="text-black hover:text-gray-300 transition duration-300">About</a>
          <a href="#" className="text-black hover:text-gray-300 transition duration-300">Services</a>
          <a href="#" className="text-black hover:text-gray-300 transition duration-300">Contact</a>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#" className="block text-black hover:text-gray-300 transition duration-300">Home</a>
          <a href="#" className="block text-black hover:text-gray-300 transition duration-300">About</a>
          <a href="#" className="block text-black hover:text-gray-300 transition duration-300">Services</a>
          <a href="#" className="block text-black hover:text-gray-300 transition duration-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;