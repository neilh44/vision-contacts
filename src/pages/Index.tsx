import { ArrowRight, Scan, Search, Database, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";
import aiScanIcon from "@/assets/ai-scan-icon.jpg";
import searchIcon from "@/assets/search-icon.jpg";
import databaseIcon from "@/assets/database-icon.jpg";

const Index = () => {
  const features = [
    {
      icon: <Scan className="h-8 w-8 text-primary" />,
      image: aiScanIcon,
      title: "AI-Powered Extraction",
      description: "Automatically extract contact details using GPT Vision technology from visiting cards with 99% accuracy."
    },
    {
      icon: <Search className="h-8 w-8 text-secondary" />,
      image: searchIcon,
      title: "Semantic Search",
      description: "Find contacts using natural language queries. Search by industry, role, or any business context."
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      image: databaseIcon,
      title: "Vector Database",
      description: "Advanced storage with ChromaDB for intelligent retrieval and semantic understanding of your contacts."
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Secure & Private",
      description: "User authentication with row-level security ensures your contact data remains private and protected."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Cards Processed", icon: <Scan className="h-6 w-6" /> },
    { number: "99%", label: "Accuracy Rate", icon: <Clock className="h-6 w-6" /> },
    { number: "500+", label: "Happy Users", icon: <Users className="h-6 w-6" /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="hero-text text-4xl lg:text-6xl mb-6 leading-tight">
                Redefine Contact Management with{" "}
                <span className="text-gradient-accent">AI</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transform visiting cards into intelligent, searchable contact databases using advanced computer vision and semantic search technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="btn-hero group"
                >
                  <a 
                    href="https://contact-management-49cg.onrender.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-secondary"
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See How It Works
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <img 
                src={heroImage} 
                alt="AI Contact Management Platform" 
                className="w-full h-auto rounded-2xl shadow-large"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex justify-center items-center mb-4">
                  <div className="p-3 rounded-full bg-primary text-primary-foreground">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gradient-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-primary mb-6">
              Powerful Features for Modern Contact Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to transform how you manage and search through your professional contacts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  {feature.image ? (
                    <div className="mb-4 flex justify-center">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    </div>
                  ) : (
                    <div className="mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                  )}
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview Section */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-secondary mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple 5-step process to digitize and intelligently manage your contacts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Upload Card", desc: "Scan or upload visiting card" },
              { step: "2", title: "AI Processing", desc: "GPT Vision extracts data" },
              { step: "3", title: "Smart Storage", desc: "Vector database storage" },
              { step: "4", title: "Natural Search", desc: "Semantic search queries" },
              { step: "5", title: "Instant Results", desc: "Intelligent contact retrieval" }
            ].map((item, index) => (
              <div key={index} className="process-step text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="btn-hero"
            >
              <a
               href="/howitworks"
              >
                Learn More About Our Process
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="hero-text text-3xl lg:text-5xl mb-6">
            Ready to Transform Your Contact Management?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals who have revolutionized how they manage and search their contacts with AI
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
              <a href="/pricing">
                View Pricing Plans
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;