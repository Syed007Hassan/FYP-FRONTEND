"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {}

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
            className={`${
                sticky
                    ? 'bg-blue-500 shadow-lg'
                    : 'bg-blue-500'
            } p-4 lg:p-6 transition-all duration-300 ease-in-out`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-xl font-semibold text-gray-800 text-center">LOGO</h1>
                </Link>
                <div className="text-center"> {/* Center-align the ul element */}
                    <ul className="lg:flex lg:space-x-6">
                        <li>
                            <Link href="/">
                                <h1 className="text-gray-600 hover:text-gray-800 text-center">Home</h1>
                            </Link>
                        </li>
                        <li>
                            <Link href="#feature">
                                <h1 className="text-gray-600 hover:text-gray-800 text-center">Features</h1>
                            </Link>
                        </li>
                        <li>
                            <Link href="#service">
                                <h1 className="text-gray-600 hover:text-gray-800 text-center">Services</h1>
                            </Link>
                        </li>
                        <li>
                            <Link href="#about">
                                <h1 className="text-gray-600 hover:text-gray-800 text-center">About</h1>
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className="lg:hidden" onClick={toggle}>
                    <svg
                        className={`w-6 h-6 ${
                            isOpen ? 'text-gray-700' : 'text-gray-500'
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
            </div>
        </nav>
    );
};

export default Header;

