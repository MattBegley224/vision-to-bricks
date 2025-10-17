import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/ane-logo-3.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 flex gap-6 items-center">
            <img src={logo} alt="Atlantic Northeast" className="h-24 w-auto flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Atlantic Northeast Contracting</h3>
              <p className="opacity-90">
                Building high performance homes with quality craftsmanship and transparent communication
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="opacity-90 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/icf" className="opacity-90 hover:text-secondary transition-colors">
                  ICF
                </Link>
              </li>
              <li>
                <Link to="/rebates" className="opacity-90 hover:text-secondary transition-colors">
                  Rebates
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 opacity-90">
                <Phone className="w-4 h-4" />
                <a href="tel:5555555555" className="hover:text-secondary transition-colors">
                  (555) 555-5555
                </a>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@premierbuilders.com" className="hover:text-secondary transition-colors">
                  info@premierbuilders.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="opacity-75 text-sm">
            © {currentYear} Atlantic Northeast Contracting. All rights reserved. | Licensed • Insured • Bonded
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
