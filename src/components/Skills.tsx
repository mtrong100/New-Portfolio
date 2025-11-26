const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 80 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 85 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 },
      ],
    },
  ];

  const getLevelColor = (level: number) => {
    if (level >= 90) return "from-green-400 to-teal-400";
    if (level >= 80) return "from-blue-400 to-cyan-400";
    if (level >= 70) return "from-purple-400 to-blue-400";
    return "from-gray-400 to-gray-500";
  };

  const getLevelLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-primary border-b border-border pb-2">
                {category.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="text-foreground font-semibold text-lg">
                          {skill.name}
                        </span>
                        <div className="text-right">
                          <div
                            className={`text-sm font-bold bg-gradient-to-r ${getLevelColor(
                              skill.level
                            )} bg-clip-text text-transparent`}
                          >
                            {skill.level}%
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {getLevelLabel(skill.level)}
                          </div>
                        </div>
                      </div>

                      {/* Dots indicator */}
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <div
                            key={dot}
                            className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                              dot <= Math.ceil(skill.level / 20)
                                ? `bg-gradient-to-r ${getLevelColor(
                                    skill.level
                                  )}`
                                : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills cloud for visual interest */}
        <div className="mt-16 p-8 bg-card border border-border rounded-xl">
          <h3 className="text-xl font-bold text-primary mb-6 text-center">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories
              .flatMap((category) => category.skills)
              .sort((a, b) => b.level - a.level)
              .map((skill, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full border font-medium transition-all duration-300 hover:scale-105 ${
                    skill.level >= 90
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : skill.level >= 80
                      ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                      : "bg-muted border-border text-foreground"
                  }`}
                >
                  {skill.name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
