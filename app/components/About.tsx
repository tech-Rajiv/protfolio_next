import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";

function About() {
  return (
    <section
      id="about"
      className="py-20 container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col items-start gap-3 mb-8">
        <Badge
          variant="outline"
          className="flex gap-2 items-center justify-center text-md"
        >
          <ArrowRight size={16} strokeWidth={1.75} color="red" />
          About me?
        </Badge>
      </div>
      <p className="text-lg leading-relaxed text-muted-foreground mb-4">
        I'm a passionate full stack developer with expertise in building modern
        web applications. I love turning complex problems into simple,
        beautiful, and intuitive solutions.
      </p>

      <div className="space-y-6">
        <Card className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
            <h3 className="text-xl font-semibold">
              Masters in Computer Application
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
              Bachelor of Technology in Computer Science
            </h3>
            <span className="text-sm text-muted-foreground">2016 - 2018</span>
          </div>
          <p className="text-muted-foreground mb-2">Delhi Public School</p>
          <p className="text-sm text-muted-foreground">Percentage: 95%</p>
        </Card>
      </div>

      {/* <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-start gap-3 mb-8">
          <Badge
            variant="outline"
            className="flex gap-2 items-center justify-center text-sm"
          >
            <ArrowRight size={16} strokeWidth={1.75} color="red" />
            About me?
          </Badge>
        </div>
        <Card className="p-6 sm:p-8">
          <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            I'm a passionate full stack developer with expertise in building
            modern web applications. I love turning complex problems into
            simple, beautiful, and intuitive solutions.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            With a strong foundation in both frontend and backend technologies,
            I create seamless user experiences backed by robust and scalable
            architectures.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">MongoDB</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">AWS</Badge>
            </div>
          </div>
        </Card>
      </div> */}
    </section>
  );
}

export default About;
