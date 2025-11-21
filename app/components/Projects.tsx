import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import React from "react";
import MoreView from "./MoreView";

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <div className="w-16 h-1 bg-foreground mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80  max-w-2xl mx-auto">
            Crafting digital experiences through code and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card className="p-3 flex flex-col hover:shadow">
            <div className="img w-full h-48 p-2 bg-muted rounded-md mb-5"></div>
            <h3 className="text-xl font-semibold mb-3">E-Commerce Platform</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              A full-featured e-commerce platform with payment integration,
              inventory management, and admin dashboard.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">Stripe</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-1" />
                Code
              </Button>
              <Button size="sm">
                <ExternalLink className="h-4 w-4 mr-1" />
                Live
              </Button>
            </div>
          </Card>
          <Card className="p-3 flex flex-col hover:shadow">
            <div className="img w-full h-48 p-2 bg-muted rounded-md mb-5"></div>
            <h3 className="text-xl font-semibold mb-3">E-Commerce Platform</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              A full-featured e-commerce platform with payment integration,
              inventory management, and admin dashboard.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">Stripe</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-1" />
                Code
              </Button>
              <Button size="sm">
                <ExternalLink className="h-4 w-4 mr-1" />
                Live
              </Button>
            </div>
          </Card>
          <Card className="p-3 flex flex-col hover:shadow">
            <div className="img w-full h-48 p-2 bg-muted rounded-md mb-5"></div>
            <h3 className="text-xl font-semibold mb-3">E-Commerce Platform</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              A full-featured e-commerce platform with payment integration,
              inventory management, and admin dashboard.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">Stripe</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-1" />
                Code
              </Button>
              <Button size="sm">
                <ExternalLink className="h-4 w-4 mr-1" />
                Live
              </Button>
            </div>
          </Card>
        </div>
        <MoreView name={"view more projects..."} />
      </div>
    </section>
  );
}

export default Projects;
