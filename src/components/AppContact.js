import React from "react";
import { FadeIn } from "./FadeIn";

// EmailJS
import EmailJS from "emailjs-com";
// Icon
import { HiArrowCircleUp } from "react-icons/hi";

export default function AppContact(props) {
  const sendEmail = (e) => {
    e.preventDefault();

    EmailJS.sendForm(
      "service_lkcx1hs",
      "template_ia4piap",
      e.target,
      "8amCye5YPJ3JRgePo"
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // JSX
  return (
    <div className="bg-dark-blue h-auto pb-10">
      <FadeIn>
        <form
          onSubmit={sendEmail}
          className="bg-dark-blue w-80 mx-auto md:w-96"
          required
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
              className="contact-st"
              required
            />
          </div>
          {/* "Email" field */}
          <div className="py-2">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="contact-st"
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
              className="contact-st"
              required
            />
          </div>
          {/* Button */}
          <div className="text-center pt-4 pb-6">
            <button className="btn-st" type="submit">
              {props.name}
            </button>
          </div>
        </form>
      </FadeIn>
      <div className="bg-dark-blue text-white text-md flex justify-center items-center pt-10">
        <HiArrowCircleUp className="text-6xl" onClick={returnTop} />
      </div>
    </div>
  );
}
