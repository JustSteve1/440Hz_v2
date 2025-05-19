
import React from "react";
import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  return (
    <header className="absolute top-0 left-0 w-full p-4 z-10">
      <NavigationMenu className="mx-auto max-w-screen-xl">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavLink 
              to="/services" 
              className={({ isActive }) => `text-white hover:text-[#D6BCFA] transition-colors ${isActive ? "font-bold" : ""}`}
            >
              Services
            </NavLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `text-white hover:text-[#D6BCFA] transition-colors ${isActive ? "font-bold" : ""}`}
            >
              About us
            </NavLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavLink 
              to="/work" 
              className={({ isActive }) => `text-white hover:text-[#D6BCFA] transition-colors ${isActive ? "font-bold" : ""}`}
            >
              Our work
            </NavLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavLink 
              to="/people" 
              className={({ isActive }) => `text-white hover:text-[#D6BCFA] transition-colors ${isActive ? "font-bold" : ""}`}
            >
              People
            </NavLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => `text-white hover:text-[#D6BCFA] transition-colors ${isActive ? "font-bold" : ""}`}
            >
              Blog & Insights
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navigation;
