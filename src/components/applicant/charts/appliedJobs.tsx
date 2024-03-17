import React, { useState } from 'react';
import { MdInfo, MdVisibility, MdWork } from 'react-icons/md';

const AppliedJobs = () => {
  // Sample data for last five jobs applied (replace with actual data)
  const lastFiveJobsApplied = [
    { id: 1, title: 'Frontend Developer', company: 'ABC Inc.' },
    { id: 2, title: 'Backend Developer', company: 'XYZ Corp.' },
    { id: 3, title: 'Full Stack Developer', company: '123 Solutions' },
    { id: 4, title: 'UI/UX Designer', company: 'DesignCo' },
    { id: 5, title: 'Data Analyst', company: 'Data Insight' },
  ];

  return (
    <div className="rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 border-2 border-green-200 bg-green-50">
      <ul>
        {lastFiveJobsApplied.map(job => (
          <li key={job.id} className="flex justify-between items-center py-2 border-b-4 border-green-200 last:border-b-0 hover:bg-green-100 transition duration-300">
            <div className="flex items-center">
              <MdWork className="mr-2 text-green-500" />
              <div>
                <h3 className="text-base font-semibold text-green-700">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.company}</p>
              </div>
            </div>
            <button className="text-green-500 hover:text-green-700 transition duration-300 cursor-pointer">
              <MdVisibility className="mr-1" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;