"use client";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useEffect } from "react";
import { getSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { createEmployee } from "@/redux/services/Recruiter/recruiterAction";
// import Alert from '@/components/Alert';
import Alert from "@mui/material/Alert";
import { redirect } from "next/navigation";
import { parseJwt } from "@/lib/Constants";

import "../../../styles/sidebar.css";

const Page = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const [phoneNum, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [decodedData, setDecodedData] = useState(null);
  const [companyIdTemp, setCompanyIdTemp] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const { success } = useAppSelector((state) => state.employeeReducer);
  const dispatch = useAppDispatch();

  const isSidebarOpen = useAppSelector((state) => state.sidebar.sidebarState);

  useEffect(() => {
    setCompanyIdTemp("");
    const parseJwtFromSession = async () => {
      const session = await getSession();
      if (!session) {
        throw new Error("Invalid session");
      }
      const jwt: string = session.toString();
      const decodedData = parseJwt(jwt);
      setDecodedData(decodedData);
      setCompanyIdTemp(decodedData.companyId.toString() || "");
    };

    parseJwtFromSession();
  }, []);

  useEffect(() => {
    console.log("decoded data", decodedData);
  }, [decodedData]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const name = firstName + " " + lastName;

    const role = "employer";

    if (password !== repeatPassword) {
      setPasswordMatch(false);
      return;
    }
    const companyId = parseInt(companyIdTemp);
    const phone = phoneNum;
    const data = {
      name,
      designation,
      role,
      phone,
      email,
      password,
      companyId,
    };
    console.log(data);
    dispatch(createEmployee(data));
    console.log(success);
    // redirect("/dashboard");
  };

  return (
    <div
      className={`content overflow-hidden ${isSidebarOpen ? "shifted" : ""}`}
    >
      <div className=" min-h-screen justify-center">
        <div className="grid grid-rows-1 grid-flow-col lg:ml-20 md:ml-10">
          <div className="pt-6 pb-16 lg:pl-10 lg:pr-20 lg:-mr-0 md:-mr-4 sm:ml-10 sm:mr-10 md:ml-0">
            <div className="pr-2 pl-2">
              <h1 className=" text-blue-500 mb-4">Syncflow recruitment</h1>
              <h1 className="text-4xl text-blue-900 pt-20">Add Employee</h1>
              {!passwordMatch && (
                <Alert severity="error">Passwords do not match</Alert>
              )}
              {success && (
                <Alert severity="success">Employee Added Successfully</Alert>
              )}
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div className="grid grid-rows-1 grid-flow-col">
                    <div className="pr-4">
                      <label
                        htmlFor="firstName"
                        className="block text-sm mb-2 font-bold text-gray-900 dark:text-white"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                        placeholder="John"
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="pl-4">
                      <label
                        htmlFor="lastName"
                        className="block text-sm mb-2 font-bold text-gray-900 dark:text-white"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full  min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                        placeholder="Doe"
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-rows-1 grid-flow-col pt-10 pb-10">
                    <div className="pr-4">
                      <label
                        htmlFor="designation"
                        className="mb-2 block text-sm font-bold text-gray-900 dark:text-white"
                      >
                        Designation
                      </label>
                      <input
                        type="text"
                        id="designation"
                        className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                        onChange={(e) => setDesignation(e.target.value)}
                        required
                      />
                    </div>
                    <div className="pl-4">
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-bold text-gray-900 dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 font-bold text-gray-900 dark:text-white"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      placeholder="john.doe@company.com"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-rows-1 grid-flow-col pt-10">
                    {/* password and repeat password fields */}
                    <div className="pr-4">
                      <label
                        htmlFor="password"
                        className="block text-sm mb-2 font-bold text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="pl-4">
                      <label
                        htmlFor="repeat_password"
                        className="block text-sm mb-2 font-bold text-gray-900 dark:text-white"
                      >
                        Repeat password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className=" flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Add Employee
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-white shadow-lg ml-10 pr-20 p-6 hidden md:block lg:-mr-0">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 uppercase tracking-wide pt-10">
              Guidelines
            </h2>
            <ul className="list-disc list-inside mb-4 pt-10">
              <li className="font-bold pt-4">
                Add Employee to give them access to the portal
              </li>

              <li className="font-bold pt-4">
                Employees will have their personalized dashboards
              </li>

              <li className="font-bold pt-4">
                Employees can be assigned to perform specific workflow tasks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
