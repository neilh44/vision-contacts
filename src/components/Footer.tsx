import { Link } from "react-router-dom";
import { Brain, Zap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <Brain className="h-8 w-8 text-white" />
                <Zap className="absolute -top-1 -right-1 h-4 w-4 text-accent animate-pulse" />
              </div>
              <span className="font-heading font-bold text-xl">
                AI Contact
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              Transforming contact management with advanced AI technology. 
              Extract, organize, and search your contacts intelligently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/features" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="/how-it-works" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/contact" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://contact-management-49cg.onrender.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <div className="text-sm text-primary-foreground/80">
                  E13 Tapobhumi Society<br />
                  Isanpur, Ahmedabad<br />
                  Gujarat, India
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <a 
                  href="tel:+919925537229" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +91 99255 37229
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <a 
                  href="mailto:hanotianilesh@gmail.com" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  hanotianilesh@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 AI Contact Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;