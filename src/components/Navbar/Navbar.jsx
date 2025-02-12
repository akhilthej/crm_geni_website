import { useState } from "react";
import { Link } from "react-router-dom";
import CSDLogo_2 from "../../assets/CSDLogo_2.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src={CSDLogo_2} alt="CSDLogo_2" className="w-14 md:w-14 lg:w-14" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/store" className="text-gray-600 hover:text-gray-900">
              Store
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                Marketplace ▾
              </button>
              {isOpen && (
                <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg">
                  <Link
                    to="/marketplace1"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Marketplace 1
                  </Link>
                  <Link
                    to="/marketplace2"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Marketplace 2
                  </Link>
                </div>
              )}
            </div>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/store"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Store
          </Link>
          <Link
            to="/marketplace1"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Marketplace 1
          </Link>
          <Link
            to="/marketplace2"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Marketplace 2
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
