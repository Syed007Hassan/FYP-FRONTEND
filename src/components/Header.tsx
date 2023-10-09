"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Import your DemoPage component


interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [sticky, setSticky] = useState<boolean>(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 180) {
            setSticky(true);
        } else if (window.scrollY < 180) {
            setSticky(false);
        }
    };

    return (
        <nav
            className={`${sticky
                    ? 'fixed top-0 left-0 w-full bg-blue-900 shadow-lg'
                    : 'bg-blue-900'
                } p-4 lg:p-6 transition-all duration-300 ease-in-out text-white`}
        >
            <div className="container mx-auto flex justify-between bg-blue-900 items-center h-16">
                <Link href="/" legacyBehavior className='py-3'>
                    <a>
                        <img src="/synnc.png" alt="Logo" className="w-32 h-32" /> {/* Replace with your logo image path */}
                    </a>
                </Link>
                <div className="text-center flex-grow px-10"> {/* Use flex-grow to push items to the center */}
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
                <div className="flex items-center space-x-4">
                    <button className="lg:hidden" onClick={toggle}>
                        <svg
                            className={`w-6 h-6 ${isOpen ? 'text-gray-200' : 'text-gray-100'
                                }`}
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
                    {/* Add additional options here */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* <a href="/login" className="hover:text-gray-200 cursor-pointer border border-gray-300 px-3 py-2 rounded">Login</a> Added border classes */}
                        <a href="/login" className="hover:text-gray-200 cursor-pointer border border-gray-300 px-6 py-3 rounded-full  hover:bg-blue-600">Sign In</a>
                    </div>
                    <div className="hidden lg:flex items-center space-x-4">
                        <a href="/demopage" className='text-white rounded-full py-3 px-6 border border-gray-300 font-semibold hover:bg-blue-600'>Request a demo</a>
                    </div>
                    <div className="text-gray-300 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-5.2-5.2"
                            />
                            <circle cx="10" cy="10" r="8" />
                        </svg>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Header;
