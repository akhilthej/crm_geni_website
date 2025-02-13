import { useState } from "react";
import { Link } from "react-router-dom";
import CSDLogo_2 from "../../assets/CSDLogo_2.svg";
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleDemoLink = () => {
    window.open("https://demo.crmgeni.com/", "_blank");
  };

  const navLinks = [
    { to: "/#features", text: "FEATURES" },
    { to: "/#price-table", text: "PRICE TABLE" },
    { to: "/#contact", text: "CONTACT" },
    { to: "/#faq", text: "FAQ" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-4 left-4 right-4 mx-4 z-50 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={CSDLogo_2}
                alt="CSDLogo_2"
                className="w-14 md:w-14 lg:w-14"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-black hover:text-gray-900 text-[14px]"
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center">
            <button
              onClick={handleDemoLink}
              className="bg-primary-STYLE1 text-[14px] text-black font-bold py-2 px-4 rounded flex items-center"
            >
              <IoMdLogIn className="mr-2 text-xl" />
              Start a Demo
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-gray-900 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={handleLinkClick}
              className="block px-4 py-2 text-[14px] text-black hover:bg-gray-100"
            >
              {link.text}
            </Link>
          ))}
          <button
            onClick={handleDemoLink}
            className="bg-primary-STYLE1 text-[14px] text-black font-bold py-2 px-4 rounded w-full flex items-center justify-center"
          >
            <IoMdLogIn className="mr-2 text-xl" />
            Start a Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;