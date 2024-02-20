"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaRegClock, FaChevronDown } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ApplicantHeader from "@/components/applicant/applicantHeader";
import { useGetAllJobsQuery } from "@/redux/services/job/jobAction";
import Job from "@/types/job";
import Loader from "@/components/Loader";
import ApplicantDetails from "@/types/applicant";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useGetApplicantDetailsQuery } from "@/redux/services/Applicant/applicantAction";
import { parseJwt } from "@/lib/Constants";
import Cookies from "js-cookie";

const JobFeed = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(true);
  const [isWorkExpOpen, setIsWorkExpOpen] = useState(true);
  const [isJobTypeOpen, setIsJobTypeOpen] = useState(true);
  const [isDateOpen, setIsDateOpen] = useState(true);
  const [isTagsOpen, setIsTagsOpen] = useState(true);
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [applicantDetails, setApplicantDetails] = useState<ApplicantDetails>();
  const [email, setEmail] = useState("");
  const [decodedData, setDecodedData] = useState<any>();
  const [applicantId, setApplicantId] = useState("");

  const { data, error, isLoading } = useGetAllJobsQuery();
  const { data: applicantDetailsData, error: applicantDetailsError, isLoading: applicantDetailsLoading } = useGetApplicantDetailsQuery({ id: applicantId});

  // search variables
  const [jobTitle, setJobTitle] = useState("");
  const [jobCountry, setJobCountry] = useState("");
<<<<<<< HEAD
  const [jobCategory, setJobCategory] = useState("");
  const [jobType, setJobType] = useState("");
  const [pastDate, setPastDate] = useState<Date | null>(null);
  const [experience, setExperience] = useState("");
  const [nearby, setNearby] = useState(false);

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
      setApplicantId(decodedData.id.toString() || "");
    };;
    parseJwtFromSession();

  }, []);

  useEffect(() => {
    if (applicantDetailsData) {
      console.log(applicantDetailsData);
    }
    setApplicantDetails(applicantDetailsData?.data);
  }, [applicantDetailsData, applicantDetailsError, applicantDetailsLoading]);

=======
>>>>>>> 13a6e6682957ac8bf8d991f0dc0ee08935548862

  useEffect(() => {
    if (data) {
      console.log(data);
    }
    setAllJobs(data?.data || []);
  }, [data, error, isLoading]);

  useEffect(() => {
<<<<<<< HEAD
    let filteredJobs = allJobs;
=======

    if (!jobTitle && !jobCountry) {
      setFilteredJobs(allJobs);
    }
>>>>>>> 13a6e6682957ac8bf8d991f0dc0ee08935548862

    if (jobTitle) {
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.jobTitle.toLowerCase().includes(jobTitle.toLowerCase()) ||
          job.company.companyName.toLowerCase().includes(jobTitle.toLowerCase())
      );
<<<<<<< HEAD
    }

    if (jobCountry) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobLocation.country.toLowerCase().includes(jobCountry.toLowerCase())
      );
    }

    if (jobCategory) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobCategory.toLowerCase().includes(jobCategory.toLowerCase())
      );
    }

    if (jobType) {
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.jobType.toLowerCase().includes(jobType.toLowerCase()) ||
          job.jobCategory.toLowerCase().includes(jobType.toLowerCase())
      );
    }

    if (experience) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobExperience.toLowerCase().includes(experience.toLowerCase())
      );
    }

    if (pastDate) {
      const hoursAgo =
        (new Date().getTime() - pastDate.getTime()) / 1000 / 60 / 60;
      const selectedDate = getPastDate(hoursAgo);
      filteredJobs = filteredJobs.filter((job) => {
        const jobDate = new Date(job.jobCreatedAt);
        return jobDate.getTime() > selectedDate.getTime();
      });
    }

    if (nearby) {
      filteredJobs = filteredJobs.filter((job) => {
        const jobLocation = job.jobLocation.area;
        const applicantLocation = applicantDetails?.location.area;
        if (jobLocation && applicantLocation) {
          return (
            jobLocation.toLowerCase() === applicantLocation.toLowerCase() ||
            job.jobLocation.city.toLowerCase() ===
              applicantDetails?.location.city.toLowerCase()
          );
        }
        return false;
      });
    }

    setFilteredJobs(filteredJobs);
  }, [allJobs, jobTitle, jobCountry, jobCategory, jobType, pastDate, experience, nearby, applicantDetails]);

  const handleReset = () => {
    setJobTitle("");
    setJobCountry("");
    setJobCategory("");
    setJobType("");
    setPastDate(null);
    setExperience("");
    setNearby(false);
  };

  function getPastDate(hours: number) {
    const date = new Date();
    date.setHours(date.getHours() - hours);
    return date;
  }
=======
      setFilteredJobs(filteredJobs);
    }

    if (jobCountry) {
      const filteredJobs = allJobs.filter(
        (job) =>
          job.jobLocation.country.toLowerCase().includes(jobCountry.toLowerCase())
      );
      setFilteredJobs(filteredJobs);
    }

  }, [allJobs, jobTitle, jobCountry]);
>>>>>>> 13a6e6682957ac8bf8d991f0dc0ee08935548862

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <ApplicantHeader />
          <div className=" px-5 md:px-24 lg:px-44">
            <div className="">
              <section className="py-10">
                <h1 className="text-2xl font-bold font-inter text-violet-600 py-6">
                  SyncFlow | Job Feed
                </h1>
                <div className="container mx-auto">
                  <div className="grid grid-cols-12 gap-y-10 lg:gap-10">
                    <div className="col-span-12 xl:col-span-9">
                      <div className="job-list-header">
                        <form action="#">
                          <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 xl:col-span-3">
                              <div className="relative">
                                <i className="uil uil-briefcase-alt absolute top-1/2 left-3 transform -translate-y-1/2"></i>
                                <input
                                  type="search"
                                  className="w-full pl-10 py-2 pr-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-gray-100 dark:bg-gray-800 dark:placeholder-gray-600"
                                  placeholder="Job, company..."
                                  onChange={(e) => setJobTitle(e.target.value)}
                                  value={jobTitle}
                                />
                              </div>
                            </div>
                            {/* <!--end col--> */}
                            <div className="col-span-12 xl:col-span-3">
                              <div className="relative">
                                <i className="uil uil-location-point absolute top-1/2 left-3 transform -translate-y-1/2"></i>
                                <select
                                  className="form-select w-full py-2 pr-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-gray-100 dark:bg-gray-800 dark:placeholder-gray-600"
                                  data-trigger
                                  name="choices-single-location"
                                  id="choices-single-location"
<<<<<<< HEAD
                                  value={jobCountry}
                                  onChange={(e) => {
                                    setJobCountry(e.target.value);
                                  }}
=======
                                  onChange={(e) => { setJobCountry(e.target.value) }}
>>>>>>> 13a6e6682957ac8bf8d991f0dc0ee08935548862
                                >
                                  <option value="Afghanistan">
                                    Afghanistan
                                  </option>
                                  <option value="Åland Islands">
                                    &Aring;land Islands
                                  </option>
                                  <option value="Albania">Albania</option>
                                  <option value="Algeria">Algeria</option>
                                  <option value="American Samoa">
                                    American Samoa
                                  </option>
                                  <option value="Andorra">Andorra</option>
                                  <option value="Angola">Angola</option>
                                  <option value="Anguilla">Anguilla</option>
                                  <option value="Antarctica">Antarctica</option>
                                  <option value="Antigua and Barbuda">
                                    Antigua and Barbuda
                                  </option>
                                  <option value="Argentina">Argentina</option>
                                  <option value="Armenia">Armenia</option>
                                  <option value="Aruba">Aruba</option>
                                  <option value="Australia">Australia</option>
                                  <option value="Austria">Austria</option>
                                  <option value="Azerbaijan">Azerbaijan</option>
                                  <option value="Bahamas">Bahamas</option>
                                  <option value="Bahrain">Bahrain</option>
                                  <option value="Bangladesh">Bangladesh</option>
                                  <option value="Barbados">Barbados</option>
                                  <option value="Belarus">Belarus</option>
                                  <option value="Belgium">Belgium</option>
                                  <option value="Belize">Belize</option>
                                  <option value="Benin">Benin</option>
                                  <option value="Bermuda">Bermuda</option>
                                  <option value="Bhutan">Bhutan</option>
                                  <option value="Bolivia, Plurinational State of">
                                    Bolivia, Plurinational State of
                                  </option>
                                  <option value="Bosnia and Herzegovina">
                                    Bosnia and Herzegovina
                                  </option>
                                  <option value="Botswana">Botswana</option>
                                  <option value="Bouvet Island">
                                    Bouvet Island
                                  </option>
                                  <option value="Brazil">Brazil</option>
                                  <option value="British Indian Ocean Territory">
                                    British Indian Ocean Territory
                                  </option>
                                  <option value="Brunei Darussalam">
                                    Brunei Darussalam
                                  </option>
                                  <option value="Bulgaria">Bulgaria</option>
                                  <option value="Burkina Faso">
                                    Burkina Faso
                                  </option>
                                  <option value="Burundi">Burundi</option>
                                  <option value="Cambodia">Cambodia</option>
                                  <option value="Cameroon">Cameroon</option>
                                  <option value="Canada">Canada</option>
                                  <option value="Cape Verde">Cape Verde</option>
                                  <option value="Cayman Islands">
                                    Cayman Islands
                                  </option>
                                  <option value="Central African Republic">
                                    Central African Republic
                                  </option>
                                  <option value="Chad">Chad</option>
                                  <option value="Chile">Chile</option>
                                  <option value="China">China</option>
                                  <option value="Christmas Island">
                                    Christmas Island
                                  </option>
                                  <option value="Cocos (Keeling) Islands">
                                    Cocos (Keeling) Islands
                                  </option>
                                  <option value="Colombia">Colombia</option>
                                  <option value="Comoros">Comoros</option>
                                  <option value="Congo">Congo</option>
                                  <option value="Congo, the Democratic Republic of the">
                                    Congo, the Democratic Republic of the
                                  </option>
                                  <option value="Cook Islands">
                                    Cook Islands
                                  </option>
                                  <option value="Costa Rica">Costa Rica</option>
<<<<<<< HEAD
                                  <option value="Côte d'Ivoire">
=======
                                  <option value="Côte d&apos;Ivoire">
>>>>>>> 13a6e6682957ac8bf8d991f0dc0ee08935548862
                                    C&ocirc;te d&apos;Ivoire
                                  </option>
                                  <option value="Croatia">Croatia</option>
                                  <option value="Cuba">Cuba</option>
                                  <option value="Cyprus">Cyprus</option>
                                  <option value="Czech Republic">
                                    Czech Republic
                                  </option>
                                  <option value="Denmark">Denmark</option>
                                  <option value="Djibouti">Djibouti</option>
                                  <option value="Dominica">Dominica</option>
                                  <option value="Dominican Republic">
                                    Dominican Republic
                                  </option>
                                  <option value="Ecuador">Ecuador</option>
                                  <option value="Egypt">Egypt</option>
                                  <option value="El Salvador">
                                    El Salvador
                                  </option>
                                  <option value="Equatorial Guinea">
                                    Equatorial Guinea
                                  </option>
                                  <option value="Eritrea">Eritrea</option>
                                  <option value="Estonia">Estonia</option>
                                  <option value="Ethiopia">Ethiopia</option>
                                  <option value="Falkland Islands (Malvinas)">
                                    Falkland Islands (Malvinas)
                                  </option>
                                  <option value="Faroe Islands">
                                    Faroe Islands
                                  </option>
                                  <option value="Fiji">Fiji</option>
                                  <option value="Finland">Finland</option>
                                  <option value="France">France</option>
                                  <option value="French Guiana">
                                    French Guiana
                                  </option>
                                  <option value="French Polynesia">
                                    French Polynesia
                                  </option>
                                  <option value="French Southern Territories">
                                    French Southern Territories
                                  </option>
                                  <option value="Gabon">Gabon</option>
                                  <option value="Gambia">Gambia</option>
                                  <option value="Georgia">Georgia</option>
                                  <option value="Germany">Germany</option>
                                  <option value="Ghana">Ghana</option>
                                  <option value="Gibraltar">Gibraltar</option>
                                  <option value="Greece">Greece</option>
                                  <option value="Greenland">Greenland</option>
                                  <option value="Grenada">Grenada</option>
                                  <option value="Guadeloupe">Guadeloupe</option>
                                  <option value="Guam">Guam</option>
                                  <option value="Guatemala">Guatemala</option>
                                  <option value="Guernsey">Guernsey</option>
                                  <option value="Guinea">Guinea</option>
                                  <option value="Guinea-Bissau">
                                    Guinea-Bissau
                                  </option>
                                  <option value="Guyana">Guyana</option>
                                  <option value="Haiti">Haiti</option>
                                  <option value="Heard Island and McDonald Islands">
                                    Heard Island and McDonald Islands
                                  </option>
                                  <option value="Holy See (Vatican City State)">
                                    Holy See (Vatican City State)
                                  </option>
                                  <option value="Honduras">Honduras</option>
                                  <option value="Hong Kong">Hong Kong</option>
                                  <option value="Hungary">Hungary</option>
                                  <option value="Iceland">Iceland</option>
                                  <option value="India">India</option>
                                  <option value="Indonesia">Indonesia</option>
                                  <option value="Iran, Islamic Republic of">
                                    Iran, Islamic Republic of
                                  </option>
                                  <option value="Iraq">Iraq</option>
                                  <option value="Ireland">Ireland</option>
                                  <option value="Isle of Man">
                                    Isle of Man
                                  </option>
                                  <option value="Israel">Israel</option>
                                  <option value="Italy">Italy</option>
                                  <option value="Jamaica">Jamaica</option>
                                  <option value="Japan">Japan</option>
                                  <option value="Jersey">Jersey</option>
                                  <option value="Jordan">Jordan</option>
                                  <option value="Kazakhstan">Kazakhstan</option>
                                  <option value="Kenya">Kenya</option>
                                  <option value="Kiribati">Kiribati</option>
                                  <option value="Korea, Democratic People's Republic of">
                                    Korea, Democratic People&apos;s Republic of
                                  </option>
                                  <option value="Korea, Republic of">
                                    Korea, Republic of
                                  </option>
                                  <option value="Kuwait">Kuwait</option>
                                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                                  <option value="Lao People's Democratic Republic">
                                    Lao People&apos;s Democratic Republic
                                  </option>
                                  <option value="Latvia">Latvia</option>
                                  <option value="Lebanon">Lebanon</option>
                                  <option value="Lesotho">Lesotho</option>
                                  <option value="Liberia">Liberia</option>
                                  <option value="Libyan Arab Jamahiriya">
                                    Libyan Arab Jamahiriya
                                  </option>
                                  <option value="Liechtenstein">
                                    Liechtenstein
                                  </option>
                                  <option value="Lithuania">Lithuania</option>
                                  <option value="Luxembourg">Luxembourg</option>
                                  <option value="Macao">Macao</option>
                                  <option value="Macedonia, the former Yugoslav Republic of">
                                    Macedonia, the former Yugoslav Republic of
                                  </option>
                                  <option value="Madagascar">Madagascar</option>
                                  <option value="Malawi">Malawi</option>
                                  <option value="Malaysia">Malaysia</option>
                                  <option value="Maldives">Maldives</option>
                                  <option value="Mali">Mali</option>
                                  <option value="Malta">Malta</option>
                                  <option value="Marshall Islands">
                                    Marshall Islands
                                  </option>
                                  <option value="Martinique">Martinique</option>
                                  <option value="Mauritania">Mauritania</option>
                                  <option value="Mauritius">Mauritius</option>
                                  <option value="Mayotte">Mayotte</option>
                                  <option value="Mexico">Mexico</option>
                                  <option value="Micronesia, Federated States of">
                                    Micronesia, Federated States of
                                  </option>
                                  <option value="Moldova, Republic of">
                                    Moldova, Republic of
                                  </option>
                                  <option value="Monaco">Monaco</option>
                                  <option value="Mongolia">Mongolia</option>
                                  <option value="Montenegro">Montenegro</option>
                                  <option value="Montserrat">Montserrat</option>
                                  <option value="Morocco">Morocco</option>
                                  <option value="Mozambique">Mozambique</option>
                                  <option value="Myanmar">Myanmar</option>
                                  <option value="Namibia">Namibia</option>
                                  <option value="Nauru">Nauru</option>
                                  <option value="Nepal">Nepal</option>
                                  <option value="Netherlands">
                                    Netherlands
                                  </option>
                                  <option value="Netherlands Antilles">
                                    Netherlands Antilles
                                  </option>
                                  <option value="New Caledonia">
                                    New Caledonia
                                  </option>
                                  <option value="New Zealand">
                                    New Zealand
                                  </option>
                                  <option value="Nicaragua">Nicaragua</option>
                                  <option value="Niger">Niger</option>
                                  <option value="Nigeria">Nigeria</option>
                                  <option value="Niue">Niue</option>
                                  <option value="Norfolk Island">
                                    Norfolk Island
                                  </option>
                                  <option value="Northern Mariana Islands">
                                    Northern Mariana Islands
                                  </option>
                                  <option value="Norway">Norway</option>
                                  <option value="Oman">Oman</option>
                                  <option value="Pakistan">Pakistan</option>
                                  <option value="Palau">Palau</option>
                                  <option value="Palestinian Territory, Occupied">
                                    Palestinian Territory, Occupied
                                  </option>
                                  <option value="Panama">Panama</option>
                                  <option value="Papua New Guinea">
                                    Papua New Guinea
                                  </option>
                                  <option value="Paraguay">Paraguay</option>
                                  <option value="Peru">Peru</option>
                                  <option value="Philippines">
                                    Philippines
                                  </option>
                                  <option value="Pitcairn">Pitcairn</option>
                                  <option value="Poland">Poland</option>
                                  <option value="Portugal">Portugal</option>
                                  <option value="Puerto Rico">
                                    Puerto Rico
                                  </option>
                                  <option value="Qatar">Qatar</option>
                                  <option value="Réunion">
                                    R&eacute;union
                                  </option>
                                  <option value="Romania">Romania</option>
                                  <option value="Russian Federation">
                                    Russian Federation
                                  </option>
                                  <option value="Rwanda">Rwanda</option>
                                  <option value="Saint Barthélemy">
                                    Saint Barth&eacute;lemy
                                  </option>
                                  <option value="Saint Helena, Ascension and Tristan da Cunha">
                                    Saint Helena, Ascension and Tristan da Cunha
                                  </option>
                                  <option value="Saint Kitts and Nevis">
                                    Saint Kitts and Nevis
                                  </option>
                                  <option value="Saint Lucia">
                                    Saint Lucia
                                  </option>
                                  <option value="Saint Martin (French part)">
                                    Saint Martin (French part)
                                  </option>
                                  <option value="Saint Pierre and Miquelon">
                                    Saint Pierre and Miquelon
                                  </option>
                                  <option value="Saint Vincent and the Grenadines">
                                    Saint Vincent and the Grenadines
                                  </option>
                                  <option value="Samoa">Samoa</option>
                                  <option value="San Marino">San Marino</option>
                                  <option value="Sao Tome and Principe">
                                    Sao Tome and Principe
                                  </option>
                                  <option value="Saudi Arabia">
                                    Saudi Arabia
                                  </option>
                                  <option value="Senegal">Senegal</option>
                                  <option value="Serbia">Serbia</option>
                                  <option value="Seychelles">Seychelles</option>
                                  <option value="Sierra Leone">
                                    Sierra Leone
                                  </option>
                                  <option value="Singapore">Singapore</option>
                                  <option value="Slovakia">Slovakia</option>
                                  <option value="Slovenia">Slovenia</option>
                                  <option value="Solomon Islands">
                                    Solomon Islands
                                  </option>
                                  <option value="Somalia">Somalia</option>
                                  <option value="South Africa">
                                    South Africa
                                  </option>
                                  <option value="South Georgia and the South Sandwich Islands">
                                    South Georgia and the South Sandwich Islands
                                  </option>
                                  <option value="Spain">Spain</option>
                                  <option value="Sri Lanka">Sri Lanka</option>
                                  <option value="Sudan">Sudan</option>
                                  <option value="Suriname">Suriname</option>
                                  <option value="Svalbard and Jan Mayen">
                                    Svalbard and Jan Mayen
                                  </option>
                                  <option value="Swaziland">Swaziland</option>
                                  <option value="Sweden">Sweden</option>
                                  <option value="Switzerland">
                                    Switzerland
                                  </option>
                                  <option value="Syrian Arab Republic">
                                    Syrian Arab Republic
                                  </option>
                                  <option value="Taiwan, Province of China">
                                    Taiwan, Province of China
                                  </option>
                                  <option value="Tajikistan">Tajikistan</option>
                                  <option value="Tanzania, United Republic of">
                                    Tanzania, United Republic of
                                  </option>
                                  <option value="Thailand">Thailand</option>
                                  <option value="Timor-Leste">
                                    Timor-Leste
                                  </option>
                                  <option value="Togo">Togo</option>
                                  <option value="Tokelau">Tokelau</option>
                                  <option value="Tonga">Tonga</option>
                                  <option value="Trinidad and Tobago">
                                    Trinidad and Tobago
                                  </option>
                                  <option value="Tunisia">Tunisia</option>
                                  <option value="Turkey">Turkey</option>
                                  <option value="Turkmenistan">
                                    Turkmenistan
                                  </option>
                                  <option value="Turks and Caicos Islands">
                                    Turks and Caicos Islands
                                  </option>
                                  <option value="Tuvalu">Tuvalu</option>
                                  <option value="Uganda">Uganda</option>
                                  <option value="Ukraine">Ukraine</option>
                                  <option value="United Arab Emirates">
                                    United Arab Emirates
                                  </option>
                                  <option value="United Kingdom">
                                    United Kingdom
                                  </option>
                                  <option value="United States">
                                    United States
                                  </option>
                                  <option value="United States Minor Outlying Islands">
                                    United States Minor Outlying Islands
                                  </option>
                                  <option value="Uruguay">Uruguay</option>
                                  <option value="Uzbekistan">Uzbekistan</option>
                                  <option value="Vanuatu">Vanuatu</option>
                                  <option value="Venezuela, Bolivarian Republic of">
                                    Venezuela, Bolivarian Republic of
                                  </option>
                                  <option value="Viet Nam">Viet Nam</option>
                                  <option value="Virgin Islands, British">
                                    Virgin Islands, British
                                  </option>
                                  <option value="Virgin Islands, U.S.">
                                    Virgin Islands, U.S.
                                  </option>
                                  <option value="Wallis and Futuna">
                                    Wallis and Futuna
                                  </option>
                                  <option value="Western Sahara">
                                    Western Sahara
                                  </option>
                                  <option value="Yemen">Yemen</option>
                                  <option value="Zambia">Zambia</option>
                                  <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                              </div>
                            </div>
                            {/* <!--end col--> */}
                            <div className="col-span-12 xl:col-span-3">
                              <div className="relative">
                                <i className="uil uil-clipboard-notes absolute top-1/2 left-3 transform -translate-y-1/2"></i>
                                <select
                                  className="form-select w-full py-2 pr-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-gray-100 dark:bg-gray-800 dark:placeholder-gray-600"
                                  data-trigger
                                  name="choices-single-categories"
                                  id="choices-single-categories"
                                  onChange={(e) => {
                                    setJobCategory(e.target.value);
                                  }}
                                >
                                  <option value="4">Accounting</option>
                                  <option value="1">IT & Software</option>
                                  <option value="3">Marketing</option>
                                  <option value="5">Banking</option>
                                </select>
                              </div>
                            </div>
                            {/* <!--end col--> */}
                            <div className="col-span-12 xl:col-span-3 flex items-center">
                              <button
                                type="button"
                                className="w-full py-2 px-4 border border-transparent text-white rounded-md shadow-sm bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-gray-800"
                                onClick={() => setNearby(true)}
                              >
                                <i className="uil uil-filter"></i> Nearby
                              </button>
                            </div>
                            <div className="col-span-12 xl:col-span-3 flex items-center">
                              <button
                                type="button"
                                className="w-full py-2 px-4 border border-transparent text-white rounded-md shadow-sm bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-gray-800"
                                onClick={handleReset}
                              >
                                <i className="uil uil-filter"></i> Reset
                              </button>
                            </div>
                            {/* <!--end col--> */}
                          </div>
                          {/* <!--end grid--> */}
                        </form>
                      </div>
                      <div className="mt-8">
                        <h6 className="mb-4 text-gray-900 dark:text-gray-50 font-bold">
                          Popular
                        </h6>
                        <ul className="flex flex-wrap gap-3">
                          <li className="border p-[6px] border-gray-100/50 rounded group/joblist dark:border-gray-100/20">
                            <div className="flex gap-2 items-center">
                              <div className="h-8 w-8 text-center bg-violet-500/20 leading-[2.4] rounded text-violet-500 text-sm font-medium">
                                20
                              </div>
                              <a
                                href="javascript:void(0)"
                                className="text-gray-900 ltr:ml-2 rtl:mr-2 dark:text-gray-50"
                              >
                                <h6 className="mb-0 transition-all duration-300 fs-14 hover:text-violet-500 font-bold">
                                  UI/UX designer
                                </h6>
                              </a>
                            </div>
                          </li>
                          <li className="border p-[6px] border-gray-100/50 rounded group/joblist dark:border-gray-100/20">
                            <div className="flex gap-2 items-center">
                              <div className="h-8 w-8 text-center bg-violet-500/20 leading-[2.4] rounded text-violet-500 text-sm font-medium">
                                18
                              </div>
                              <a
                                href="javascript:void(0)"
                                className="text-gray-900 ltr:ml-2 rtl:mr-2 dark:text-gray-50"
                              >
                                <h6 className="mb-0 transition-all duration-300 fs-14 hover:text-violet-500 font-bold">
                                  HR Manager
                                </h6>
                              </a>
                            </div>
                          </li>
                          <li className="border p-[6px] border-gray-100/50 rounded group/joblist dark:border-gray-100/20">
                            <div className="flex gap-2 items-center">
                              <div className="h-8 w-8 text-center bg-violet-500/20 leading-[2.4] rounded text-violet-500 text-sm font-medium">
                                10
                              </div>
                              <a
                                href="javascript:void(0)"
                                className="text-gray-900 ltr:ml-2 rtl:mr-2 dark:text-gray-50"
                              >
                                <h6 className="mb-0 transition-all duration-300 fs-14 hover:text-violet-500 font-bold">
                                  Project Manager
                                </h6>
                              </a>
                            </div>
                          </li>
                          <li className="border p-[6px] border-gray-100/50 rounded group/joblist dark:border-gray-100/20">
                            <div className="flex gap-2 items-center">
                              <div className="h-8 w-8 text-center bg-violet-500/20 leading-[2.4] rounded text-violet-500 text-sm font-medium">
                                15
                              </div>
                              <a
                                href="javascript:void(0)"
                                className="text-gray-900 ltr:ml-2 rtl:mr-2 dark:text-gray-50"
                              >
                                <h6 className="mb-0 transition-all duration-300 fs-14 hover:text-violet-500 font-bold">
                                  Sales Manager
                                </h6>
                              </a>
                            </div>
                          </li>
                          <li className="border p-[6px] border-gray-100/50 rounded group/joblist dark:border-gray-100/20">
                            <div className="flex gap-2 items-center">
                              <div className="h-8 w-8 text-center bg-violet-500/20 leading-[2.4] rounded text-violet-500 text-sm font-medium">
                                28
                              </div>
                              <a
                                href="javascript:void(0)"
                                className="text-gray-900 ltr:ml-2 rtl:mr-2 dark:text-gray-50"
                              >
                                <h6 className="mb-0 transition-all duration-300 fs-14 hover:text-violet-500 font-bold">
                                  Developer
                                </h6>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-14">
                        {filteredJobs &&
                          filteredJobs.map((job) => {
                            return (
                              <div
                                key={job?.jobId}
                                className="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100 group hover:border-violet-500 dark:bg-neutral-900 dark:border-neutral-600 transform transition-transform hover:-translate-y-1"
                              >
                                <div className="w-28 absolute top-0 left-[-3rem] transform -rotate-45 bg-violet-500 p-6 text-center dark:bg-violet-500">
                                  <a
                                    href="javascript:void(0)"
                                    className="text-2xl text-white align-middle"
                                  >
                                    <i className="mdi mdi-star"></i>
                                  </a>
                                </div>
                                <div className="p-4">
                                  <div className="grid items-center grid-cols-12">
                                    <div className="col-span-12 lg:col-span-2">
                                      <div className="mb-4 text-center mb-md-0">
                                        <a href="company-details.html">
                                          <Image
                                            src="/assets/images/featured-job/img-01.png"
                                            alt="Description of Image"
                                            width={50} // replace with actual width
                                            height={50} // replace with actual height
                                            className="mx-auto rounded-3"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                    {/* <!--end col--> */}
                                    <div className="col-span-12 lg:col-span-3">
                                      <div className="mb-2 mb-md-0">
                                        <h5 className="mb-1 fs-18">
                                          <a
                                            href="job-details.html"
                                            className="text-gray-900 dark:text-gray-50 font-bold text-xl"
                                          >
                                            {job?.jobTitle}
                                          </a>
                                        </h5>
                                        <p className="mb-0 text-gray-500 fs-14 dark:text-gray-300">
                                          {job?.company?.companyName}
                                        </p>
                                      </div>
                                    </div>
                                    {/* <!--end col--> */}
                                    <div className="col-span-12 lg:col-span-3">
                                      <div className="mb-2 lg:flex lg:gap-1 items-center">
                                        <div className="flex-shrink-0">
                                          <FaMapMarkerAlt className="text-violet-500 dark:text-gray-300" />{" "}
                                        </div>
                                        <p className="mb-0 text-gray-500 dark:text-gray-300">
                                          {job?.jobLocation?.area} ,{" "}
                                          {job?.jobLocation?.city} ,{" "}
                                          {job?.jobLocation?.country}
                                        </p>
                                      </div>
                                    </div>
                                    {/* <!--end col--> */}
                                    <div className="col-span-12 lg:col-span-2">
                                      <div>
                                        <p className="mb-0 text-gray-500 dark:text-gray-300 lg:flex lg:gap-1 items-center">
                                          <FaRegClock className="text-violet-500 dark:text-gray-300" />{" "}
                                          {job.jobCreatedAt}
                                        </p>
                                      </div>
                                    </div>
                                    {/* <!--end col--> */}
                                    <div className="col-span-12 lg:col-span-2">
                                      <div className="flex flex-wrap gap-1.5">
                                        <span className="bg-green-500/20 text-green-500 text-13 px-2 py-0.5 font-medium rounded">
                                          {job?.jobType}
                                        </span>
                                      </div>
                                    </div>
                                    {/* <!--end col--> */}
                                  </div>
                                  {/* <!--end row--> */}
                                </div>
                                <div className="px-4 py-3 bg-gray-100 dark:bg-gray-700">
                                  <div className="grid grid-cols-12">
                                    <div className="col-span-12 lg:col-span-6">
                                      <div>
                                        <p className="mb-0 text-gray-500 dark:text-gray-300">
                                          <span className="font-medium text-gray-900 dark:text-white">
                                            Experience :
                                          </span>{" "}
                                          {job?.jobExperience}
                                        </p>
                                      </div>
                                    </div>
                                    {/* <!--end col--> */}
                                    <div className="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
                                      <div className="flex justify-end text-right lg:text-right dark:text-white">
                                        <a
                                          href="#applyNow"
                                          className="flex items-center"
                                        >
                                          Apply Now{" "}
                                          <MdKeyboardDoubleArrowRight />
                                        </a>
                                      </div>
                                    </div>
                                    {/* <!--end col--> */}
                                  </div>
                                  {/* <!--end row--> */}
                                </div>
                              </div>
                            );
                          })}
                      </div>

                      <div className="grid grid-cols-12">
                        <div className="col-span-12">
                          <ul className="flex justify-center gap-2 mt-8">
                            <li className="w-12 h-12 text-center border rounded-full cursor-default border-gray-100/50 dark:border-gray-100/20">
                              <a
                                className="cursor-auto"
                                href="javascript:void(0)"
                                tabIndex={-1}
                              >
                                <i className="mdi mdi-chevron-double-left text-16 leading-[2.8] dark:text-white"></i>
                              </a>
                            </li>
                            <li className="w-12 h-12 text-center text-white border border-transparent rounded-full cursor-pointer group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">
                              <a
                                className="text-16 leading-[2.8]"
                                href="javascript:void(0)"
                              >
                                1
                              </a>
                            </li>
                            <li className="w-12 h-12 text-center text-gray-900 transition-all duration-300 border rounded-full cursor-pointer border-gray-100/50 hover:bg-gray-100/30 focus:bg-gray-100/30 dark:border-gray-100/20 dark:text-gray-50 dark:hover:bg-gray-500/20">
                              <a
                                className="text-16 leading-[2.8]"
                                href="javascript:void(0)"
                              >
                                2
                              </a>
                            </li>
                            <li className="w-12 h-12 text-center text-gray-900 transition-all duration-300 border rounded-full cursor-pointer border-gray-100/50 hover:bg-gray-100/30 focus:bg-gray-100/30 dark:border-gray-100/20 dark:text-gray-50 dark:hover:bg-gray-500/20">
                              <a
                                className="text-16 leading-[2.8]"
                                href="javascript:void(0)"
                              >
                                3
                              </a>
                            </li>
                            <li className="w-12 h-12 text-center text-gray-900 transition-all duration-300 border rounded-full cursor-pointer border-gray-100/50 hover:bg-gray-100/30 focus:bg-gray-100/30 dark:border-gray-100/20 dark:text-gray-50 dark:hover:bg-gray-500/20">
                              <a
                                className="text-16 leading-[2.8]"
                                href="javascript:void(0)"
                              >
                                4
                              </a>
                            </li>
                            <li className="w-12 h-12 text-center text-gray-900 transition-all duration-300 border rounded-full cursor-pointer border-gray-100/50 hover:bg-gray-100/30 focus:bg-gray-100/30 dark:border-gray-100/20 dark:text-gray-50 dark:hover:bg-gray-500/20">
                              <a href="javascript:void(0)" tabIndex={-1}>
                                <i className="mdi mdi-chevron-double-right text-16 leading-[2.8]"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* <!--end col--> */}
                      </div>
                    </div>
                    <div className="container mx-auto px-4 py-8">
                      <div className="grid gap-6">
                        <div className="col-span-12 lg:col-span-3">
                          <div className="space-y-5">
                            <div>
                              <div
                                onClick={() =>
                                  setIsLocationOpen(!isLocationOpen)
                                }
                                className="cursor-pointer text-gray-700"
                              >
                                <h6 className="flex gap-36 justify-between px-4 py-2 font-medium text-left bg-violet-300 dark:bg-gray-700 rounded">
                                  <span className="text-gray-900 dark:text-gray-50">
                                    Location
                                  </span>
                                  <FaChevronDown
                                    className={`text-xl ${
                                      isLocationOpen ? "rotate-180" : ""
                                    } text-gray-400 dark:text-gray-50 transition-all duration-300`}
                                  />
                                </h6>
                              </div>
                              {isLocationOpen && (
                                <div className="accordion-body block transition-all duration-300">
                                  <div className="p-5">
                                    <div className="mb-3">
                                      <form className="relative">
                                        <input
                                          className="border rounded-md border-gray-300 placeholder:text-13 placeholder:text-gray-400 dark:bg-neutral-700 dark:border-gray-100/20 dark:text-gray-300"
                                          type="search"
                                          placeholder="Search..."
                                        />
                                        <button
                                          className="absolute bg-transparent border-0 top-3 right-5 focus:outline-none dark:text-gray-300"
                                          type="submit"
                                        >
                                          <span>
                                            <FaMagnifyingGlass className="text-gray-300" />
                                          </span>
                                        </button>
                                      </form>
                                    </div>
                                    <div className="area-range">
                                      <div className="mb-3 form-label dark:text-gray-300">
                                        Area Range:{" "}
                                        <span
                                          className="mt-2 example-val"
                                          id="slider1-span"
                                        >
                                          9.00
                                        </span>{" "}
                                        miles
                                      </div>
                                      <input
                                        id="steps-range"
                                        type="range"
                                        min="0"
                                        max="5"
                                        defaultValue="2.5"
                                        step="0.5"
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div>
                              <div
                                onClick={() => setIsWorkExpOpen(!isWorkExpOpen)}
                                className="cursor-pointer text-gray-700"
                              >
                                <h6 className="flex gap-20 justify-between px-4 py-2 font-medium text-left bg-violet-300 dark:bg-gray-700 rounded">
                                  <span className="text-gray-900 dark:text-gray-50">
                                    Work Experience
                                  </span>
                                  <FaChevronDown
                                    className={`text-xl ${
                                      isWorkExpOpen ? "rotate-180" : ""
                                    } text-gray-400 dark:text-gray-50 transition-all duration-300`}
                                  />
                                </h6>
                              </div>
                              {isWorkExpOpen && (
                                <div className="accordion-body block transition-all duration-300">
                                  <div className="p-5">
                                  <div className="mt-2">
                                      <input
                                        className=" cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                        type="radio"
                                        value="no experience"
                                        id="exp1"
                                        name="exp"
                                        onClick={(e) =>
                                          setExperience(
                                            (e.target as HTMLInputElement).value
                                          )
                                        }
                                      />
                                      <label
                                        className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
                                        htmlFor="exp1"
                                      >
                                        No experience
                                      </label>
                                    </div>
                                    <div className="mt-2">
                                      <input
                                        className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                        type="radio"
                                        value="0 - 3 years"
                                        id="exp2"
                                        name="exp"
                                        onClick={e => setExperience((e.target as HTMLInputElement).value)}
                                      />
                                      <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300" htmlFor="exp2">
                                        0-3 years
                                      </label>
                                    </div>
                                    <div className="mt-2">
                                      <input
                                        className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                        type="radio"
                                        value="3 - 6 years"
                                        id="exp3"
                                        name="exp"
                                        onClick={e => setExperience((e.target as HTMLInputElement).value)}
                                      />
                                      <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300" htmlFor="exp3">
                                        3-6 years
                                      </label>
                                    </div>
                                    <div className="mt-2">
                                      <input
                                        className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                        type="radio"
                                        value="more than 6 years"
                                        id="exp4"
                                        name="exp"
                                        onClick={e => setExperience((e.target as HTMLInputElement).value)}
                                      />
                                      <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300" htmlFor="exp4">
                                        More than 6 years
                                      </label>
                                      </div>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div>
                              <div
                                onClick={() => setIsJobTypeOpen(!isJobTypeOpen)}
                                className="cursor-pointer text-gray-700"
                              >
                                <h6 className="flex gap-10 justify-between px-4 py-2 font-medium text-left bg-violet-300 dark:bg-gray-700 rounded">
                                  <span className="text-gray-900 dark:text-gray-50">
                                    Type of Employment
                                  </span>
                                  <FaChevronDown
                                    className={`text-xl ${
                                      isJobTypeOpen ? "rotate-180" : ""
                                    } text-gray-400 dark:text-gray-50 transition-all duration-300`}
                                  />
                                </h6>
                              </div>
                              {isJobTypeOpen && (
                                <div className="accordion-body block transition-all duration-300">
                                  <div className="p-5">
                                    <div className="mt-2">
                                      <input
                                        className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                        type="radio"
                                        // checked
                                        value="Freelance"
                                        id="flexCheckChecked1"
                                        name="jobType"
                                        onClick={(e) =>
                                          setJobType(
                                            (e.target as HTMLInputElement).value
                                          )
                                        }
                                      />
                                      <label
                                        className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
                                        htmlFor="flexCheckChecked1"
                                      >
                                        Freelance
                                      </label>
                                    </div>
                                    <div className="mt-2">
                                      <input
                                        className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                        type="radio"
                                        value="full time"
                                        id="flexCheckChecked2"
                                        name="jobType"
                                        onClick={(e) =>
                                          setJobType(
                                            (e.target as HTMLInputElement).value
                                          )
                                        }
                                      />
                                      <label
                                        className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
                                        htmlFor="flexCheckChecked2"
                                      >
                                        Full Time
                                      </label>
                                    </div>
                                    <div className="mt-2">
                                      <input
                                        className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                        type="radio"
                                        value="part time"
                                        id="flexCheckChecked3"
                                        name="jobType"
                                        onClick={(e) =>
                                          setJobType(
                                            (e.target as HTMLInputElement).value
                                          )
                                        }
                                      />
                                      <label
                                        className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
                                        htmlFor="flexCheckChecked3"
                                      >
                                        Part Time
                                      </label>
                                    </div>
                                    <div className="mt-2">
                                      <input
                                        className=" cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                        type="radio"
                                        value="internship"
                                        id="flexCheckChecked4"
                                        name="jobType"
                                        onClick={(e) =>
                                          setJobType(
                                            (e.target as HTMLInputElement).value
                                          )
                                        }
                                      />
                                      <label
                                        className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
                                        htmlFor="flexCheckChecked4"
                                      >
                                        Internship
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div>
                              <div
                                onClick={() => setIsDateOpen(!isDateOpen)}
                                className="cursor-pointer text-gray-700"
                              >
                                <h6 className="flex gap-10 justify-between px-4 py-2 font-medium text-left bg-violet-300 dark:bg-gray-700 rounded">
                                  <span className="text-gray-900 dark:text-gray-50">
                                    Date Posted
                                  </span>
                                  <FaChevronDown
                                    className={`text-xl ${
                                      isDateOpen ? "rotate-180" : ""
                                    } text-gray-400 dark:text-gray-50 transition-all duration-300`}
                                  />
                                </h6>
                              </div>
                              {isDateOpen && (
                                <div className="accordion-body block transition-all duration-300">
                                  <div className="p-5">
                                    <div className="mt-2">
                                      <input
                                        className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                        type="radio"
                                        // checked
                                        value=""
                                        id="flexCheckChecked1"
                                        name="datePosted"
                                        onChange={(e) => {
                                          setPastDate(null);
                                        }}
                                      />
                                      <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300">
                                        All
                                      </label>
                                    </div>
                                    <div className="mt-2">
                                      <input
                                        className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                        type="radio"
                                        value="1"
                                        id="flexCheckChecked1"
                                        name="datePosted"
                                        onChange={(e) => {
                                          const hours = parseInt(
                                            e.target.value
                                          );
                                          const pastDate = getPastDate(hours);
                                          setPastDate(pastDate);
                                        }}
                                      />
                                      <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300" htmlFor="flexCheckChecked1">
                                        Last Hour
                                      </label>
                                    </div>
                                    <div className="mt-2">
                                      <input
                                        className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                        type="radio"
                                        value="24"
                                        id="flexCheckChecked2"
                                        name="datePosted"
                                        onChange={(e) => {
                                          const hours = parseInt(
                                            e.target.value
                                          );
                                          const pastDate = getPastDate(hours);
                                          setPastDate(pastDate);
                                        }}
                                      />
                                      <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300" htmlFor="flexCheckChecked2">
                                        Last 24 Hours
                                      </label>
                                    </div>
                                    <div className="mt-2">
                                      <input
                                        className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                        type="radio"
                                        value="168"
                                        id="flexCheckChecked3"
                                        name="datePosted"
                                        onChange={(e) => {
                                          const hours = parseInt(
                                            e.target.value
                                          );
                                          const pastDate = getPastDate(hours);
                                          setPastDate(pastDate);
                                        }}
                                      />
                                      <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300" htmlFor="flexCheckChecked3">
                                        Last 7 Days
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div>
                              <div
                                onClick={() => setIsTagsOpen(!isTagsOpen)}
                                className="cursor-pointer text-gray-700"
                              >
                                <h6 className="flex gap-10 justify-between px-4 py-2 font-medium text-left bg-violet-300 dark:bg-gray-700 rounded">
                                  <span className="text-gray-900 dark:text-gray-50">
                                    Skills
                                  </span>
                                  <FaChevronDown
                                    className={`text-xl ${
                                      isTagsOpen ? "rotate-180" : ""
                                    } text-gray-400 dark:text-gray-50 transition-all duration-300`}
                                  />
                                </h6>
                              </div>
                              {isTagsOpen && (
                                <div className="block accordion-body">
                                  <div className="flex flex-wrap gap-2 p-5">
                                    <a
                                      href="javascript:void(0)"
                                      className="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 hover:bg-violet-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40"
                                    >
                                      design
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 hover:bg-violet-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40"
                                    >
                                      marketing
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 hover:bg-violet-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40"
                                    >
                                      business
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 hover:bg-violet-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40"
                                    >
                                      developer
                                    </a>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobFeed;
