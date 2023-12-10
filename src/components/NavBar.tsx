"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Image from "next/image";
import {
  FaUser,
  FaUserPlus,
  FaBuilding,
  FaBriefcase,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

interface HeaderProps {}

const NavBar: React.FC<HeaderProps> = () => {
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
  return (
    <nav className="overflow z-50 sticky top-0 left-0 bg-white shadow-lg bg-white-900  p-4 lg:p-6 transition-all duration-300 ease-in-out text-blue">
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

        <div className="flex space-x-8 items-center">
          <div
            className="relative flex items-center justify-center w-8 h-8"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <FaUser size={23} />
            {dropdownVisible && (
              <div className="absolute mt-7 ml-40 z-50 top-0 w-48 bg-white border rounded-lg shadow-md">
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
          <Link href="/dashboard/addemployee">
            <div className="flex items-center justify-center w-8 h-8">
              <button title="Add Employee">
                <FaUserPlus size={25} />
              </button>
            </div>
          </Link>
          <Link href="/dashboard/company-profile">
            <div className="flex items-center justify-center w-8 h-8">
              <button title="Company Profile">
                <FaBuilding size={25} />
              </button>
            </div>
          </Link>
          <Link href="#">
            <div className="flex items-center justify-center w-8 h-8">
              <button title="Briefcase">
                <FaBriefcase size={25} />
              </button>
            </div>
          </Link>
          <div className="flex items-center justify-center w-8 h-8 cursor-pointer">
            <button title="Search">
              <FaSearch size={25} />
            </button>
          </div>
        </div>
      </div>
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} />}
    </nav>
  );
};

export default NavBar;
