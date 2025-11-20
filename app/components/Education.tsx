import { Code, GraduationCap } from "lucide-react";
import React from "react";

function Education() {
  return (
    <section id="education" className="">
      <div className="space-y-6">
        <div className="rounded-2xl p-5 border ">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="text-lg font-semibold ">
                Master of Computer Science
              </h4>
              <p className=" text-sm mt-1">University Name</p>
            </div>
            <span className="text-sm bg-muted  px-3 py-1 rounded-full">
              2021 - 2023
            </span>
          </div>
          <p className="text-primary/60 text-sm leading-relaxed">
            Advanced coursework in distributed systems, machine learning, and
            cloud computing.
          </p>
        </div>
        <div className="rounded-2xl p-5 border ">
          <div className="flex gap-5 sm:gap-10  justify-between items-start mb-3">
            <div>
              <h4 className="text-lg font-semibold ">
                Master of Computer Science
              </h4>
              <p className=" text-sm mt-1">University Name</p>
            </div>
            <span className="text-sm bg-muted  px-3 py-1 rounded-full">
              2021 - 2023
            </span>
          </div>
          <p className="text-primary/60 text-sm leading-relaxed">
            Advanced coursework in distributed systems, machine learning, and
            cloud computing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
