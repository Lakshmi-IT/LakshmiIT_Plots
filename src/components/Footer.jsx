import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">My Plots</h3>
            <p className="text-sm mb-4">
              Your trusted partner in finding the best open plots, ventures, and
              gated communities across Hyderabad and Telangana. We help you
              invest smartly and securely in real estate.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-accent-orange transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="hover:text-accent-orange transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="hover:text-accent-orange transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="hover:text-accent-orange transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-accent-orange transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-accent-orange transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/developers"
                  className="hover:text-accent-orange transition-colors"
                >
                  Developers
                </Link>
              </li>
              <li>
                <Link
                  to="/resale"
                  className="hover:text-accent-orange transition-colors"
                >
                  Resale Plots
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Searches */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Popular Searches
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Open Plots in Shadnagar</li>
              <li>DTCP Approved Ventures</li>
              <li>HMDA Plots in Hyderabad</li>
              <li>Gated Community Plots</li>
              <li>Farmland Investments</li>
              <li>Luxury Villa Plots</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Hyderabad, Telangana, India
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +91 9876543210
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> support@myplots.com
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {new Date().getFullYear()} My Plots. All rights reserved. Buy &
            Sell Open Plots in Hyderabad with Trusted Developers.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-accent-orange">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent-orange">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
