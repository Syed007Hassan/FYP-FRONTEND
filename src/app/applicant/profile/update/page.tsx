"use client";
import React, { use, useState, useEffect } from "react";
import personalDetails from "@/components/applicant/profileComponents/personalDetails";
import EducationDetails from "@/components/applicant/profileComponents/educatonDetails";
import locationAndSkillDetails from "@/components/applicant/profileComponents/locationAndSkillDetails";
import experienceDetails from "@/components/applicant/profileComponents/experienceDetails";
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

  // education attributes
  const [institute, setInstitute] = useState("");
  const [degreeTitle, setDegreeTitle] = useState("");
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
      setApplicantIdTemp(decodedData.applicantId || "");
    };
    parseJwtFromSession();

  }, []);

  useEffect(() => {
    console.log(email)

  }, [email])
  // const handleSubmit = (e: any) => {
  //   //  event.preventDefault();
  //   const ApplicantId = parseInt(applicantIdTemp);
  //   const temp_data = {
  //     dob,

  //   }


  // }

  return (
    <div className="bg-gray-100 font-inter bg-image">
      <h1 className="text-4xl font-bold text-center text-blue-900">
        Profile Setup
      </h1>
      <div className="flex justify-center items-center min-h-screen">
        <form
          className="p-6 rounded shadow-md w-full max-w-md"
          style={{ backgroundColor: "rgba(242, 242, 242, 0.3)" }}
        // onSubmit={handleSubmit}
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
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
