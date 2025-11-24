import React from "react";
import { Button } from "@/components/ui/button";
import {
  BriefcaseBusiness,
  Github,
  Instagram,
  Send,
  Twitter,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Hero() {
  return (
    <section
      id="home"
      className="bg-background dark:bg-gray-950 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 flex items-center"
    >
      <div className="max-w-xl mx-auto w-full">
        {/* Availability Badge */}
        <div className="flex justify-center mb-5">
          <Badge className="flex items-center gap-2 px-4 py-1.5 shadow-sm">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            Available for work
          </Badge>
        </div>

        <div className="flex flex-col items-start">
          {/* Profile Card */}
          <div className="w-full rounded-2xl p-2 sm:p-5 bg-muted/50 dark:bg-muted/40 backdrop-blur-sm border border-border/40 shadow-sm flex items-center gap-5">
            {/* Profile Image */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shadow-md border border-border/40">
              <img
                src="js.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & Role */}
            <div className="flex flex-col gap-1.5">
              <p className=" text-muted-foreground font-medium">
                Hey, I'm{" "}
                <span className="text-foreground font-semibold">
                  Lorem ipsum
                </span>
              </p>
              <h2 className="text-foreground/90 dark:text-white font-semibold text-lg sm:text-2xl lg:text-3xl">
                Full-Stack Developer
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-base  sm:text-lg text-muted-foreground leading-relaxed mt-8 px-2">
            Surat based Full stack web developer, I build scalable,
            high-performance web applications with clean architecture and
            intuitive user experiences.
          </p>

          {/* Buttons */}
          <div className="flex w-full justify-center items-center gap-3 mt-10">
            <Button
              size="lg"
              className="px-3 sm:px-6  py-3 text-base font-semibold bg-primary hover:bg-primary/90 shadow-sm hover:shadow-lg transition-all gap-2"
            >
              Hire Me
              <BriefcaseBusiness className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-3 sm:px-6 py-3 text-base font-semibold border-primary text-primary hover:bg-primary/10 hover:shadow-md transition-all gap-2"
            >
              Message Me
              <Send className="w-5 h-5" />
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center w-full items-center gap-6 mt-8">
            {[
              { href: "https://github.com/rajivmishra", icon: Github },
              { href: "https://twitter.com/rajivmishra", icon: Twitter },
              {
                href: "https://www.instagram.com/rajivmishra",
                icon: Instagram,
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-all duration-200 hover:scale-110"
              >
                <s.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
