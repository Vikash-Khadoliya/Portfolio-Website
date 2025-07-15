import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  Palette,
  Wrench
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      color: "text-blue-500"
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: ["Node.js", "Express.js", "Python", "PHP", "REST APIs", "GraphQL"],
      color: "text-green-500"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "SQLite"],
      color: "text-orange-500"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "Progressive Web Apps"],
      color: "text-purple-500"
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Netlify"],
      color: "text-red-500"
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Responsive Design", "User Experience"],
      color: "text-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-primary/5 hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Skills Overview */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-0 shadow-elegant inline-block">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Code2 className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Always Learning</h3>
              </div>
              <p className="text-muted-foreground max-w-md">
                Technology evolves rapidly, and I'm committed to staying current with the latest 
                frameworks, tools, and best practices in the development ecosystem.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;