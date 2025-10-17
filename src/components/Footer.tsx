import { Mail, Phone } from "lucide-react";
import logo from "@/assets/ane-logo-3.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 flex gap-6 items-start">
            <img src={logo} alt="Atlantic Northeast" className="h-32 w-auto flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Premier Builders</h3>
              <p className="opacity-90 mb-4">
                Building exceptional homes with quality craftsmanship and transparent communication since 1998.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="opacity-90 hover:text-secondary transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#process" className="opacity-90 hover:text-secondary transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-90 hover:text-secondary transition-colors">
                  About Us
                </a>
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
            © {currentYear} Premier Builders. All rights reserved. | Licensed • Insured • Bonded
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
