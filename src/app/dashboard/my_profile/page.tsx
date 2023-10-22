"use client";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useGetUserByEmailQuery } from "@/redux/services/Recruiter/recruiterAction";
import { getSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateUser } from "@/redux/services/Recruiter/recruiterAction";
import { redirect } from "next/navigation";
// import Alert from "@/components/Alert";
import Alert from "@mui/material/Alert";
import Loader from "@/components/Loader";
import { parseJwt } from "@/lib/Constants";

const Page = () => {
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

  const { data, error, isLoading } = useGetUserByEmailQuery({ email });

  useEffect(() => {
    const parseJwtFromSession = async () => {
      const session = await getSession();
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
    const firstName = data?.data?.name?.split(" ")[0];
    const lastName = data?.data?.name?.split(" ")[1];
    setFirstName(firstName || "");
    setLastName(lastName || "");
    setDesignation(data?.data?.designation || "");
    setPhone(data?.data?.phone?.toString() || "");
  }, [data]);

  const handleSubmit = (event: any) => {
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
      // redirect("/dashboard");
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className=" min-h-screen justify-center">
      <div className="grid grid-rows-1 grid-flow-col">
        <div className="pt-6 pr-20 pl-10 pb-16">
          <div className="pr-20 pl-20">
            <h1 className=" text-blue-500 mb-4">Syncflow recruitment</h1>
            <h1 className="text-4xl text-blue-900 pt-20">My Profile</h1>
            {passwordMatch === false && (
              <Alert severity="error">Passwords do not match</Alert>
            )}
            {success && (
              <Alert severity="success">Profile updated successfully</Alert>
            )}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="grid grid-rows-1 grid-flow-col">
                  <div className="pr-4">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input type="text"
                      id="firstName"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      placeholder="John"
                      onChange={(e) => setFirstName(e.target.value)}
                      required />
                  </div>
                  <div className="pl-4">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                    <input type="text"
                      id="lastName"
                      className="w-full  min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      placeholder="Doe"
                      onChange={(e) => setLastName(e.target.value)}
                      required />

                  </div>
                </div>
                <div className="grid grid-rows-1 grid-flow-col pt-10 pb-10">
                  <div className="pr-4">
                    <label htmlFor="designation" className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Designation</label>
                    <input type="text"
                      id="designation"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      onChange={(e) => setDesignation(e.target.value)}
                      required
                    />
                  </div>
                  <div className="pl-4 pt-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-white">Phone Number </label>
                    <input
                      type="phone"
                      id="phone"
                      className=" w-full min-w-fit  border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      onChange={(e) => setPhone(e.target.value)}
                      required />

                  </div>
                </div>
                <div>
                  {/* <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    // autoComplete="email"
                    variant="outlined"
                    size="small"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{ readOnly: true }}
                    title="This field is read-only"
                  /> */}
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                    placeholder="john.doe@company.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                </div>
                <div className="grid grid-rows-1 grid-flow-col pt-10">
                  <div className="pr-4">
                    {/* <TextField
                      required
                      fullWidth
                      id="password"
                      label="Password"
                      name="password"
                      autoComplete="new-password"
                      variant="outlined"
                      size="small"
                      onChange={(e) => setPassword(e.target.value)} */}
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      onChange={(e) => setPassword(e.target.value)}
                      required />
                  </div>
                  <div className="pl-4">
                    {/* <TextField
                      required
                      fullWidth
                      id="password"
                      label="Repeat Password"
                      name="password"
                      autoComplete="new-password"
                      variant="outlined"
                      size="small"
                      onChange={(e) => setRepeatPassword(e.target.value)}
                    /> */}
                    <label htmlFor="repeat_password" className="block text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                    <input
                      type="password"
                      id="password"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      required />
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
          className="pl-10 pb-6 pr-10 flex"
          style={{ width: "650px", height: "630px" }}
        >
          <Image
            src="/landing-pic.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
