'use client';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import {
  Facebook,
  Video,
  Palette,
  PenTool,
  FileText,
  Globe,
  Users,
  Search,
  Camera,
  TrendingUp,
  Play,
  ExternalLink, ArrowRight, 
} from 'lucide-react';

import React, { useState, useEffect } from 'react';

const videoData = [
  {
    url: 'https://www.youtube.com/watch?v=BV-TZy_ECww',
    title: 'Digital Marketing Insights',
  },
  {
    url: 'https://youtu.be/x-ZIpp62e4g?si=6V7Jddpb7vXvefKa',
    title: 'Marketing Strategy Guide',
  },
  {
    url: 'https://youtu.be/YaBvMeZ-YAs?si=De14vpTvpioPNFnp',
    title: 'Business Growth Tips',
  },
  {
    url: 'https://youtu.be/INR9pPb3tD4?si=q3sB6BfoSRAzlURR',
    title: 'Digital Marketing Fundamentals',
  },
  {
    url: 'https://www.youtube.com/@rsstoryanalysis9547',
    title: 'RS Story Analysis Channel',
  },
];

// Utility to extract YouTube ID
const getVideoId = (url) => {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description, gradient = 'from-red-500 to-pink-600' }) => (
  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-red-200 group">
    <div
      className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
    >
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

// YouTube Card Merged
const YouTubeCard = ({ url, title }) => {
  const videoId = getVideoId(url);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
  const isEmbeddable = embedUrl && !url.includes('@');

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 group hover:shadow-xl">
      {isEmbeddable ? (
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={embedUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-t-xl"
          ></iframe>
        </div>
      ) : (
        <div className="text-center p-6">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="mx-auto rounded-lg mb-4 shadow"
            />
          ) : (
            <Play className="w-16 h-16 text-red-500 mx-auto mb-4" />
          )}
          <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
          >
            Watch on YouTube <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  );
};

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const services = [
    {
      icon: Facebook,
      title: 'Ad Run on Facebook / Instagram',
      description: 'Promote your business through professional ad campaigns on Facebook and Instagram.',
    },
    {
      icon: Video,
      title: 'Video Editing Service',
      description: 'Transform raw footage into engaging videos with custom edits and storytelling.',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'High-quality visuals for digital and print media tailored to your brand identity.',
    },
    {
      icon: PenTool,
      title: 'Logo Design',
      description: 'Unique, professional logos that reflect your brand voice and values.',
    },
    {
      icon: FileText,
      title: 'Pamphlet Design',
      description: 'Eye-catching, informative pamphlets for promotions, services, or products.',
    },
    {
      icon: Globe,
      title: 'Website Design and Development',
      description: 'Modern, fast, and responsive websites for businesses and individuals.',
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description:
        'We offer social media marketing services at a very reasonable cost. Everything is taken care of by us — from graphic design to content management.',
    },
    {
      icon: Search,
      title: 'Search Engine Marketing (SEM)',
      description:
        'Enhance your website visibility with SEO services to attract more website clicks and business inquiries from potential customers.',
    },
    {
      icon: Camera,
      title: 'Corporate Video Production',
      description:
        'At a very low cost, you may create stunning videos of your products, services, or client testimonials, explainer & green screen videos.',
    },
  ];

    const fadeInUp = (id) => 
    `transform transition-all duration-1000 ease-out ${
      isVisible[id] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`;

  return (
    <div>
      <BackgroundBeamsWithCollision>
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 font-sans overflow-hidden">
          <section
            id="hero"
            className="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-pink-500/10 to-purple-500/10 z-0" />

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital solutions to elevate your business and enhance your online presence.
              </p>
            </div>
          </section>
        </div>
      </BackgroundBeamsWithCollision>
    <div className="min-h-screen bg-gray-50">

      {/* Services Grid */}
      <section className="py-25 mr-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Digital Marketing Facts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoData.map((video, index) => (
              <YouTubeCard key={index} url={video.url} title={video.title} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-6">
          Let's discuss how our comprehensive digital services can help you achieve your business goals
        </p>
        <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
          Get Started Today
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-gray-400">© 2024 Digital Agency. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default ServicesPage;
