import Header from "@/components/Header";
import Education from "@/components/Sections/Education";
import Experience from "@/components/Sections/Experience";
import Projects from "@/components/Sections/Projects";
import TechnlogyStack from "@/components/Sections/TechnologyStack";

export default function Home() {
  return (
    <main className="text-accent max-w-[1200px] w-[90%] mx-auto">
      <div className="flex flex-col gap-4 lg:gap-16 lg:flex-row">
        {/* Name and introduction */}
        <Header />
        {/* SEctions */}
        <div className="lg:w-[65%] no-scrollbar pt-24">
          <Projects />
          <Experience />
          <TechnlogyStack />
          <Education />
          <footer className="text-[10px]">
            <p className="">
              Created by,{" "}
              <span className="text-[10px] text-primary font-medium">
                Fahim Hasan Mehedi
              </span>
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
