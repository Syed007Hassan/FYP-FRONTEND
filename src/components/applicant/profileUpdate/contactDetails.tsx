import React, { useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";

interface ContactDetailsProps {
  country: string;
  city: string;
  area: string;
  longitude: string;
  latitude: string;
  setCountry: (value: string) => void;
  setCity: (value: string) => void;
  setArea: (value: string) => void;
  setLongitude: (value: string) => void;
  setLatitude: (value: string) => void;
  setPhone: (value: string) => void;
  setClickLocation: (value: boolean) => void;
  setUpdateContactButton: (value: boolean) => void;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  country,
  city,
  area,
  setPhone,
  setClickLocation,
  setUpdateContactButton,
}) => {
  return (
    <div>
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
            value={area && city && country ? `${area}, ${city}, ${country}` : ""}
            placeholder="enter your address here"
            className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
            // onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <FaLocationCrosshairs
          className="absolute right-[10%] top-[42%] transform -translate-y-1/2 text-gray-400 hover:cursor-pointer hover:text-gray-600"
          onClick={() => setClickLocation(true)}
          title="Get current location"
        />
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
        onClick={() => setUpdateContactButton(true)}
        className="mt-4 px-10 py-2 bg-blue-700 text-white rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default ContactDetails;
