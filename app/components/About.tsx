import { Briefcase, Code } from "lucide-react";
import React from "react";
import MoreView from "./MoreView";
import Education from "./Education";

function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 ">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-foreground mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80  max-w-2xl mx-auto">
            Crafting digital experiences through code and creativity
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-top mb-10">
          <div>
            <p className="text-primary/80  text-base md:text-lg leading-relaxed mb-6">
              I'm a passionate fullstack developer with a keen eye for design
              and a love for solving complex problems. With over 5 years of
              experience in web development, I've worked on projects ranging
              from startups to enterprise-level applications.
            </p>
            <p className="text-primary/80  text-base md:text-lg leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and sharing knowledge with
              the developer community.
            </p>
          </div>

          <div className="img w-full h-full bg-muted rounded-xl"></div>
        </div>

        {/* <Education /> */}
        <MoreView name={"know more about me..."} />
      </div>
    </section>
  );
}

export default About;
