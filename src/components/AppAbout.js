import React from "react";
// Skill icons
import HTMLLogo from "../img/html.svg";
import CSSLogo from "../img/css.svg";
import SassLogo from "../img/sass.svg";
import TailwindLogo from "../img/tailwind.svg";
import JSLogo from "../img/js.svg";
import PythonLogo from "../img/python.svg";
import NodeJSLogo from "../img/node-js.svg";
import ReactLogo from "../img/react.svg";
import GitHubLogo from "../img/github.svg";
import GitLogo from "../img/git.svg";
import VSLogo from "../img/vs.svg";
import RLogo from "../img/r.svg";

const AppAbout = (props) => {
  return (
    <div className="h-auto bg-dark-blue text-white pb-10">
      <main className="mx-auto w-4/5 md:w-3/5">
        {/* Title */}
        <h1 className="text-4xl font-bold tracking-wide pt-6 md:text-5xl animate-fade-in">
          {props.title}
        </h1>
        {/* Sub title */}
        <p className="text-3xl font-bold border-l-4 mt-20 px-3">About Me</p>
        <div className="text-white text-md pt-6 md:text-xl">
          <p className="text-white">
            Hello, my name is Emmy and I enjoy being creative.
            <br />
            My interest in development started back in 2018 when I worked for
            the game company in Japan.
            <br />
            I've had a privilege of working at :<br />
            <br />
          </p>
          <p className="text-light-blue">
            Game company, testing.
            <br />
            Navigation agency, testing and installing softwares.
            <br />
            A map designing.
            <br />
            An survey agency and developing medical surveys.
            <br />
            <br />
          </p>
          <p className="text-white">
            I've just graduated with a bachelor science of AI course and built
            web application in
            <br />
            Python working on a project with the other students as a team.
            <br />
            I'm always curious to learn more when it comes to new technologies
            and coding!
            <br />
            {/* Sub title */}
            <p className="text-3xl font-bold border-l-4 mt-20 mb-6 px-3">
              Education
            </p>
            <p>Here are technologies I've worked on :</p>
          </p>
          {/* Skill icons */}
          {/* HTML, CSS, Sass, Tailwind */}
          <div className="flex justify-center gap-3 pt-6 text-light-blue">
            <figure className="w-16 text-center">
              <img src={HTMLLogo} alt="HTML" className="text-light-blue" />
              <figcaption className="text-sm">HTML</figcaption>
            </figure>
            <figure className="w-16 text-center">
              <img src={CSSLogo} alt="CSS" />
              <figcaption className="text-sm">CSS</figcaption>
            </figure>
            <figure className="w-16 text-center">
              <img src={SassLogo} alt="Sass" />
              <figcaption className="text-sm">Sass</figcaption>
            </figure>
            <figure className="w-16 text-center">
              <img src={TailwindLogo} alt="Tailwind" />
              <figcaption className="text-sm">Tailwind</figcaption>
            </figure>
          </div>
          {/* JS, Python, Node, React */}
          <div className="flex justify-center gap-3 pt-6 text-light-blue">
            <figure className="w-16 text-center">
              <img src={JSLogo} alt="JavaScript" />
              <figcaption className="text-sm">JavaScript</figcaption>
            </figure>
            <figure className="w-16 text-center">
              <img src={PythonLogo} alt="Python" />
              <figcaption className="text-sm">Python</figcaption>
            </figure>
            <figure className="w-16 text-center">
              <img src={NodeJSLogo} alt="NodeJS" />
              <figcaption className="text-sm">Node JS</figcaption>
            </figure>
            <figure className="w-16 text-center">
              <img src={ReactLogo} alt="React" />
              <figcaption className="text-sm">React</figcaption>
            </figure>
          </div>
          {/* Git, GitHub, Visual Studio, R */}
          <div className="flex justify-center gap-3 pt-6 text-light-blue">
            <figure className="w-16 text-center">
              <img src={GitLogo} alt="Git" />
              <figcaption className="text-sm">Git</figcaption>
            </figure>
            <figure className="w-16 text-center">
              <img src={GitHubLogo} alt="GitHub" />
              <figcaption className="text-sm">GitHub</figcaption>
            </figure>
            <figure className="w-16 text-center">
              <img src={VSLogo} alt="VS" />
              <figcaption className="text-sm">Visual Studio</figcaption>
            </figure>
            <figure className="w-16 text-center">
              <img src={RLogo} alt="R" />
              <figcaption className="text-sm">R</figcaption>
            </figure>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppAbout;
