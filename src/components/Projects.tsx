import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";


import expenseTrackerImg from "@/assets/expense-tracker.png";
import phishShieldImg from "@/assets/phishshield.png";

const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker",
      description:
        "Built a responsive web app to manage personal income and expenses. Designed interactive charts for clear expense visualization.",
      techstack: "React.js, Charts",
      image: expenseTrackerImg,
      demo: "https://expense-tracker-using-react-js-pi.vercel.app/",
      code: "https://github.com/santhosh-kumar08",
    },
    {
      title: "PhishShield",
      description:
        "Built a real-time phishing detection extension to enhance web browsing security. Integrated ML-based URL analysis and Google Safe Browsing API for threat detection.",
      techstack: "JavaScript, Python (Flask), Pandas, Security",
      image: phishShieldImg,
      demo: "",
      code: "https://github.com/santhosh-kumar08/PhishShield",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16">
            Some of my recent work that I'm proud of
          </p>

          {/* ✅ Keep original card size, just center them */}
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full sm:w-[22rem] bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                    {project.demo && (
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.code && (
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-center">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-2 text-center">
                    {project.description}
                  </p>
                  <p className="text-muted-foreground text-center">
                    <strong>Tech Stack:</strong> {project.techstack}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
