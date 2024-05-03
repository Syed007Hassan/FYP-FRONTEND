"use client";
import { useState } from "react";
import { useEffect } from "react";
import { getSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { createEmployee } from "@/redux/services/Recruiter/recruiterAction";
// import Alert from '@/components/Alert';
import Alert from "@mui/material/Alert";
import { useRouter } from "next/navigation";
import { parseJwt } from "@/lib/Constants";
import Cookies from "js-cookie";
import { useGetUserByIdQuery } from "@/redux/services/Recruiter/recruiterAction";
import Recruiter from "@/types/recruiter";
import Loader from "@/components/Loader";
import { designations } from "@/data/jobTypes";

import "../../../styles/sidebar.css";

const Page = () => {
  const router = useRouter();
  const [token, setToken] = useState<string>("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const [recruiter, setRecruiter] = useState<Recruiter>(null);
  const [phoneNum, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [decodedData, setDecodedData] = useState(null);
  const [companyIdTemp, setCompanyIdTemp] = useState("");
  const [recruiterId, setRecruiterId] = useState(0);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isHeadHR, setIsHeadHR] = useState(false);

  const { success } = useAppSelector((state) => state.employeeReducer);
  const dispatch = useAppDispatch();

  const isSidebarOpen = useAppSelector((state) => state.sidebar.sidebarState);

  const { data, error, isLoading } = useGetUserByIdQuery({
    recruiterId: recruiterId,
  });

  const tooltipText = "You are not authorized to perform this action.";

  useEffect(() => {
    setCompanyIdTemp("");
    const parseJwtFromSession = async () => {
      const session = Cookies.get("token");
      if (!session) {
        throw new Error("Invalid session");
      }
      const jwt: string = session.toString();
      const decodedData = parseJwt(jwt);
      setDecodedData(decodedData);
      setCompanyIdTemp(decodedData.companyId.toString() || "");
      setRecruiterId(decodedData.recruiterId);
      setToken(jwt);
    };

    parseJwtFromSession();
  }, []);

  useEffect(() => {
    console.log("decoded data", decodedData);
  }, [decodedData]);

  useEffect(() => {
    console.log("data", data);
    if (data) {
      setRecruiter({
        recruiterId: data?.data?.recruiterId,
        name: data?.data?.name,
        email: data?.data?.email,
        password: data?.data?.password,
        phone: data?.data?.phone.toString(), // convert phone to string
        designation: data?.data?.designation,
        role: data?.data?.role,
        company: data?.data?.company,
      });
    }
  }, [data]);

  useEffect(() => {
    console.log("recruiter", recruiter);
    if (recruiter?.designation == "Head HR") {
      setIsHeadHR(true);
    }
  }, [recruiter]);

  useEffect(() => {
    console.log("isHeadHR", isHeadHR);
  }, [isHeadHR]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (recruiter?.designation != "Head HR") {
      return;
    }

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
      recruiterId,
      token,
    };
    console.log(data);
    dispatch(createEmployee(data));
    console.log(success);
    if (success) {
      router.push("/recruiter");
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className={`content overflow-hidden ${isSidebarOpen ? "shifted" : ""
            }`}
        >
          <div className=" min-h-screen h-full justify-center">
            <div className="grid grid-rows-1 grid-flow-col lg:ml-20 md:ml-10">
              <div className="pt-6 pb-16 lg:pl-10 lg:pr-20 lg:-mr-0 md:-mr-4 sm:ml-10 sm:mr-10 md:ml-0">
                <div className="pr-2 pl-2">
                  <h1 className="text-4xl text-blue-900 pt-10 mb-2">Add Employee</h1>
                  {isHeadHR && (
                    <Alert severity="info">
                      You are authorized to perform this action. Employees with
                      designation &ldquo;Head HR&ldquo; only would be allowed to add
                      employees.
                    </Alert>
                  )}
                  {!isHeadHR && (
                    <Alert severity="error">
                      You are not authorized to perform this action.
                    </Alert>
                  )}
                  {!passwordMatch && (
                    <Alert severity="error">Passwords do not match</Alert>
                  )}
                  {success && (
                    <Alert severity="success">
                      Employee Added Successfully
                    </Alert>
                  )}
                  <form className="mt-2 space-y-4" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-4">
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
                          <select
                            id="designation"
                            className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                            onChange={(e) => setDesignation(e.target.value)}
                            required
                          >
                            <option value="">Select a designation</option>
                            {designations.map((designation) => (
                              <option key={designation.value} value={designation.value}>
                                {designation.label}
                              </option>
                            ))}
                          </select>
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
                        className={`flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${!isHeadHR ? "cursor-not-allowed " : ""
                          }`}
                        title={!isHeadHR ? tooltipText : ""}
                      >
                        Add Employee
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="bg-white h-full sticky mt-0 shadow-lg ml-10 pr-20 p-6 hidden md:block lg:-mr-0">
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
      )}
    </>
  );
};

export default Page;
