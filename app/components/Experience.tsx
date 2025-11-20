import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { ArrowRight } from "lucide-react";
import React from "react";

function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experinces</h2>
          <div className="w-16 h-1 bg-foreground mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80  max-w-2xl mx-auto">
            Crafting digital experiences through code and creativity
          </p>
        </div>

        <div className="space-y-6">
          <Card className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <div>
                <h3 className="text-xl font-semibold">
                  Senior Full Stack Developer
                </h3>
                <p className="text-muted-foreground">Tech Solutions Inc.</p>
              </div>
              <span className="text-sm text-foreground">2023 - Present</span>
            </div>
            <Separator className="my-4" />
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
                  Mentored junior developers and conducted code reviews
                </span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <div>
                <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                <p className="text-muted-foreground">
                  Digital Innovations Ltd.
                </p>
              </div>
              <span className="text-sm text-foreground">2022 - 2023</span>
            </div>
            <Separator className="my-4" />
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Developed and maintained 5+ client-facing web applications
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Implemented RESTful APIs and integrated third-party services
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
