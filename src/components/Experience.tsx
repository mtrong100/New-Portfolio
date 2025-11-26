import { Briefcase, GraduationCap, Star, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud infrastructure. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Led team of 5 developers",
        "Improved performance by 40%",
        "Implemented CI/CD pipeline",
      ],
    },
    {
      type: "work",
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects. Collaborated with design team to create responsive, user-friendly interfaces.",
      achievements: [
        "Delivered 20+ projects",
        "Maintained 99.9% uptime",
        "Client satisfaction rate: 100%",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Computer Science",
      company: "University of Technology",
      period: "2016 - 2020",
      description:
        "Focused on software engineering, web development, and database systems. Graduated with honors.",
      achievements: [
        "Graduated Summa Cum Laude",
        "Dean's List all semesters",
        "Senior Project Award",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Journey & Milestones
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {experiences.map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col hover:border-primary/50 transition-all duration-300 hover:shadow-card">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {item.type === "work" ? (
                      <Briefcase className="w-6 h-6 text-primary" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-accent font-medium mb-4">{item.company}</p>
                <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
                  {item.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <Award className="w-4 h-4" />
                    Key Achievements
                  </div>
                  <div className="space-y-2">
                    {item.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Star className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                        <span className="text-foreground/80">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-muted-foreground text-lg">
              I believe in continuous improvement and staying at the forefront
              of technology. Every project is an opportunity to learn something
              new and push boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
