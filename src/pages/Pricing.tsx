import { Check, Star, Crown, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Starter",
      price: "₹2,000",
      period: "/year",
      description: "Perfect for individuals and small professionals",
      icon: <Zap className="h-8 w-8" />,
      features: [
        "500 contacts scanned",
        "2,000 search queries",
        "Basic support",
        "Standard AI extraction",
        "Mobile app access",
        "Email support"
      ],
      buttonText: "Start Free Trial",
      popular: false,
      color: "primary"
    },
    {
      name: "Professional",
      price: "₹3,500",
      period: "/year",
      description: "Ideal for growing businesses and teams",
      icon: <Star className="h-8 w-8" />,
      features: [
        "1,000 contacts scanned",
        "5,000 search queries",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "API access",
        "Custom categories",
        "Export capabilities"
      ],
      buttonText: "Get Professional",
      popular: true,
      color: "secondary"
    },
    {
      name: "Enterprise",
      price: "₹6,000",
      period: "/year",
      description: "For large organizations with advanced needs",
      icon: <Crown className="h-8 w-8" />,
      features: [
        "2,000 contacts scanned",
        "10,000 search queries",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "White-label solution",
        "Training sessions",
        "SLA guarantee"
      ],
      buttonText: "Contact Sales",
      popular: false,
      color: "accent"
    }
  ];

  const comparisonFeatures = [
    { feature: "Contacts Scanned", starter: "500", professional: "1,000", enterprise: "2,000" },
    { feature: "Search Queries", starter: "2,000", professional: "5,000", enterprise: "10,000" },
    { feature: "AI Extraction", starter: "Standard", professional: "Advanced", enterprise: "Premium" },
    { feature: "Support Level", starter: "Email", professional: "Priority", enterprise: "Dedicated" },
    { feature: "Team Members", starter: "1", professional: "5", enterprise: "Unlimited" },
    { feature: "API Access", starter: "—", professional: "✓", enterprise: "✓" },
    { feature: "Custom Integration", starter: "—", professional: "Limited", enterprise: "Full" },
    { feature: "White Label", starter: "—", professional: "—", enterprise: "✓" }
  ];

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "What happens if I exceed my limits?",
      answer: "We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional credits."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption and follow industry-standard security practices to protect your data."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Yes, we offer custom solutions for large enterprises with specific requirements. Contact our sales team for details."
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
              Simple, Transparent{" "}
              <span className="text-gradient-accent">Pricing</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your contact management needs. All plans include our core AI features with scalable limits.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`pricing-card relative ${tier.popular ? 'featured' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-secondary text-secondary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full bg-gradient-${tier.color} text-white`}>
                      {tier.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{tier.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gradient-primary">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-secondary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    asChild
                    className={`w-full ${tier.popular ? 'btn-hero' : 'btn-secondary'}`}
                    size="lg"
                  >
                    <a 
                      href="https://contact-management-49cg.onrender.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {tier.buttonText}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-primary mb-6">
              Detailed Feature Comparison
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compare all features across our pricing tiers to find the perfect fit
            </p>
          </div>

          <Card className="card-elevated max-w-5xl mx-auto">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left p-6 font-semibold">Features</th>
                      <th className="text-center p-6 font-semibold">Starter</th>
                      <th className="text-center p-6 font-semibold text-secondary">Professional</th>
                      <th className="text-center p-6 font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, index) => (
                      <tr key={index} className="border-b border-border last:border-b-0 hover:bg-muted/20">
                        <td className="p-6 font-medium">{row.feature}</td>
                        <td className="p-6 text-center">{row.starter}</td>
                        <td className="p-6 text-center font-semibold">{row.professional}</td>
                        <td className="p-6 text-center">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-secondary mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the value that makes our AI contact management platform worth every rupee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cost Savings",
                value: "80%",
                description: "Reduce manual data entry costs by 80% with AI automation"
              },
              {
                title: "Time Savings",
                value: "10x",
                description: "Search contacts 10x faster with semantic search technology"
              },
              {
                title: "Accuracy",
                value: "99%",
                description: "Industry-leading 99% accuracy in contact data extraction"
              },
              {
                title: "ROI",
                value: "300%",
                description: "Average ROI of 300% within the first year of usage"
              }
            ].map((stat, index) => (
              <Card key={index} className="feature-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-gradient-accent mb-2">
                    {stat.value}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{stat.title}</h3>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our pricing and features
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="feature-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their contact management with AI
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
                Contact Sales
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;