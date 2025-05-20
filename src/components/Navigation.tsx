
import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <header className="absolute top-0 left-0 w-full p-4 z-10">
      <nav className="mx-auto max-w-screen-xl">
        <ul className="flex gap-6 justify-center">
          <li>
            <Link 
              to="services" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-[#D6BCFA] cursor-pointer transition-colors"
            >
              Services
            </Link>
          </li>
          
          <li>
            <Link 
              to="about" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-[#D6BCFA] cursor-pointer transition-colors"
            >
              About us
            </Link>
          </li>
          
          <li>
            <Link 
              to="work" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-[#D6BCFA] cursor-pointer transition-colors"
            >
              Our work
            </Link>
          </li>
          
          <li>
            <Link 
              to="people" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-[#D6BCFA] cursor-pointer transition-colors"
            >
              People
            </Link>
          </li>
          
          <li>
            <Link 
              to="blog" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-[#D6BCFA] cursor-pointer transition-colors"
            >
              Blog & Insights
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
