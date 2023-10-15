"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaUser, FaSignOutAlt,  FaUserPlus, FaBuilding} from 'react-icons/fa';
import { } from 'react-icons/fa';
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
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
    };

    return (
        <nav
            className={`${sticky
                ? 'fixed top-0 left-0 w-full bg-blue-900 shadow-lg'
                : 'bg-blue-900'
                } p-4 lg:p-6 transition-all duration-300 ease-in-out text-white`}
        >
            <div className="container mx-auto flex justify-between bg-blue-900 items-center h-10">
                <Link href="/" legacyBehavior className='py-3'>
                    <a>
                        <img src="/synnc.png" alt="Logo" className="w-32 h-32" /> {/* Replace with your logo image path */}
                    </a>
                </Link>

                <div className="flex items-center space-x-7">
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
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-200 text-blue-500">
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
    <Link href="/dashboard/addcompany">
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
            </div>
        </nav>
    );
};

export default Header;
