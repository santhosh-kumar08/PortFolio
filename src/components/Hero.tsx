import { ArrowDown, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const resumeLink = "/Santhosh_kumar_R.pdf";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Santhosh Kumar R
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Java FullStack Developer
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Aspiring Java Full Stack Developer with a focus on building dynamic, responsive, and secure web applications.
            </p>

            {/* --- Buttons --- */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* View My Work */}
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>

              {/* Get In Touch - New Styling */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white text-lg px-8 shadow-md hover:brightness-110 hover:scale-105 transition-transform duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* --- Download Resume --- */}
          <div className="mt-12">
            <a
              href={resumeLink}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 text-white text-lg px-8 shadow-lg transition-transform hover:scale-105"
              >
                <FileDown className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* --- Scroll Arrow --- */}
          <div className="mt-20 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
