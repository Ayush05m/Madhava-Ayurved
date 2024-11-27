import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">AyurCare</h3>
            <p className="text-emerald-100 mb-4">
              Combining ancient wisdom with modern healthcare for holistic healing and wellness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-emerald-100 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-emerald-100 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-emerald-100 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-emerald-100 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-emerald-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/specialists" className="text-emerald-100 hover:text-white">
                  Our Specialists
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-emerald-100 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-emerald-100">Panchakarma</li>
              <li className="text-emerald-100">Ayurvedic Consultation</li>
              <li className="text-emerald-100">Yoga & Meditation</li>
              <li className="text-emerald-100">Diet & Nutrition</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-emerald-100">
                <Phone className="h-5 w-5 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-emerald-100">
                <Mail className="h-5 w-5 mr-2" />
                contact@ayurcare.com
              </li>
              <li className="flex items-center text-emerald-100">
                <MapPin className="h-5 w-5 mr-2" />
                123 Healing Street, Wellness City
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-100">
          <p>&copy; {new Date().getFullYear()} AyurCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;