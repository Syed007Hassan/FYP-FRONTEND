"use client";
import React from 'react';
import Image from 'next/image';
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
        
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
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
        
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Started</h2>
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white rounded-full py-3 px-6 font-semibold hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </section>
      </div>
    </div>

  );
}
