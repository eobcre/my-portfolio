import React, { useState } from "react";
// Icon
import { HiArrowCircleUp } from "react-icons/hi";

// contact form link
const FORM_LINK =
  "https://public.herotofu.com/v1/0966d0c0-2f22-11ed-bcfb-8f1aa9572469";

// Contact form
const AppContact = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  // Return to top button
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // After submit the contact form
  if (submitted) {
    return (
      <div className="bg-dark-blue text-white text-md flex justify-center items-centerpy-5">
        <HiArrowCircleUp className="text-6xl" onClick={returnTop} />
      </div>
    );
  }

  // JSX
  return (
    <div className="bg-dark-blue h-auto pb-10">
      <form
        action={FORM_LINK}
        onSubmit={handleSubmit}
        className="bg-dark-blue w-80 mx-auto md:w-96"
        method="POST"
        target="_blank"
      >
        {/* Title */}
        <h1 className="text-white text-4xl font-bold tracking-wide text-center py-5 md:text-5xl">
          {props.title}
        </h1>
        {/* "Name" field */}
        <div className="py-2">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="px-2 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-md border-0 shadow outline-none focus:outline-none focus:ring w-full md:px-3 md:py-3 text-sm"
            required
          />
        </div>
        {/* "Email" field */}
        <div className="py-2">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-2 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-md border-0 shadow outline-none focus:outline-none focus:ring w-full md:px-3 md:py-3 text-sm"
            required
          />
        </div>
        {/* "Message" field */}
        <div className="py-2">
          <textarea
            placeholder="Message"
            name="message"
            rows="10"
            cols="50"
            className="px-2 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-md border-0 shadow outline-none focus:outline-none focus:ring w-full md:px-3 md:py-3 text-sm"
            required
          />
        </div>
        {/* Button */}
        <div className="text-center pt-4 pb-6">
          <button
            className="border-2 border-light-blue text-white font-bold tracking-wide text-md px-9 py-4 rounded hover:bg-light-blue outline-none mr-1 mb-1 ease-linear transition-all duration-300 md:text-md"
            type="submit"
          >
            {props.name}
          </button>
        </div>
      </form>
      <div className="bg-dark-blue text-white text-md flex justify-center items-center pt-10">
        <HiArrowCircleUp className="text-6xl" onClick={returnTop} />
      </div>
    </div>
  );
};

export default AppContact;
