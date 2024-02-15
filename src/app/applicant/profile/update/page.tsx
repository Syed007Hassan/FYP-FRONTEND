"use client";
import React, { use, useState, useEffect } from "react";
import personalDetails from "@/components/applicant/profileComponents/personalDetails";
import EducationDetails from "@/components/applicant/profileComponents/educatonDetails";
import locationAndSkillDetails from "@/components/applicant/profileComponents/locationAndSkillDetails";
import experienceDetails from "@/components/applicant/profileComponents/experienceDetails";
import UploadResume from "@/components/applicant/profileComponents/uploadResume";
import "../../../../styles/applicant.css";
import { updateApplicantDetails } from "@/redux/services/UpdateProfile/updateAction";
import { updateApi } from "@/redux/services/UpdateProfile/updateAction";
import Cookies from 'js-cookie';
import { parseJwt } from "@/lib/Constants";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const UpdateProfile = () => {
  const [step, setStep] = useState(0);

  const dispatch = useAppDispatch();
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

  // location attributes
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");

  // skills attributes
  type Tags = { id: string; text: string }[];
  const [tags, setTags] = useState<Tags>([]);

  // experience attributes
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [expStartDate, setExpStartDate] = useState("");
  const [expEndDate, setExpEndDate] = useState("");
  const [reallocation, setReallocation] = useState("");
  const [email, setEmail] = useState("");
  const [decodedData, setDecodedData] = useState(null);
  const [applicantIdTemp, setApplicantIdTemp] = useState(null);

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1); // Decrement step by 1
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1); // Increment step by 1
  };

  useEffect(() => {
    console.log(dob);
  }, [dob]);
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
      setApplicantIdTemp(decodedData.applicantId.toString() || "");
    };;
    parseJwtFromSession();

  }, []);

  useEffect(() => {
    console.log(email)
  }, [email])
  const handleSubmit = (e: any) => {
    //  event.preventDefault();
    const applicantId = applicantIdTemp;
    const temp_data = {
      dob,
      gender,
      aboutMe: desc,
      education: [
        {
          degree: degreeName,
          institution: institute,
          startDate,
          endDate,
        },
      ],
      skills: tags.map((tag) => tag.text),
      location: {
        area,
        city,
        country,
        latitude: "0",
        longitude: "0",
      },
      experience: [
        {
          company,
          title: position,
          startDate: expStartDate,
          endDate: expEndDate,
          description: "",
        },
      ],
      relocation: reallocation,
      resume: "",
      languages: "",
    };
    console.log(temp_data);
    dispatch(updateApplicantDetails(applicantId, temp_data))

  }

  return (
    <div className="font-sans">
      <div className="flex justify-center items-center min-h-screen">
        <form
          className="p-6 rounded shadow-md w-full max-w-md bg-gray-300"
          style={{ backgroundColor: "rgba(242, 242, 242, 0.3)" }}
          onSubmit={handleSubmit}
        >
          {step === 0 && (
            <>
              <h1 className="text-2xl text-blue-900 font-bold pb-4">
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
              <h1 className="text-2xl text-blue-900 font-bold pb-4">
                Education Details
              </h1>
              {EducationDetails({
                degreeTitle,
                institute,
                startDate,
                endDate,
                degreeName,
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
              <h1 className="text-2xl text-blue-900 font-bold pb-4">
                Location & Skills
              </h1>
              {locationAndSkillDetails({
                country,
                city,
                area,
                tags,
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
              <h1 className="text-2xl text-blue-900 font-bold pb-4">
                Experience Details
              </h1>
              {experienceDetails({
                company,
                position,
                expStartDate,
                expEndDate,
                reallocation,
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
              <h1 className="text-2xl text-blue-900 font-bold pb-4">
                Upload Resume
              </h1>
              {UploadResume({ reallocation, setReallocation, nextStep, prevStep })}
            </>
          )}
        </form>
      </div>
    </div>
  );
};


export default UpdateProfile;
