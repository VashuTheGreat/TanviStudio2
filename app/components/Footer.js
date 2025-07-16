'use client';

import React from "react";
import { FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white py-10 px-6 overflow-hidden ">
      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 z-0 animate-[slowPulse_20s_ease-in-out_infinite]"
        style={{ animationDelay: '2s' }}
      >
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
          ]}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 opacity-10"
          )}
        />
      </div>

      {/* ✅ Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold mb-4">
            Tanvi<span className="text-red-500">Studio</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Ad video production, voiceover, dubbing, animation, and digital branding — by RJ Mohit (Akashwani Radio).
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/#" className="hover:text-white">Animation Ads</Link></li>
            <li><Link href="/#" className="hover:text-white">Commercial Shoots</Link></li>
            <li><Link href="/#" className="hover:text-white">Dubbing & Voiceovers</Link></li>
            <li><Link href="/#" className="hover:text-white">Social Media Marketing</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/#" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/#" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/#" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="/#" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Connect With Us</h2>
          <div className="flex space-x-4 text-gray-400 text-xl">
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram />
            </Link>
            <Link href="https://www.youtube.com/@rsstoryanalysis9547" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaYoutube />
            </Link>
            <Link href="https://wa.me/917827574020" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaWhatsapp />
            </Link>
            <Link href="mailto:tanvivoices@gmail.com" className="hover:text-white">
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 mt-10 text-center text-gray-500 text-sm">
        © {currentYear} Tanvi Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
