import { Briefcase, Code } from "lucide-react";
import React from "react";

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

        <div className="grid md:grid-cols-2 gap-12 items-top mb-16">
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

          {/* <Education /> */}

          <div className="space-y-6">
            <div className="rounded-2xl p-6 border border-slate-200 ">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg  bg-muted  flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold  mb-2">Development</h3>
                  <p className="text-primary/80  text-sm">
                    Expert in building scalable web applications with modern
                    technologies and best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className=" rounded-2xl p-6 border border-slate-2  00 ">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-muted  flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Professional</h3>
                  <p className="text-primary/80 text-sm">
                    Collaborated with diverse teams to deliver high-quality
                    solutions on time and within budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-muted rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold  mb-2">5+</div>
            <p className="text-primary/80 text-sm">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold  mb-2">1+</div>
            <p className="text-primary/80  text-sm">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">3+</div>
            <p className="text-primary/80  text-sm">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold  mb-2">10+</div>
            <p className="text-primary/80  text-sm">Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
