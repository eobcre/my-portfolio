import { useState } from "react";
// React-scroll
import { Link } from "react-scroll";
// Icons
import Logo from "../img/logo.svg";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const toggle = () => setNavbar(!navbar);
  const hide = () => setNavbar(false);
  const show = () => setNavbar(true);

  return (
    <nav className="fixed top-0">
      <div className="w-screen bg-dark-blue absolute z-10 justify-between px-4 mx-auto md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="./">
              <img src={Logo} alt="Logo" width="40" height="40" />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none"
                onClick={toggle}
              >
                {navbar ? (
                  <HiX className="text-4xl" /> // Close icon
                ) : (
                  <HiMenuAlt3 className="text-4xl" /> // Open icon
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-8 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white text-center tracking-wider hover:text-light-blue md:text-lg">
                <Link
                  activeClass="active"
                  to="AppAbout"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={toggle}
                  onBlur={hide}
                  onFocus={show}
                >
                  About
                </Link>
              </li>
              <li className="text-white text-center tracking-wide hover:text-light-blue md:text-lg">
                <Link
                  activeClass="active"
                  to="AppProjects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={toggle}
                  onBlur={hide}
                  onFocus={show}
                >
                  Projects
                </Link>
              </li>
              <li className="text-white text-center tracking-wider hover:text-light-blue md:text-lg">
                <Link
                  activeClass="active"
                  to="AppContact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={toggle}
                  onBlur={hide}
                  onFocus={show}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
