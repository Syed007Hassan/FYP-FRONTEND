
import React, { useState } from "react";

interface ContactDetailsProps {
  email: string;
  address: string;
  phone: string;
  setEmail: (value: string) => void;
  setAddress: (value: string) => void;
  setPhone: (value: string) => void;

}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  setEmail,
  setAddress,
  setPhone,

}) => {
  return (
    <div>

      <div className="pb-4">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 pb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
          placeholder="johndoe@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="pb-4">
        <div className="w-full pr-2">
          <label
            htmlFor="address"
            className="block text-sm pb-2 font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
            onChange={(e) => setAddress(e.target.value)}
            required
          />

        </div>


      </div>
      <div className="pb-4">
        <div className="w-full pr-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 pb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
            placeholder="0300-1234567"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>

      <button
        type="button"
        // onClick={setSubmit}
        className="mt-4 px-10 py-2 bg-blue-700 text-white rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default ContactDetails;
