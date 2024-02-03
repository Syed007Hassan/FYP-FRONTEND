interface ExperienceDetailsProps {
  company: string;
  position: string;
  expStartDate: string;
  expEndDate: string;
  reallocation: string;
  setCompany: (value: string) => void;
  setPosition: (value: string) => void;
  setExpStartDate: (value: string) => void;
  setExpEndDate: (value: string) => void;
  setReallocation: (value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
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
}) => {
  return (
    <div>
      <div className="flex space-x-4">
        <div className="pb-4">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Google"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="position">Position</label>
          <input
            id="position"
            name="position"
            placeholder="Software Engineer"
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm"
          />
        </div>
      </div>
      <div className="flex space-x-4 pb-4">
        <div className="w-1/2">
          <label htmlFor="expStartDate">Start Date</label>
          <input
            id="expStartDate"
            name="expStartDate"
            type="date"
            value={expStartDate}
            onChange={(e) => setExpStartDate(e.target.value)}
            className="mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="expEndDate">End Date</label>
          <input
            id="expEndDate"
            name="expEndDate"
            type="date"
            value={expEndDate}
            onChange={(e) => setExpEndDate(e.target.value)}
            className="mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm"
          />
        </div>
      </div>
      <div className="pb-4">
        <label htmlFor="reallocation">Ready to Relocate?</label>
        <div className="mt-1 block flex gap-x-4">
          <label>
            <input
              id="reallocation"
              name="reallocation"
              type="radio"
              value="yes"
              checked={reallocation === "yes"}
              onChange={(e) => setReallocation(e.target.value)}
            />
            Yes
          </label>
          <label>
            <input
              id="reallocation"
              name="reallocation"
              type="radio"
              value="no"
              checked={reallocation === "no"}
              onChange={(e) => setReallocation(e.target.value)}
            />
            No
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="resume">Upload Resume</label>
        <label className="block w-20 flex flex-col items-center px-4 py-2 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16 7A4 4 0 1 1 8 7a4 4 0 0 1 8 0zm-2-4a2 2 0 1 0-4 0v6a2 2 0 0 0 4 0V3zm-6 0v2a2 2 0 0 0 4 0V3a2 2 0 1 0-4 0zm6 6v5H6v-5a2 2 0 1 0-4 0v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5a2 2 0 1 0-4 0z" />
          </svg>
          <input type="file" className="hidden" />
        </label>
      </div>
      <button
        onClick={prevStep}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
      >
        Previous
      </button>
      <button
        type="submit"
        className="bg-blue-900 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default ExperienceDetails;
