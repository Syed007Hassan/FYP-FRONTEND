
"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaSkype } from 'react-icons/fa';
import ApplicantHeader from '@/components/applicant/applicantHeader';
import EducationDetails from '@/components/applicant/profileComponents/educatonDetails';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (

    <div className="main-content">
      <ApplicantHeader />
      <div className="pt-4 page-content">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-10">
            <div className="pl-40 col-span-12 lg:col-span-4">
              <div className="border-4 rounded border-gray-100/50 dark:border-neutral-600">
                <div className="p-5 border-b border-gray-100/50 dark:border-neutral-600">
                  <div className="text-center">

                    <div className="relative">
                      <div className="relative inline-block">
                        <Image src="/ava.jpg" alt="User" width={100} height={100} className="mx-auto rounded-full" />
                        <div className="absolute bottom-0 flex items-center justify-center w-full pb-2">
                          <label htmlFor="upload" className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-500">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0020.07 7H21a2 2 0 012 2v9a2 2 0 01-2 2H3a2 2 0 01-2-2V9z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </label>
                        </div>
                      </div>

                      {/* Input element for file upload, hidden with CSS */}

                      <input
                        type="file"
                        id="upload"
                        style={{ display: 'none' }}
                      // onChange={(e) => handleFileUpload(e)}
                      />
                    </div>
                    <h6 className="mt-2 mb-0 text-lg text-gray-900 dark:text-gray-50">Gabriel Palmer</h6>
                    <p className="mb-2 text-gray-500 dark:text-gray-300">Creative Designer</p>

                  </div>
                </div>
                <div className="p-5 border-b border-gray-100/50 dark:border-neutral-600">
                  <h6 className="mb-5 font-semibold text-gray-900 text-17 dark:text-gray-50">Profile Overview</h6>
                  <ul className="space-y-4">
                    <li>
                      <div className="flex">
                        <label className="text-gray-900 w-[118px] font-medium dark:text-gray-50">Qualification</label>
                        <div>
                          <p className="mb-0 text-gray-500 dark:text-gray-300">Associate Degree</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex">
                        <label className="text-gray-900 w-[118px] font-medium dark:text-gray-50">Date Of Birth</label>
                        <div>
                          <p className="mb-0 text-gray-500 dark:text-gray-300">Accounting / Finance</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex">
                        <label className="text-gray-900 w-[118px] font-medium dark:text-gray-50">Gender</label>
                        <div>
                          <p className="mb-0 text-gray-500 dark:text-gray-300">Female </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex">
                        <label className="text-gray-900 w-[118px] font-medium dark:text-gray-50">Languages</label>
                        <div>
                          <p className="mb-0 text-gray-500 dark:text-gray-300">English, Turkish, Japanese</p>
                        </div>
                      </div>
                    </li>
                    <li>

                    </li>

                    <li>

                    </li>
                  </ul>
                  <div className="mt-6">
                    <a className="btn text-center py-2 items-center justify-center flex bg-red-500 border-transparent text-black-500 hover:-translate-y-1.5 dark:bg-yellow-500/30" >
                      Download CV
                    </a>

                  </div>
                  <ul className="flex items-center justify-between mt-0">
                    <li className="text-yellow-500 text-16">
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star-half-full"></i>
                    </li>
                    <div className="border border-gray-100/50 rounded h-8 w-8 text-center leading-[2.4] text-gray-500 hover:bg-red-500 hover:text-white transition-all duration-500 ease-out hover:border-transparent dark:border-neutral-600">
                      <a href="javascript:void(0)"><i className="text-lg uil uil-heart-alt"></i></a>
                    </div>
                  </ul>
                </div>


                <div className="p-5">
                  <h6 className="mb-3 font-semibold text-gray-900 text-17 dark:text-gray-50">Contact Details</h6>
                  <ul>
                    <li>
                      <div className="flex items-center mt-4">
                        <div className="group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-11 w-11 text-xl text-center leading-[2.3] rounded-full group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500">
                          <FaEnvelope />
                        </div>
                        <div className="ltr:ml-3 rtl:mr-3">
                          <h6 className="mb-1 text-gray-900 text-14 dark:text-gray-50">Email</h6>
                          <p className="text-gray-500 dark:text-gray-300">gabrielpalmer@gmail.com</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center mt-4">
                        <div className="group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-11 w-11 text-xl text-center leading-[2.3] rounded-full group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="ltr:ml-3 rtl:mr-3">
                          <h6 className="mb-1 text-gray-900 text-14 dark:text-gray-50">Address</h6>
                          <p className="text-gray-500 dark:text-gray-300">Dodge City, Louisiana</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center mt-4">
                        <div className="group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-11 w-11 text-xl text-center leading-[2.3] rounded-full group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500">
                          <FaPhoneAlt />
                        </div>
                        <div className="ltr:ml-3 rtl:mr-3">
                          <h6 className="mb-1 text-gray-900 text-14 dark:text-gray-50">Phone</h6>
                          <p className="text-gray-500 dark:text-gray-300">+1(452) 125-6789</p>
                        </div>
                      </div>
                    </li>
                    <li>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pr-40 col-span-12 lg:col-span-8">
              <div className="p-6 border-4 rounded border-gray-100/50 dark:border-neutral-600">
                <div>
                  <h6 className="mb-3 font-semibold text-gray-900 text-17 dark:text-gray-50">About Me</h6>
                  <p className="mb-2 text-gray-500 dark:text-gray-300">Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No
                    shortcuts.
                  </p>

                </div>
                <div className="p-5 border-b border-gray-100/50 dark:border-neutral-600">
                  <h6 className="mb-3 mr-0 font-semibold text-gray-900 text-17 dark:text-gray-50">Professional Skills</h6>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-1 py-1 font-medium text-green-500 rounded bg-green-400/20 text-13">User Interface Design</span>
                    <span className="px-2 py-1 font-medium text-green-500 rounded bg-green-400/20 text-13">Web Design</span>
                    <span className="px-2 py-1 font-medium text-green-500 rounded bg-green-400/20 text-13">Responsive Design</span>
                    <span className="px-2 py-1 font-medium text-green-500 rounded bg-green-400/20 text-13">Mobile App Design</span>
                    <span className="px-2 py-1 font-medium text-green-500 rounded bg-green-400/20 text-13">UI Design</span>
                  </div>
                </div>

                <div className="pt-5 ">
                  <div className='relative justify-between flex mt-4'>
                    <h6 className="mb-0 text-gray-900 font-semibold text-17 fw-bold dark:text-gray-50">Education</h6>
                    <Link href="/educationDetails">
                      <button className=" text-violet-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </Link>
                  </div>

                  <div className="relative flex mt-4">
                    <div className="h-8 w-8 ml-3 mr-3 text-center leading-[2.2] bg-violet-500 text-white rounded-full font-medium">1</div>
                    <div className="space-y-6 ltr:ml-4 rtl:mr-4">
                      <div>
                        <h6 className="mb-1 text-gray-900 text-16  dark:text-gray-50">BCA - Bachelor of Computer Applications</h6>
                        <p className="mb-2 text-gray-500 dark:text-gray-300">International University - (2004 - 2010)</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex mt-8">
                    <div className="h-8 w-8 text-center ml-3 mr-3 leading-[2.2] bg-violet-500 text-white rounded-full font-medium">2</div>
                    <div className="space-y-6 ltr:ml-4 rtl:mr-4">
                      <div>
                        <h6 className="mb-1 text-gray-900 text-16 dark:text-gray-50">MCA - Master of Computer Application</h6>
                        <p className="mb-2 text-gray-500 dark:text-gray-300">International University - (2010 - 2012)</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-8">
                    <div className="h-8 w-8 ml-3 mr-3 text-center leading-[2.2] bg-violet-500 text-white rounded-full font-medium">3</div>
                    <div className="space-y-6 ltr:ml-4 rtl:mr-4">
                      <div>
                        <h6 className="mb-1 text-gray-900 text-16 dark:text-gray-50">Design Communication Visual</h6>
                        <p className="mb-2 text-gray-500 dark:text-gray-300">International University - (2012-2015)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-10">
                  <div className='relative justify-between flex mt-4'>
                    <h6 className="mb-0 text-gray-900 font-semibold text-17 fw-bold dark:text-gray-50">Experience</h6>
                    <Link href="/experienceDetails">
                      <button className=" text-violet-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </Link>
                  </div> <div className="relative flex mt-4">
                    <div className="h-8 w-8 ml-3 mr-3 text-center leading-[2.2] bg-violet-500 text-white rounded-full font-medium">1</div>
                    <div className="space-y-6 ltr:ml-4 rtl:mr-4">
                      <div>
                        <h6 className="mb-1 text-gray-900 text-16 dark:text-gray-50">Web Design & Development Team Leader</h6>
                        <p className="mb-2 text-gray-500 dark:text-gray-300">Creative Agency - (2013 - 2016)</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-8">
                    <div className="h-8 w-8 ml-3 mr-3 text-center leading-[2.2] bg-violet-500 text-white rounded-full font-medium">2</div>
                    <div className="space-y-6 ltr:ml-4 rtl:mr-4">
                      <div>
                        <h6 className="mb-1 text-gray-900 text-16 dark:text-gray-50">Project Manager</h6>
                        <p className="mb-2 text-gray-500 dark:text-gray-300">Jobcy Technology Pvt.Ltd - (Pressent)</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-8">
                    <div className="h-8 w-8 ml-3 mr-3 text-center leading-[2.2] bg-violet-500 text-white rounded-full font-medium">3</div>
                    <div className="space-y-6 ltr:ml-4 rtl:mr-4">
                      <div>
                        <h6 className="mb-1 text-gray-900 text-16 dark:text-gray-50">Project Manager</h6>
                        <p className="mb-2 text-gray-500 dark:text-gray-300">Jobcy Technology Pvt.Ltd - (Pressent)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >
      {isModalOpen && (
        <div id="select-modal" tabIndex={-1} aria-hidden="true" className="flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Login
                </h3>
                <button type="button" onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="select-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-4 md:p-5">
                {/* <EducationDetails /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>


  )
}

export default Profile;

