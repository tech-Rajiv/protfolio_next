import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBotCover from "./components/chatbot/ChatBotCover";

// export const metadata = {
//   title: "Rajiv Mishra – Portfolio",
//   description:
//     "Full-stack developer specializing in Next.js and modern web technologies.",
//   openGraph: {
//     title: "Rajiv Mishra - full stack developer",
//     description: "Portfolio showcasing projects, experience, and contact info.",
//     url: "https://yourdomain.com",
//     images: [
//       {
//         url: "/og-image.webp",
//         width: 1200,
//         height: 630,
//       },
//     ],

//     siteName: "Rajiv Mishra Portfolio",
//     locale: "en_US",
//     type: "website",
//   },
// };

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background relative">
      <header>
        <NavBar />
      </header>
      <main className="pt-16">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <Footer />
      </footer>
      <div className="chatbot w-full  flex justify-end px-5 sm:px-20 fixed bottom-10 z-50">
        <ChatBotCover />
      </div>
    </div>
  );
}
