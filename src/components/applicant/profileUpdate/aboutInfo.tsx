import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { useState } from "react";
import COUNTRIES from "@/data/countries";
import CreatableSelect from "react-select/creatable";
import { FaLocationCrosshairs } from "react-icons/fa6";
import SKILLS from "@/data/skills";
interface AboutInfoProps {

  tags: { id: string; text: string }[];
  desc: string;
  setDesc: (value: string) => void;
  setTags: (value: { id: string; text: string }[]) => void;
  setUpdateAboutButton: (value: boolean) => void;

}

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

const AboutInfo: React.FC<AboutInfoProps> = ({

  tags,
  desc,
  setTags,
  setDesc,
  setUpdateAboutButton,
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
      <div className="pb-4">
        <label
          htmlFor="desc"
          className="block text-sm font-medium text-gray-700 pb-2"
        >
          Description
        </label>
        <textarea
          id="desc"
          className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
          placeholder="Tell us about yourself"
          onChange={(e) => setDesc(e.target.value)}
          required
        />
      </div>

      <div className="pb-4">
        <div className="w-full pr-2">
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700 pb-2"
          >
            Skills
          </label>
          <div>
            <ReactTags
              tags={tags}
              suggestions={suggestions}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              handleDrag={handleDrag}
              delimiters={delimiters}
              handleTagClick={handleTagClick}
              placeholder="Add a skill"
              inputFieldPosition="top"
              autocomplete
              // classNames={{
              //   tag: 'ReactTags__tag border text-white bg-blue-400 rounded mb-2 mr-2 px-2 py-2',
              // }}
            />
          </div>

        </div>
      </div>

      <button
        type="button"
        onClick={() => setUpdateAboutButton(true)}
        className="mt-4 px-10 py-2 bg-blue-700 text-white rounded"
      >
        Submit
      </button>
    </div>
  );
}
export default AboutInfo;
