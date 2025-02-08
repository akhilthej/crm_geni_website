import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-50 px-2 sm:px-4 py-2.5 rounded shadow">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Website
          </span>
        </a>
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-400 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0 hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0 hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0 hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0 hover:text-blue-400">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0 hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
