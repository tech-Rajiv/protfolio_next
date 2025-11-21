import { Badge } from "@/components/ui/badge";
import React from "react";

function Skills() {
  return (
    <div className="wrapper flex flex-col gap-5">
      {/* <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
        <span className=" text-primary"></span>
        My Tech-Stacks
      </h2> */}
      <div className="bg-muted/50 rounded-2xl p-4 md:p-6">
        <h3 className="text-xl font-semibold mb-3 mt-5 text-primary flex items-center">
          <span className=""></span>
          Frontend & Stacks
        </h3>
        <p className="text-foreground/80 text-sm mb-4">
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
        <h3 className="text-xl font-semibold mb-3 mt-6 text-primary flex items-center">
          <span className=""></span>
          Backend & Stacks
        </h3>
        <p className="text-foreground/80 text-sm mb-4">
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
      <p className="text-primary/80 text-sm px-2">
        I possess comprehensive skills across the entire software development
        lifecycle, from foundational HTML/CSS to advanced backend development
        and scalable deployment solutions.
      </p>
    </div>
  );
}

export default Skills;
