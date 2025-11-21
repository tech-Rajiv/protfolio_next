import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { ArrowRight, Building, Code, Dot } from "lucide-react";
import React from "react";
import Headings from "./Headings";

function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="container mx-auto max-w-5xl">
        <Headings small={"history"} big={"My Expireince"} />

        <div className="space-y-6 mt-10 md:mt-14">
          <Card className="p-6 sm:p-8 ">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <div>
                <div className="wrap flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-lg  bg-muted  flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <div className="right">
                    <h3 className="text-xl font-semibold">
                      Junior Full Stack Developer
                    </h3>
                    <p className="text-muted-foreground">Tech Solutions Inc.</p>
                  </div>
                </div>
              </div>
              <span className="text-sm text-foreground">2025 - Present</span>
            </div>
            <Separator className="my-5" />
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Led development of microservices architecture serving 1M+
                  users
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Led development of microservices architecture serving 1M+
                  users
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Mentored junior developers and conducted code reviews
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Experience;
