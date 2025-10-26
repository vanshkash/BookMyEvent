import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown
  const timeoutRef = useRef(null);

  const handleLinkClick = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 200); // 200ms delay
  };

  return (
    <nav className="bg-black text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src="/images/name.png"
              alt="BookMyEvent Logo"
              className="object-contain h-16 w-auto cursor-pointer md:h-16"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center relative">
            <Link to="/" className="hover:text-yellow-400">Home</Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-yellow-400 focus:outline-none">
                Services
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black rounded-lg shadow-lg z-50">
                  <Link to="/services/educational-events" className="block px-4 py-2 hover:bg-gray-800 transition">Educational Events</Link>
                  <Link to="/services/corporate-events" className="block px-4 py-2 hover:bg-gray-800 transition">Corporate Events</Link>
                  <Link to="/services/social-events" className="block px-4 py-2 hover:bg-gray-800 transition">Social Events</Link>
                  <Link to="/services/entertainment-events" className="block px-4 py-2 hover:bg-gray-800 transition">Entertainment Events</Link>
                  <Link to="/services/public-events" className="block px-4 py-2 hover:bg-gray-800 transition">Public Events</Link>
                </div>
              )}
            </div>

            <Link to="/gallery" className="hover:text-yellow-400">Gallery</Link>
            <Link to="/contact" className="hover:text-yellow-400">Contact Us</Link>
            <Link to="/reviews" className="hover:text-yellow-400">Reviews</Link>
            <Link to="/about" className="hover:text-yellow-400">About Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 right-4 w-3/4 max-w-xs bg-black text-white rounded-lg shadow-xl z-50 p-6 space-y-4 transform transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 max-h-screen' : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'
        }`}
      >
        <Link to="/" onClick={handleLinkClick} className="block text-lg font-semibold hover:text-yellow-400 transition">Home</Link>

        {/* Mobile Services Dropdown */}
        <div>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="block text-lg font-semibold hover:text-yellow-400 w-full text-left transition"
          >
            Services
          </button>
          {servicesOpen && (
            <div className="pl-4 mt-2 space-y-2">
              <Link to="/services/educational-events" onClick={handleLinkClick} className="block hover:text-yellow-400">Educational Events</Link>
              <Link to="/services/corporate-events" onClick={handleLinkClick} className="block hover:text-yellow-400">Corporate Events</Link>
              <Link to="/services/social-events" onClick={handleLinkClick} className="block hover:text-yellow-400">Social Events</Link>
              <Link to="/services/entertainment-events" onClick={handleLinkClick} className="block hover:text-yellow-400">Entertainment Events</Link>
              <Link to="/services/public-events" onClick={handleLinkClick} className="block hover:text-yellow-400">Public Events</Link>
            </div>
          )}
        </div>

        <Link to="/gallery" onClick={handleLinkClick} className="block text-lg font-semibold hover:text-yellow-400 transition">Gallery</Link>
        <Link to="/contact" onClick={handleLinkClick} className="block text-lg font-semibold hover:text-yellow-400 transition">Contact Us</Link>
        <Link to="/reviews" onClick={handleLinkClick} className="block text-lg font-semibold hover:text-yellow-400 transition">Reviews</Link>
        <Link to="/about" onClick={handleLinkClick} className="block text-lg font-semibold hover:text-yellow-400 transition">About Us</Link>
      </div>
    </nav>
  );
}
