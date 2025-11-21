"use client";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import React, { useState } from "react";

function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };
  return (
    <nav className="fixed top-0 w-full  md:py-2 bg-background/80 backdrop-blur-sm shadow z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-semibold">RM</span>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-primary000 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className=" hover:text-primary transition-colors"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("experience")}
              className=" hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className=" hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-8 w-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px]">
                <div className="flex flex-col gap-6 mt-8">
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-lg hover:text-primary transition-colors text-left"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-lg hover:text-primary transition-colors text-left"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("education")}
                    className="text-lg hover:text-primary transition-colors text-left"
                  >
                    Education
                  </button>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="text-lg hover:text-primary transition-colors text-left"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-lg hover:text-primary transition-colors text-left"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-lg hover:text-primary transition-colors text-left"
                  >
                    Contact
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
