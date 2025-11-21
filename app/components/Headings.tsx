import { Button } from "@/components/ui/button";
import { ArrowUpRight, MoveRight } from "lucide-react";
import React from "react";

type headingProps = {
  small: String;
  big: String;
};

function Headings({ small, big }: headingProps) {
  return (
    <div className="text-center pt-6 px-4 md:pt-10 md:px-6">
      {/* TOP: Contextual Label (Centered) */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="text-sm font-medium uppercase tracking-widest text-primary/70 dark:text-primary-light">
          - {small} -
        </span>
      </div>

      {/* Heading: Centered, strong typography */}
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-gray-100 leading-tight">
        {big}
      </h2>
    </div>
  );
}

export default Headings;
