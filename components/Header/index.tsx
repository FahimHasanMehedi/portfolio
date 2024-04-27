import React from "react";
import Navigation from "../Navigation";
import Image from "next/image";
import Github from "../common/icons/Github";
import RedirectIcon from "../common/icons/RedirectIcon";
import Linkedin from "../common/icons/Linkedin";

const Header = () => {
  return (
    <header className="lg:w-[35%]  pt-24 lg:sticky lg:top-0 lg:max-h-screen lg:h-screen flex flex-col gap-8 lg:pb-16 justify-between">
      <div>
        <h1 className="text-[48px] leading-[2.8rem] font-bold tracking-wide mb-3">
          Fahim Hasan Mehedi
        </h1>
        <h3 className="text-xl font-medium mb-5">Full Stack Developer</h3>
        <p className="text-sm text-shades leading-6">
          Hi there! I&apos;m a full-stack developer with a knack for turning
          ideas into functional software. I enjoy the challenge of building both
          the front-end and back-end components that power modern applications.{" "}
        </p>
      </div>

      <Navigation />

      <div className="flex items-center gap-4">
        <div className="relative w-[48px] aspect-square rounded-full overflow-hidden border">
          <Image
            src="/images/profile.webp"
            fill
            alt="Picture of Fahim Hasan Mehedi"
          />
        </div>
        <div className="flex items-center">
          <span className="mr-3">
            <Github className="w-5 h-5 text-white fill-white" />
          </span>
          <span className="text-sm mr-2">GitHub</span>
          <span>
            <RedirectIcon className="w-[10px] h-[10px] text-white fill-white" />
          </span>
        </div>

        <div className="flex items-center">
          <span className="mr-3">
            <Linkedin className="w-5 h-5 text-white fill-white" />
          </span>
          <span className="text-sm mr-2">LinkedIn</span>
          <span>
            <RedirectIcon className="w-[10px] h-[10px] text-white fill-white" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
