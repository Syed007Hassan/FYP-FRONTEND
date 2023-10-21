"use cleint"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
const Header = () => {
  useEffect(() => {
    // Get references to the button and the element to toggle (the menu).
    const button = document.querySelector<HTMLButtonElement>(
      '[data-collapse-toggle="navbar-sticky"]'
    );
    const menu = document.getElementById('navbar-sticky');

    if (button && menu) {
      // Add a click event listener to the button.
      button.addEventListener('click', () => {
        // Toggle the visibility of the menu.
        menu.classList.toggle('hidden');
      });
    }
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full h-32 z-20 top-0 left-0 border-b border-gray-200 dark:border-blue-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <Image src="/synnc.png" alt="Logo" width={32} height={50} />
          
          </a>
        </Link>
        <div className="flex md:order-2">
        
            {/* <a href="/login" className="hover:text-gray-200 cursor-pointer border border-gray-300 px-3 py-2 rounded">Login</a> Added border classes */}
          
          <div className="hidden lg:flex items-center space-x-4">
         
            
          </div>
          <a href="/demo">
          <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-4 px-8 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Request A Demo</button>
          

          </a>
          <a href="/login">
          <button type="button" className="ml-5  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-4 px-8 text-center mr-5 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>
          

          </a>
               
          
        </div>
        <div>
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-full md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="#" legacyBehavior>
                <a className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
};
export default Header;