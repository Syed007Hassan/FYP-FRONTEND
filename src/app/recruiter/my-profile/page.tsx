"use client";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useGetUserByEmailQuery } from "@/redux/services/Recruiter/recruiterAction";
import { getSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateUser } from "@/redux/services/Recruiter/recruiterAction";
import { useRouter } from "next/navigation";
// import Alert from "@/components/Alert";
import Alert from "@mui/material/Alert";
import Loader from "@/components/Loader";
import { parseJwt } from "@/lib/Constants";
import Cookies from 'js-cookie';

import "../../../styles/sidebar.css";

const Page = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const [phoneNum, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [decodedData, setDecodedData] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const { success } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const isSidebarOpen = useAppSelector((state) => state.sidebar.sidebarState);

  const { data, error, isLoading } = useGetUserByEmailQuery({ email });

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
    };

    parseJwtFromSession();
  }, []);

  useEffect(() => {
    console.log(decodedData);
  }, [decodedData]);

  useEffect(() => {
    const firstName = data?.data?.name?.split(" ")[0];
    const lastName = data?.data?.name?.split(" ")[1];
    setFirstName(firstName || "");
    setLastName(lastName || "");
    setDesignation(data?.data?.designation || "");
    setPhone(data?.data?.phone?.toString() || "");
  }, [data]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (password !== repeatPassword) {
      setPasswordMatch(false);
      event.preventDefault();
    } else {
      const name = firstName + " " + lastName;
      const phone = parseInt(phoneNum);
      const datas = {
        name,
        email,
        password,
        phone,
        designation,
      };
      datas.email = datas.email.toLowerCase();
      console.log(datas);
      dispatch(updateUser(datas));
    }
  };

  useEffect(() => {
    console.log("useEffect triggered", { success });

    if (success) {
      console.log("success is true, pushing to /recruiter");
      router.push("/recruiter");
    }
  }, [success, router]);

  return isLoading ? (
    <Loader />
  ) : (
    <div
      className={`content overflow-hidden ${isSidebarOpen ? "shifted" : ""}`}
    >
      <div className=" min-h-screen justify-center">
        <div className="grid grid-rows-1 grid-flow-col lg:ml-20 md:ml-10">
          <div className="pt-6 pb-16 lg:pl-10 lg:pr-20 lg:-mr-0 md:-mr-4 sm:ml-10 sm:mr-10 md:ml-0">
            <div className="pr-2 pl-2">
              <h1 className="text-4xl text-blue-900 pt-20">My Profile</h1>
              {passwordMatch === false && (
                <Alert severity="error">Passwords do not match</Alert>
              )}
              {success && (
                <Alert severity="success">Profile updated successfully</Alert>
              )}
              <form className="mt-8" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm">
                  <div className="grid grid-rows-1 grid-flow-col">
                    <div className="pr-4">
                      <label
                        htmlFor="firstName"
                        className="mb-2 block text-sm font-bold text-gray-900 dark:text-white"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="pl-4">
                      <label
                        htmlFor="lastName"
                        className="mb-2 block text-sm font-bold text-gray-900 dark:text-white"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full  min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                        value={lastName}
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
                        value={designation}
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
                        type="number"
                        id="phone"
                        value={phoneNum}
                        className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      placeholder="john.doe@company.com"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={true}
                    />
                  </div>
                  <div className="grid grid-rows-1 grid-flow-col pt-10">
                    <div className="pr-4">
                      <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-bold text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        value={password}
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
                        className="mb-2 block text-sm font-bold text-gray-900 dark:text-white"
                      >
                        Repeat password
                      </label>
                      <input
                        value={repeatPassword}
                        type="password"
                        id="password"
                        className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-rows-1 grid-flow-col pt-4">
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className=" flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            className="pl-10 pb-6 pr-10 pt-20 hidden md:block md:-mr-20 lg:-mr-0"
            style={{ width: "650px", height: "600px" }}
          >
            <Image
              src="/my-profile.png"
              alt="Picture of the author"
              width={500}
              height={500}
              className="object-cover md:w-25 md:h-25 lg:w-full lg:h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
