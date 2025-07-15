import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Vikash Khadoliya</h3>
            <p className="text-background/80">
              Full Stack Developer crafting digital experiences
            </p>
            <Badge variant="outline" className="bg-background/10 text-background border-background/20">
              Available for freelance work
            </Badge>
            <a href="https://github.com/Vikash-Khadoliya" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4 text-center">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-background/80 hover:text-background transition-colors">
                About
              </a>
              <a href="#skills" className="text-background/80 hover:text-background transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-background/80 hover:text-background transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                Contact
              </a>
            </nav>
          </div>
          
          {/* Social Links */}
          <div className="space-y-4 text-center md:text-right">
            <h4 className="font-semibold">Connect with me</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 flex items-center justify-center gap-2">
            © {currentYear} Vikash Khadoliya. Made with 
            <Heart className="w-4 h-4 text-red-400" />
            in Nawalgarh, Rajasthan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;