import React from "react";
import Fade from "react-reveal/Fade";
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
      <div className="mx-auto w-4/5 md:w-3/5">
        <Fade bottom duration={1500}>
          <h1 className="text-4xl font-bold tracking-wide pt-6 md:text-5xl">
            {props.title}
          </h1>
        </Fade>
        <Fade bottom duration={1500}>
          <h2 className="sub-st">About Me</h2>
        </Fade>
        <div className="text-md md:text-xl">
          <Fade bottom duration={1500}>
            <p>
              Hello, my name is Emmy and I enjoy being creative. My interest in
              development started back in 2018 when I worked at the game company
              in Japan. I've had a privilege of working at game company -
              testing, navigation agency - testing and installing softwares, a
              map designing, an survey agency - developing medical surveys.
              Please have a look on my resume, there are more details available.
            </p>
            <p className="py-6">
              I've graduated with a bachelor science of AI course. I built web
              application Python working on a project with the other students as
              a team. I'm always curious to learn more when it comes to new
              technologies and coding!
            </p>
            <h2 className="sub-st">Education</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
              corrupti alias ab corporis officia. Aperiam, impedit adipisci ut
              ad quasi ab totam accusantium, doloremque ex nihil placeat optio
              dolorum in? Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Nihil minima repudiandae ratione, consectetur consequuntur
              placeat necessitatibus excepturi voluptate deserunt eius magnam
              maxime tenetur officia laborum ut distinctio quia sunt ex. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              numquam aliquid sit recusandae commodi aspernatur maiores? Iste,
              rem fugit. Harum ullam esse possimus consequatur consectetur modi
              fugit neque doloremque est. Here are technologies I've worked on :
            </p>
            <div className="grid grid-cols-5 pt-7">
              <figure className="fig-st">
                <img src={JSLogo} alt="JS" />
                <figcaption className="text-sm">JavaScript</figcaption>
              </figure>
              <figure className="fig-st">
                <img src={PythonLogo} alt="Python" />
                <figcaption className="text-sm">Python</figcaption>
              </figure>
              <figure className="fig-st">
                <img src={HTMLLogo} alt="HTML" />
                <figcaption className="text-sm">HTML</figcaption>
              </figure>
              <figure className="fig-st">
                <img src={CSSLogo} alt="CSS" />
                <figcaption className="text-sm">CSS</figcaption>
              </figure>
              <figure className="fig-st">
                <img src={SassLogo} alt="Sass" />
                <figcaption className="text-sm">Sass</figcaption>
              </figure>
              <figure className="fig-st">
                <img src={TailwindLogo} alt="Tailwind" />
                <figcaption className="text-sm">Tailwind</figcaption>
              </figure>
              <figure className="fig-st">
                <img src={CSSLogo} alt="CSS" />
                <figcaption className="text-sm">CSS</figcaption>
              </figure>
              <figure className="fig-st">
                <img src={NodeJSLogo} alt="NodeJS" />
                <figcaption className="text-sm">Node JS</figcaption>
              </figure>
              <figure className="fig-st">
                <img src={ReactLogo} alt="React" />
                <figcaption className="text-sm">React</figcaption>
              </figure>
              <figure className="fig-st">
                <img src={GitLogo} alt="Git" />
                <figcaption className="text-sm">Git</figcaption>
              </figure>
              <figure className="fig-st">
                <img src={GitHubLogo} alt="GitHub" />
                <figcaption className="text-sm">GitHub</figcaption>
              </figure>
              <figure className="fig-st">
                <img src={VSLogo} alt="VS" />
                <figcaption className="text-sm">Visual Studio</figcaption>
              </figure>
              <figure className="fig-st">
                <img src={RLogo} alt="R" />
                <figcaption className="text-sm">R</figcaption>
              </figure>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AppAbout;
