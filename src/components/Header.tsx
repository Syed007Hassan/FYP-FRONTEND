"use client"
// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// interface HeaderProps {}

// const Header: React.FC<HeaderProps> = () => {
//     const [isOpen, setIsOpen] = useState<boolean>(false);
//     const [sticky, setSticky] = useState<boolean>(false);

//     const toggle = () => setIsOpen(!isOpen);

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const handleScroll = () => {
//         if (window.scrollY > 180) {
//             setSticky(true);
//         } else if (window.scrollY < 180) {
//             setSticky(false);
//         }
//     };

//     return (
    
//         <nav
//             className={`${
//                 sticky
//                     ? 'fixed top-0 bg-blue-900 left-0 w-full bg-blue-900 shadow-lg'
//                     : 'bg-blue-900'
//             } p-4 lg:p-6 transition-all duration-300 ease-in-out  text-white`}
//         >
//             <div className="container mx-auto bg-blue-900 flex justify-between items-center">
//                 <Link href="/"  legacyBehavior>
//                     <h1 className="text-xl font-semibold text-gray-800 cursor-pointer">LOGO</h1>
//                 </Link>
//                 <div className="text-center">
//                     <ul className="lg:flex lg:space-x-6">
//                         <li>
//                             <Link href="/"  legacyBehavior>
//                                 <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Home</a>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="#feature"  legacyBehavior>
//                                 <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Features</a>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="#service"  legacyBehavior>
//                                 <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Services</a>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="#about"  legacyBehavior>
//                                 <a className="text-gray-600 hover:text-gray-800 cursor-pointer">About</a>
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//                 <button className="lg:hidden" onClick={toggle}>
//                     <svg
//                         className={`w-6 h-6 ${
//                             isOpen ? 'text-gray-700' : 'text-gray-500'
//                         }`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
//                         />
//                     </svg>
//                 </button>
//             </div>
//         </nav>
//     );
// };

// export default Header;
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
                    ? 'fixed top-0 left-0 w-full bg-blue-900 shadow-lg'
                    : 'bg-blue-900'
            } p-4 lg:p-6 transition-all duration-300 ease-in-out text-white`}
        >
            <div className="container mx-auto flex justify-between  'bg-blue-900'">
                <Link href="/" legacyBehavior>
                    <h1 className="text-2xl font-semibold cursor-pointer">LOGO</h1>
                </Link>
                <div className="text-center flex-grow px-10"> {/* Use flex-grow to push items to the center */}
                    <ul className="lg:flex lg:space-x-6">
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
                            className={`w-6 h-6 ${
                                isOpen ? 'text-gray-200' : 'text-gray-100'
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
                </div>
            </div>
        </nav>
    );
};

export default Header;
