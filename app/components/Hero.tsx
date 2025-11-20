import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-[100vh] flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8 bg-muted/50 py-28"
    >
      <div className="top"></div>
      <div className="name flex flex-col gap-2 sm:gap-5 md:flex-row justify-center ">
        <h2 className="text-4xl md:text-6xl  font-bold">Hi, i'm Rajiv.</h2>
        <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground">
          I'm a Full Stack Developer.
        </h2>
      </div>
      <div className="links flex gap-3">
        <Button variant="secondary" size="icon">
          <Github className="h-5 w-5" />
        </Button>
        <Button variant="secondary" size="icon">
          <Linkedin className="h-5 w-5" />
        </Button>
        <Button variant="secondary" size="icon">
          <Mail className="h-5 w-5" />
        </Button>
      </div>
      {/* <div className="container mx-auto text-center">
        <div className="space-y-5">
          <div className="flex justify-center mb-5">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-gray-200">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Rajiv Mishra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Rajiv Mishra
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
            Full Stack Developer
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Building elegant solutions with modern technologies
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <div className="pt-4">
            <Button size="lg">Get In Touch</Button>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Hero;
