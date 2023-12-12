import Image from "next/image";
import "../../src/styles/chatbot.css";
import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetChatQuery } from "@/redux/services/chat/chatAction";

interface ChatbotProps {
  click: boolean;
}

const Chatbot: React.FC<ChatbotProps> = ({ click }) => {
  const [query, setQuery] = useState("Hi");
  const [input, setInput] = useState("");

  const [displayedText, setDisplayedText] = useState("");

  const dispatch = useAppDispatch();

  const { data, error, isLoading, isFetching } = useGetChatQuery({
    query: query,
  });

  useEffect(() => {
    console.log(data);
  } , [data])

  useEffect(() => {
    setDisplayedText("");
    if (data?.data) {
      const words = JSON.stringify(data?.data).split(" ");
      let i = 0;

      const intervalId = setInterval(() => {
        if (i < words.length) {
          setDisplayedText((prevText) => prevText + " " + words[i]);
          i++;
        } else {
          clearInterval(intervalId);
        }
      }, 100); // Adjust the delay to suit your needs

      return () => clearInterval(intervalId); // Clean up on unmount
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
      <div className="flex w-3/12 flex-col absolute right-[2rem] top-[24rem] ">
        {/* Prompt Messages */}
        <div className="flex flex-col overflow-y-auto rounded-[0.5rem] bg-slate-300 text-sm leading-6 text-slate-900 shadow-md dark:bg-slate-800 dark:text-slate-300 sm:text-base sm:leading-7">
          {/* <div className="flex flex-row px-4 py-8 sm:px-6">
            <Image
              className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
              src="https://dummyimage.com/256x256/363536/ffffff&text=U"
              alt="User Image"
              width={256}
              height={256}
            />

            <div className="flex max-w-3xl items-center">
              <p>What are three great applications of quantum computing?</p>
            </div>
          </div> */}

          <div className="flex bg-slate-100 px-4 py-8 dark:bg-slate-900 sm:px-6 chatbot h-[11.5rem]">
            <Image
              className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
              src="https://dummyimage.com/256x256/354ea1/ffffff&text=G"
              alt="User Image"
              width={256}
              height={256}
            />

            <div className="flex w-full flex-col items-start lg:flex-row lg:justify-between">
              <p className="max-w-3xl">
                {isFetching ? "Loading..." : <div>{displayedText}</div>}
              </p>
              <div className="mt-4 flex flex-col gap-y-2 text-slate-500 lg:mt-0">
                <button className="hover:text-blue-600">
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
                    <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
                  </svg>
                </button>
                <button className="hover:text-blue-600" type="button">
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
                <button className="hover:text-blue-600" type="button">
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
                    <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Prompt message input */}
        <form
          className="flex w-full items-center rounded-b-md border-t border-slate-300 bg-slate-200 p-2 dark:border-slate-700 dark:bg-slate-900"
          onSubmit={handleSubmit}
        >
          <label htmlFor="chat" className="sr-only">
            Enter your prompt
          </label>
          {/* <div>
            <button
              className="hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-600 sm:p-2"
              type="button"
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
                <path d="M12 5l0 14"></path>
                <path d="M5 12l14 0"></path>
              </svg>
              <span className="sr-only">Add</span>
            </button>
          </div> */}
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
