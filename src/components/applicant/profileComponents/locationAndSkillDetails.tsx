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

  return (
    <div>
      <div className="flex justify-between pb-4">
        <div className="w-1/2 pr-2">
          <label htmlFor="country">Country</label>
          <input
            id="country"
            name="country"
            type="text"
            placeholder="Pakistan"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            placeholder="Islamabad"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm"
          />
        </div>
      </div>
      <div className="pb-4">
        <label htmlFor="area">Area</label>
        <input
          id="area"
          name="area"
          placeholder="G-11/2"
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <div>
        <label htmlFor="skills">Skills</label>
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
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
      >
        Previous
      </button>
      <button
        onClick={nextStep}
        className="bg-blue-900 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default LocationAndSkillDetails;
