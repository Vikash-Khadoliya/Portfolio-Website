import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Building2, Target, Award, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Building2,
      title: "Company",
      description: "W3 Software Solutions",
      detail: "Founder & CEO"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "BCA Graduate 2024",
      detail: "Computer Applications"
    },
    {
      icon: Code,
      title: "Expertise",
      description: "Full Stack Development",
      detail: "Modern Technologies"
    },
    {
      icon: Target,
      title: "Mission",
      description: "Digital Innovation",
      detail: "Business Solutions"
    }
  ];

  const stats = [
    { number: "2024", label: "Company Founded" },
    { number: "50+", label: "Projects Delivered" },
    { number: "25+", label: "Happy Clients" },
    { number: "15+", label: "Technologies" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            About Me & My Company
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Entrepreneur & 
            <span className="bg-gradient-professional bg-clip-text text-transparent"> Technology Leader</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founder and CEO of W3 Software Solutions, a forward-thinking technology company 
            based in Nawalgarh, Jhunjhunu, Rajasthan. Fresh BCA graduate (2024) with a vision 
            to transform businesses through innovative digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center group hover:shadow-professional transition-all duration-300 animate-fade-in border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-professional rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-glow">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-primary font-semibold mb-1">{item.description}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 shadow-professional border-border/50 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
              <Building2 className="w-6 h-6 mr-3 text-primary" />
              W3 Software Solutions
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in 2024, W3 Software Solutions is dedicated to providing cutting-edge 
              web development, mobile applications, and digital marketing services. We specialize 
              in creating scalable, modern solutions that drive business growth and digital transformation.
            </p>
            <div className="space-y-3">
              {[
                "Custom Web Development",
                "Mobile App Solutions", 
                "E-commerce Platforms",
                "Digital Marketing Services",
                "Cloud Solutions & DevOps"
              ].map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-professional rounded-full mr-3"></div>
                  <span className="text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 shadow-professional border-border/50 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
              <Award className="w-6 h-6 mr-3 text-primary" />
              Professional Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My entrepreneurial journey began during my BCA studies, where I identified the gap 
              between traditional business operations and modern digital solutions. This led to 
              the creation of W3 Software Solutions with a mission to bridge this gap.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                <div>
                  <div className="font-semibold">Vision</div>
                  <div className="text-sm text-muted-foreground">Democratizing technology for businesses of all sizes</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                <div>
                  <div className="font-semibold">Mission</div>
                  <div className="text-sm text-muted-foreground">Delivering innovative solutions that exceed expectations</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 lg:p-12 shadow-professional border-border/50 bg-gradient-to-r from-card/80 to-primary/5 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Company Achievements
            </h3>
            <p className="text-muted-foreground">
              Building success through dedication, innovation, and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-professional bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;