import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { useState } from "react";
import COUNTRIES from "@/data/countries";
import CreatableSelect from "react-select/creatable";
import { FaLocationCrosshairs } from "react-icons/fa6";
interface LocationAndSkillDetailsProps {
  country: string;
  city: string;
  area: string;
  tags: { id: string; text: string }[];
  latitude: string;
  longitude: string;
  tempCountry: string;
  setTempCountry: (value: string) => void;
  setLatitude: (value: string) => void;
  setLongitude: (value: string) => void;
  setTags: (value: { id: string; text: string }[]) => void;
  setCountry: (value: string) => void;
  setCity: (value: string) => void;
  setArea: (value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const SKILLS = [
  "React",
  "Angular",
  "Vue",
  "Node",
  "Express",
  "Django",
  "Flask",
  "Laravel",
  "Spring",
  "Hibernate",
  "Django Rest Framework",
  "Flask Restful",
  "Laravel Sanctum",
  "Spring Boot",
  "Spring Security",
  "Spring Data JPA",
  "Spring Data MongoDB",
  "Spring Data Redis",
  "Spring Cloud",
  "Spring Cloud Netflix",
];

const suggestions = SKILLS.map((country) => {
  return {
    id: country,
    text: country,
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

type Tag = { id: string; text: string };

const LocationAndSkillDetails: React.FC<LocationAndSkillDetailsProps> = ({
  country,
  city,
  area,
  tags,
  latitude,
  longitude,
  tempCountry,
  setTempCountry,
  setLatitude,
  setLongitude,
  setTags,
  setCountry,
  setCity,
  setArea,
  nextStep,
  prevStep,
}) => {
  const handleDelete = (i: number) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag: Tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag: Tag, currPos: number, newPos: number) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index: number) => {
    console.log("The tag at index " + index + " was clicked");
  };

  const getCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        setLatitude(pos.coords.latitude.toString());
        setLongitude(pos.coords.longitude.toString());
        console.log(latitude, longitude);
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          setCountry(data.address.country);
          setCity(data.address.city);
          setArea(data.address.neighbourhood);
          console.log(data);
        } catch (error) {
          console.error("Error:", error);
        }
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <div className="flex justify-between pb-4">
        <div className="w-1/2 pr-2">
          <label
            htmlFor="country"
            className="block text-sm pb-2 font-medium text-gray-700"
          >
            Country
          </label>
          <CreatableSelect
            options={Object.entries(COUNTRIES).map(([country]) => ({
              value: country,
              label: country,
            }))}
            onChange={(e) => {
              setTempCountry(e?.value || "");
            }}
          />
        </div>
        <div className="w-1/2 pl-2">
          <label
            htmlFor="city"
            className="block text-sm pb-2 font-medium text-gray-700"
          >
            City
          </label>
          <CreatableSelect
            options={Object.entries(COUNTRIES)
              .filter(([country, city]) => country === tempCountry)
              .map(([country, city]) => ({
                value: city,
                label: city,
              }))}
          />
        </div>
      </div>
      <div className="pb-4">
        <label
          htmlFor="area"
          className="block text-sm pb-2 font-medium text-gray-700"
        >
          Area
        </label>
        <input
          type="text"
          id="area"
          className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
          placeholder="G-9/1"
          // onChange={(e) => setArea(e.target.value)}
          required
        />
        <FaLocationCrosshairs
          className="absolute right-[38%] top-[64%] transform -translate-y-1/2 text-gray-400 hover:cursor-pointer hover:text-gray-600"
          onClick={getCurrentLocation}
          title="Get current location"
        />
      </div>

      <div>
        <label
          htmlFor="skills"
          className="block text-sm pb-2 font-medium text-gray-700"
        >
          Skills
        </label>
        <ReactTags
          id="skills"
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="top"
          autocomplete
        />
      </div>

      <button
        onClick={prevStep}
        className="mt-4 px-7 py-2 bg-blue-700 text-white rounded mr-2"
      >
        Previous
      </button>
      <button
        onClick={nextStep}
        className="bg-blue-700 text-white px-10 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default LocationAndSkillDetails;
