import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Globe, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, education, and passion for creating digital solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Education</h3>
                    <p className="text-muted-foreground">Bachelor of Computer Applications</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Completed BCA in 2024, building a strong foundation in computer science and programming
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expertise</h3>
                    <p className="text-muted-foreground">Full Stack Development</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Proficient in both frontend and backend technologies, creating end-to-end web solutions
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">Nawalgarh, Jhunjhunu, Rajasthan</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Based in the historic town of Nawalgarh, working with clients globally
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-card rounded-2xl p-8 border-0 shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">My Passion</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm passionate about creating innovative web applications that solve real-world problems. 
                With a fresh perspective from my recent BCA completion, I bring enthusiasm and modern 
                technical skills to every project.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey in technology started with curiosity and has evolved into a commitment to 
                building user-centric applications. I believe in writing clean, maintainable code and 
                staying updated with the latest industry trends.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-medium">What drives me:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Problem Solving</Badge>
                  <Badge variant="secondary">Continuous Learning</Badge>
                  <Badge variant="secondary">User Experience</Badge>
                  <Badge variant="secondary">Clean Code</Badge>
                  <Badge variant="secondary">Innovation</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;