import { ArrowDown, Sparkles, Code2, Palette } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float delay-500" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
                <Sparkles className="w-4 h-4" />
                Hello, I'm a Developer & Designer
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Creating
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Digital
                </span>
                <br />
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              I build modern web applications with a focus on performance,
              accessibility, and beautiful user interfaces. Let's create
              something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground font-semibold px-8 py-6 text-lg group"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore My Work
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn About Me
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Code2 className="w-4 h-4 text-primary" />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Palette className="w-4 h-4 text-primary" />
                <span>Modern Design</span>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <div className="relative bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="h-4 bg-primary/20 rounded-full animate-pulse" />
                    <div className="h-4 bg-primary/20 rounded-full w-3/4 animate-pulse delay-100" />
                  </div>
                  <div className="w-12 h-12 bg-accent/20 rounded-lg animate-pulse" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-primary/10 rounded-xl animate-pulse delay-200" />
                  <div className="h-20 bg-accent/10 rounded-xl animate-pulse delay-300" />
                  <div className="h-20 bg-primary/10 rounded-xl animate-pulse delay-400" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-primary/20 rounded-full animate-pulse delay-500" />
                  <div className="h-3 bg-primary/20 rounded-full w-5/6 animate-pulse delay-600" />
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl -z-10 rotate-3" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full w-12 h-12 border border-primary/20 hover:bg-primary/10"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </Button>
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
