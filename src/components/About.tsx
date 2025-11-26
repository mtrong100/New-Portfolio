import { Code2, Rocket, Users, Sparkles, Target, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "∞", label: "Cups of Coffee" },
  ];

  const passions = [
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous attention to detail in every line of code",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuine love for crafting exceptional digital experiences",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                I build digital experiences that{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  connect
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  inspire
                </span>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a full-stack developer who believes that great code should
                be both functional and beautiful. I specialize in creating
                applications that not only work flawlessly but also deliver
                exceptional user experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-primary mb-6">
                My Approach
              </h3>
              <div className="space-y-6">
                {passions.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl -z-10 rotate-3" />
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 text-center">
          <p className="text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
            "I'm not just writing code – I'm crafting solutions that make a
            difference. Every project is an opportunity to learn, grow, and
            create something meaningful."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
