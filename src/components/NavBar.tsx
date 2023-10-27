"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaUser, FaUserPlus, FaBuilding, FaBriefcase } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    console.log("toggle");
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeSidebar = () => {
    console.log("close");
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="overflow z-50  sticky top-0 left-0 w-full bg-white shadow-lg bg-white-900  p-4 lg:p-6 transition-all duration-300 ease-in-out text-blue">
      <div className="container mx-auto flex justify-between bg-white items-center h-12">
        <div className="flex items-center">
          <button className="p-2 z-30" onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <FaTimes
                style={{ width: "24px", height: "24px" }}
                className="blue-icon"
              />
            ) : (
              <FaBars
                style={{ width: "24px", height: "24px" }}
                className="blue-icon"
              />
            )}
          </button>
          <div>
            <Link href="/" legacyBehavior className="py-3">
              <a>
                <Image src="/synnc.png" alt="Logo" width={150} height={150} />
              </a>
            </Link>
          </div>
        </div>

        <div className="flex space-x-8">
          <div className="flex items-center">
            <div className="relative" onClick={toggleDropdown}>
              <FaUser className="space-x-4" size={22} />
              {dropdownVisible && (
                <div className="absolute mt-2 z-auto top-0 w-48 bg-white border rounded-lg shadow-md">
                  <ul>
                    <li>
                      <a
                        href="/dashboard/my_profile"
                        className="sticky block px-4 py-2 hover:bg-gray-200 text-blue-500"
                      >
                        Your Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="/api/auth/signout"
                        className="block px-4 py-2 hover:bg-gray-200 text-blue-500"
                      >
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
                <FaUserPlus className="space-x-4 blue-icon" size={25} />
              </button>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/dashboard/company_profile">
              <button>
                <FaBuilding className="space-x-4 " size={25} />
              </button>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="#">
              <button>
                <FaBriefcase className="material-icons" size={25} />
              </button>
            </Link>
          </div>
          <div className="text-gray-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-10"
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
      {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} toggle={closeSidebar} />
      )}
    </nav>
  );
};

export default Header;
