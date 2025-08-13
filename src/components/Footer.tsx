import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-primary mb-4">
              MangosOrange
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Bridging the gap between cutting-edge technology and exceptional talent. 
              We know tech, we care about people.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/mangosorange/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/web-development" className="text-background/80 hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="/app-development" className="text-background/80 hover:text-primary transition-colors">App Development</a></li>
              <li><a href="/open-source" className="text-background/80 hover:text-primary transition-colors">Open Source</a></li>
              <li><a href="/custom-software" className="text-background/80 hover:text-primary transition-colors">Custom Software</a></li>
              <li><a href="/ecommerce" className="text-background/80 hover:text-primary transition-colors">E-commerce</a></li>
              <li><a href="/cloud-strategy" className="text-background/80 hover:text-primary transition-colors">Cloud Infrastructure</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-background/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-background/80 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/terms-and-conditions" className="text-background/80 hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="/careers" className="text-background/80 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="/blog" className="text-background/80 hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@mangosorange.com" className="text-background/80 hover:text-primary transition-colors">
                  info@mangosorange.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+911204164821" className="text-background/80 hover:text-primary transition-colors">
                  +91 120 416 4821
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-background/80">
                  B-47, 3rd Floor, Sector-64<br />
                  Noida, U.P. - 201 301
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm">
              © 2025 MangosOrange. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/terms-and-conditions" className="text-background/60 hover:text-primary transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;