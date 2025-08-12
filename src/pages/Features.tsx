import { Scan, Search, Database, Shield, Brain, Zap, BarChart, Download, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Features = () => {
  const coreFeatures = [
    {
      icon: <Scan className="h-12 w-12 text-primary" />,
      title: "Smart Card Scanning",
      description: "Advanced GPT Vision integration extracts contact details with 99% accuracy",
      features: [
        "Extract name, company, position, contact details",
        "Business intelligence categorization",
        "Industry keyword generation",
        "Multiple file format support"
      ],
      badge: "AI Powered"
    },
    {
      icon: <Search className="h-12 w-12 text-secondary" />,
      title: "Intelligent Search",
      description: "Natural language queries with semantic understanding for precise results",
      features: [
        "Natural language processing",
        "Semantic understanding",
        "Business category filtering",
        "Relevance scoring algorithm"
      ],
      badge: "Smart Search"
    },
    {
      icon: <Database className="h-12 w-12 text-accent" />,
      title: "Advanced Storage",
      description: "Vector embeddings with ChromaDB for intelligent data organization",
      features: [
        "Vector embeddings technology",
        "ChromaDB integration",
        "User data isolation",
        "Scalable architecture"
      ],
      badge: "Vector DB"
    },
    {
      icon: <BarChart className="h-12 w-12 text-secondary" />,
      title: "Business Intelligence",
      description: "Automatic categorization and insights from your contact network",
      features: [
        "Automatic industry categorization",
        "Contact network insights",
        "Business relationship mapping",
        "Analytics dashboard"
      ],
      badge: "Analytics"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Enterprise Security",
      description: "Row-level security with user authentication and data encryption"
    },
    {
      icon: <Brain className="h-8 w-8 text-secondary" />,
      title: "Machine Learning",
      description: "Continuous learning algorithms improve accuracy over time"
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Lightning Fast",
      description: "Sub-second search results across thousands of contacts"
    },
    {
      icon: <Download className="h-8 w-8 text-primary" />,
      title: "Export Capabilities",
      description: "Export contacts in multiple formats including CSV, vCard, JSON"
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      title: "Real-time Sync",
      description: "Instant synchronization across all your devices"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Team Collaboration",
      description: "Share contact databases securely with team members"
    }
  ];

  const comparisonData = [
    { feature: "Manual Data Entry", traditional: "Required", ai: "Automated" },
    { feature: "Search Accuracy", traditional: "Limited", ai: "99% Accurate" },
    { feature: "Processing Time", traditional: "5-10 minutes", ai: "< 30 seconds" },
    { feature: "Search Method", traditional: "Exact matches", ai: "Natural language" },
    { feature: "Data Organization", traditional: "Manual categories", ai: "AI categorization" },
    { feature: "Scalability", traditional: "Limited", ai: "Unlimited" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="hero-text text-4xl lg:text-6xl mb-6">
              Powerful Features for{" "}
              <span className="text-gradient-accent">Modern</span> Contact Management
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Discover how our AI-powered platform transforms traditional contact management into an intelligent, searchable system
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-primary mb-6">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI capabilities that redefine how you manage professional contacts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="feature-card">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <div className="flex justify-center mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-4">{feature.title}</CardTitle>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-secondary mb-6">
              Additional Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Extended features that enhance your contact management experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="feature-card text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-accent mb-6">
              Traditional vs AI-Powered
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the dramatic difference AI makes in contact management efficiency
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card-elevated">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-6 font-semibold">Feature</th>
                        <th className="text-center p-6 font-semibold text-muted-foreground">Traditional Method</th>
                        <th className="text-center p-6 font-semibold text-primary">AI-Powered Solution</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-border last:border-b-0">
                          <td className="p-6 font-medium">{row.feature}</td>
                          <td className="p-6 text-center text-muted-foreground">{row.traditional}</td>
                          <td className="p-6 text-center text-secondary font-semibold">{row.ai}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-primary mb-6">
              Technical Advantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on cutting-edge technology stack for maximum performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="feature-card text-center">
              <CardContent className="p-8">
                <h3 className="font-semibold text-xl mb-4 text-gradient-primary">GPT Vision API</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced computer vision technology for accurate text extraction from visiting cards
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Multi-language support</li>
                  <li>• Handwriting recognition</li>
                  <li>• Logo identification</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card text-center">
              <CardContent className="p-8">
                <h3 className="font-semibold text-xl mb-4 text-gradient-secondary">ChromaDB Vector Store</h3>
                <p className="text-muted-foreground mb-4">
                  High-performance vector database for semantic search and intelligent retrieval
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Scalable architecture</li>
                  <li>• Fast similarity search</li>
                  <li>• Real-time indexing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card text-center">
              <CardContent className="p-8">
                <h3 className="font-semibold text-xl mb-4 text-gradient-accent">Semantic Search</h3>
                <p className="text-muted-foreground mb-4">
                  Natural language processing for intuitive contact discovery and retrieval
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Context understanding</li>
                  <li>• Intent recognition</li>
                  <li>• Relevance ranking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;