"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSkype,
} from "react-icons/fa";
import EducationDetails from "@/components/applicant/profileUpdate/educatonDetails";
import ExperienceDetails from "@/components/applicant/profileUpdate/experienceDetails";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetApplicantDetailsQuery } from "@/redux/services/Applicant/applicantAction";
import PersonalDetails from "@/components/applicant/profileUpdate/contactDetails";
import Cookies from "js-cookie";
import { parseJwt } from "@/lib/Constants";
import ApplicantDetails, { AboutInfoData } from "@/types/applicant";
import Loader from "@/components/Loader";
import AboutInfo from "@/components/applicant/profileUpdate/aboutInfo";
import {
  uploadProfileImage,
  updateEducationDetails,
  updateExperienceDetails,
  updateSkillsAndAboutMe,
  updateProfileDetails,
  updateAboutInfo,
  uploadResume,
} from "@/redux/services/Applicant/applicantAction";
import { Education, Experience, Contact } from "@/types/applicant";

const Profile = () => {
  const [currentModal, setCurrentModal] = useState(null);

  const dispatch = useAppDispatch();
  // personal detail attributes
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [desc, setDesc] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("select gender");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [profilePic, setProfilePic] = useState<File | null>(null);

  // education attributes
  const [institute, setInstitute] = useState("");
  const [degreeTitle, setDegreeTitle] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // location attributes
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  // skills attributes
  type Tags = { id: string; text: string }[];
  const [tags, setTags] = useState<Tags>([]);
  const [skills, setSkills] = useState("");

  // experience attributes
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [expStartDate, setExpStartDate] = useState("");
  const [expEndDate, setExpEndDate] = useState("");
  const [reallocation, setReallocation] = useState("");
  const [email, setEmail] = useState("");
  const [decodedData, setDecodedData] = useState(null);
  const [applicantIdTemp, setApplicantIdTemp] = useState("");

  // update attributes
  const [updateEducation, setUpdateEducation] = useState<Education[]>([]);
  const [updateExperience, setUpdateExperience] = useState<Experience[]>([]);
  const [updateContact, setUpdateContact] = useState<Contact>();
  const [updateAbout, setUpdateAbout] = useState<AboutInfoData>();
  const [updateEdButton, setUpdateEdButton] = useState(false);
  const [updateExpButton, setUpdateExpButton] = useState(false);
  const [updateContactButton, setUpdateContactButton] = useState(false);
  const [clickLocation, setClickLocation] = useState(false);
  const [updateAboutButton, setUpdateAboutButton] = useState(false);

  const isSidebarOpen = useAppSelector((state) => state.sidebar.sidebarState);
  const {
    loading,
    error: ApplicantError,
    data: ApplicantData,
    success,
  } = useAppSelector((state) => state.applicantReducer);

  const [applicantDetails, setApplicantDetails] = useState<ApplicantDetails>();

  const { data, error, isLoading } = useGetApplicantDetailsQuery({
    id: applicantIdTemp,
  });

  const openModal = (modalId: any) => {
    console.log("Modal ID:", modalId); // Check the received modal ID
    setCurrentModal(modalId); // Update the state
  };

  // Function to close the modal
  const closeModal = () => {
    setCurrentModal(null);
  };

  useEffect(() => {
    if (data) {
      setApplicantDetails(data?.data);
      console.log("Applicant Details:", data);
    }
  }, [data]);

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
    };
    parseJwtFromSession();
  }, []);

  const handleFileUpload = (event: any) => {
    setProfilePic(event.target.files[0]);
    // Now you can send `file` to your server or read its contents using FileReader API
  };

  useEffect(() => {
    dispatch(uploadProfileImage({ id: applicantIdTemp, image: profilePic }));
  }, [profilePic, dispatch, applicantIdTemp]);

  useEffect(() => {
    if (ApplicantData) {
      console.log("Applicant Data:", ApplicantData);
    }
  }, [ApplicantData]);

  useEffect(() => {
    if (updateEdButton === true && applicantDetails) {
      let temp_education = [...(applicantDetails?.education || [])];
      temp_education.push({
        degree: degreeName,
        institution: institute,
        startDate: startDate,
        endDate: endDate,
      });
      setUpdateEducation(temp_education);
    }

    setDegreeName("");
    setInstitute("");
    setStartDate("");
    setEndDate("");
  }, [updateEdButton]);

  useEffect(() => {
    if (updateEdButton === true && updateEducation.length > 0) {
      dispatch(
        updateEducationDetails({
          id: applicantIdTemp,
          education: updateEducation,
        })
      );
      setUpdateEdButton(false);
    }
    setCurrentModal(null);
  }, [
    updateEducation,
    dispatch,
    applicantIdTemp,
    updateEdButton,
    applicantDetails,
  ]);

  useEffect(() => {
    if (updateExpButton === true && applicantDetails) {
      let temp_experience = [...(applicantDetails?.experience || [])];
      temp_experience.push({
        title: position,
        company: company,
        startDate: expStartDate,
        endDate: expEndDate,
        description: "",
      });
      setUpdateExperience(temp_experience);
    }

    setPosition("");
    setCompany("");
    setExpStartDate("");
    setExpEndDate("");
  }, [updateExpButton]);

  useEffect(() => {
    if (updateExpButton === true && updateExperience.length > 0) {
      console.log("Update Experience:", updateExperience);
      dispatch(
        updateExperienceDetails({
          id: applicantIdTemp,
          experience: updateExperience,
        })
      );
      setUpdateExpButton(false);
    }
    setCurrentModal(null);
  }, [updateExperience, dispatch, applicantIdTemp, updateExpButton]);

  useEffect(() => {
    if (clickLocation === true && applicantDetails) {
      getCurrentLocation();
      setClickLocation(false);
    }
  }, [clickLocation, applicantDetails]);

  const getCurrentLocation = async () => {
    console.log("Getting current location");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        setLatitude(pos.coords.latitude.toString());
        setLongitude(pos.coords.longitude.toString());
        console.log(latitude, longitude);
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
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (updateContactButton === true && applicantDetails) {
      let temp_contact = {
        location: {
          country: country,
          city: city,
          area: area,
          latitude: latitude,
          longitude: longitude,
        },
        phoneNo: phone,
      };
      setUpdateContact(temp_contact || {});
    }
  }, [updateContactButton]);

  useEffect(() => {
    if (updateContactButton === true && applicantDetails) {
      dispatch(
        updateProfileDetails({
          id: applicantIdTemp,
          contact: updateContact,
        })
      );
      setUpdateContactButton(false);
    }
    setCurrentModal(null);
  }, [
    updateContactButton,
    dispatch,
    applicantIdTemp,
    applicantDetails,
    updateContact,
  ]);

  useEffect(() => {
    if (updateAboutButton === true && applicantDetails) {
      let temp_about = {
        aboutMe: desc,
        skills: tags.map((tag) => tag.text),
      };
      setUpdateAbout(temp_about || {});
    }
  }, [updateAboutButton]);

  useEffect(() => {
    if (updateAboutButton === true && updateAbout) {
      dispatch(
        updateAboutInfo({
          id: applicantIdTemp,
          temp_data: updateAbout,
        })
      );
      setUpdateAboutButton(false);
    }
    setCurrentModal(null);
  }, [updateAboutButton, dispatch, applicantIdTemp, updateAbout]);

  const handleUploadResume = (event: any) => {
    console.log("Resume:", event.target.files[0]);
    dispatch(
      uploadResume({ id: applicantIdTemp, resume: event.target.files[0] })
    );
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className={`content overflow-hidden ${
            isSidebarOpen ? "shifted-dashboard" : ""
          }`}
        >
          <div className="main-content">
            <div className="pt-4 page-content">
              <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-y-10 lg:gap-10">
                  <div className="pl-40 col-span-12 lg:col-span-4">
                    <div className="border-4 rounded border-gray-100/50 dark:border-neutral-600">
                      <div className="p-5 border-b border-gray-100/50 dark:border-neutral-600">
                        <div className="text-center">
                          <div className="relative">
                            <div className="relative inline-block">
                              <Image
                                src={
                                  applicantDetails?.profilePicture &&
                                  applicantDetails?.profilePicture !== "adas"
                                    ? applicantDetails?.profilePicture
                                    : "/user.png"
                                }
                                alt="User"
                                width={100}
                                height={100}
                                className="mx-auto rounded-full"
                              />
                              <div className="absolute bottom-0 flex items-center justify-center w-full pb-2">
                                <label
                                  htmlFor="upload"
                                  className="cursor-pointer"
                                >
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

                            {/* Input element for file upload, hidden with CSS */}

                            <input
                              type="file"
                              id="upload"
                              style={{ display: "none" }}
                              onChange={handleFileUpload}
                            />
                          </div>
                          <h6 className="mt-2 mb-0 text-lg text-gray-900 dark:text-gray-50">
                            {applicantDetails?.applicant?.name}
                          </h6>
                          <p className="mb-2 text-gray-500 dark:text-gray-300">
                            Creative Designer
                          </p>
                        </div>
                      </div>
                      <div className="p-5 border-b border-gray-100/50 dark:border-neutral-600">
                        <h6 className="mb-5 font-semibold text-gray-900 text-17 dark:text-gray-50">
                          Profile Overview
                        </h6>
                        <ul className="space-y-4">
                          <li>
                            <div className="flex">
                              <label className="text-gray-900 w-[118px] font-medium dark:text-gray-50">
                                Date Of Birth
                              </label>
                              <div>
                                <p className="mb-0 text-gray-500 dark:text-gray-300">
                                  {applicantDetails?.dob}
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="flex">
                              <label className="text-gray-900 w-[118px] font-medium dark:text-gray-50">
                                Gender
                              </label>
                              <div>
                                <p className="mb-0 text-gray-500 dark:text-gray-300">
                                  {applicantDetails?.gender}
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="flex">
                              <label className="text-gray-900 w-[118px] font-medium dark:text-gray-50">
                                Languages
                              </label>
                              <div>
                                <p className="mb-0 text-gray-500 dark:text-gray-300">
                                  English, Turkish, Japanese
                                </p>
                              </div>
                            </div>
                          </li>
                          <li></li>

                          <li></li>
                        </ul>
                        <div className="mt-6">
                          <label className="btn text-center ml-2 py-2 px-4 w-64 font-medium text-white items-center justify-center flex bg-blue-800 hover:bg-blue-700">
                            Upload CV
                            <input
                              type="file"
                              style={{ display: "none" }}
                              onChange={handleUploadResume}
                            />
                          </label>
                        </div>
                        <div className="mt-6">
                          <button
                            className="btn text-center ml-2 py-2 px-4 w-64 font-medium text-white items-center justify-center flex bg-blue-800 hover:bg-blue-700"
                            onClick={() =>
                              window.open(applicantDetails?.resume, "_blank")
                            }
                          >
                            Download CV
                          </button>
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="relative justify-between flex mt-4">
                          <h6 className="mb-3 font-semibold text-gray-900 text-17 dark:text-gray-50">
                            Contact Details
                          </h6>
                          <button
                            className=" text-blue-700"
                            data-modal-target="education"
                            data-modal-toggle="education"
                            onClick={() => openModal("contact")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                        </div>
                        <ul>
                          <li>
                            <div className="flex items-center mt-4">
                              <div className="group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-11 w-11 text-xl text-center leading-[2.3] rounded-full group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500">
                                <FaEnvelope />
                              </div>
                              <div className="ltr:ml-3 rtl:mr-3">
                                <h6 className="mb-1 text-gray-900 text-14 dark:text-gray-50">
                                  Email
                                </h6>
                                <p className="text-gray-500 dark:text-gray-300">
                                  {applicantDetails?.applicant?.email}
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center mt-4">
                              <div className="group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-11 w-11 text-xl text-center leading-[2.3] rounded-full group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500">
                                <FaMapMarkerAlt />
                              </div>
                              <div className="ltr:ml-3 rtl:mr-3">
                                <h6 className="mb-1 text-gray-900 text-14 dark:text-gray-50">
                                  Address
                                </h6>
                                <p className="text-gray-500 dark:text-gray-300">
                                  {applicantDetails?.location?.area},{" "}
                                  {applicantDetails?.location?.city},{" "}
                                  {applicantDetails?.location?.country}
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center mt-4">
                              <div className="group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-11 w-11 text-xl text-center leading-[2.3] rounded-full group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500">
                                <FaPhoneAlt />
                              </div>
                              <div className="ltr:ml-3 rtl:mr-3">
                                <h6 className="mb-1 text-gray-900 text-14 dark:text-gray-50">
                                  Phone
                                </h6>
                                <p className="text-gray-500 dark:text-gray-300">
                                  {applicantDetails?.phoneNo}
                                </p>
                              </div>
                            </div>
                          </li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pr-40 col-span-12 lg:col-span-8">
                    <div className="p-6 border-4 rounded border-gray-100/50 dark:border-neutral-600">
                      <div>
                        <div className="relative justify-between flex mt-4">
                          <h6 className="mb-3 font-semibold text-gray-900 text-17 dark:text-gray-50">
                            About Me
                          </h6>
                          <button
                            className=" text-blue-700"
                            data-modal-target="education"
                            data-modal-toggle="education"
                            onClick={() => openModal("aboutinfo")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                        </div>
                        <p className="mb-2 text-gray-500 dark:text-gray-300">
                          {applicantDetails?.aboutMe}
                        </p>
                      </div>
                      <div className="p-5 border-b border-gray-100/50 dark:border-neutral-600">
                        <h6 className="mb-3 mr-0 font-semibold text-gray-900 text-17 dark:text-gray-50">
                          Professional Skills
                        </h6>
                        <div className="flex flex-wrap gap-2">
                          {/* <span className="px-1 py-1 font-medium text-green-500 rounded bg-green-400/20 text-13">
                          User Interface Design
                        </span> */}
                          {applicantDetails?.skills?.map((skill, index) => (
                            <span
                              key={index}
                              className="px-1 py-1 font-medium text-green-500 rounded bg-green-400/20 text-13"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-5 ">
                        <div className="relative justify-between flex mt-4">
                          <h6 className="mb-0 text-gray-900 font-semibold text-17 fw-bold dark:text-gray-50">
                            Education
                          </h6>

                          <button
                            className=" text-blue-700"
                            data-modal-target="education"
                            data-modal-toggle="education"
                            onClick={() => openModal("education")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                        </div>
                        {applicantDetails?.education?.map(
                          (education, index) => (
                            <div className="flex mt-8" key={index}>
                              <div className="h-8 w-8 ml-3 mr-3 text-center leading-[2.2] bg-blue-700 text-white rounded-full font-medium">
                                {index + 1}
                              </div>
                              <div className="space-y-6 ltr:ml-4 rtl:mr-4">
                                <div>
                                  <h6 className="mb-1 text-gray-900 text-16 dark:text-gray-50">
                                    {education?.degree}
                                  </h6>
                                  <p className="mb-2 text-gray-500 dark:text-gray-300">
                                    {education?.institution} - (
                                    {education.startDate} - {education.endDate})
                                  </p>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <div className="pt-10">
                        <div className="relative justify-between flex mt-4">
                          <h6 className="mb-0 text-gray-900 font-semibold text-17 fw-bold dark:text-gray-50">
                            Experience
                          </h6>

                          <button
                            className="text-blue-700"
                            data-modal-target="experience"
                            data-modal-toggle="experience"
                            onClick={() => openModal("experience")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                        </div>{" "}
                        {applicantDetails?.experience?.map(
                          (experience, index) => (
                            <div className="flex mt-8" key={index}>
                              <div className="h-8 w-8 ml-3 mr-3 text-center leading-[2.2] bg-blue-700 text-white rounded-full font-medium">
                                {index + 1}
                              </div>
                              <div className="space-y-6 ltr:ml-4 rtl:mr-4">
                                <div>
                                  <h6 className="mb-1 text-gray-900 text-16 dark:text-gray-50">
                                    {experience?.title}
                                  </h6>
                                  <p className="mb-2 text-gray-500 dark:text-gray-300">
                                    {experience?.company} - (
                                    {experience.startDate} -{" "}
                                    {experience.endDate})
                                  </p>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {currentModal === "aboutinfo" && (
              <div
                id="exp-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full"
              >
                <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        About Info and Professional Skills
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

                    <div className="p-4 md:p-5">
                      <>
                        {AboutInfo({
                          desc,
                          setDesc,
                          tags,
                          setTags,
                          setUpdateAboutButton,
                        })}
                      </>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {currentModal === "education" && (
              <div
                id="select-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full"
              >
                <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Education Details
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

                    <div className="p-4 md:p-5">
                      <>
                        {EducationDetails({
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
                        })}
                      </>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentModal === "experience" && (
              <div
                id="exp-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full"
              >
                <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Experience Details
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

                    <div className="p-4 md:p-5">
                      <>
                        {ExperienceDetails({
                          company,
                          position,
                          expStartDate,
                          expEndDate,
                          reallocation,
                          setUpdateExpButton,
                          setCompany,
                          setPosition,
                          setExpStartDate,
                          setExpEndDate,
                          setReallocation,
                        })}
                      </>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentModal === "contact" && (
              <div
                id="select-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full"
              >
                <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Contact Details
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

                    <div className="p-4 md:p-5">
                      <>
                        {PersonalDetails({
                          country,
                          city,
                          area,
                          latitude,
                          longitude,
                          setCountry,
                          setCity,
                          setArea,
                          setLatitude,
                          setLongitude,
                          setPhone,
                          setClickLocation,
                          setUpdateContactButton,
                        })}
                      </>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
