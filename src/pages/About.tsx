import { Brain, Target, Users, Award, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Innovation",
      description: "We leverage cutting-edge AI technology to solve real-world contact management challenges.",
      color: "text-primary"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision",
      description: "Our 99% accuracy rate in data extraction ensures you can trust our AI-powered solutions.",
      color: "text-secondary"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User-Centric",
      description: "Every feature is designed with our users' needs and workflow efficiency in mind.",
      color: "text-accent"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality",
      description: "We maintain the highest standards in security, performance, and user experience.",
      color: "text-primary"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Foundation",
      description: "AI Contact Management was founded with a vision to revolutionize contact management using artificial intelligence."
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Successfully integrated GPT Vision API and ChromaDB for intelligent contact extraction and search."
    },
    {
      year: "2024",
      title: "Beta Launch",
      description: "Launched beta version with 500+ early adopters providing valuable feedback and insights."
    },
    {
      year: "2024",
      title: "Full Platform",
      description: "Released complete platform with semantic search, team collaboration, and enterprise features."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Cards Processed", icon: <Brain className="h-6 w-6" /> },
    { number: "500+", label: "Active Users", icon: <Users className="h-6 w-6" /> },
    { number: "99%", label: "Accuracy Rate", icon: <Target className="h-6 w-6" /> },
    { number: "24/7", label: "Support", icon: <Award className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="hero-text text-4xl lg:text-6xl mb-6">
              About{" "}
              <span className="text-gradient-accent">AI Contact</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              We're revolutionizing contact management by combining artificial intelligence with intuitive design to create the most intelligent contact platform ever built.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gradient-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To transform how professionals manage and discover contacts by leveraging the power of artificial intelligence, making contact management intelligent, efficient, and effortless.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe that in today's connected world, managing professional relationships shouldn't be a manual, time-consuming task. Our AI-powered platform automates data extraction, enables semantic search, and provides intelligent insights that help you build stronger professional networks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-hero">
                  <a 
                    href="https://contact-management-49cg.onrender.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Try Our Platform
                  </a>
                </Button>
                <Button asChild variant="outline" className="btn-secondary">
                  <a href="/contact">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="card-elevated p-8">
                <div className="text-center">
                  <Lightbulb className="h-16 w-16 text-accent mx-auto mb-4 animate-pulse-soft" />
                  <h3 className="text-2xl font-bold text-gradient-secondary mb-4">
                    Innovation Driven
                  </h3>
                  <p className="text-muted-foreground">
                    Combining GPT Vision, vector databases, and semantic search to create the future of contact management.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-secondary mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our development and shape our platform's evolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="feature-card text-center">
                <CardContent className="p-6">
                  <div className={`flex justify-center mb-4 ${value.color}`}>
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-accent mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and user satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="feature-card text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-primary text-primary-foreground">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gradient-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-primary mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in building the future of AI-powered contact management
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center font-bold z-10">
                      <Rocket className="h-6 w-6" />
                    </div>
                    <div className="ml-6 flex-1">
                      <Card className="feature-card">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-3">
                            <span className="text-2xl font-bold text-gradient-secondary mr-4">
                              {milestone.year}
                            </span>
                            <h3 className="text-lg font-semibold">{milestone.title}</h3>
                          </div>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-secondary mb-6">
              Our Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on cutting-edge AI and database technologies for maximum performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="feature-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gradient-primary mb-4">
                  GPT Vision API
                </h3>
                <p className="text-muted-foreground mb-4">
                  Advanced computer vision for accurate text extraction from visiting cards with multi-language support.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li>• 99% extraction accuracy</li>
                  <li>• Multi-language support</li>
                  <li>• Handwriting recognition</li>
                  <li>• Logo identification</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-secondary text-white flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gradient-secondary mb-4">
                  ChromaDB Vector Store
                </h3>
                <p className="text-muted-foreground mb-4">
                  High-performance vector database enabling semantic search and intelligent contact retrieval.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li>• Semantic understanding</li>
                  <li>• Fast similarity search</li>
                  <li>• Scalable architecture</li>
                  <li>• Real-time indexing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-accent text-white flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gradient-accent mb-4">
                  Enterprise Security
                </h3>
                <p className="text-muted-foreground mb-4">
                  Bank-level security with encryption, authentication, and row-level data protection.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li>• End-to-end encryption</li>
                  <li>• User authentication</li>
                  <li>• Row-level security</li>
                  <li>• GDPR compliance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="hero-text text-3xl lg:text-5xl mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the AI revolution in contact management and transform how you handle professional relationships
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="btn-hero"
            >
              <a 
                href="https://contact-management-49cg.onrender.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Start Free Trial
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="btn-secondary"
            >
              <a href="/contact">
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;