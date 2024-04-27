import React from "react";
import ProjectItem from "./ProjectItem";
import { link } from "fs";
import { SECTION_NAME } from "@/components/common/common.types";

const PROJECT_DETAILS = [
  {
    name: "Sheikh International Trading Website",
    imageUrl: "/images/projects/sheikhtrading-ss.png",
    description:
      "An online platform for Sheikh International Trading, specializing in procuring imported goods. The website enables users to browse, purchase, and pre-order a wide range of products, while also providing a streamlined quotation system for personalized inquiries.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Redux.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "knex.js",
      "Objection.js",
    ],

    link: "https://www.sheikhintrading.com/",
  },
  {
    name: "Event Registration Application For A University Event",
    imageUrl: "/images/projects/marketiniac-ss.png",
    description:
      "Event registration web application for an event organized by Army IBA Institute Business & Leadership club, which made it possible for around 500 teams to register and make payment through the bKash payment gateway.",

    technologies: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],
    link: "https://marketiniac.dellly.com/",
  },
  {
    name: "Dellly Portfolio",
    imageUrl: "/images/projects/dellly-ss.png",
    description:
      "Portfolio website for a newly formed company named Dellly, which helped it to kickstarts it's journey. The website showcases the details about the company and it's works.",
    technologies: ["JavaScript", "React.js", "Tailwind CSS"],
    link: "https://dellly.com/",
  },
];

const Projects = () => {
  const content = PROJECT_DETAILS?.map((item) => (
    <ProjectItem key={item?.name} project={item} />
  ));

  return (
    <section id={SECTION_NAME.PROJECTS} className="section mb-20 lg:mx-6">
      <h2 className="tracking-wider text-lg font-bold mb-2 md:mb-3 lg:px-4">PROJECTS</h2>
      <div className="flex flex-col gap-10 lg:gap-2">
        {/* card one */}
        {content}
      </div>
    </section>
  );
};

export default Projects;
