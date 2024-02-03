import { Dropdown } from "flowbite-react";

interface PersonalDetailsProps {
  firstName: string;
  lastName: string;
  dob: string;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setDob: (value: string) => void;
  nextStep: () => void;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  firstName,
  lastName,
  dob,
  setFirstName,
  setLastName,
  setDob,
  nextStep,
}) => {
  return (
    <div>
      <div className="flex space-x-4 pb-4">
        <div className="w-1/2">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Ehtesham"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="w-1/2">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Zafar"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm"
          />
        </div>
      </div>
      <div className="pb-4">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          placeholder="+923001234567"
          type="tel"
          className="mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div className="flex justify-between pb-4">
        <div className="w-1/2 pr-2">
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <Dropdown label="select gender" inline>
            <Dropdown.Item onClick={() => alert("Dashboard!")}>
              Male
            </Dropdown.Item>
            <Dropdown.Item onClick={() => alert("Settings!")}>
              Female
            </Dropdown.Item>
            <Dropdown.Item onClick={() => alert("Earnings!")}>
              Other
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <label htmlFor="desc">Description</label>
      <textarea
        id="desc"
        name="desc"
        placeholder="Write something about yourself"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
      />
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

export default PersonalDetails;
