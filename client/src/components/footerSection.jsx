// FooterSection.jsx
import { FaMapMarkerAlt } from 'react-icons/fa';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

export default function FooterSection() {
  return (
    <>
      <footer className="bg-black text-white py-6 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">Book My Event</h3>
            <p className="text-sm text-gray-400 mt-2">
               Making every event memorable with seamless planning and vibrant celebrations.
            </p>
            <p className="text-sm text-gray-400 mt-2 text-justify">
              📞<a href="tel:+917983202009" className="font-medium text-white mr-3">+91 7983202009</a>
              📞<a href="tel:+919136980910" className="font-medium text-white">+91 91369 80910</a>
            </p>
            <a
              href="https://maps.app.goo.gl/BYrJWdce9L85dtYv5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 mt-2 flex gap-2">
              <FaMapMarkerAlt className="text-white text-base" />
              <span className="font-medium text-blue-300">NH-09, DELHI-HAPUR HIGHWAY, NCR, Ghaziabad, Uttar Pradesh 201015</span>
            </a>
            <div className=" mt-4 md:text-left flex space-x-4">
              <a
                href="https://wa.me/917983202009?text=Hi%20Book%20My%20Event%20I%20am%20interested%20in%20joining%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-300 hover:text-blue-200 transition"
              >
                Join Us
              </a>
              <a
                href="https://wa.me/917983202009?text=Hi%20Book%20My%20Event%20I%20need%20help%20regarding%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-300 hover:text-blue-200 transition"
              >
                Help
              </a>
              <a
                href="/privacy-policy"
                className="text-sm text-blue-300 hover:text-blue-200 transition"
              >
                Privacy Policy
              </a>
              <a
                href="/admin"
                className="text-sm text-blue-300 hover:text-blue-200 transition gap-4"
              >
                Admin
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 text-2xl">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition"
            >
              <FaInstagram className='bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-md' />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition"
            >
              <FaFacebookF className='text-blue-500' />
            </a>
            <a
              href="https://wa.me/917983202009"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition"
            >
              <FaWhatsapp className='text-green-500' />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition"
            >
              <FaYoutube className='text-red-600'/>
            </a>
          </div>
        </div>


        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Book My Event. All rights reserved.
        </div>
      </footer>
    </>
  );
}