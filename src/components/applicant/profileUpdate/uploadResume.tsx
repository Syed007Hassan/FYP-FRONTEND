import React from "react";

interface UploadResumeProps {

  reallocation: string;
  setReallocation: (value: string) => void;
}

const UploadResume: React.FC<UploadResumeProps> = ({

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
      <div className="pb-4">
        <label
          htmlFor="resume"
          className="block text-sm pb-2 font-medium text-gray-700"
        >
          Resume
        </label>
        <input
          type="file"
          id="resume"
          className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-900 text-white px-10 py-2 rounded mr-2"
      // onClick={nextStep}
      >
        Submit
      </button>
    </div>
  );
};

export default UploadResume;
