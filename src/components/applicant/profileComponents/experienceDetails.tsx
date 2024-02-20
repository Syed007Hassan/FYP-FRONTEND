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
          <label
            htmlFor="company"
            className="block text-sm pb-2 font-medium text-gray-700"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
            placeholder="Google"
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="position"
            className="block text-sm pb-2 font-medium text-gray-700"
          >
            Position
          </label>
          <input
            type="text"
            id="position"
            className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
            placeholder="Computer Science"
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex space-x-4 pb-4">
        <div className="w-1/2">
          <label
            htmlFor="expStartDate"
            className="block text-sm pb-2 font-medium text-gray-700"
          >
            Start Date
          </label>
          <input
            type="date"
            id="expStartDate"
            className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
            // placeholder="Computer Science"
            onChange={(e) => setExpStartDate(e.target.value)}
            required
          />
        </div>
        <div className="w-1/2">
          <label
            htmlFor="expEndDate"
            className="block text-sm pb-2 font-medium text-gray-700"
          >
            End Date
          </label>
          <input
            type="date"
            id="expEndDate"
            className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
            // placeholder="Computer Science"
            onChange={(e) => setExpEndDate(e.target.value)}
            required
          />
        </div>
      </div>
      <button
        onClick={prevStep}
        className="mt-4 px-7 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 mr-2"
      >
        Previous
      </button>
      <button
        type="button"
        className="bg-blue-700 text-white px-10 py-2 rounded mr-2"
        onClick={nextStep}
      >
        Next
      </button>
      <button
        type="button"
        className="bg-blue-700 text-white px-7 py-2 rounded"
        onClick={nextStep}
      >
        Add More
      </button>
    </div>
  );
};

export default ExperienceDetails;
