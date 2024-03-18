import React, { useState } from 'react';

const HiringPipeline = () => {
  const initialJobs = [
    { id: 1, role: 'Software Engineer', applicants: { 'HR Interview': 2, 'Technical Test': 3, 'Technical Interview': 2, 'Offer': 1 } },
    { id: 2, role: 'Product Manager', applicants: { 'HR Interview': 1, 'Technical Test': 2, 'Technical Interview': 1, 'Offer': 1 } },
    { id: 3, role: 'UI/UX Designer', applicants: { 'HR Interview': 2, 'Technical Test': 2, 'Technical Interview': 2, 'Offer': 1 } },
  ];

  const [jobs, setJobs] = useState(initialJobs);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-gray-800">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Applicants</th>
              <th className="px-4 py-2">HR Interview</th>
              <th className="px-4 py-2">Technical Test</th>
              <th className="px-4 py-2">Technical Interview</th>
              <th className="px-4 py-2">Offer</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <React.Fragment key={job.id}>
                <tr className="text-center">
                  <td className="px-4 py-2 border">{job.role}</td>
                  <td className="px-4 py-2 border">{Object.values(job.applicants).reduce((a, b) => a + b, 0)}</td>
                  <td className="px-4 py-2 border">{job.applicants['HR Interview']}</td>
                  <td className="px-4 py-2 border">{job.applicants['Technical Test']}</td>
                  <td className="px-4 py-2 border">{job.applicants['Technical Interview']}</td>
                  <td className="px-4 py-2 border">{job.applicants['Offer']}</td>
                </tr>
                {index < jobs.length - 1 && (
                  <tr>
                    <td colSpan={6} className="border-b"></td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HiringPipeline;
