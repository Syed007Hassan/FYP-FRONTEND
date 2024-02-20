import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { useState } from "react";

interface LocationAndSkillDetailsProps {
  country: string;
  city: string;
  area: string;
  tags: { id: string; text: string }[];
  setTags: (value: { id: string; text: string }[]) => void;
  setCountry: (value: string) => void;
  setCity: (value: string) => void;
  setArea: (value: string) => void;
  setSubmit: (value: object) => void;
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
  setTags,
  setCountry,
  setCity,
  setArea,
  setSubmit

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
          <input
            type="text"
            id="country"
            className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
            placeholder="Pakistan"
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div className="w-1/2 pl-2">
          <label
            htmlFor="city"
            className="block text-sm pb-2 font-medium text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
            placeholder="Islamabad"
            onChange={(e) => setCity(e.target.value)}
            required
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
          onChange={(e) => setArea(e.target.value)}
          required
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
        onClick={setSubmit}
        className="bg-blue-700 text-white px-10 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default LocationAndSkillDetails;
