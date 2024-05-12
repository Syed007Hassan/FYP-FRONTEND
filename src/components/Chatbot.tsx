import Image from "next/image";
import "../../src/styles/chatbot.css";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetChatQuery } from "@/redux/services/chat/chatAction";
import { FcGoogle } from "react-icons/fc";
import bardIcon from "../../public/google-bard-icon.svg";

interface ChatbotProps {
  click: boolean;
}

const Chatbot: React.FC<ChatbotProps> = ({ click }) => {
  const [query, setQuery] = useState("Hi");
  const [input, setInput] = useState("");

  const [displayedText, setDisplayedText] = useState("");
  const [dots, setDots] = useState('');

  const dispatch = useAppDispatch();

  const { data, error, isLoading, isFetching } = useGetChatQuery({
    query: query,
  });

  const markdown =
    "## **Job Description: HTML Developer**\n\n**Headline:** **From Wireframes to Websites: Build the Frontend Foundation (HTML Developer)**\n\n**Opening:**\n\nDo you dream in code and turn mockups into magic? We're seeking a skilled and passionate HTML Developer to join our team and translate stunning designs into pixel-perfect realities. If you love the challenge of converting wireframes into user-friendly interfaces, and have the expertise to craft clean, semantic HTML5 that sings across browsers, then we want you on board!\n\n**Responsibilities:**\n\n* **Turn design dreams into digital realities:** Bring UI/UX mockups to life with meticulous HTML5 code, ensuring adherence to brand guidelines and web accessibility best practices.\n* **Collaboration is key:** Work closely with designers and developers to bridge the gap between design and functionality, creating a seamless user experience.\n* **Code with clarity and purpose:** Craft clean, well-organized, and semantic HTML5 code that adheres to web accessibility standards and promotes maintainability.\n* **Master of the markup:** Stay ahead of the curve by keeping your HTML and web development skills sharp, exploring new technologies and best practices.\n* **Pixel-perfect precision:** Test and debug code across various browsers and devices to guarantee optimal performance and a flawless user experience.\n\n**Bonus Points:**\n\n* Experience with CSS preprocessors like Sass or LESS.\n* Familiarity with front-end frameworks like React or Angular.\n* A passion for responsive design and cross-browser compatibility.\n* Excellent communication and collaboration skills.\n\n**What We Offer:**\n\n* The opportunity to work on cutting-edge projects that make a real impact.\n* A collaborative and supportive work environment where your skills will be valued.\n* Competitive salary and benefits package.\n* Opportunities for professional growth and development.\n* The chance to be part of a team that's passionate about creating exceptional online experiences.\n\n**Ready to code your next masterpiece?**\n\nSend us your resume and let's chat about how you can help us build something truly special!\n\n**Remember:** Customize this template to reflect your company culture, brand voice, and specific technical requirements. Be sure to highlight the unique perks and benefits you offer to attract top-notch HTML talent!\n\nI hope this helps you craft the perfect job description for your next HTML Developer!\n\n";

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, 100); 
  }, []);

  useEffect(() => {
    setDisplayedText("");
    if (data?.data) {
      // const words = JSON.stringify(data?.data).split(" ");
      // let i = 0;

      // const intervalId = setInterval(() => {
      //   if (i < words.length) {
      //     setDisplayedText((prevText) => prevText + " " + words[i]);
      //     i++;
      //   } else {
      //     clearInterval(intervalId);
      //   }
      // }, 100); // Adjust the delay to suit your needs

      // return () => clearInterval(intervalId); // Clean up on unmount

      setDisplayedText(data?.data.toString() || "");
    }
  }, [data]); // Add data as a dependency

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setDisplayedText("");
    console.log("submit");
    setQuery(input);
    setInput("");
    event.preventDefault();
    // Your code here
  };

  return (
    <div
    className={`${
      click
        ? "block opacity-100 transition-opacity duration-500 ease-in-out"
        : "hidden opacity-0 transition-opacity duration-500 ease-in-out"
    }`}
  >
    {/* Prompt Messages Container - Modify the height according to your need */}
    <div className="flex w-3/12 flex-col fixed right-6 bottom-16 rounded-lg border border-slate-400">
      {/* Prompt Messages */}
      <div className="flex flex-col rounded-t-lg overflow-y-auto bg-slate-300 text-sm leading-6 text-slate-900 shadow-md dark:bg-slate-800 dark:text-slate-300 sm:text-base sm:leading-7">
        <div className="flex justify-between py-2 px-5 bg-slate-200">
          <div className="flex gap-2">
            <Image
              className="flex h-8 w-10 items-center align-middle justify-center"
              src={bardIcon}
              alt="Bard Icon"
              width={30}
              height={10}
            />
            <label className="font-bold">SyncFlow Assistant</label>
          </div>
        </div>

        <div className="flex bg-slate-100 px-4 py-3 dark:bg-slate-900 sm:px-6 chatbot h-[11.5rem]">
          <div className="flex gap-4 w-full flex-col items-start lg:flex-row lg:justify-between">
            <p className="max-w-3xl">
              {isFetching ? (
                <label className="font-bold text-slate-900">Generating {dots}</label>
              ) : (
                <div className="flex flex-col gap-3">
                  {query && (
                    <label className="font-bold text-slate-900">You: {query}</label>
                  )}
                  <Markdown>{displayedText}</Markdown>
                </div>
              )}
            </p>
            <div className="mt-4 flex flex-col gap-y-2 text-slate-500 lg:mt-0">
              <button
                className="hover:text-blue-600"
                type="button"
                title="Copy to clipboard"
                onClick={() => navigator.clipboard.writeText(displayedText)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Prompt message input */}
      <form
        className="flex w-full items-center rounded-b-lg border-t border-slate-300 bg-slate-200 p-2 dark:border-slate-700 dark:bg-slate-900"
        onSubmit={handleSubmit}
      >
        <label htmlFor="chat" className="sr-only">
          Enter your prompt
        </label>
        <textarea
          id="chat-input"
          rows={1}
          className="mx-2 flex min-h-full w-full rounded-md border border-slate-300 bg-slate-50 p-2 text-base text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50 dark:placeholder-slate-400 dark:focus:border-blue-600 dark:focus:ring-blue-600"
          placeholder="Enter your prompt"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <div>
          <button
            className="inline-flex hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-600 sm:p-2"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              aria-hidden="true"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 14l11 -11"></path>
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Chatbot;
