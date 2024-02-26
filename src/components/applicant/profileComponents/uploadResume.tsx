import React from "react";

interface UploadResumeProps {
  nextStep: () => void;
  prevStep: () => void;
  reallocation: string;
  setReallocation: (value: string) => void;
}

const UploadResume: React.FC<UploadResumeProps> = ({
  nextStep,
  prevStep,
  reallocation,
  setReallocation,
}) => {
  return (
    <div>
      <div className="pb-4">
        <label
          htmlFor="reallocation"
          className="block text-sm pb-2 font-medium text-gray-700"
        >
          Ready for Reallocation
        </label>
        <div className="mt-1 flex gap-x-6">
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
      <div className="pb-4">
        <label
          htmlFor="resume"
          className="mt-6 block text-sm pb-2 font-medium text-gray-700"
        >
          Resume
        </label>

        <input
          className="block w-full mb-5 text-xs text-blue-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="resume"
          type="file"
          required
        />

      </div>
      <button
        onClick={prevStep}
        className="mt-4 px-7 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
      >
        Previous
      </button>
      <button
        type="submit"
        className="bg-blue-900 text-white px-10 py-2 rounded mr-2"
      >
        Submit
      </button>
    </div>
  );
};

export default UploadResume;
