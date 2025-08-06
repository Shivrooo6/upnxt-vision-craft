import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                UPNXT
              </span>{" "}
              MARKETING AGENCY
            </h3>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Full-service digital marketing, video, design & development agency 
              dedicated to elevating brands to the next level with creative excellence 
              and strategic innovation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-background/80">Zirakpur, Chandigarh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-background/80">+91 7696795955</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-background/80">hello@upnxtmarketing.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-blue-400 transition-colors">Video Editing</a></li>
              <li><a href="#" className="text-background/80 hover:text-blue-400 transition-colors">Videography</a></li>
              <li><a href="#" className="text-background/80 hover:text-blue-400 transition-colors">Graphic Design</a></li>
              <li><a href="#" className="text-background/80 hover:text-blue-400 transition-colors">Performance Marketing</a></li>
              <li><a href="#" className="text-background/80 hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-background/80 hover:text-blue-400 transition-colors">App Development</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-background/80 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-background/80 hover:text-blue-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-background/80 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-background/80 hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-background/60 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/upnxt_marketing_agency/" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-blue-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-background/60 text-sm text-center md:text-right">
              <p>&copy; {currentYear} Upnxt Marketing Agency. All rights reserved.</p>
              <p className="mt-1">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                {" • "}
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;