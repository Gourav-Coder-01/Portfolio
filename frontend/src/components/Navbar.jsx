import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-6 shadow-md fixed w-full bg-black text-white z-50">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-stroke hover:scale-105 duration-200">Gourav</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-bold">
        <li>
          <Link to="home" smooth={true} duration={500} spy={true} activeClass="text-green-500"
            className="cursor-pointer hover:text-yellow-400 duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} spy={true} activeClass="text-green-500"
            className="cursor-pointer hover:text-yellow-400 duration-200">
            About
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} duration={500} spy={true} activeClass="text-green-500"
            className="cursor-pointer hover:text-yellow-400 duration-200">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} spy={true} activeClass="text-green-500"
            className="cursor-pointer hover:text-yellow-400 duration-200">
            Contact
          </Link>
        </li>
      </ul>

      {/* Desktop CTA */}
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="hidden md:inline-block bg-linear-to-r from-blue-400 to-purple-500 cursor-pointer hover:shadow-[0_0_5px_4px_yellow] hover:scale-105 duration-200 px-4 py-2 rounded"
      >
        Connect with me
      </Link>

      {/* Mobile Hamburger */}
      <div className="md:hidden z-50">
        {isOpen ? (
          <FaTimes size={28} onClick={() => setIsOpen(false)} className="cursor-pointer" />
        ) : (
          <FaBars size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center gap-8 font-bold text-2xl">
          <li>
            <Link to="home" smooth={true} duration={500} spy={true} activeClass="text-green-500"
              onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-green-500 duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} spy={true} activeClass="text-green-500"
              onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-green-500 duration-200">
              About
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500} spy={true} activeClass="text-green-500"
              onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-green-500 duration-200">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} spy={true} activeClass="text-green-500"
              onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-green-500 duration-200">
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="bg-linear-to-r from-blue-400 to-purple-500 cursor-pointer hover:shadow-[0_0_5px_4px_yellow] hover:scale-105 duration-200 px-4 py-2 rounded"
            >
              Connect with me
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
