"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ApplicantSidebar from "./applicantSidebar";
import Image from "next/image";
import {
  FaUser,
  FaUserPlus,
  FaBuilding,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import companylogo from "../../../public/assets/images/featured-job/img-05.png";
import Cookies from "js-cookie";
import { parseJwt } from "@/lib/Constants";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { toggleSidebar } from "../../redux/features/sidebarStateAction";

interface HeaderProps {}

const NavBar: React.FC<HeaderProps> = () => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [decodedData, setDecodedData] = useState<any>();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const toggleNotificationDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.sidebar.sidebarState);

  useEffect(() => {
    const parseJwtFromSession = async () => {
      // const session = await getSession();
      const session = Cookies.get("token");
      if (!session) {
        throw new Error("Invalid session");
      }
      const jwt: string = session.toString();
      const decodedData = parseJwt(jwt);
      setDecodedData(decodedData);
      setEmail(decodedData?.email || "");
      setName(decodedData?.name || "");
      setRole(decodedData?.role || "");
    };

    parseJwtFromSession();
  }, []);

  useEffect(() => {
    console.log("Decoded Data", decodedData);
  }, [decodedData]);

  const handleToggleSidebar = () => {
    console.log("toggle");
    dispatch(toggleSidebar());
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    console.log("isSidebarOpen", isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <nav className="overflow z-50 sticky top-0 left-0 bg-sky-950 shadow-lg bg-white-900  p-4 lg:p-6 transition-all duration-300 ease-in-out text-blue">
      <div className="container mx-auto flex justify-between items-center h-4">
        <div className="flex items-center">
          <button className="p-2 z-30" onClick={handleToggleSidebar}>
            {isSidebarOpen ? (
              <FaTimes
                style={{ width: "24px", height: "24px", color: "white" }}
                className="blue-icon"
              />
            ) : (
              <FaBars
                style={{ width: "24px", height: "24px", color: "white" }}
                className="blue-icon"
              />
            )}
          </button>
          <div>
            <Link href="/" legacyBehavior className="py-3">
              <a>
                <Image src="/synnc.png" alt="Logo" width={100} height={100} />
              </a>
            </Link>
          </div>
        </div>

        <div className="flex space-x-8 items-center">
          <div className="relative">
            <button
              id="dropdownNotificationButton"
              data-dropdown-toggle="dropdownNotification"
              onClick={toggleNotificationDropdown}
              className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
              type="button"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 14 20"
              >
                <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
              </svg>

              <div className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900"></div>
            </button>

            {/* Notification dropdown menu */}
            <div
              id="dropdownNotification"
              className={`z-20 ${
                openDropdown ? "block" : "hidden"
              } absolute mt-2 w-[300px] max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-800 dark:divide-gray-700`}
              aria-labelledby="dropdownNotificationButton"
              style={{ top: "calc(100% + 10px)", left: "calc(50% - 150px)" }}
            >
              <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                Notifications
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                <a
                  href="#"
                  className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full w-11 h-11"
                      src={companylogo}
                      alt="Jese image"
                    />
                    <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                      <svg
                        className="w-2 h-2 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 18"
                      >
                        <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                        <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full ps-3">
                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                      New message from{" "}
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Jese Leos
                      </span>
                      : &quot;Hey, what&apos;s up? All set for the
                      presentation?&quot;
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-500">
                      a few moments ago
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full w-11 h-11"
                      src={companylogo}
                      alt="Joseph image"
                    />
                    <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
                      <svg
                        className="w-2 h-2 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full ps-3">
                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Joseph Mcfall
                      </span>{" "}
                      and{" "}
                      <span className="font-medium text-gray-900 dark:text-white">
                        5 others
                      </span>{" "}
                      started following you.
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-500">
                      10 minutes ago
                    </div>
                  </div>
                </a>
              </div>
              <a
                href="#"
                className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
              >
                <div className="inline-flex items-center">
                  <svg
                    className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 14"
                  >
                    <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                  </svg>
                  View all
                </div>
              </a>
            </div>
          </div>
          <div className="relative">
            <button
              id="dropdownAvatarNameButton"
              data-dropdown-toggle="dropdownAvatarName"
              className="flex items-center text-sm pe-1 font-medium text-white rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0"
              type="button"
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <Image
                className="w-8 h-8 me-2 rounded-full"
                src={companylogo} // replace with the actual path to the user's image
                alt="user photo"
              />
              {name}
              <svg
                className={`w-2.5 h-2.5 ms-3 transform transition-transform ${
                  dropdownVisible ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {dropdownVisible && (
              <div
                id="dropdownAvatarName"
                className="z-10 absolute mt-3 right-0 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600"
                onClick={toggleDropdown}
                onBlur={() => setTimeout(() => setDropdownVisible(false), 100)}
                tabIndex={0}
              >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div className="font-medium">{role}</div>
                  <div className="truncate">{email}</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <a
                      href="/applicant/profile"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Profile
                    </a>
                  </li>
                </ul>
                <div className="py-2">
                  <a
                    href="/signout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
          {/* <Link href="/recruiter/addemployee">
            <div className="flex items-center justify-center w-8 h-8">
              <button title="Add Employee">
                <FaUserPlus size={25} color="white" />
              </button>
            </div>
          </Link>
          <Link href="/recruiter/company-profile">
            <div className="flex items-center justify-center w-8 h-8">
              <button title="Company Profile">
                <FaBuilding size={25} color="white" />
              </button>
            </div>
          </Link> */}
        </div>
      </div>
      {isSidebarOpen && <ApplicantSidebar isOpen={isSidebarOpen} />}
    </nav>
  );
};

export default NavBar;
