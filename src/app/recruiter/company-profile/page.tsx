"use client";
import TextField from "@mui/material/TextField";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { getSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetCompanyQuery } from "@/redux/services/Company/companyAction";
import { updateCompany } from "@/redux/services/Company/companyAction";
import { uploadCompanyProfile } from "@/redux/services/upload/uploadAction";
// import Alert from '@/components/Alert';
import Alert from "@mui/material/Alert";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import { parseJwt } from "@/lib/Constants";
import Cookies from "js-cookie";
import UploadData from "@/types/uplaod";

import user from "../../../../public/company-profile.png";

import "../../../styles/sidebar.css";
import { Upload } from "@mui/icons-material";

const Page = () => {
  const [token, setToken] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyPhoneNum, setCompanyPhone] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyId, setCompanyId] = useState(0);
  const [decodedData, setDecodedData] = useState(null);
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [isUpload, setIsUpload] = useState(false);
  const router = useRouter();

  const { success } = useAppSelector((state) => state.companyReducer);
  const {
    success: uploadSuccess,
    data: uploadData,
    loading,
    error: uploadError,
  } = useAppSelector((state) => state.uploadCompanyProfileReducer) as {
    success: boolean;
    data: UploadData | null;
    loading: boolean;
    error: Error | null;
  };

  const dispatch = useAppDispatch();

  const isSidebarOpen = useAppSelector((state) => state.sidebar.sidebarState);

  const { data, error, isLoading, refetch } = useGetCompanyQuery({
    id: companyId,
  });

  useEffect(() => {
    const parseJwtFromSession = async () => {
      const session = Cookies.get("token");
      if (!session) {
        throw new Error("Invalid session");
      }
      const jwt: string = session.toString();
      const decodedData = parseJwt(jwt);
      setDecodedData(decodedData);
      setCompanyId(decodedData?.companyId);
      setToken(jwt);
    };

    parseJwtFromSession();
  }, []);

  useEffect(() => {
    setCompanyName(data?.data?.companyName || "");
    setCompanyAddress(data?.data?.companyAddress || "");
    setCompanyPhone(data?.data?.companyPhone?.toString() || "");
    setCompanyEmail(data?.data?.companyEmail || "");
    setCompanyWebsite(data?.data?.companyWebsite || "");
  }, [data]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const companyPhone = companyPhoneNum;
    const datas = {
      companyId,
      companyName,
      companyAddress,
      companyPhone,
      companyEmail,
      companyWebsite,
      token,
    };
    datas.companyEmail = datas.companyEmail.toLowerCase();
    console.log(datas);
    dispatch(updateCompany(datas));
    // router.push("/dashboard");
  };

  useEffect(() => {
    console.log("useEffect triggered", { success });

    if (success) {
      console.log("success is true, pushing to /recruiter");
      router.push("/recruiter");
    }
  }, [success, router]);

  // const handleClick = (event: any) => {
  //   setCompanyName(data?.data?.companyName || "");
  //   setCompanyAddress(data?.data?.companyAddress || "");
  //   setCompanyPhone(data?.data?.companyPhone.toString() || "");
  //   setCompanyEmail(data?.data?.companyEmail || "");
  //   setCompanyWebsite(data?.data?.companyWebsite || "");
  // };

  const handleFileUpload = (e: any) => {
    try {
      dispatch(
        uploadCompanyProfile({
          companyId: companyId.toString(),
          picture: e.target.files[0],
          token,
        })
      )
        .then(() => {
          setIsUpload(true);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    refetch();
  }, [isUpload, refetch]);

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
              <div className="flex items-center gap-4 mt-14">
                <div className="relative">
                  <div className="inline-block img-container">
                    <Image
                      src={
                        uploadData?.data?.Location
                          ? uploadData?.data?.Location
                          : data?.data?.companyProfile
                          ? data?.data?.companyProfile
                          : user
                      }
                      // src={user}
                      alt="User"
                      width={50}
                      height={50}
                      className="mx-auto rounded-full"
                    />
                    <div className="w-full pb-2 upload-label">
                      <label htmlFor="upload" className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0020.07 7H21a2 2 0 012 2v9a2 2 0 01-2 2H3a2 2 0 01-2-2V9z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>

                  <input
                    type="file"
                    id="upload"
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                  />
                </div>
                <h1 className="text-4xl text-blue-900">Company Profile</h1>
              </div>
              {success && (
                <Alert severity="success">
                  Company profile updated successfully
                </Alert>
              )}
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div className="grid grid-rows-1 grid-flow-col">
                    <div className="pr-4">
                      <label
                        htmlFor="companyName"
                        className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                      >
                        Company name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                        autoComplete="given-name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="pl-4">
                      <label
                        htmlFor="companyAddress"
                        className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                      >
                        Company Address
                      </label>
                      <input
                        type="text"
                        id="companyAddress"
                        className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                        autoComplete="family-name"
                        value={companyAddress}
                        onChange={(e) => setCompanyAddress(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-rows-1 grid-flow-col pt-10 pb-10">
                    <div className="pr-4">
                      <label
                        htmlFor="companyWebsite"
                        className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                      >
                        Companys Website
                      </label>
                      <input
                        type="text"
                        id="companyWebsite"
                        className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                        autoComplete="family-name"
                        value={companyWebsite}
                        onChange={(e) => setCompanyWebsite(e.target.value)}
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
                        value={companyPhoneNum}
                        onChange={(e) => setCompanyPhone(e.target.value)}
                        required
                      />
                    </div>{" "}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="font-bold block mb-2 text-sm text-gray-900 dark:text-white"
                    >
                      Email :
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mb-3 w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      value={companyEmail}
                      onChange={(e) => setCompanyEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="mb-2 flex justify-center py-2 px-8 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="pl-10 pb-6 pr-10 pt-20 hidden md:block md:-mr-20 lg:-mr-0"
            style={{ width: "500px", height: "550px" }}
          >
            <Image
              src="/company-profile.png"
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
