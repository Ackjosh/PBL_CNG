
import React from 'react';
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-cng-green font-display text-2xl font-bold tracking-tight">CNG</span>
              <span className="text-white font-display text-lg tracking-tight">Operator</span>
            </div>
            <p className="text-gray-400 mb-6">
              Advanced tools for CNG station operators to optimize performance and enhance service quality.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Station Management</h4>
            <ul className="space-y-4">
              <FooterLink href="#home">Dashboard</FooterLink>
              <FooterLink href="#features">Operations</FooterLink>
              <FooterLink href="#team">Team</FooterLink>
              <FooterLink href="#contact">Support</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <FooterLink href="#">Knowledge Base</FooterLink>
              <FooterLink href="#">Training Videos</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="flex-shrink-0 mt-1 text-cng-green" />
                <span>support@cngoperator.com</span>
              </li>
              <li>
                <p>+91 98765 43210</p>
                <p className="mt-1">24/7 Technical Support</p>
              </li>
              <li>
                <p>123 Tech Park, Sector 15</p>
                <p className="mt-1">New Delhi, India 110001</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} CNG Operator Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a 
    href="#" 
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-cng-green hover:text-white hover:scale-110"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-400 hover:text-cng-green transition-colors duration-300 flex items-center group"
    >
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
        <ArrowRight size={14} />
      </span>
      {children}
    </a>
  </li>
);

export default Footer;
