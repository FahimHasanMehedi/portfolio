import RedirectIcon from "@/components/common/icons/RedirectIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  project: {
    name: string;
    imageUrl: string;
    description: string;
    technologies: string[];
    link: string;
  };
}

const ProjectItem = ({ project }: Props) => {
  const { name, imageUrl, description, technologies, link } = project || {};

  const technologiesContent = technologies?.map((item) => {
    return (
      <span
        key={item}
        className="bg-primary bg-opacity-30 text-accent text-xs font-bold px-3 py-[2px] rounded-sm"
      >
        {item}
      </span>
    );
  });

  return (
    <div className="flex gap-4 flex-col md:flex-row items-start lg:hover:bg-secondary lg:hover:scale-110 lg:hover:shadow-sm lg:hover:shadow-black/60 border border-transparent lg:hover:border-black/60 lg:p-4 rounded-sm group transition-all cursor-default">
      <div className="order-1 md:order-0 md:w-[30%]">
        <div className="relative w-72 md:w-full aspect-[1.81] top-[5px]">
          <Image
            src={imageUrl}
            fill
            alt="Sheikh international trading"
            className="rounded-sm shadow-sm shadow-accent"
          />
        </div>
      </div>

      <div className="order-0 md:order-1 md:w-[70%]">
        <Link href={link} target="_blank" className="flex gap-1 items-center">
          <span className="text-primary text-xs">Live website</span>
          <span>
            <RedirectIcon className="w-2 h-2 fill-primary" />
          </span>
        </Link>
        <Link
          href={link}
          target="_blank"
          className="flex items-center gap-2 hover:cursor-pointer"
        >
          <h4 className="md:text-lg font-medium transition-all group-hover:text-primary">
            <span>{name} </span>
          </h4>
          <span></span>
        </Link>
        <p className="text-xs text-shades mb-2">Affiliated with Dellly</p>

        <p className="text-sm text-shades mb-2 text-left">{description}</p>

        <div className="text-sm overflow-hidden">
          <div className="flex items-center gap-2 flex-wrap">
            {technologiesContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
