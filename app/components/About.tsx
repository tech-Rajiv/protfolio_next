import { Briefcase, Code, GraduationCap } from "lucide-react";
import React from "react";
import MoreView from "./MoreView";
import Education from "./Education";
import Headings from "./Headings";
import DegreeCard from "./DegreeCard";

function About() {
  return (
    <section id="about" className="py-16 md:py-20  bg-muted/50">
      <div className="max-w-5xl mx-auto px-4 py-5">
        <Headings small={"know me"} big={"About Me"} />
        <div className="wrapper flex flex-col gap-5 leading-relaxed mt-10 md:mt-14">
          <div className="text-muted-foreground  flex-grow text-base md:text-lg ">
            My expertise lies in bridging the gap between elegant front-end
            interfaces (React, Next.js) and robust back-end systems (Node.js,
            Express, SQL/NoSQL databases).
          </div>
          <div className="text-muted-foreground mb-4 flex-grow text-base md:text-lg ">
            I am committed to clean code architecture, performance optimization,
            and continuous learner.
          </div>
          <DegreeCard
            name={" Master of Computer Applications (MCA)"}
            collageName={"Vidyadeep University, Anita"}
            year={"2024-2026"}
          />
          <DegreeCard
            name={" Bachleors of Computer Applications (BCA)"}
            collageName={"Veer Narmad South Gujarat University, Bharuch"}
            year={"2020-2023"}
          />
        </div>
      </div>
      <MoreView name={"Know more"} />
    </section>
  );
}

export default About;
