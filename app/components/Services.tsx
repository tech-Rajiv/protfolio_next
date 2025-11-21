import {
  Briefcase,
  Code,
  Database,
  MonitorCog,
  Plane,
  Rocket,
} from "lucide-react";
import React from "react";
import Skills from "./Skills";

function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-4 ">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <div className="w-16 h-1 bg-foreground mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80  max-w-2xl mx-auto">
            Crafting digital experiences through code and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-top mb-10">
          <div className="space-y-6 md:space-y-6">
            <div className="rounded-2xl p-6 border hover:shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg  bg-muted  flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold  mb-2">Development</h3>
                  <p className="text-primary/80  text-sm">
                    Developing web applications, user-friendly interfaces with a
                    focus on accessibility and modern solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-6 border hover:shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg  bg-muted  flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold  mb-2">
                    API Integration & Backend Services
                  </h3>
                  <p className="text-primary/80  text-sm">
                    Building secure, scalable backend systems and integrating
                    third-party APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl p-6 border hover:shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg  bg-muted  flex items-center justify-center flex-shrink-0">
                  {/* <Code className="w-6 h-6" /> */}
                  <MonitorCog className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold  mb-2">
                    Maintenance & Support
                  </h3>
                  <p className="text-primary/80  text-sm">
                    Ongoing updates, quick bug fixes, and long-term website
                    support.
                  </p>
                </div>
              </div>
            </div>

            <div className=" rounded-2xl p-6 border hover:shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-muted  flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Performance Optimization
                  </h3>
                  <p className="text-primary/80 text-sm">
                    Improving page speed, SEO performance, and overall site
                    efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Skills />
      </div>
    </section>
  );
}

export default Services;
