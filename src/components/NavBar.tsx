"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaUser, FaUserPlus, FaBuilding } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Image from 'next/image';
interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [sticky, setSticky] = useState<boolean>(false);
    const [isMobileView, setIsMobileView] = useState<boolean>(false);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Use window.matchMedia to track screen size changes
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsMobileView(mediaQuery.matches); // Set initial state

        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
            setIsMobileView(e.matches);
        };

        mediaQuery.addListener(handleMediaQueryChange); // Add listener for media query changes

        return () => {
            window.removeEventListener('scroll', handleScroll);
            mediaQuery.removeListener(handleMediaQueryChange); // Remove the listener
        };
    }, []);


    const handleResize = () => {
        // Check the window width and set isMobileView accordingly.
        if (window.innerWidth <= 768) { // Adjust the breakpoint as needed.

            setIsMobileView(true);
        } else {
            setIsMobileView(false);
        }
    };
    const handleScroll = () => {
        if (window.scrollY > 180) {
            setSticky(true);
        } else if (window.scrollY < 180) {
            setSticky(false);
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <nav
            className={`${sticky
                ? 'fixed top-0 left-0 w-full bg-blue-900 shadow-lg'
                : 'bg-blue-900'
                } p-4 lg:p-6 transition-all duration-300 ease-in-out text-white`}
        >
            <div className="container mx-auto flex justify-between bg-blue-900 items-center h-10">
                <Link href="/" legacyBehavior className="py-3">
                    <a>
                        <Image src="/synnc.png" alt="Logo" width={32} height={32} />
                    </a>
                </Link>



                {isMobileView ? (
                    <button className="lg:hidden" onClick={toggleSidebar}>

                        {isSidebarOpen ? ( // Display close (cross) icon when the sidebar is open
                            <FaTimes className="w-6 h-6" onClick={closeSidebar} />
                        ) : (
                            // Display hamburger icon when the sidebar is closed
                            <FaBars className="w-6 h-6" />
                        )}
                    </button>
                ) : (
                    <>
                        <div className='flex mr-3'>
                            <div className="" >
                                <FaUser size={22} className='mr-2 '/>
                            </div>
                            <Link href="/dashboard/addemployee">
                                <button>
                                    <FaUserPlus size={25} className='mr-2 ml-3'/>
                                </button>
                            </Link>
                            <Link href="/dashboard/company_profile">
                                <button>
                                    <FaBuilding size={25} className='mr-2 ml-3' />
                                </button>
                            </Link>
                            <div className="text-gray-300 cursor-pointer">
                                {/* Your settings icon */}
                            </div>


                    <div className="flex items-center">
                        <div className="relative" onClick={toggleDropdown}>
                            <FaUser className="mr-2" size={22} />
                            {dropdownVisible && (
                                <div className="absolute mt-2  left-0 w-48 bg-white border rounded-lg shadow-md">
                                    <ul>
                                        <li>
                                            <a href="/dashboard/my_profile" className="block px-4 py-2 hover:bg-gray-200 text-blue-500">
                                                Your Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/api/auth/signout" className="block px-4 py-2 hover:bg-gray-200 text-blue-500">
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            )}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Link href="/dashboard/addemployee">
                            <button>
                                <FaUserPlus className="mr-2" size={25} />
                            </button>
                        </Link>
                    </div>
                    <div className="flex items-center">
    <Link href="/dashboard/company_profile">
        <button>
            <FaBuilding className="mr-2" size={25} />
        </button>
    </Link>
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


                    </>
                )}


            </div>
            {isSidebarOpen && (
                <div className="pt-12 fixed top-0 right-0 w-100 bg-blue-900 h-full z-50 transition-transform transform translate-x-0 lg:translate-x-full">

                    <ul className="p-4 space-y-4">
                        <li>
                            <Link href="/dashboard/my_profile" legacyBehavior>
                                <a className="block text-white hover:text-blue-500">
                                    Your Profile
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/api/auth/signout" legacyBehavior>
                                <a className="block text-white hover:text-blue-500">Logout</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/addemployee" legacyBehavior>
                                <a className="block text-white hover:text-blue-500">Add Employee</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/company_profile" legacyBehavior>
                                <a className="block text-white hover:text-blue-500">Company Profile</a>
                            </Link>
                        </li>
                    </ul>
                </div>

            )
            }
        </nav >
    );
};

export default Header;
