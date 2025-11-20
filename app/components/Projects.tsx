import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      projects
      {/* <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Badge
            variant="outline"
            className="flex gap-2 items-center justify-center text-sm"
          >
            <ArrowRight size={16} strokeWidth={1.75} color="red" />
            Projects...
          </Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <Card className="p-5 flex flex-col">
            <div className="img w-full h-60 p-2 bg-gray-100 rounded-md mb-5"></div>
            <h3 className="text-xl font-semibold mb-3">E-Commerce Platform</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              A full-featured e-commerce platform with payment integration,
              inventory management, and admin dashboard.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">PostgreSQL</Badge>
              <Badge variant="outline">Stripe</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-1" />
                Code
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-1" />
                Live
              </Button>
            </div>
          </Card>
          <Card className="p-5 flex flex-col">
            <div className="img w-full h-60 p-2 bg-gray-100 rounded-md mb-5"></div>
            <h3 className="text-xl font-semibold mb-3">E-Commerce Platform</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              A full-featured e-commerce platform with payment integration,
              inventory management, and admin dashboard.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">PostgreSQL</Badge>
              <Badge variant="outline">Stripe</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-1" />
                Code
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-1" />
                Live
              </Button>
            </div>
          </Card>
          <Card className="p-5 flex flex-col">
            <div className="img w-full h-60 p-2 bg-gray-100 rounded-md mb-5"></div>
            <h3 className="text-xl font-semibold mb-3">E-Commerce Platform</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              A full-featured e-commerce platform with payment integration,
              inventory management, and admin dashboard.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">PostgreSQL</Badge>
              <Badge variant="outline">Stripe</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-1" />
                Code
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-1" />
                Live
              </Button>
            </div>
          </Card>
          <Card className="p-5 flex flex-col">
            <div className="img w-full h-60 p-2 bg-gray-100 rounded-md mb-5"></div>
            <h3 className="text-xl font-semibold mb-3">E-Commerce Platform</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              A full-featured e-commerce platform with payment integration,
              inventory management, and admin dashboard.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">PostgreSQL</Badge>
              <Badge variant="outline">Stripe</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-1" />
                Code
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-1" />
                Live
              </Button>
            </div>
          </Card>
        </div>
      </div> */}
    </section>
  );
}

export default Projects;
