import { SECTION_NAME } from "@/components/common/common.types";
import CssIcon from "@/components/common/techStacks/CssIcon";
import DockerIcon from "@/components/common/techStacks/DockerIcon";
import ExpressIcon from "@/components/common/techStacks/ExpressIcon";
import HtmlIcon from "@/components/common/techStacks/HtmlIcon";
import JavascriptIcon from "@/components/common/techStacks/JavascriptIcon";
import MongoIcon from "@/components/common/techStacks/MongoIcon";
import NextIcon from "@/components/common/techStacks/NextIcon";
import NodeIcon from "@/components/common/techStacks/NodeIcon";
import PostgresIcon from "@/components/common/techStacks/PostgresIcon";
import PostmanIcon from "@/components/common/techStacks/PostmanIcon";
import ReactIcon from "@/components/common/techStacks/ReactIcon";
import RedisIcon from "@/components/common/techStacks/RedisIcon";
import ReduxIcon from "@/components/common/techStacks/ReduxIcon";
import TailwindIcon from "@/components/common/techStacks/TailwindIcon";
import React from "react";

const TECHNOLOGIES = [
  {
    icon: <HtmlIcon className="h-16 w-16" />,
  },
  {
    icon: <CssIcon className="h-16 w-16" />,
  },
  {
    icon: <JavascriptIcon className="h-16 w-16" />,
  },
  {
    icon: <TailwindIcon className="h-16 w-16" />,
  },
  {
    icon: <ReactIcon className="h-16 w-16" />,
  },
  {
    icon: <NextIcon className="h-16 w-16" />,
  },
  {
    icon: <ReduxIcon className="h-16 w-16" />,
  },
  {
    icon: <NodeIcon className="h-16 w-16" />,
  },
  {
    icon: <ExpressIcon className="h-16 w-16" />,
  },
  {
    icon: <MongoIcon className="h-16 w-16" />,
  },
  {
    icon: <PostgresIcon className="h-16 w-16" />,
  },
  {
    icon: <RedisIcon className="h-16 w-16" />,
  },
  {
    icon: <PostmanIcon className="h-16 w-16" />,
  },
  {
    icon: <DockerIcon className="h-16 w-16" />,
  },
];

const TechnlogyStack = () => {
  const technologiesContent = TECHNOLOGIES.map((item, index) => {
    return <span key={index}>{item?.icon}</span>;
  });

  return (
    <section
      id={SECTION_NAME.TECHNOLOGY_STACK}
      className="section mb-20 lg:mx-10 w-full"
    >
      <h2 className="tracking-wider text-lg font-extrabold mb-4 md:mb-8">
        TECHNOLOGIES I WORKED WITH
      </h2>
      <div className="flex gap-6 flex-wrap">{technologiesContent}</div>
    </section>
  );
};

export default TechnlogyStack;
