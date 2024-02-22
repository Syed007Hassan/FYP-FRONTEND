import { Dropdown } from "flowbite-react";
import React, { useState } from "react";

interface PersonalDetailsProps {
  firstName: string;
  lastName: string;
  dob: string;
  setPhone: (value: string) => void;
  phone: string;
  gender: string;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (value: boolean) => void;
  desc: string;
  setDesc: (value: string) => void;
  setGender: (value: string) => void;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setDob: (value: string) => void;
  nextStep: () => void;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  firstName,
  lastName,
  dob,
  phone,
  gender,
  isDropdownOpen,
  setIsDropdownOpen,
  desc,
  setDesc,
  setGender,
  setPhone,
  setFirstName,
  setLastName,
  setDob,
  nextStep,
}) => {
  return (
    <div>
      <div className="flex space-x-4 pb-4">
        <div className="w-1/2">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 pb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
            placeholder="E.g. John"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="w-1/2">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 pb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
            placeholder="E.g. Doe"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="pb-4">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 pb-2"
        >
          Phone
        </label>
        <input
          type="text"
          id="phone"
          className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
          placeholder="E.g. 1234567890"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-between pb-4">
        <div className="w-1/2 pr-2">
          <label
            htmlFor="dob"
            className="block text-sm pb-2 font-medium text-gray-700"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="w-1/2 pl-2">
          <label
            htmlFor="gender"
            className="block text-sm pb-2 font-medium text-gray-700"
          >
            Gender
          </label>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {gender}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdown"
            className={`${isDropdownOpen ? "block" : "hidden"
              } origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li onClick={() => {
                setGender("male")
                setIsDropdownOpen(false);
              }}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  male
                </a>
              </li>
              <li onClick={() => {
                setGender("female")
                setIsDropdownOpen(false);
              }}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  female
                </a>
              </li>
              <li onClick={() => {
                setGender("other")
                setIsDropdownOpen(false);
              }}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  other
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <label
        htmlFor="desc"
        className="block text-sm font-medium text-gray-700 pb-2"
      >
        Description
      </label>
      <textarea
        id="desc"
        className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
        placeholder="Write something about yourself"
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <button
        type="button"
        onClick={nextStep}
        className="mt-4 px-10 py-2 bg-blue-700 text-white rounded"
      >
        Next
      </button>
    </div>
  );
};

export default PersonalDetails;
