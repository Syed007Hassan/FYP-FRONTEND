"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0); // Add state for window width

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize); // Add a resize event listener
    handleResize(); // Initial call to set window width
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 180) {
      setSticky(true);
    } else if (window.scrollY < 180) {
      setSticky(false);
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth); // Update window width on resize
  };

  return (
    <nav
      className={`${sticky
        ? 'fixed top-0 left-0 w-full bg-blue-900 shadow-lg'
        : 'bg-blue-900'
      } p-2 md:p-4 lg:p-6 transition-all duration-300 ease-in-out text-white`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior className="py-3">
          <a>
            <img
              src="/synnc.png"
              alt="Logo"
              className="w-32 h-32"
            />
          </a>
        </Link>
        {windowWidth < 768 ? ( // Show sidebar for screens narrower than 768px
          <div className="lg:hidden">
            <button className="lg:hidden" onClick={toggle}>
              <svg
                className={`w-6 h-6 ${isOpen ? 'text-gray-200' : 'text-gray-100'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
            {isOpen && (
              <div className="fixed right-0 w-64 bg-blue-900 h-full flex flex-col items-center py-4 pt-14">
                <Link href="/" legacyBehavior>
                  <a className="text-white hover:text-gray-200 cursor-pointer py-2">Home</a>
                </Link>
                <Link href="#feature" legacyBehavior>
                  <a className="text-white hover:text-gray-200 cursor-pointer py-2">Features</a>
                </Link>
                <Link href="#service" legacyBehavior>
                  <a className="text-white hover:text-gray-200 cursor-pointer py-2">Services</a>
                </Link>
                <Link href="#about" legacyBehavior>
                  <a className="text-white hover:text-gray-200 cursor-pointer py-2">About</a>
                </Link>
                <Link href="/login" legacyBehavior>
                  <a className="text-white hover:text-gray-200 cursor-pointer py-2">Sign In</a>
                </Link>
                <Link href="/demo" legacyBehavior>
                  <a className="text-white hover:text-gray-200 cursor-pointer py-2">Request a demo</a>
                </Link>
              </div>
            )}
          </div>
        ) : (
          // Show the regular menu for screens wider than 768px
          <div className="text-center flex-grow px-10">
            <ul className="lg:flex lg:space-x-6 text-center">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="hover:text-gray-200 cursor-pointer">Home</a>
                </Link>
              </li>
              <li>
                <Link href="#feature" legacyBehavior>
                  <a className="hover:text-gray-200 cursor-pointer">Features</a>
                </Link>
              </li>
              <li>
                <Link href="#service" legacyBehavior>
                  <a className="hover:text-gray-200 cursor-pointer">Services</a>
                </Link>
              </li>
              <li>
                <Link href="#about" legacyBehavior>
                  <a className="hover:text-gray-200 cursor-pointer">About</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
