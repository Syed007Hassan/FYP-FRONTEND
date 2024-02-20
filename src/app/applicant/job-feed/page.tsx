"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaRegClock, FaChevronDown } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ApplicantHeader from "@/components/applicant/applicantHeader";
import { useGetAllJobsQuery } from "@/redux/services/job/jobAction";
import Job from "@/types/job";

const JobFeed = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(true);
  const [isWorkExpOpen, setIsWorkExpOpen] = useState(true);
  const [isJobTypeOpen, setIsJobTypeOpen] = useState(true);
  const [isDateOpen, setIsDateOpen] = useState(true);
  const [isTagsOpen, setIsTagsOpen] = useState(true);
  const [allJobs, setAllJobs] = useState<Job[]>([]);

  const { data, error, isLoading } = useGetAllJobsQuery();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
    setAllJobs(data?.data || []);
  }, [data, error, isLoading]);

  return (
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
                            >
                              <option value="AF">Afghanistan</option>
                              <option value="AX">&Aring;land Islands</option>
                              <option value="AL">Albania</option>
                              <option value="DZ">Algeria</option>
                              <option value="AS">American Samoa</option>
                              <option value="AD">Andorra</option>
                              <option value="AO">Angola</option>
                              <option value="AI">Anguilla</option>
                              <option value="AQ">Antarctica</option>
                              <option value="AG">Antigua and Barbuda</option>
                              <option value="AR">Argentina</option>
                              <option value="AM">Armenia</option>
                              <option value="AW">Aruba</option>
                              <option value="AU">Australia</option>
                              <option value="AT">Austria</option>
                              <option value="AZ">Azerbaijan</option>
                              <option value="BS">Bahamas</option>
                              <option value="BH">Bahrain</option>
                              <option value="BD">Bangladesh</option>
                              <option value="BB">Barbados</option>
                              <option value="BY">Belarus</option>
                              <option value="BE">Belgium</option>
                              <option value="BZ">Belize</option>
                              <option value="BJ">Benin</option>
                              <option value="BM">Bermuda</option>
                              <option value="BT">Bhutan</option>
                              <option value="BO">
                                Bolivia, Plurinational State of
                              </option>
                              <option value="BA">Bosnia and Herzegovina</option>
                              <option value="BW">Botswana</option>
                              <option value="BV">Bouvet Island</option>
                              <option value="BR">Brazil</option>
                              <option value="IO">
                                British Indian Ocean Territory
                              </option>
                              <option value="BN">Brunei Darussalam</option>
                              <option value="BG">Bulgaria</option>
                              <option value="BF">Burkina Faso</option>
                              <option value="BI">Burundi</option>
                              <option value="KH">Cambodia</option>
                              <option value="CM">Cameroon</option>
                              <option value="CA">Canada</option>
                              <option value="CV">Cape Verde</option>
                              <option value="KY">Cayman Islands</option>
                              <option value="CF">
                                Central African Republic
                              </option>
                              <option value="TD">Chad</option>
                              <option value="CL">Chile</option>
                              <option value="CN">China</option>
                              <option value="CX">Christmas Island</option>
                              <option value="CC">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="CO">Colombia</option>
                              <option value="KM">Comoros</option>
                              <option value="CG">Congo</option>
                              <option value="CD">
                                Congo, the Democratic Republic of the
                              </option>
                              <option value="CK">Cook Islands</option>
                              <option value="CR">Costa Rica</option>
                              <option value="CI">
                                C&ocirc;te d{"'"}Ivoire
                              </option>
                              <option value="HR">Croatia</option>
                              <option value="CU">Cuba</option>
                              <option value="CY">Cyprus</option>
                              <option value="CZ">Czech Republic</option>
                              <option value="DK">Denmark</option>
                              <option value="DJ">Djibouti</option>
                              <option value="DM">Dominica</option>
                              <option value="DO">Dominican Republic</option>
                              <option value="EC">Ecuador</option>
                              <option value="EG">Egypt</option>
                              <option value="SV">El Salvador</option>
                              <option value="GQ">Equatorial Guinea</option>
                              <option value="ER">Eritrea</option>
                              <option value="EE">Estonia</option>
                              <option value="ET">Ethiopia</option>
                              <option value="FK">
                                Falkland Islands (Malvinas)
                              </option>
                              <option value="FO">Faroe Islands</option>
                              <option value="FJ">Fiji</option>
                              <option value="FI">Finland</option>
                              <option value="FR">France</option>
                              <option value="GF">French Guiana</option>
                              <option value="PF">French Polynesia</option>
                              <option value="TF">
                                French Southern Territories
                              </option>
                              <option value="GA">Gabon</option>
                              <option value="GM">Gambia</option>
                              <option value="GE">Georgia</option>
                              <option value="DE">Germany</option>
                              <option value="GH">Ghana</option>
                              <option value="GI">Gibraltar</option>
                              <option value="GR">Greece</option>
                              <option value="GL">Greenland</option>
                              <option value="GD">Grenada</option>
                              <option value="GP">Guadeloupe</option>
                              <option value="GU">Guam</option>
                              <option value="GT">Guatemala</option>
                              <option value="GG">Guernsey</option>
                              <option value="GN">Guinea</option>
                              <option value="GW">Guinea-Bissau</option>
                              <option value="GY">Guyana</option>
                              <option value="HT">Haiti</option>
                              <option value="HM">
                                Heard Island and McDonald Islands
                              </option>
                              <option value="VA">
                                Holy See (Vatican City State)
                              </option>
                              <option value="HN">Honduras</option>
                              <option value="HK">Hong Kong</option>
                              <option value="HU">Hungary</option>
                              <option value="IS">Iceland</option>
                              <option value="IN">India</option>
                              <option value="ID">Indonesia</option>
                              <option value="IR">
                                Iran, Islamic Republic of
                              </option>
                              <option value="IQ">Iraq</option>
                              <option value="IE">Ireland</option>
                              <option value="IM">Isle of Man</option>
                              <option value="IL">Israel</option>
                              <option value="IT">Italy</option>
                              <option value="JM">Jamaica</option>
                              <option value="JP">Japan</option>
                              <option value="JE">Jersey</option>
                              <option value="JO">Jordan</option>
                              <option value="KZ">Kazakhstan</option>
                              <option value="KE">Kenya</option>
                              <option value="KI">Kiribati</option>
                              <option value="KP">
                                Korea, Democratic People{"'"}s Republic of
                              </option>
                              <option value="KR">Korea, Republic of</option>
                              <option value="KW">Kuwait</option>
                              <option value="KG">Kyrgyzstan</option>
                              <option value="LA">
                                Lao People{"'"}s Democratic Republic
                              </option>
                              <option value="LV">Latvia</option>
                              <option value="LB">Lebanon</option>
                              <option value="LS">Lesotho</option>
                              <option value="LR">Liberia</option>
                              <option value="LY">Libyan Arab Jamahiriya</option>
                              <option value="LI">Liechtenstein</option>
                              <option value="LT">Lithuania</option>
                              <option value="LU">Luxembourg</option>
                              <option value="MO">Macao</option>
                              <option value="MK">
                                Macedonia, the former Yugoslav Republic of
                              </option>
                              <option value="MG">Madagascar</option>
                              <option value="MW">Malawi</option>
                              <option value="MY">Malaysia</option>
                              <option value="MV">Maldives</option>
                              <option value="ML">Mali</option>
                              <option value="MT">Malta</option>
                              <option value="MH">Marshall Islands</option>
                              <option value="MQ">Martinique</option>
                              <option value="MR">Mauritania</option>
                              <option value="MU">Mauritius</option>
                              <option value="YT">Mayotte</option>
                              <option value="MX">Mexico</option>
                              <option value="FM">
                                Micronesia, Federated States of
                              </option>
                              <option value="MD">Moldova, Republic of</option>
                              <option value="MC">Monaco</option>
                              <option value="MN">Mongolia</option>
                              <option value="ME">Montenegro</option>
                              <option value="MS">Montserrat</option>
                              <option value="MA">Morocco</option>
                              <option value="MZ">Mozambique</option>
                              <option value="MM">Myanmar</option>
                              <option value="NA">Namibia</option>
                              <option value="NR">Nauru</option>
                              <option value="NP">Nepal</option>
                              <option value="NL">Netherlands</option>
                              <option value="AN">Netherlands Antilles</option>
                              <option value="NC">New Caledonia</option>
                              <option value="NZ">New Zealand</option>
                              <option value="NI">Nicaragua</option>
                              <option value="NE">Niger</option>
                              <option value="NG">Nigeria</option>
                              <option value="NU">Niue</option>
                              <option value="NF">Norfolk Island</option>
                              <option value="MP">
                                Northern Mariana Islands
                              </option>
                              <option value="NO">Norway</option>
                              <option value="OM">Oman</option>
                              <option value="PK">Pakistan</option>
                              <option value="PW">Palau</option>
                              <option value="PS">
                                Palestinian Territory, Occupied
                              </option>
                              <option value="PA">Panama</option>
                              <option value="PG">Papua New Guinea</option>
                              <option value="PY">Paraguay</option>
                              <option value="PE">Peru</option>
                              <option value="PH">Philippines</option>
                              <option value="PN">Pitcairn</option>
                              <option value="PL">Poland</option>
                              <option value="PT">Portugal</option>
                              <option value="PR">Puerto Rico</option>
                              <option value="QA">Qatar</option>
                              <option value="RE">R&eacute;union</option>
                              <option value="RO">Romania</option>
                              <option value="RU">Russian Federation</option>
                              <option value="RW">Rwanda</option>
                              <option value="BL">
                                Saint Barth&eacute;lemy
                              </option>
                              <option value="SH">
                                Saint Helena, Ascension and Tristan da Cunha
                              </option>
                              <option value="KN">Saint Kitts and Nevis</option>
                              <option value="LC">Saint Lucia</option>
                              <option value="MF">
                                Saint Martin (French part)
                              </option>
                              <option value="PM">
                                Saint Pierre and Miquelon
                              </option>
                              <option value="VC">
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="WS">Samoa</option>
                              <option value="SM">San Marino</option>
                              <option value="ST">Sao Tome and Principe</option>
                              <option value="SA">Saudi Arabia</option>
                              <option value="SN">Senegal</option>
                              <option value="RS">Serbia</option>
                              <option value="SC">Seychelles</option>
                              <option value="SL">Sierra Leone</option>
                              <option value="SG">Singapore</option>
                              <option value="SK">Slovakia</option>
                              <option value="SI">Slovenia</option>
                              <option value="SB">Solomon Islands</option>
                              <option value="SO">Somalia</option>
                              <option value="ZA">South Africa</option>
                              <option value="GS">
                                South Georgia and the South Sandwich Islands
                              </option>
                              <option value="ES">Spain</option>
                              <option value="LK">Sri Lanka</option>
                              <option value="SD">Sudan</option>
                              <option value="SR">Suriname</option>
                              <option value="SJ">Svalbard and Jan Mayen</option>
                              <option value="SZ">Swaziland</option>
                              <option value="SE">Sweden</option>
                              <option value="CH">Switzerland</option>
                              <option value="SY">Syrian Arab Republic</option>
                              <option value="TW">
                                Taiwan, Province of China
                              </option>
                              <option value="TJ">Tajikistan</option>
                              <option value="TZ">
                                Tanzania, United Republic of
                              </option>
                              <option value="TH">Thailand</option>
                              <option value="TL">Timor-Leste</option>
                              <option value="TG">Togo</option>
                              <option value="TK">Tokelau</option>
                              <option value="TO">Tonga</option>
                              <option value="TT">Trinidad and Tobago</option>
                              <option value="TN">Tunisia</option>
                              <option value="TR">Turkey</option>
                              <option value="TM">Turkmenistan</option>
                              <option value="TC">
                                Turks and Caicos Islands
                              </option>
                              <option value="TV">Tuvalu</option>
                              <option value="UG">Uganda</option>
                              <option value="UA">Ukraine</option>
                              <option value="AE">United Arab Emirates</option>
                              <option value="GB">United Kingdom</option>
                              <option value="US">United States</option>
                              <option value="UM">
                                United States Minor Outlying Islands
                              </option>
                              <option value="UY">Uruguay</option>
                              <option value="UZ">Uzbekistan</option>
                              <option value="VU">Vanuatu</option>
                              <option value="VE">
                                Venezuela, Bolivarian Republic of
                              </option>
                              <option value="VN">Viet Nam</option>
                              <option value="VG">
                                Virgin Islands, British
                              </option>
                              <option value="VI">Virgin Islands, U.S.</option>
                              <option value="WF">Wallis and Futuna</option>
                              <option value="EH">Western Sahara</option>
                              <option value="YE">Yemen</option>
                              <option value="ZM">Zambia</option>
                              <option value="ZW">Zimbabwe</option>
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
                            type="submit"
                            className="w-full py-2 px-4 border border-transparent text-white rounded-md shadow-sm bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-gray-800"
                          >
                            <i className="uil uil-filter"></i> Filter
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
                    {allJobs &&
                      allJobs.map((job) => {
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
                                      Apply Now <MdKeyboardDoubleArrowRight />
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
                    <div className="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100 group hover:border-violet-500 dark:bg-neutral-900 dark:border-neutral-600 transform transition-transform hover:-translate-y-1">
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
                                  Product Director
                                </a>
                              </h5>
                              <p className="mb-0 text-gray-500 fs-14 dark:text-gray-300">
                                Creative Agency
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
                                Escondido,California
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 lg:col-span-2">
                            <div>
                              <p className="mb-0 text-gray-500 dark:text-gray-300 lg:flex lg:gap-1 items-center">
                                <FaRegClock className="text-violet-500 dark:text-gray-300" />{" "}
                                3 min ago
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 lg:col-span-2">
                            <div className="flex flex-wrap gap-1.5">
                              <span className="bg-green-500/20 text-green-500 text-13 px-2 py-0.5 font-medium rounded">
                                Full Time
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
                                1 - 2 years
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
                            <div className="flex justify-end text-right lg:text-right dark:text-white">
                              <a href="#applyNow" className="flex items-center">
                                Apply Now <MdKeyboardDoubleArrowRight />
                              </a>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                      </div>
                    </div>

                    <div className="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100 group hover:border-violet-500 dark:bg-neutral-900 dark:border-neutral-600 transform transition-transform hover:-translate-y-1">
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
                                  src="/assets/images/featured-job/img-02.png"
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
                                  Digital Marketing Manager
                                </a>
                              </h5>
                              <p className="mb-0 text-gray-500 fs-14 dark:text-gray-300">
                                Jobcy Technology Pvt. Ltd.
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
                                Escondido,California
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 lg:col-span-2">
                            <div>
                              <p className="mb-0 text-gray-500 dark:text-gray-300 lg:flex lg:gap-1 items-center">
                                <FaRegClock className="text-violet-500 dark:text-gray-300" />{" "}
                                15 min ago
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 lg:col-span-2">
                            <div className="flex flex-wrap gap-1.5">
                              <span className="bg-green-500/20 text-green-500 text-13 px-2 py-0.5 font-medium rounded">
                                Full Time
                              </span>
                              <span className="bg-yellow-500/20 text-yellow-500 text-13 px-2 py-0.5 font-medium rounded">
                                Urgent
                              </span>
                              <span className="bg-violet-500/20 text-violet-500 text-13 px-2 py-0.5 font-medium rounded">
                                Freelance
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
                                1 - 2 years
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
                            <div className="flex justify-end text-right lg:text-right dark:text-white">
                              <a href="#applyNow" className="flex items-center">
                                Apply Now <MdKeyboardDoubleArrowRight />
                              </a>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                      </div>
                    </div>

                    <div className="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100 group hover:border-violet-500 dark:bg-neutral-900 dark:border-neutral-600 transform transition-transform hover:-translate-y-1">
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
                                  src="/assets/images/featured-job/img-03.png"
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
                                  Product Director
                                </a>
                              </h5>
                              <p className="mb-0 text-gray-500 fs-14 dark:text-gray-300">
                                Creative Agency
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
                                Escondido,California
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 lg:col-span-2">
                            <div>
                              <p className="mb-0 text-gray-500 dark:text-gray-300 lg:flex lg:gap-1 items-center">
                                <FaRegClock className="text-violet-500 dark:text-gray-300" />{" "}
                                3 min ago
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 lg:col-span-2">
                            <div className="flex flex-wrap gap-1.5">
                              <span className="bg-sky-500/20 text-sky-500 text-13 px-2 py-0.5 font-medium rounded">
                                Internship
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
                                1 - 2 years
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
                            <div className="flex justify-end text-right lg:text-right dark:text-white">
                              <a href="#applyNow" className="flex items-center">
                                Apply Now <MdKeyboardDoubleArrowRight />
                              </a>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                      </div>
                    </div>

                    <div className="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100 group hover:border-violet-500 dark:bg-neutral-900 dark:border-neutral-600 transform transition-transform hover:-translate-y-1">
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
                                  src="/assets/images/featured-job/img-04.png"
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
                                  Product Director
                                </a>
                              </h5>
                              <p className="mb-0 text-gray-500 fs-14 dark:text-gray-300">
                                Creative Agency
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
                                Escondido,California
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 lg:col-span-2">
                            <div>
                              <p className="mb-0 text-gray-500 dark:text-gray-300 lg:flex lg:gap-1 items-center">
                                <FaRegClock className="text-violet-500 dark:text-gray-300" />{" "}
                                3 min ago
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 lg:col-span-2">
                            <div className="flex flex-wrap gap-1.5">
                              <span className="bg-sky-500/20 text-sky-500 text-13 px-2 py-0.5 font-medium rounded">
                                Internship
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
                                1 - 2 years
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
                            <div className="flex justify-end text-right lg:text-right dark:text-white">
                              <a href="#applyNow" className="flex items-center">
                                Apply Now <MdKeyboardDoubleArrowRight />
                              </a>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                      </div>
                    </div>

                    <div className="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100 group hover:border-violet-500 dark:bg-neutral-900 dark:border-neutral-600 transform transition-transform hover:-translate-y-1">
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
                                  src="/assets/images/featured-job/img-05.png"
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
                                  Product Director
                                </a>
                              </h5>
                              <p className="mb-0 text-gray-500 fs-14 dark:text-gray-300">
                                Creative Agency
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
                                Escondido,California
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 lg:col-span-2">
                            <div>
                              <p className="mb-0 text-gray-500 dark:text-gray-300 lg:flex lg:gap-1 items-center">
                                <FaRegClock className="text-violet-500 dark:text-gray-300" />{" "}
                                3 min ago
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 lg:col-span-2">
                            <div className="flex flex-wrap gap-1.5">
                              <span className="bg-sky-500/20 text-sky-500 text-13 px-2 py-0.5 font-medium rounded">
                                Internship
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
                                1 - 2 years
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
                            <div className="flex justify-end text-right lg:text-right dark:text-white">
                              <a href="#applyNow" className="flex items-center">
                                Apply Now <MdKeyboardDoubleArrowRight />
                              </a>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                      </div>
                    </div>

                    <div className="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100 group hover:border-violet-500 dark:bg-neutral-900 dark:border-neutral-600 transform transition-transform hover:-translate-y-1">
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
                                  src="/assets/images/featured-job/img-06.png"
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
                                  Product Director
                                </a>
                              </h5>
                              <p className="mb-0 text-gray-500 fs-14 dark:text-gray-300">
                                Creative Agency
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
                                Escondido,California
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 lg:col-span-2">
                            <div>
                              <p className="mb-0 text-gray-500 dark:text-gray-300 lg:flex lg:gap-1 items-center">
                                <FaRegClock className="text-violet-500 dark:text-gray-300" />{" "}
                                3 min ago
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 lg:col-span-2">
                            <div className="flex flex-wrap gap-1.5">
                              <span className="bg-sky-500/20 text-sky-500 text-13 px-2 py-0.5 font-medium rounded">
                                Internship
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
                                1 - 2 years
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
                            <div className="flex justify-end text-right lg:text-right dark:text-white">
                              <a href="#applyNow" className="flex items-center">
                                Apply Now <MdKeyboardDoubleArrowRight />
                              </a>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                      </div>
                    </div>

                    <div className="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100 group hover:border-violet-500 dark:bg-neutral-900 dark:border-neutral-600 transform transition-transform hover:-translate-y-1">
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
                                  src="/assets/images/featured-job/img-07.png"
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
                                  Product Director
                                </a>
                              </h5>
                              <p className="mb-0 text-gray-500 fs-14 dark:text-gray-300">
                                Creative Agency
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
                                Escondido,California
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 lg:col-span-2">
                            <div>
                              <p className="mb-0 text-gray-500 dark:text-gray-300 lg:flex lg:gap-1 items-center">
                                <FaRegClock className="text-violet-500 dark:text-gray-300" />{" "}
                                3 min ago
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 lg:col-span-2">
                            <div className="flex flex-wrap gap-1.5">
                              <span className="bg-sky-500/20 text-sky-500 text-13 px-2 py-0.5 font-medium rounded">
                                Internship
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
                                1 - 2 years
                              </p>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
                            <div className="flex justify-end text-right lg:text-right dark:text-white">
                              <a href="#applyNow" className="flex items-center">
                                Apply Now <MdKeyboardDoubleArrowRight />
                              </a>
                            </div>
                          </div>
                          {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                      </div>
                    </div>
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
                            onClick={() => setIsLocationOpen(!isLocationOpen)}
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
                                    className="rounded cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckChecked1"
                                  />
                                  <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300">
                                    No experience
                                  </label>
                                </div>
                                <div className="mt-2">
                                  <input
                                    className="rounded cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                    checked
                                    type="checkbox"
                                    value=""
                                    id="flexCheckChecked1"
                                  />
                                  <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300">
                                    0-3 years
                                  </label>
                                </div>
                                <div className="mt-2">
                                  <input
                                    className="rounded cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckChecked1"
                                  />
                                  <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300">
                                    3-6 years
                                  </label>
                                </div>
                                <div className="mt-2">
                                  <input
                                    className="rounded cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckChecked1"
                                  />
                                  <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300">
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
                                    checked
                                    value=""
                                    id="flexCheckChecked1"
                                    name="jobType"
                                  />
                                  <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300">
                                    Freelance
                                  </label>
                                </div>
                                <div className="mt-2">
                                  <input
                                    className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                    type="radio"
                                    value=""
                                    id="flexCheckChecked1"
                                    name="jobType"
                                  />
                                  <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300">
                                    Full Time
                                  </label>
                                </div>
                                <div className="mt-2">
                                  <input
                                    className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                    type="radio"
                                    value=""
                                    id="flexCheckChecked1"
                                    name="jobType"
                                  />
                                  <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300">
                                    Part Time
                                  </label>
                                </div>
                                <div className="mt-2">
                                  <input
                                    className=" cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                    type="radio"
                                    value=""
                                    id="flexCheckChecked1"
                                    name="jobType"
                                  />
                                  <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300">
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
                                    checked
                                    value=""
                                    id="flexCheckChecked1"
                                    name="datePosted"
                                  />
                                  <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300">
                                    All
                                  </label>
                                </div>
                                <div className="mt-2">
                                  <input
                                    className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                    type="radio"
                                    value=""
                                    id="flexCheckChecked1"
                                    name="datePosted"
                                  />
                                  <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300">
                                    Last Hour
                                  </label>
                                </div>
                                <div className="mt-2">
                                  <input
                                    className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                    type="radio"
                                    value=""
                                    id="flexCheckChecked1"
                                    name="datePosted"
                                  />
                                  <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300">
                                    Last 24 Hours
                                  </label>
                                </div>
                                <div className="mt-2">
                                  <input
                                    className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                    type="radio"
                                    value=""
                                    id="flexCheckChecked1"
                                    name="datePosted"
                                  />
                                  <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300">
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
                                Tags Cloud
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
  );
};

export default JobFeed;
