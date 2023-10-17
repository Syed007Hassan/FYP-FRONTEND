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
    const parseJwt = async () => {
      const session = await getSession();
      if (!session) {
        throw new Error("Invalid session");
      }
      const jwt: string = session.toString();
      const base64Url = jwt.split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      const decodedData = JSON.parse(window.atob(base64));
      setDecodedData(decodedData);
      setEmail(decodedData?.email || "");
    };

    parseJwt();
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
      return;
    }
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
                    <TextField
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      autoComplete="given-name"
                      variant="outlined"
                      size="small"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="pl-4">
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      variant="outlined"
                      size="small"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-rows-1 grid-flow-col pt-10 pb-10">
                  <div className="pr-4">
                    <TextField
                      required
                      fullWidth
                      id="designation"
                      label="Designation"
                      name="designation"
                      autoComplete="designation"
                      variant="outlined"
                      size="small"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                    />
                  </div>
                  <div className="pl-4">
                    <TextField
                      required
                      fullWidth
                      id="phone"
                      label="Phone Number"
                      name="phone"
                      autoComplete="tel"
                      variant="outlined"
                      size="small"
                      value={phoneNum}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <TextField
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
                  />
                </div>
                <div className="grid grid-rows-1 grid-flow-col pt-10">
                  <div className="pr-4">
                    <TextField
                      required
                      fullWidth
                      id="password"
                      label="Password"
                      name="password"
                      autoComplete="new-password"
                      variant="outlined"
                      size="small"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="pl-4">
                    <TextField
                      required
                      fullWidth
                      id="password"
                      label="Repeat Password"
                      name="password"
                      autoComplete="new-password"
                      variant="outlined"
                      size="small"
                      onChange={(e) => setRepeatPassword(e.target.value)}
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
