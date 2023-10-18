"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Images from '@/app/public/images/landing-pic.png';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {

  return (
    <div className="min-h-screen">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-10 lg:p-20">
        <div className="flex flex-col justify-center p-6 md:p-10">
          <h1 className="text-4xl md:text-7xl font-semibold text-blue-900 mb-4">Syncflow Recruitment</h1>
          <p className="text-lg text-gray-600">Syncflow is a modern hiring platform that helps teams source, interview, and hire the best talent for their business.</p>
          <div className="mt-4">
            <button className="bg-blue-800 text-white rounded-full py-3 px-6 font-semibold hover:bg-blue-600">Request a demo</button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image src="/landing-pic.png" alt="Picture of the author" width={500} height={500} className="object-cover" />
        </div>
      </div>

      <div className="p-6 md:p-10 lg:p-20">
        <h1 className="text-4xl font-normal text-gray-800 my-8">Get the technology and know-how to be great at hiring so you can:</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-2 border-blue-800 p-6">
            <p className="text-lg font-medium text-gray-800">Source and nurture the right candidates</p>
          </div>
          <div className="border-2 border-blue-800 p-6">
            <p className="text-lg font-medium text-gray-800">Source and nurture the right candidates</p>
          </div>
          <div className="border-2 border-blue-800 p-6">
            <p className="text-lg font-medium text-gray-800">Source and nurture the right candidates</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-normal text-gray-800 mb-8">How it can work:</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="flex flex-col md:flex-row items-center space-x-4">
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-bold">Find and engage top talent with ease</h1>
              <p className="text-lg font-medium text-gray-800 my-4">In the midst of a bustling cityscape, the neon lights painted the night in vibrant hues, casting an enchanting glow upon the faces of passersby.</p>
            </div>
            <div className="w-full md:w-1/2">
              <Image src="/landing-pic.png" alt="Image Description 1" width={500} height={500} className="object-cover" />
            </div>
          </div>
       
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-10 lg:p-20">
        <div className="flex justify-center">
          <Image src="/syncflow_recruiter.avif" alt="Picture of the author" width={500} height={500} className="object-cover" />
        </div>
        <div className="flex flex-col justify-center p-6 md:p-10">
          <h1 className="text-4xl font-semibold text-gray-800 my-8">SyncFlow Recruiter</h1>
          <p className="text-lg text-gray-600">Syncflow is a modern hiring platform that helps teams source, interview, and hire the best talent for their business.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-10 lg:p-20">
        <div className="flex flex-col justify-center p-6 md:p-10">
          <h1 className="text-4xl font-semibold text-gray-800 my-8">SyncFlow Applicant</h1>
          <p className="text-lg text-gray-600">Syncflow is a modern hiring platform that helps teams source, interview, and hire the best talent for their business.</p>
        </div>
        <div className="flex justify-center">
          <Image src="/syncflow-applicant.webp" alt="Picture of the author" width={500} height={500} className="object-cover" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

