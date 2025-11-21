import { GraduationCap } from "lucide-react";
import React from "react";

function DegreeCard({ name, collageName, year }) {
  return (
    <div className="intro bg-background border rounded-xl p-4 sm:p-5 ">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
        {/* Left Side: Degree, College, Description */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg  bg-muted  flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-medium">{name}</h3>
            <p className="text-primary/80 text-sm">{collageName}</p>
          </div>
        </div>
        {/* Right Side: Date Range - Emphasized and Aligned */}
        <div className="flex-shrink-0 text-sm font-bold text-right sm:text-left text-primary pt-1 sm:pt-0 ">
          {year}
        </div>
      </div>
    </div>
  );
}

export default DegreeCard;
