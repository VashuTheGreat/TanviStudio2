'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Menu, X } from 'lucide-react';
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const Navbar2 = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <ScrollProgress className="top-[65px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <Link href="/">
              <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                TanviStudio
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link key={label} href={href}>
                  <span
                    className={`relative cursor-pointer transition-colors duration-300 group ${
                      isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>

          {/* CTA Button (Desktop Only) */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-md">
          <div className="flex flex-col space-y-4">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link key={label} href={href}>
                  <span
                    className={`block text-base font-medium transition-colors duration-300 ${
                      isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              );
            })}
            <Link href="/contact">
              <button className="mt-2 bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 w-full">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
