import { SECTION_NAME } from "@/components/common/common.types";
import RedirectIcon from "@/components/common/icons/RedirectIcon";
import Link from "next/link";
import React from "react";

const EXPERIENCES = [
  {
    title: "Full-Stack Developer",
    companyName: "Dellly",
    description:
      "Dellly is a company in Bangladesh that provides custom web application development solutions to its customers. Throughout my time there, I successfully completed several projects as a core member of the development team.",
    from: "AUG 2023",
    to: "MAR 2024",
    companyWebsite: "https://dellly.com/",
  },
];

const Experience = () => {
  const experiencesContent = EXPERIENCES?.map((item) => {
    return (
      <div className="flex flex-col md:flex-row md:gap-4 lg:p-4 lg:hover:bg-secondary lg:hover:scale-110 lg:hover:shadow-sm lg:hover:shadow-black/60 border border-transparent lg:hover:border-black/60 transition">
        <div className="w-full md:w-[30%]">
          <span className="text-xs md:text-sm text-shades">
            {item?.from} &#8211; {item?.to}
          </span>
        </div>
        <div className="w-full md:w-[70%]">
          <Link
            href={item?.companyWebsite}
            target="_blank"
            className="flex gap-1 items-center"
          >
            <span className="text-primary text-xs">Company website</span>
            <span>
              <RedirectIcon className="w-2 h-2 fill-primary" />
            </span>
          </Link>
          <Link href={item?.companyWebsite} className="text-lg font-medium mb-2">
            {item?.title} &#183; {item?.companyName}
          </Link>
          <p className="text-sm text-shades">{item?.description}</p>
        </div>
      </div>
    );
  });

  return (
    <section id={SECTION_NAME.EXPERIENCE} className="section mb-20 lg:mx-6">
      <h2 className="tracking-wider text-lg font-extrabold mb-2 md:mb-2 lg:px-4">
        EXPERIENCE
      </h2>
      <div className="flex flex-col gap-4">
        {/* card one */}
        {experiencesContent}
      </div>
    </section>
  );
};

export default Experience;
