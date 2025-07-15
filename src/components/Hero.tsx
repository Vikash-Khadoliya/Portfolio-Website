import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Instagram, MapPin, Download, Building2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Professional grid pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-20"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <MapPin className="w-3 h-3 mr-1" />
                  Nawalgarh, Jhunjhunu, Rajasthan
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Building2 className="w-3 h-3 mr-1" />
                  W3 Software Solutions
                </Badge>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                Hi, I'm{" "}
                <span className="bg-gradient-professional bg-clip-text text-transparent">
                  Vikash Khadoliya
                </span>
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl text-primary font-semibold">
                  Full Stack Developer
                </h2>
                <p className="text-lg text-muted-foreground font-medium">
                  Founder & CEO at W3 Software Solutions
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Passionate full stack developer and entrepreneur building innovative digital solutions. 
                BCA graduate (2024) with expertise in modern web technologies and business development.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg" className="group shadow-professional">
                <a href="mailto:khadoliyavikash@gmail.com">
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="group border-primary/20 hover:bg-primary/5">
                <a href="https://drive.google.com/file/d/1axS6HKv8YEEHPgbyxLEQcfBclg4IbNfh/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </div>
            
            <div className="flex gap-6 pt-4">
              <a href="https://github.com/Vikash-Khadoliya" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/vikash-khadoliya-584660292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/the__.vikash?igsh=MTk1OWdvOG9vazJsMA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Profile Section */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-professional rounded-3xl blur-2xl opacity-20 scale-110 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-card rounded-3xl p-8 shadow-professional border">
                <a href="/lovable-uploads/0037b59d-19af-4502-8d6d-f68cf2eafe09.jpg" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/lovable-uploads/0037b59d-19af-4502-8d6d-f68cf2eafe09.jpg"
                    alt="Vikash Khadoliya - Full Stack Developer"
                    className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-elegant cursor-pointer"
                  />
                </a>
                <div className="absolute -bottom-4 -right-4 bg-gradient-professional rounded-2xl p-4 shadow-professional text-white">
                  <div className="text-sm font-semibold">Available for Projects</div>
                  <div className="text-xs opacity-90">W3 Software Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;