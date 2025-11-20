import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";

function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      eductaion
      {/* <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-start gap-3 mb-8">
          <Badge
            variant="outline"
            className="flex gap-2 items-center justify-center text-sm"
          >
            <ArrowRight size={16} strokeWidth={1.75} color="red" />
            Education?
          </Badge>
          <h2 className="text-xl  md:text-2xl leading-relaxed font-medium text-muted-foreground">
            My qualifications are...
          </h2>
        </div>
        <div className="space-y-6">
          <Card className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <h3 className="text-xl font-semibold">
                Bachelor of Technology in Computer Science
              </h3>
              <span className="text-sm text-muted-foreground">2018 - 2022</span>
            </div>
            <p className="text-muted-foreground mb-2">
              Indian Institute of Technology
            </p>
            <p className="text-sm text-muted-foreground">GPA: 8.5/10</p>
          </Card>
          <Card className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <h3 className="text-xl font-semibold">
                Higher Secondary Education
              </h3>
              <span className="text-sm text-muted-foreground">2016 - 2018</span>
            </div>
            <p className="text-muted-foreground mb-2">Delhi Public School</p>
            <p className="text-sm text-muted-foreground">Percentage: 95%</p>
          </Card>
        </div>
      </div> */}
    </section>
  );
}

export default Education;
