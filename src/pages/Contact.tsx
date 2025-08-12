import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office Address",
      details: ["E13 Tapobhumi Society", "Isanpur, Ahmedabad", "Gujarat, India"],
      color: "text-primary"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Number",
      details: ["+91 99255 37229"],
      color: "text-secondary",
      link: "tel:+919925537229"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: ["hanotianilesh@gmail.com"],
      color: "text-accent",
      link: "mailto:hanotianilesh@gmail.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
      color: "text-primary"
    }
  ];

  const faqs = [
    {
      question: "How accurate is the AI extraction?",
      answer: "Our GPT Vision technology achieves 99% accuracy in extracting contact details from visiting cards."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use enterprise-grade encryption and row-level security to protect your contact data."
    },
    {
      question: "Can I try before purchasing?",
      answer: "Absolutely! We offer a free trial that includes limited scans and searches to test our platform."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Yes, we provide custom integrations and white-label solutions for enterprise clients."
    },
    {
      question: "What file formats are supported?",
      answer: "We support JPG, PNG, PDF, and other common image formats for visiting card uploads."
    },
    {
      question: "How long does processing take?",
      answer: "Most visiting cards are processed in under 30 seconds with our AI technology."
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
              Get in{" "}
              <span className="text-gradient-accent">Touch</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Have questions about our AI contact management platform? We're here to help you transform your contact management experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <MessageSquare className="mr-3 h-6 w-6 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-hero">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gradient-primary mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of these channels. We're committed to providing excellent support for all your AI contact management needs.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card key={index} className="feature-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full bg-muted ${info.color}`}>
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className={`${info.color} hover:underline transition-colors`}
                          >
                            {info.details[0]}
                          </a>
                        ) : (
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground">{detail}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-secondary mb-6">
              Find Us Here
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Ahmedabad, Gujarat. Visit us for in-person consultations and demos.
            </p>
          </div>

          <Card className="card-elevated">
            <CardContent className="p-0">
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    E13 Tapobhumi Society, Isanpur, Ahmedabad, Gujarat, India
                  </p>
                  <Button
                    asChild
                    className="mt-4 btn-secondary"
                  >
                    <a 
                      href="https://maps.google.com/?q=E13+Tapobhumi+Society+Isanpur+Ahmedabad+Gujarat+India"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-accent mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our AI contact management platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="feature-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
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
            Don't wait - transform your contact management today with our AI-powered platform
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
                View Pricing
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;