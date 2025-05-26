import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="absolute top-0 left-0 w-full p-4 z-10">
      <nav className="mx-auto max-w-screen-xl">
        <ul className="flex gap-6 justify-center">
          <li>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-[#D6BCFA] cursor-pointer transition-colors"
            >
              Our Services
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-[#D6BCFA] cursor-pointer transition-colors"
            >
              About us
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-[#D6BCFA] cursor-pointer transition-colors"
            >
              Our Work
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
