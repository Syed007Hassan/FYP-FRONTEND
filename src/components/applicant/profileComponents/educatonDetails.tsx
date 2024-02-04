interface EducationProps {
  degreeTitle: string;
  institute: string;
  startDate: string;
  endDate: string;
  setDegreeTitle: (value: string) => void;
  setInstitute: (value: string) => void;
  setStartDate: (value: string) => void;
  setEndDate: (value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const EducationDetails: React.FC<EducationProps> = ({
  degreeTitle,
  institute,
  startDate,
  endDate,
  setDegreeTitle,
  setInstitute,
  setStartDate,
  setEndDate,
  nextStep,
  prevStep,
}) => {
  return (
    <div>
      <div className="pb-4">
        <label htmlFor="degreeTitle">Degree Title</label>
        <input
          id="degreeTitle"
          name="degreeTitle"
          type="text"
          placeholder="BS Computer Science"
          value={degreeTitle}
          onChange={(e) => setDegreeTitle(e.target.value)}
          className="mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div className="pb-4">
        <label htmlFor="institute">Institute</label>
        <input
          id="institute"
          name="institute"
          placeholder="FAST"
          type="text"
          value={institute}
          onChange={(e) => setInstitute(e.target.value)}
          className="mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div className="flex space-x-4 pb-4">
        <div className="w-1/2">
          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            name="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            name="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={prevStep}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
      >
        Previous
      </button>
      <button
        type="button"
        onClick={nextStep}
        className="mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
      >
        Next
      </button>
    </div>
  );
};

export default EducationDetails;
