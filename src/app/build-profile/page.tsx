"use client";
import React, { use, useState, useEffect } from "react";
import personalDetails from "@/components/applicant/profileComponents/personalDetails";
import EducationDetails from "@/components/applicant/profileComponents/educatonDetails";
import locationAndSkillDetails from "@/components/applicant/profileComponents/locationAndSkillDetails";
import experienceDetails from "@/components/applicant/profileComponents/experienceDetails";
import UploadResume from "@/components/applicant/profileComponents/uploadResume";
import "../../../src/styles/applicant.css";
import { updateApplicantDetails } from "@/redux/services/Applicant/applicantAction";
import { uploadResume } from "@/redux/services/upload/uploadAction";
import Cookies from "js-cookie";
import { parseJwt } from "@/lib/Constants";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ApplicantHeader from "@/components/applicant/applicantHeader";
import Alert from "@/components/Alert";
import { Education, Experience } from "@/types/applicant";
import { useRouter } from "next/navigation";
import UserSupport from "@/components/userSupport";
import icon from "../../../public/google-bard-icon.svg";
import Image from 'next/image';

const UpdateProfile = () => {
  const [step, setStep] = useState(0);
  const [clicked, setClicked] = useState(false);

  const Router = useRouter();

  const dispatch = useAppDispatch();
  const { success } = useAppSelector((state) => state.applicantReducer);
  // personal detail attributes
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [desc, setDesc] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("select gender");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // education attributes
  const [institute, setInstitute] = useState("");
  const [degreeTitle, setDegreeTitle] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [education, setEducation] = useState<Education[]>([]);

  // location attributes
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [latitude, setLatitude] = useState("0");
  const [longitude, setLongitude] = useState("0");
  const [tempCountry, setTempCountry] = useState("");
  const [tempCity, setTempCity] = useState("");

  // skills attributes
  type Tags = { id: string; text: string }[];
  const [tags, setTags] = useState<Tags>([]);
  const [token, setToken] = useState("");
  // experience attributes
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [expStartDate, setExpStartDate] = useState("");
  const [expEndDate, setExpEndDate] = useState("");
  const [reallocation, setReallocation] = useState("");
  const [email, setEmail] = useState("");
  const [decodedData, setDecodedData] = useState(null);
  const [applicantIdTemp, setApplicantIdTemp] = useState("");
  const [experience, setExperience] = useState<Experience[]>([]);
  const [resume, setResume] = useState<File | null>(null);

  // modal attributes
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1); // Decrement step by 1
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1); // Increment step by 1
  };

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
      setApplicantIdTemp(decodedData.id.toString() || "");
      setToken(jwt);
    };
    parseJwtFromSession();
  }, []);

  useEffect(() => {
    const getCurrentLocation = async () => {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCountry(data.address.country);
        setCity(data.address.city);
        setArea(data.address.neighbourhood);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getCurrentLocation();
  }, [latitude, longitude]);

  const handleSubmitModal = (e: any) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // setIsModalOpen(false);
    const id = applicantIdTemp;
    const temp_relocation = reallocation === "yes" ? true : false;

    const temp_data = {
      dob,
      gender,
      aboutMe: desc,
      education: education,
      skills: tags.map((tag) => tag.text),
      location: {
        area,
        city,
        country,
        latitude,
        longitude,
      },
      experience: experience,
      relocation: temp_relocation,
      phoneNo: phone,
      profilePicture: "null",
      resume: "adas",
      languages: "adas",
    };
    console.log("temp Data: ", temp_data);
    // console.log("id: ",id);
    dispatch(updateApplicantDetails({ id, temp_data, token }));
    if (success) {
      console.log("success");
    }
    dispatch(uploadResume({ id, resume: resume, token }));
  };

  useEffect(() => {
    if (success) {
      console.log("success");
      Router.push("/applicant/");
    }
  }, [success, Router]);

  return (
    <div>
      <div className="fixed bottom-3 right-6 z-10">
        <button
          className="rounded-full bg-white p-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <Image src={icon} alt="icon" width={30} height={30} />
        </button>
      </div>
      <div className="font-sans">
        <div className="flex justify-center items-center min-h-screen">
          <form
            className="p-6 rounded shadow-md w-full max-w-md bg-gray-300"
            style={{ backgroundColor: "rgba(242, 242, 242, 0.3)" }}
            onSubmit={handleSubmitModal}
          >
            {step === 0 && (
              <>
                <h1 className="text-2xl text-blue-700 font-bold pb-4">
                  Personal Details
                </h1>
                {personalDetails({
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
                })}
              </>
            )}
            {step === 1 && (
              <>
                <h1 className="text-2xl text-blue-700 font-bold pb-4">
                  Education Details
                </h1>
                {EducationDetails({
                  degreeTitle,
                  institute,
                  startDate,
                  endDate,
                  degreeName,
                  education,
                  setEducation,
                  isDropdownOpen,
                  setIsDropdownOpen,
                  setDegreeName,
                  setDegreeTitle,
                  setInstitute,
                  setStartDate,
                  setEndDate,
                  nextStep,
                  prevStep,
                })}
              </>
            )}
            {step === 2 && (
              <>
                <h1 className="text-2xl text-blue-700 font-bold pb-4">
                  Location & Skills
                </h1>
                {locationAndSkillDetails({
                  country,
                  city,
                  area,
                  tags,
                  latitude,
                  longitude,
                  tempCountry,
                  setTempCountry,
                  setLatitude,
                  setLongitude,
                  setTags,
                  setCountry,
                  setCity,
                  setArea,
                  nextStep,
                  prevStep,
                })}
              </>
            )}
            {step === 3 && (
              <>
                <h1 className="text-2xl text-blue-700 font-bold pb-4">
                  Experience Details
                </h1>
                {experienceDetails({
                  company,
                  position,
                  expStartDate,
                  expEndDate,
                  reallocation,
                  experience,
                  setExperience,
                  setCompany,
                  setPosition,
                  setExpStartDate,
                  setExpEndDate,
                  setReallocation,
                  nextStep,
                  prevStep,
                })}
              </>
            )}
            {step === 4 && (
              <>
                <h1 className="text-2xl text-blue-700 font-bold pb-4">
                  Upload Resume
                </h1>
                {UploadResume({
                  reallocation,
                  setReallocation,
                  setResume,
                  nextStep,
                  prevStep,
                })}
              </>
            )}
            {isModalOpen && (
              <div
                id="exp-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="align-middle  flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full"
              >
                <div className="relative p-4 mt w-full h-full max-w-2xl">
                  <div className="bg-gray-300 relative  rounded-lg shadow dark:bg-gray-700">
                    <div className="flex bg-gray-300 items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-lg font-semibold bg-gray-300 text-gray-900 dark:text-white">
                        Applicant Details
                      </h3>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="select-modal"
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>

                    <div className="flex ">
                      <div className="ml-6 mt-4 p-4 pl-10 md:p-5 w-1/2 border-2 border-gray-300 flex flex-col items-start">
                        <h2 className="text-blue-500 font-bold">
                          Personal Details
                        </h2>
                        <p>First Name: {firstName}</p>
                        <p>Last Name: {lastName}</p>
                        <p>Date of Birth: {dob}</p>
                        <p>Phone: {phone}</p>
                      </div>
                      <div className="ml-10 mr-6 user-info-section p-4 w-1/2  md:p-5 border-2 border-gray-300 flex flex-col items-start mt-4">
                        <h3 className="text-blue-500 font-bold">
                          Education Details
                        </h3>
                        {education.map((edu) => (
                          <div key={edu.startDate}>
                            <p>Institute: {edu.institution}</p>
                            <p>Degree Name: {edu.degree}</p>
                            <p>Start Date: {edu.startDate}</p>
                            <p>End Date: {edu.endDate}</p>
                            <br />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="ml-6 mt-4 w-1/2 p-4 md:p-5 border-2 border-gray-300 flex flex-col items-start">
                        <h3 className="text-blue-500 font-bold">
                          Experience Details
                        </h3>
                        {experience.map((exp) => (
                          <div key={exp.startDate}>
                            <p>Company: {exp.company}</p>
                            <p>Position: {exp.title}</p>
                            <p>Start Date: {exp.startDate}</p>
                            <p>End Date: {exp.endDate}</p>
                            <br />
                          </div>
                        ))}
                        <p>Reallocation: {reallocation}</p>

                        <p>Skills: {tags.map((tag) => tag.text).join(", ")}</p>
                      </div>

                      <div className="ml-10 mr-4 w-1/2 user-info-section p-4 md:p-5 border-2 border-gray-300 flex flex-col items-start mt-4">
                        <h3 className="text-blue-500 font-bold">
                          Location Details
                        </h3>
                        <p>Country: {country}</p>
                        <p>City: {city}</p>
                        <p>Area: {area}</p>
                        <p>Latitude: {latitude}</p>
                        <p>Longitude: {longitude}</p>
                      </div>
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="bg-blue-500 ml-6  mb-10 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
                    </button>

                    <div></div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <UserSupport click={clicked} />
    </div>
  );
};
export default UpdateProfile;
