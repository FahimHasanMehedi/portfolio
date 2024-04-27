import { SECTION_NAME } from "@/components/common/common.types";
import React from "react";

const EDUCATION = [
  {
    degree: "Masters in Automotive Software Engineering",
    institution: "Technische Universität Chemnitz",
    location: "Chemnitz, Germany",
    from: "APR 2024",
    to: "PRESENT",
  },
  {
    degree: "Bachelors in Computer Science",
    institution: "Brac University",
    location: "Dhaka, Bangladesh",
    from: "2017",
    to: "2022",
  },
];

const Education = () => {
  const educationContent = EDUCATION?.map((item) => {
    return (
      <div className="px-4 lg:px-6 lg:ml-4 py-4 lg:py-6 bg-secondary hover:scale-110 transition-all shadow-sm shadow-black/60 rounded-sm border border-black/40">
        <div className="">
          <span className="text-xs text-shades">
            {item?.from} &#8211; {item?.to}
          </span>
          <h3 className="text-base md:text-lg font-medium">{item?.degree}</h3>
          <p className="text-sm text-accent">{item?.institution}</p>
          <p className="text-xs text-shades">{item?.location}</p>
        </div>
      </div>
    );
  });

  return (
    <section id={SECTION_NAME.EDUCATION} className="section lg:mx-6 mb-24">
      <h2 className="tracking-wider text-lg font-bold mb-4 md:mb-8 lg:px-4">EDUCATION</h2>
      <div className="flex flex-col gap-1">
        {/* card one */}
        {educationContent}
      </div>
    </section>
  );
};

export default Education;
