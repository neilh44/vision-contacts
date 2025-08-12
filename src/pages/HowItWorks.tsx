import { Upload, Brain, Database, Search, CheckCircle, ArrowRight, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  const processSteps = [
    {
      step: 1,
      icon: <Upload className="h-12 w-12" />,
      title: "User Login/Registration",
      description: "Secure authentication system with personal dashboard access and data isolation",
      details: [
        "Create your secure account",
        "Access personalized dashboard", 
        "Data privacy guaranteed",
        "Multi-device synchronization"
      ],
      techStack: "User Authentication & Security"
    },
    {
      step: 2,
      icon: <Upload className="h-12 w-12" />,
      title: "Upload/Scan Visiting Card",
      description: "Drag & drop interface with multiple format support and real-time preview",
      details: [
        "Drag & drop interface",
        "Multiple format support (JPG, PNG, PDF)",
        "Real-time preview",
        "Batch upload capability"
      ],
      techStack: "File Upload & Processing"
    },
    {
      step: 3,
      icon: <Brain className="h-12 w-12" />,
      title: "AI Extraction & Processing", 
      description: "GPT Vision analyzes cards and extracts contact data with business intelligence categorization",
      details: [
        "GPT Vision API integration",
        "Data extraction & validation",
        "Business intelligence categorization",
        "Industry keyword generation"
      ],
      techStack: "GPT Vision & AI Processing"
    },
    {
      step: 4,
      icon: <Database className="h-12 w-12" />,
      title: "Vector Database Storage",
      description: "Embedding generation and ChromaDB storage for searchable indexing",
      details: [
        "Vector embedding generation",
        "ChromaDB storage integration",
        "Searchable content indexing",
        "Semantic relationship mapping"
      ],
      techStack: "ChromaDB & Vector Storage"
    },
    {
      step: 5,
      icon: <Search className="h-12 w-12" />,
      title: "Semantic Search & Retrieval",
      description: "Natural language queries with intelligent filtering and relevant results",
      details: [
        "Natural language processing",
        "Intelligent query filtering",
        "Relevance-based ranking",
        "Context-aware results"
      ],
      techStack: "Semantic Search Engine"
    }
  ];

  const techStack = [
    {
      category: "AI & Machine Learning",
      technologies: ["GPT Vision API", "Natural Language Processing", "Vector Embeddings", "Semantic Analysis"],
      color: "text-primary"
    },
    {
      category: "Database & Storage", 
      technologies: ["ChromaDB Vector Database", "Real-time Indexing", "Scalable Architecture", "Data Security"],
      color: "text-secondary"
    },
    {
      category: "User Experience",
      technologies: ["Responsive Design", "Real-time Preview", "Batch Processing", "Multi-device Sync"],
      color: "text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="hero-text text-4xl lg:text-6xl mb-6">
              How Our{" "}
              <span className="text-gradient-accent">AI Platform</span> Works
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Discover the step-by-step process that transforms your visiting cards into an intelligent, searchable contact database
            </p>
            <Button
              size="lg"
              className="btn-hero group"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-primary mb-6">
              5-Step Process Flow
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From card upload to intelligent search - see how our AI transforms your contact management
            </p>
          </div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary text-white font-bold text-2xl flex items-center justify-center mr-4">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-sm text-primary font-medium">{step.techStack}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6">
                      {step.description}
                    </p>

                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <Card className="card-elevated p-8 text-center">
                      <div className="flex justify-center mb-6">
                        <div className="p-6 rounded-full bg-gradient-primary text-white">
                          {step.icon}
                        </div>
                      </div>
                      <div className="text-6xl font-bold text-gradient-primary mb-4">
                        {step.step}
                      </div>
                      <div className="text-lg font-semibold text-gradient-secondary">
                        {step.title}
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Connector Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center py-8">
                    <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-secondary mb-6">
              Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on cutting-edge technologies for maximum performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.map((category, index) => (
              <Card key={index} className="feature-card">
                <CardContent className="p-8 text-center">
                  <h3 className={`text-xl font-bold mb-6 ${category.color}`}>
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.technologies.map((tech, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
                        <span className="text-sm">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-accent mb-6">
              Why This Process Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The science behind our intelligent contact management system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "99% Accuracy",
                description: "Advanced AI algorithms ensure precise data extraction",
                metric: "99%"
              },
              {
                title: "Lightning Fast",
                description: "Process cards in under 30 seconds",
                metric: "<30s"
              },
              {
                title: "Scalable",
                description: "Handle thousands of contacts effortlessly",
                metric: "∞"
              },
              {
                title: "Secure",
                description: "Enterprise-grade security and privacy",
                metric: "100%"
              }
            ].map((benefit, index) => (
              <Card key={index} className="feature-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-gradient-primary mb-2">
                    {benefit.metric}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="hero-text text-3xl lg:text-5xl mb-6">
            Ready to Experience the Future of Contact Management?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the revolution and transform how you manage professional contacts with AI
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
              <a href="/features">
                Explore Features
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;