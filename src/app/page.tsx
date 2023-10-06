"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Images from '@/app/public/images/landing-pic.png';

export default function Home() {

  return (
    <div className=" min-h-screen justify-center">
      {/* 1 container */}
      <div className="grid grid-rows-1 grid-flow-col p-1">
        <div className='pt-6 pr-20 pl-10 pb-6'>
          <header className="pr-20 pl-20">
            <h1 className=" text-blue-800 mb-4">Syncflow recruitment</h1>
            <h1 className='pr-20 text-7xl font-semibold text-gray-800 my-8'>Software designed for everyone involved in hiring</h1>
            <p className="text-lg text-gray-600">Syncflow is a modern hiring platform that helps teams source, interview, and hire the best talent for their business.</p>
            {/* request a demo button */}
            <div className="flex pt-9 ">
              <button className="bg-blue-800 text-white rounded-full py-3 px-6 font-semibold hover:bg-blue-600">
                Request a demo
              </button>
            </div>
          </header>
        </div>
        <div className='pt-6 pl-10 pb-6 flex' style={{ width: '650px', height: '630px' }}>
          <Image src="/landing-pic.png" alt="Picture of the author" width={500} height={500} />
        </div>
      </div>

      {/* 2 container */}
      <div className='pl-20 pb-10 pt-10 bg-gray-200 pr-20'>
        <div className='pl=20 pr-64'>
          <h1 className="text-5xl font-normal text-gray-800 my-8 pl-20 pr-64">Get the technology and know-how to be great at hiring so you can:</h1>
        </div>
        <div className="grid grid-rows-1 grid-flow-col p-16">
          <div className='flex justify-center border-solid border-blue-800 border-r-2'>
            <p className="text-lg font-medium text-gray-800 my-4">Source and nurture the right candidates</p>
          </div>
          <div className='flex justify-center border-solid border-blue-800 border-r-2'>
            <p className="text-lg font-medium text-gray-800 my-4">Source and nurture the right candidates</p>
          </div>
          <div className=' flex justify-center'>
            <p className="text-lg font-medium text-gray-800 my-4">Source and nurture the right candidates</p>
          </div>
        </div>
        <div className="grid grid-rows-1 grid-flow-col">
          <div className='flex justify-center border-solid border-blue-800 border-r-2'>
            <p className="text-lg font-medium text-gray-800 my-4">Source and nurture the right candidates</p>
          </div>
          <div className='flex justify-center border-solid border-blue-800 border-r-2'>
            <p className="text-lg font-medium text-gray-800 my-4">Source and nurture the right candidates</p>
          </div>
          <div className=' flex justify-center'>
            <p className="text-lg font-medium text-gray-800 my-4">Source and nurture the right candidates</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8">

        <section className="my-12">
          <div className="flex justify-center items-center space-x-4">
            <div className="bg-white rounded-full p-4 shadow-md">
              {/* Your content here */}
            </div>
            <div className="bg-white rounded-full p-4 shadow-md">
              {/* Your content here */}
            </div>
            <div className="bg-white rounded-full p-4 shadow-md">
              {/* Your content here */}
            </div>
          </div>
        </section>

        <section>

          <div className='pl=20 pr-64'>
            <h1 className="text-5xl font-normal text-gray-800 my-8 pl-20 ">Features</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              {/* Feature 1 content */}
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              {/* Feature 2 content */}
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              {/* Feature 3 content */}
            </div>
          </div>
        </section>

        <section className="my-12">
          {/* Testimonials section */}
        </section>

        

{/* //  How it can work: */}

<section>
  <div className='max-w-6xl mx-auto py-10 px-4'>
    <h1 className='text-5xl font-normal text-gray-800 mb-8'>
      How it can work:
    </h1>
    <div className='lg:space-y-8'>
      <div className='lg:w-3/3 lg:pr-10 lg:flex items-center space-x-4'>
        <div className='w-full lg:w-1/2'>
        <h1 className='text-3xl font-bold'>Find and engage top talent with ease</h1>
          <p className='text-lg font-medium text-gray-800 my-4'>
            In the midst of a bustling cityscape, the neon lights painted the night in vibrant hues, casting an enchanting glow upon the faces of passersby..
          </p>
        </div>
        <div className='w-full lg:w-1/2'>
          <img
            src='/landing-pic.png'
            alt='Image Description 1'
            className='w-full h-auto max-w-md'
          />
        </div>
      </div>

      {/* Add spacing between portions */}
      <div className='mb-8'></div>

      <div className='lg:w-3/3 lg:pr-10 lg:flex items-center space-x-4'>
        <div className='w-full lg:w-1/2'>
          <img
            src='/landing-pic.png'
            alt='Image Description 2'
            className='w-full h-auto max-w-md'
          />
        </div>
        <div className='w-full lg:w-1/2'>
        <h1 className='text-3xl font-bold'>Find and engage top talent with ease</h1>
          <p className='text-lg font-medium text-gray-800 my-4'>
            In the midst of a bustling cityscape, the neon lights painted the night in vibrant hues, casting an enchanting glow upon the faces of passersby..
          </p>
        </div>
      </div>

      {/* Add spacing between portions */}
      <div className='mb-8'></div>

      <div className='lg:w-3/3 lg:pr-10 lg:flex items-center space-x-4'>
        <div className='w-full lg:w-1/2'>
        <h1 className='text-3xl font-bold'>Find and engage top talent with ease</h1>
          <p className='text-lg font-medium text-gray-800 my-4'>
            In the midst of a bustling cityscape, the neon lights painted the night in vibrant hues, casting an enchanting glow upon the faces of passersby..
          </p>
        </div>
        <div className='w-full lg:w-1/2'>
          <img
            src='/landing-pic.png'
            alt='Image Description 3'
            className='w-full h-auto max-w-md'
          />
        </div>
      </div>

      {/* Add spacing between portions */}
      <div className='mb-8'></div>

      <div className='lg:w-3/3 lg:pr-10 lg:flex items-center space-x-4'>
        <div className='w-full lg:w-1/2'>
          <img
            src='/landing-pic.png'
            alt='Image Description 4'
            className='w-full h-auto max-w-md'
          />
        </div>
        <div className='w-full lg:w-1/2'>
        <h1 className='text-3xl font-bold'>Find and engage top talent with ease</h1>

          <p className='text-lg font-medium text-gray-800 my-4'>
            In the midst of a bustling cityscape, the neon lights painted the night in vibrant hues, casting an enchanting glow upon the faces of passersby..
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Started</h2>
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white rounded-full py-3 px-6 font-semibold hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </section>
{/* <section>
    <footer>
      <section className="py-12 bg-zinc-800 dark:bg-neutral-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 xl:col-span-4">
              <div className="mr-12">
                <h4 className="text-white text-3xl mb-6">Jobcy</h4>
                <p className="text-white/50 dark:text-gray-300">
                  It is a long established fact that a reader will be of a page reader will be of at its layout.
                </p>
                <p className="mt-3 text-white dark:text-gray-50">Follow Us on:</p>
                <div className="mt-5">
                  <ul className="flex gap-3">
                    <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 hover:bg-violet-500 hover:border-transparent">
                      <a href="#">
                        <i className="uil uil-facebook-f"></i>
                      </a>
                    </li>
                    <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 hover:bg-sky-500 hover:border-transparent">
                      <a href="#">
                        <i className="uil uil-linkedin-alt"></i>
                      </a>
                    </li>
                    <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 hover:bg-red-500 hover:border-transparent">
                      <a href="#">
                        <i className="uil uil-google"></i>
                      </a>
                    </li>
                    <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 hover:bg-blue-500 hover:border-transparent">
                      <a href="#">
                        <i className="uil uil-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
              <p className="mb-6 text-white text-16">Company</p>
              <ul className="space-y-4">
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/about">
                    <a>
                      <i className="mdi mdi-chevron-right"></i> About Us
                    </a>
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/contact">
                    <a>
                      <i className="mdi mdi-chevron-right"></i> Contact Us
                    </a>
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/services">
                    <a>
                      <i className="mdi mdi-chevron-right"></i> Services
                    </a>
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/blog">
                    <a>
                      <i className="mdi mdi-chevron-right"></i> Blog
                    </a>
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/team">
                    <a>
                      <i className="mdi mdi-chevron-right"></i> Team
                    </a>
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/pricing">
                    <a>
                      <i className="mdi mdi-chevron-right"></i> Pricing
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
              <p className="mb-6 text-white text-16">For Jobs</p>
              <ul className="space-y-4">
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/job-categories">
                    <a>
                      <i className="mdi mdi-chevron-right"></i> Browser Categories
                    </a>
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/job-list">
                    <a>
                      <i className="mdi mdi-chevron-right"></i> Browser Jobs
                    </a>
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/job-details">
                    <a>
                      <i className="mdi mdi-chevron-right"></i> Job Details
                    </a>
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/bookmark-jobs">
                    <a>
                      <i className="mdi mdi-chevron-right"></i> Bookmark Jobs
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
              <p className="mb-6 text-white text-16">For Candidates</p>
              <ul className="space-y-4">
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/candidate-list">
                    <a>
                      <i className="mdi mdi-chevron-right"></i> Candidate List
                    </a>
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/candidate-grid">
                    <a>
                      <i className="mdi mdi-chevron-right"></i> Candidate Grid
                    </a>
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/candidate-details">
                    <a>
                      <i className="mdi mdi-chevron-right"></i> Candidate Details
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
              <p className="mb-6 text-white text-16">Support</p>
              <ul className="space-y-4">
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/contact">
                    <a>
                      <i className="mdi mdi-chevron-right"></i> Help Center
                    </a>
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/faqs">
                    <a>
                      <i className="mdi mdi-chevron-right"></i> FAQ'S
                    </a>
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/privacy-policy">
                    <a>
                      <i className="mdi mdi-chevron-right"></i> Privacy Policy
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End footer */}
      {/* Start footer alt */}
      {/* <section className="py-6 border-t bg-zinc-800 border-gray-100/10 dark:bg-neutral-900">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="mb-0 text-center text-white/50">
              <script>document.write(new Date().getFullYear())</script>
              © Jobcy - Job Listing Page Template by{' '}
              <a
                href="https://themeforest.net/search/themesdesign"
                target="_blank"
                className="underline transition-all duration-300 hover:text-gray-50"
              >
                Themesdesign
              </a>
            </p>
          </div>
        </div>
      </section>
    </footer>
</section>*/}
      </div>

    </div>

  );
}
