import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";
import React from "react";
import Headings from "./Headings";

function Skills() {
  return (
    <div className="wrapper py-16  md:py-20">
      <Headings small={"skills"} big={"My Tech-Stack"} />
      <div className="wrapper max-w-5xl mx-auto flex flex-col gap-5 px-4 mt-10 md:mt-14">
        <div className="bg-muted/50 rounded-2xl p-4 md:p-6">
          <h3 className="text-xl font-semibold mb-4 mt-5 text-primary flex items-center">
            <span className=""></span>
            Frontend & Stacks
          </h3>
          <p className="text-foreground/80 text-sm mb-5">
            Expertise in building responsive, modern user interfaces. Focused on
            performance optimization and scalable component architecture.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge>Html</Badge>
            <Badge>Css / Tailwind CSS</Badge>
            <Badge>ShadCn</Badge>
            <Badge>Javascript</Badge>
            <Badge>ReactJs</Badge>
            <Badge>Next.js (App Router)</Badge>
          </div>
        </div>
        <div className="bg-muted/50 rounded-2xl p-4 md:p-6">
          <h3 className="text-xl font-semibold mb-4 mt-5 text-primary flex items-center">
            <span className=""></span>
            Backend & Stacks
          </h3>
          <p className="text-foreground/80 text-sm mb-5">
            Skilled in developing robust, RESTful APIs and managing data using
            relational and non-relational databases for persistent, secure
            application logic.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge>Node.js</Badge>
            <Badge>Express.js</Badge>
            <Badge>Rest APIs</Badge>
            <Badge>Reddis</Badge>
            <Badge>PostgreSQL</Badge>
            <Badge>MongoDB</Badge>
            <Badge>Vercel</Badge>
            <Badge>Render</Badge>
          </div>
        </div>
        <p className="text-muted-foreground text-center mt-5">
          and much more...
        </p>
      </div>
    </div>
  );
}

export default Skills;
