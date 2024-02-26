"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { job_list } from "@/data/data";
import image_1 from "../../../../public/job.png";
import { DecodedData } from "@/data/data";

import Chatbot from "@/components/Chatbot";
import { FaQuestion } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { createJob, resetSuccess } from "@/redux/services/job/jobAction";
import { getSession } from "next-auth/react";
import { parseJwt } from "@/lib/Constants";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { FaLocationCrosshairs } from "react-icons/fa6";
import Location from "@/types/location";
import { JobLocation } from "@/types/job";
import { WithContext as ReactTags } from "react-tag-input";
import SKILLS from "@/data/skills";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const suggestions = SKILLS.map((country) => {
  return {
    id: country,
    text: country,
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13,
  TAB: 9,
  SPACE: 32,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.TAB, KeyCodes.SPACE];

type Tag = { id: string; text: string };

const Page = () => {
  const router = useRouter();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Select a type");
  const [selectedCategory, setSelectedCategory] = useState("Select a category");
  const [add, setAdd] = useState<Location>();
  const [location, setLocation] = useState<JobLocation>();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.sidebar.sidebarState);
  const { success } = useAppSelector((state) => state.jobReducer);

  const [click, setClick] = useState(false);

  const [job, setJob] = useState({
    id: 0,
    companyId: 0,
    image: image_1,
    title: "",
    experience: "",
    salary: "",
    qualification: "",
    company: "",
    location: {
      area: "",
      city: "",
      country: "",
      latitude: "",
      longitude: "",
    },
    urgency: "",
    desc: "",
  });

  const [decodedData, setDecodedData] = useState<DecodedData>();
  const [companyId, setCompanyId] = useState<string>("");
  const [recruiterId, setRecruiterId] = useState<string>("");
  const [clickLocation, setClickLocation] = useState(false);

  // skills attributes
  type Tags = { id: string; text: string }[];
  const [tags, setTags] = useState<Tags>([]);

  const handleDelete = (i: number) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag: Tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag: Tag, currPos: number, newPos: number) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index: number) => {
    console.log("The tag at index " + index + " was clicked");
  };

  useEffect(() => {
    const parseJwtFromSession = async () => {
      const session = Cookies.get("token");
      if (!session) {
        throw new Error("Invalid session");
      }
      const jwt: string = session.toString();
      const decodedData = parseJwt(jwt);
      setDecodedData(decodedData);
      console.log("decodedData:", decodedData);
    };

    parseJwtFromSession();
  }, []);

  useEffect(() => {
    if (decodedData) {
      setCompanyId(
        decodedData?.companyId ? decodedData.companyId.toString() : ""
      );
      setRecruiterId(
        decodedData?.recruiterId ? decodedData.recruiterId.toString() : ""
      );
    }
  }, [decodedData]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (clickLocation === false) {
      alert("Please click on the location icon to get the location.");
      return;
    }

    const temp_job = {
      // image: StaticImageData;
      jobTitle: job.title,
      jobExperience: job.experience,
      jobQualification: job.qualification,
      // company: string;
      jobLocation: job.location,
      jobSalary: job.salary,
      jobType: selectedType,
      jobUrgency: job.urgency,
      jobCategory: selectedCategory,
      jobDescription: job.desc,
      jobStatus: "Active",
      jobSkills: tags.map((tag) => tag.text),
    };

    dispatch(createJob({ companyId, recruiterId, job: temp_job }));
  };

  useEffect(() => {
    console.log("job:", job.desc);
  }, [job]);

  useEffect(() => {
    console.log("success:", success);
    if (success) {
      dispatch(resetSuccess());
      router.push("/recruiter/joblist");
    }
  }, [success, router]);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        // const { latitude, longitude } = pos.coords;
        setLatitude(pos.coords.latitude.toString());
        setLongitude(pos.coords.longitude.toString());
        console.log(latitude, longitude);
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => setAdd(data.address))
          .catch((error) => console.error("Error:", error));
      });
      setClickLocation(true);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (add) {
      const { country, city, town } = add;
      const location = {
        area: town,
        city: city,
        country: country,
        latitude: latitude,
        longitude: longitude,
      };
      setJob({ ...job, location: location });
    }
  }, [add, latitude, longitude, job]);

  return (
    <div className="min-h-screen justify-center overflow-x-hidden">
      <div className="grid grid-rows-1 grid-flow-col lg:ml-20 md:ml-10">
        <div
          className="pl-10 pt-16 pb-6 pr-10 hidden md:block md:-mr-20 lg:-mr-0"
          style={{ width: "580px", height: "560px" }}
        >
          <Image
            src="/applicant.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover md:w-25 md:h-25 lg:w-full lg:h-full"
            priority
          />
        </div>
        <div className="pt-16 pb-16 lg:pl-10 lg:pr-20 lg:-mr-0 md:-mr-4 sm:ml-10 sm:mr-10 md:ml-0">
          <div className="pr-2 pl-2">
            <h1 className="text-4xl text-blue-900 pt-5">Add A Job</h1>

            <form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
                <div className="grid grid-rows-1 grid-flow-col">
                  <div className="pr-4">
                    <label
                      htmlFor="jobTitle"
                      className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      placeholder="Enter job title"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      autoComplete="given-name"
                      onChange={(e) => {
                        setJob({ ...job, title: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="pl-4">
                    <label
                      htmlFor="jobType"
                      className=" mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Job Type
                    </label>
                    <button
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="dropdown"
                      className="w-full text-black bg-white border-black text-center inline-flex items-center justify-between min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      type="button"
                      onClick={() => setTypeDropdownOpen(!typeDropdownOpen)}
                    >
                      {selectedType}
                      <svg
                        className="w-2.5 h-2.5"
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
                    <div
                      id="dropdown"
                      className={`z-10 ${
                        typeDropdownOpen ? "" : "hidden"
                      } bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                      >
                        <li
                          onClick={() => {
                            setTypeDropdownOpen(false);
                            setSelectedType("Full Time");
                          }}
                        >
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Full Time
                          </p>
                        </li>
                        <li
                          onClick={() => {
                            setTypeDropdownOpen(false);
                            setSelectedType("Part Time");
                          }}
                        >
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Part Time
                          </p>
                        </li>
                        <li
                          onClick={() => {
                            setTypeDropdownOpen(false);
                            setSelectedType("Remote");
                          }}
                        >
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Remote
                          </p>
                        </li>
                        {/* Add more options as needed */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="grid grid-rows-1 grid-flow-col gap-5">
                  <div className="">
                    <label
                      htmlFor="experience"
                      className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Experience
                    </label>
                    <input
                      type="text"
                      id="experience"
                      placeholder="2-3 years"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      autoComplete="given-name"
                      // value="companyName"
                      onChange={(e) => {
                        setJob({ ...job, experience: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="salary"
                      className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Salary
                    </label>
                    <input
                      type="text"
                      id="salary"
                      placeholder="100k-120k"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      autoComplete="given-name"
                      // value="companyName"
                      onChange={(e) => {
                        setJob({ ...job, salary: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="qalification"
                      className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Qualification
                    </label>
                    <input
                      type="text"
                      id="qalification"
                      placeholder="Bachelors"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      autoComplete="given-name"
                      // value="companyName"
                      onChange={(e) => {
                        setJob({ ...job, qualification: e.target.value });
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-rows-1 grid-flow-col gap-5">
                  <div className="">
                    <label
                      htmlFor="jobCategory"
                      className="mb-2 font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Job Category
                    </label>
                    <button
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="dropdown"
                      className="w-full text-black bg-white border-black gap-12 text-center inline-flex items-center justify-between min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {selectedCategory}
                      <svg
                        className="w-2.5 h-2.5"
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
                    <div
                      id="dropdown"
                      className={`z-10 ${
                        dropdownOpen ? "" : "hidden"
                      } bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                      >
                        <li
                          onClick={() => {
                            setDropdownOpen(false);
                            setSelectedCategory("Permanent");
                          }}
                        >
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Permanent
                          </p>
                        </li>
                        <li
                          onClick={() => {
                            setDropdownOpen(false);
                            setSelectedCategory("Contract");
                          }}
                        >
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Contract
                          </p>
                        </li>
                        <li
                          onClick={() => {
                            setDropdownOpen(false);
                            setSelectedCategory("Internship");
                          }}
                        >
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Internship
                          </p>
                        </li>

                        {/* Add more options as needed */}
                      </ul>
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="location"
                      className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="location"
                        placeholder="Bachelors"
                        className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75 pr-8"
                        autoComplete="given-name"
                        value={
                          add
                            ? job.location.area +
                              ", " +
                              job?.location?.city +
                              ", " +
                              job?.location?.country
                            : undefined
                        }
                        // onChange={(e) => {
                        //   setJob({ ...job, location: e.target.value });
                        // }}
                        required
                      />
                      <FaLocationCrosshairs
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:cursor-pointer hover:text-gray-600"
                        onClick={getCurrentLocation}
                        title="Get current location"
                      />
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="urgency"
                      className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Urgency
                    </label>
                    <input
                      type="text"
                      id="Urgency"
                      placeholder="Urgent"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      autoComplete="given-name"
                      // value="companyName"
                      onChange={(e) => {
                        setJob({ ...job, urgency: e.target.value });
                      }}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="jobDescription"
                      className="font-bold block mb-2 text-sm text-gray-900 dark:text-white p-2 text-center justify-center"
                    >
                      Job Description
                    </label>
                    <label
                      className="font-bold block mb-2 text-sm text-gray-900 dark:text-white bg-blue-100 p-2 rounded hover:cursor-pointer"
                      onClick={() => setClick(!click)}
                    >
                      AI Assistant
                    </label>
                  </div>
                  {/* <textarea
                    id="jobDescription"
                    className="mb-3 w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                    // value={companyEmail}
                    onChange={(e) => {
                      setJob({ ...job, desc: e.target.value });
                    }}
                    required
                  /> */}
                  <ReactQuill
                    theme="snow"
                    onChange={(content) => {
                      setJob({ ...job, desc: content });
                    }}
                  />
                </div>
                <div>
                    <label
                      htmlFor="skills"
                      className="block text-sm pb-2 font-medium text-gray-700"
                    >
                      Skills
                    </label>
                    <ReactTags
                      id="skills"
                      tags={tags}
                      suggestions={suggestions}
                      delimiters={delimiters}
                      handleDelete={handleDelete}
                      handleAddition={handleAddition}
                      handleDrag={handleDrag}
                      handleTagClick={handleTagClick}
                      inputFieldPosition="top"
                      autocomplete
                      inline
                    />
                  </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="mb-2 flex justify-center py-2 px-8 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add
                </button>
                {/* <div
                  className="flex items-start"
                  onClick={() => setClick(!click)}
                >
                  <div className="w-10 h-10 rounded-full">
                    <div className="flex items-center justify-center w-full h-full rounded-full bg-blue-600">
                      <FaQuestion size={15} className="text-white" />
                    </div>
                  </div>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="absolute right-[2rem] top-[39.9rem]"> */}
      {/* {isFetching && <div>Loading...</div>} */}
      <Chatbot click={click} />
      {/* </div> */}
    </div>
  );
};

export default Page;
