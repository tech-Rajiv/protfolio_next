import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDownToLine,
  BriefcaseBusiness,
  Github,
  Instagram,
  LinkedinIcon,
  Mail,
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
          {/* <Badge className="flex items-center gap-2 px-4 py-1.5 shadow-sm">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            Available for work
          </Badge> */}
          <Badge className="flex items-center gap-2 px-4 py-1.5 shadow-sm bg-green-100 hover:bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            Available for work
          </Badge>
        </div>

        <div className="flex flex-col items-start">
          {/* Profile Card */}
          <div className="w-full rounded-2xl p-3 sm:p-5 bg-muted/50 dark:bg-muted/40 backdrop-blur-sm border border-border/40 shadow-sm flex items-center gap-3 sm:gap-5">
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
                  Lorem Ipsum
                </span>
              </p>
              <h2 className="text-foreground/90 dark:text-white font-bold text-xl sm:text-2xl lg:text-3xl">
                Full Stack Developer.
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-base text-center sm:text-start sm:text-lg text-muted-foreground leading-relaxed mt-8 px-2">
            Surat based Full stack web developer, I build scalable,
            high-performance web applications with clean architecture and
            intuitive user experiences.
          </p>

          <div className="flex flex-col sm:flex-row w-full justify-center sm:justify-start items-center gap-4 mt-8">
            <Button
              size="lg"
              className="px-6 py-3 text-base font-semibold bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all w-full gap-2 flex items-center justify-center"
            >
              Hire Me
              <BriefcaseBusiness className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-6 py-3 text-base font-semibold border-primary text-primary hover:bg-primary/10 hover:shadow-md w-full transition-all gap-2 flex items-center justify-center"
            >
              Resume
              <ArrowDownToLine className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex justify-between max-w-2xl mx-auto  items-center gap-4 mt-8">
            <Badge variant={"secondary"} className="w-10 h-10 cursor-pointer">
              <Instagram />
            </Badge>
            <Badge variant={"secondary"} className="w-10 h-10 cursor-pointer">
              <Mail />
            </Badge>
            <Badge variant={"secondary"} className="w-10 h-10 cursor-pointer">
              <Twitter />
            </Badge>
            <Badge variant={"secondary"} className="w-10 h-10 cursor-pointer">
              <LinkedinIcon />
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
