"use client";

import React, { useEffect, useState } from "react";
import { SECTION_NAME } from "../common/common.types";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [lastVisibleSection, setLastVisibleSection] = useState<string | null>(
    null
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setLastVisibleSection(entry.target.id);
          } else if (entry.target.id === lastVisibleSection) {
            setLastVisibleSection(null);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px" } 
    );

    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [lastVisibleSection]);

  const handleClick = (sectionName: string) => {
    setActiveSection(sectionName);

    const targetPosition = document.getElementById(sectionName);

    if (targetPosition) {
      const topOffset = targetPosition.offsetTop - window.innerHeight / 2;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:block">
      <ul className="flex flex-col gap-4">
        <li className="group transition-all duration-300 cursor-default hover:cursor-pointer">
          <button
            className="flex items-center gap-4"
            onClick={() => {
              handleClick(SECTION_NAME.PROJECTS);
            }}
          >
            <span
              className={`inline-block h-[2px] rounded-full group-hover:w-20 ${
                activeSection === SECTION_NAME.PROJECTS
                  ? "bg-accent w-20"
                  : "bg-shades w-10"
              } group-hover:bg-accent transition-all`}
            ></span>
            <span
              className={`text-xs ${
                activeSection === SECTION_NAME.PROJECTS
                  ? "text-accent"
                  : "text-shades"
              } group-hover:text-accent uppercase font-bold tracking-wider`}
            >
              Projects
            </span>
          </button>
        </li>
        <li className="group flex items-center gap-4 transition-all cursor-default hover:cursor-pointer">
          <button
            className="flex items-center gap-4"
            onClick={() => {
              handleClick(SECTION_NAME.EXPERIENCE);
            }}
          >
            <span
              className={`inline-block w-10 h-[2px] rounded-full group-hover:w-20 ${
                activeSection === SECTION_NAME.EXPERIENCE
                  ? "bg-accent w-20"
                  : "bg-shades w-10"
              } group-hover:bg-accent transition-all`}
            ></span>
            <span
              className={`text-xs ${
                activeSection === SECTION_NAME.EXPERIENCE
                  ? "text-accent"
                  : "text-shades"
              } group-hover:text-accent uppercase font-bold tracking-wider`}
            >
              Experience
            </span>
          </button>
        </li>
        <li className="group flex items-center gap-4 transition-all cursor-default hover:cursor-pointer">
          <button
            className="flex items-center gap-4"
            onClick={() => {
              handleClick(SECTION_NAME.TECHNOLOGY_STACK);
            }}
          >
            <span
              className={`inline-block w-10 h-[2px] rounded-full group-hover:w-20 ${
                activeSection === SECTION_NAME.TECHNOLOGY_STACK
                  ? "bg-accent w-20"
                  : "bg-shades w-10"
              } group-hover:bg-accent transition-all`}
            ></span>
            <span
              className={`text-xs ${
                activeSection === SECTION_NAME.TECHNOLOGY_STACK
                  ? "text-accent"
                  : "text-shades"
              } group-hover:text-accent uppercase font-bold tracking-wider`}
            >
              Technology Stack
            </span>
          </button>
        </li>
        <li className="group flex items-center gap-4 transition-all cursor-default hover:cursor-pointer">
          <button
            className="flex items-center gap-4"
            onClick={() => {
              handleClick(SECTION_NAME.EDUCATION);
            }}
          >
            <span
              className={`inline-block w-10 h-[2px] rounded-full group-hover:w-20 ${
                activeSection === SECTION_NAME.EDUCATION
                  ? "bg-accent w-20"
                  : "bg-shades w-10"
              } group-hover:bg-accent transition-all`}
            ></span>
            <span
              className={`text-xs ${
                activeSection === SECTION_NAME.EDUCATION
                  ? "text-accent"
                  : "text-shades"
              } group-hover:text-accent uppercase font-bold tracking-wider`}
            >
              Education
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
