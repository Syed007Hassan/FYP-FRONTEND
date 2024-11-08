import React from "react";
import CreatableSelect from "react-select/creatable";
import degree from "@/data/degree";

interface EducationProps {
  degreeTitle: string;
  institute: string;
  startDate: string;
  endDate: string;
  degreeName: string;
  isDropdownOpen: boolean;
  setUpdateEdButton: (value: boolean) => void;
  setIsDropdownOpen: (value: boolean) => void;
  setDegreeName: (value: string) => void;
  setDegreeTitle: (value: string) => void;
  setInstitute: (value: string) => void;
  setStartDate: (value: string) => void;
  setEndDate: (value: string) => void;
  // setSubmit: (value: object) => void;
}

const EducationDetails: React.FC<EducationProps> = ({
  degreeTitle,
  institute,
  startDate,
  endDate,
  degreeName,
  isDropdownOpen,
  setUpdateEdButton,
  setIsDropdownOpen,
  setDegreeName,
  setDegreeTitle,
  setInstitute,
  setStartDate,
  setEndDate,
}) => {
  return (
    <div>
      <div className="flex space-x-4 pb-4">
        <div className="flex-1">
          <label
            htmlFor="degreeTitle"
            className="block text-sm pb-2 font-medium text-gray-700"
          >
            Degree Title
          </label>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="w-full border rounded p-2 bg-blue-700 transition text-white duration-300 ease-in-out hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="flex items-center justify-between">
              {degreeTitle ? degreeTitle : "Select Degree"}
              <svg
                className="w-2.5 h-2.5 ms-3"
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
            </div>
          </button>

          <div
            id="dropdown"
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li
                onClick={() => {
                  setDegreeTitle("BS");
                  setIsDropdownOpen(false);
                }}
              >
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  BS
                </a>
              </li>
              <li
                onClick={() => {
                  setDegreeTitle("MS");
                  setIsDropdownOpen(false);
                }}
              >
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  MS
                </a>
              </li>
              <li
                onClick={() => {
                  setDegreeTitle("PhD");
                  setIsDropdownOpen(false);
                }}
              >
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  PhD
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <label
            htmlFor="degreeName"
            className="block text-sm pb-2 font-medium text-gray-700"
          >
            Degree Name
          </label>
          <CreatableSelect
            options={degree}
            // isClearable
            onChange={(newValue) => {
              if (newValue) {
                setDegreeName(newValue.value);
              }
            }}
            value={degreeName ? { value: degreeName, label: degreeName } : null}
          />
        </div>
      </div>
      <div className="pb-4">
        <label
          htmlFor="institute"
          className="block text-sm pb-2 font-medium text-gray-700"
        >
          Institute
        </label>
        <input
          type="text"
          id="institute"
          className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
          placeholder="FAST-NUCES"
          onChange={(e) => setInstitute(e.target.value)}
          required
        />
      </div>
      <div className="flex space-x-4 pb-4">
        <div className="w-1/2">
          <label
            htmlFor="startDate"
            className="block text-sm pb-2 font-medium text-gray-700"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
            // placeholder="FAST-NUCES"
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="w-1/2">
          <label
            htmlFor="endDate"
            className="block text-sm pb-2 font-medium text-gray-700"
          >
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
            // placeholder="E.g. 1234567890"
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
      </div>

      <button
        type="button"
        onClick={() => setUpdateEdButton(true)}
        className="mt-4 px-10 py-2 bg-blue-700 text-white rounded mr-2"
      >
        Submit
      </button>
    </div>
  );
};

export default EducationDetails;
