import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Gauge, Menu, Settings, X, LogIn, UserPlus } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { SignUpButton } from '@clerk/clerk-react';
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg translate-y-0"
          : "bg-transparent translate-y-2"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 group">
          <Gauge className="text-cng-green transition-all duration-300 group-hover:rotate-45" size={28} />
          <div className="transition-all duration-300 group-hover:translate-x-1">
            <span className="text-cng-green font-display text-2xl font-bold tracking-tight">CNG</span>
            <span className="text-cng-black font-display text-lg tracking-tight">Operator</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="flex items-center space-x-8 mr-8">
            <NavLinks />
          </nav>

          <div className="flex items-center space-x-4">


            <div className="user flex items-center space-x-2">
              {/* <SignedOut>
                <SignInButton mode="modal">
                */}
              <a
                href="sign-in"
                className="text-cng-black font-medium border border-cng-green px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-cng-green hover:text-white flex items-center"
              >
                <LogIn className="mr-1.5" size={16} /> Login
              </a>
              {/* </SignInButton>
                <SignUpButton mode="modal"> */}
              <a
                href="sign-up"
                className="bg-cng-green text-white px-4 py-1.5 rounded-full font-medium transition-all duration-300 hover:bg-cng-darkgreen hover:shadow-md hover:scale-105 flex items-center"
              >
                <UserPlus className="mr-1.5" size={16} /> Register
              </a>
              {/* </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn> */}
            </div>
            <a
              href="#contact"
              className="bg-cng-green text-white px-5 py-2 rounded-full font-medium transition-all duration-300 hover:bg-cng-darkgreen hover:shadow-lg hover:scale-105 flex items-center"
            >
              Control Panel <Settings className="ml-2" size={16} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cng-black hover:text-cng-green transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 pt-24 px-6 transition-all duration-300 transform md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          <NavLinks mobile setMobileMenuOpen={setMobileMenuOpen} />
          <div className="flex flex-col space-y-4">
            <a
              href="sign-in"
              className="border border-cng-green text-cng-black px-5 py-3 rounded-full font-medium text-center transition-all duration-300 hover:bg-cng-green hover:text-white flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogIn className="mr-2" size={18} /> Login
            </a>
            <a
              href='sign-up' className="bg-cng-green text-white px-5 py-3 rounded-full font-medium text-center transition-all duration-300 hover:bg-cng-darkgreen flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <UserPlus className="mr-2" size={18} /> Register
            </a>
            <a
              href="#contact"
              className="bg-cng-green text-white px-5 py-3 rounded-full font-medium text-center transition-all duration-300 hover:bg-cng-darkgreen"
              onClick={() => setMobileMenuOpen(false)}
            >
              Control Panel <Settings className="inline ml-2" size={16} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

const NavLinks = ({ mobile = false, setMobileMenuOpen = () => { } }: { mobile?: boolean, setMobileMenuOpen?: (open: boolean) => void }) => {
  const links = [
    { name: 'Dashboard', href: '#home' },
    { name: 'Station Data', href: '#features' },
    { name: 'Operations', href: '#team' },
    { name: 'Reports', href: '#contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={cn(
            "font-medium transition-all duration-300",
            mobile
              ? "text-xl py-2 block"
              : "text-cng-black hover:text-cng-green relative group overflow-hidden"
          )}
          onClick={() => mobile && setMobileMenuOpen(false)}
        >
          {link.name}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cng-green transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300"></span>
        </a>
      ))}
    </>
  );
};

export default Header;