import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      contacts
      {/* <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Mail className="h-6 w-6" />
          <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
        </div>
        <Card className="p-6 sm:p-8">
          <p className="text-lg text-muted-foreground mb-8 text-center">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="mailto:rajiv.mishra@example.com"
              className="flex flex-col items-center p-6 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <Mail className="h-8 w-8 mb-3" />
              <span className="font-semibold mb-1">Email</span>
              <span className="text-sm text-muted-foreground text-center">
                rajiv.mishra@example.com
              </span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <Github className="h-8 w-8 mb-3" />
              <span className="font-semibold mb-1">GitHub</span>
              <span className="text-sm text-muted-foreground">
                @rajivmishra
              </span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <Linkedin className="h-8 w-8 mb-3" />
              <span className="font-semibold mb-1">LinkedIn</span>
              <span className="text-sm text-muted-foreground">
                Rajiv Mishra
              </span>
            </a>
          </div>
        </Card>
      </div> */}
    </section>
  );
}

export default Contact;
