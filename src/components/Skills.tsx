const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML/CSS" , "Bootstrap" , "React Js"],
    },
    {
      title: "Backend",
      skills: ["Java" , "JavaScript" , "C" , "REST APIs"],
    },
    {
      title: "Tools & Others",
      skills: ["Git&Github", "Figma", "VS Code", "Intellij"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16">
            Technologies and tools I work with to build amazing products
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-secondary/50 rounded-lg px-4 py-3 text-center hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
