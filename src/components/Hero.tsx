import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit bg-card/50 backdrop-blur-sm">
                <MapPin className="w-3 h-3 mr-1" />
                Nawalgarh, Jhunjhunu, Rajasthan
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Vikash
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                Full Stack Developer
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Passionate full stack developer with expertise in modern web technologies. 
                Recently completed BCA in 2024 and ready to build amazing digital experiences.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </div>
            
            <div className="flex gap-6 pt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 scale-110"></div>
              <img
                src="/lovable-uploads/0037b59d-19af-4502-8d6d-f68cf2eafe09.png"
                alt="Vikash Khadoliya"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-elegant"
              />
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-elegant backdrop-blur-sm border">
                <div className="text-sm font-medium">Available for work</div>
                <div className="text-xs text-muted-foreground">Full Stack Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;