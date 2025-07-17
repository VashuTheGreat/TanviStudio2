"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Star, Award, Users, Zap, CheckCircle, ArrowRight, Globe, Mic, Video, PenTool, Palette, Monitor, Search, TrendingUp, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link'
import Image from 'next/image';

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BoxReveal } from '@/components/magicui/box-reveal';
import { cn } from '@/lib/utils';
import { SparklesText } from '@/components/magicui/sparkles-text';
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

const ProfessionalWebsite = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generateDots = () =>
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
      }));

    setDots(generateDots());
  }, []);
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

const ourServices = [
    {
    name: "Explainer Video",
    src: "/explainer.avif",
    icon: <Play className="w-8 h-8" />,
    description: "Engaging explainer videos for your brand",
    className: "absolute top-32 left-[55%] rotate-[10deg]",
  },
  {
    name: "Lipsyng Video",
    src: "/lypsing.jpg",
    icon: <Video className="w-8 h-8" />,
    description: "Seamless lip-sync video production",
    className: "absolute top-40 left-[25%] rotate-[-7deg]",
  },
  {
    name: "FM Radio",
    src: "/fm.jpg",
    icon: <Globe className="w-8 h-8" />,
    description: "Radio broadcasting and production",
    className: "absolute top-5 left-[40%] rotate-[8deg]",
  },

  {
    name: "Audio Book",
    src: "/audio.avif",
    icon: <PenTool className="w-8 h-8" />,
    description: "Professional audiobook narration",
    className: "absolute top-20 right-[35%] rotate-[2deg]",
  },
  {
    name: "E-Learning",
    src: "/Elearning.avif",
    icon: <Monitor className="w-8 h-8" />,
    description: "Interactive e-learning solutions",
    className: "absolute top-24 left-[45%] rotate-[-7deg]",
  },
  {
    name: "Cartoon Dubbing Or Voices",
    src: "/cartoon.png",
    icon: <Monitor className="w-8 h-8" />,
    description: "Cartoon character voiceovers",
    className: "absolute top-48 left-[35%] rotate-[-6deg]",
  },
  {
    name: "IVR",
    src: "/ivr.jpg",
    icon: <Monitor className="w-8 h-8" />,
    description: "Interactive Voice Response systems",
    className: "absolute top-56 left-[15%] rotate-[3deg]",
  },
    {
    name: "Narration (Story/other)",
    src: "/narration.jpg",
    icon: <Monitor className="w-8 h-8" />,
    description: "Story narration and more",
    className: "absolute top-16 left-[10%] rotate-[6deg]",
  },
  {
    name: "10+ Character Voices)",
    src: "/character.jpg",
    icon: <Monitor className="w-8 h-8" />,
    description: "Multiple character voiceovers",
    className: "absolute top-36 left-[60%] rotate-[-9deg]",
  },
    {
    name: "Dubbing",
    src: "/dubbing.jpg",
    icon: <Mic className="w-8 h-8" />,
    description: "Professional dubbing services with native speakers",
    className: "absolute top-10 left-[20%] rotate-[-5deg]",
  },

];


  const services = [
    {
      title: "Ad run on Facebook/Instagram",
      image: "https://lh5.googleusercontent.com/uq93RkZMz6R6WJW-FQi0FGOvJ4PnNd3NY-7y-GrYpl4t1excWRR_2nBOnmzqfZlaFKbIwKLWvaLUYpdFOP3HWrElkBP_uDVIfZi5vsd0pevcN3aegqUydtq5R4kHaZcrnpB6q4WEhmAuRKgwJzlOd6xgh_pUf7mCbk6JIhaxSR47cuqDcy631Q=w1280",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Strategic social media advertising campaigns"
    },
    {
      title: "Video Editing Service",
      image: "https://lh6.googleusercontent.com/mNHfLQvBcXWOuu4chfGuESXidtCXcCgO_dmakQgmaZ3SDuJkY8BA_VfCq6bekyJreTd34XHj-Rdo1UhFK3QjE_QqDYDaT1F7TLmnI0v2cb3-6j24AHI1-1A7bnbMiRuSW0-87AamrEVK-cR6nww4YtVn2-QM03KUKSlNoT7JV1iwYn1udNX6NA=w1280",
      icon: <Video className="w-6 h-6" />,
      description: "Professional video editing and post-production"
    },
    {
      title: "Graphic Design",
      image: "https://lh4.googleusercontent.com/sPGyuYrSaIEFQHry6DUyLg0tXDF-obmTzsn1ZyzNRMeTuF_r9QvjFvAg-nEWliPIGVhzDFcTfKiN9wOvaaU2XxQmvIXNbLamtMHcjtzt2fgRaSHHrwqjhr3W6XNNcLbpdVOAOq4dkuliPpW-GVPVxME7yy05e9i6Wlm4UXR_23Xhf8-TQdRHyQ=w1280",
      icon: <Palette className="w-6 h-6" />,
      description: "Creative graphic design solutions"
    },
    {
      title: "Website Development",
      image: "https://lh5.googleusercontent.com/YcGxGiqMJ3PCkD8KmdUMgr1yiGzYfcFZoMF4PJIIB7ElFKzN5wCOMCcrj7Sooz6Sr7FFQf7zXLru3QR_pkKCSTBskw4qq76A8WaQSytoVIylZmZGxBoAMOUuTIg1EnnFp6gBzPmSS0LFUO_eQzSBto3aDJVAb8lzs7mIk83EvHq5co1StrkH7Q=w1280",
      icon: <Monitor className="w-6 h-6" />,
      description: "Modern website design and development"
    },
    {
      title: "Search Engine Marketing",
      image: "https://lh6.googleusercontent.com/FNxcOyvAtpfhJs3d19C3OGJ9cH2SXwyt0Jfkciw5GpALlzdIoqL4EaJQFw3bD_z3Sxeq4QIYsVkEH1UOHf-66SeVAAjs1YVnZ0oxbh9x0aN7TIz_4IiTwn5aZf2ANGiyr9S4NPX9BBRycUr1HvYn8g8FBb08IPP1KLdLZKLvS09-Cznld05tew=w1280",
      icon: <Search className="w-6 h-6" />,
      description: "Strategic search engine marketing"
    }
  ];

  const testimonials = [
    {
      quote:
        "Excellent VO of different characters, Timely, Punctual, Eager to get the work perfected. Did more then asked. Will work again",
        name:'Sanyahhayat',
      //designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      quote:
        "Mohit ji is an exceptional voice artist with a rich, engaging tone and remarkable versatility. His professionalism, quick turnaround, and ability to bring scripts to life with perfect emotion and clarity make him a true asset. Highly recommended!",
        name:'Shreyans',
      //designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      quote:
        "Really liked his work, very polite and flexible with the multiple iterations.",
      name: "Promorph",
      //designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      quote:
        "He is fantastic at his work, very high-quality work. I was totally satisfied with this project.",
      name: "lamshudipd",
      //designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      quote:
        "Good. Talented person on fiverr. Will order again.",
      name: "Bon P",
      //designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      quote:
        "Very fast. highly recommended.",
      name: "Narinder Singh",
      // designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
  ];

  const stats = [
    { number: "500", label: "Projects Completed", icon: <Award className="w-8 h-8" /> },
    { number: "50", label: "Views Generated", icon: <Play className="w-8 h-8" /> },
    { number: "200", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
    { number: "7", label: "Years Experience", icon: <Star className="w-8 h-8" /> }
  ];



  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = (id) => 
    `transform transition-all duration-1000 ease-out ${
      isVisible[id] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`;

  const staggeredFadeIn = (id, delay) => 
    `transform transition-all duration-1000 ease-out ${
      isVisible[id] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`;



    useEffect(() => {
  if (testimonials.length > 0) {
    // kuch kaam
  }
}, [testimonials.length]); // ✅ Ab warning nahi aayegi



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 font-sans overflow-hidden">
      {/* Navigation */}

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-pink-500/10 to-purple-500/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
      {dots.map((style, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-pulse"
          style={style}
        />
      ))}
    </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={fadeInUp('hero')}>
            <BoxReveal boxColor={"#db2777"} duration={0.5}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Professional Creative Solutions
            </h1>
            </BoxReveal>
            <BoxReveal boxColor={"#db2777"} duration={0.5}>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your brand with studio-quality voiceovers, expert scriptwriting, and cutting-edge digital marketing solutions. 
              <span className="text-red-600 font-semibold"> Fast delivery in 24-48 hours.</span>
            </p>
            </BoxReveal>
            <BoxReveal boxColor={"#db2777"} duration={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={'/contact'}>
              <button className="group bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
             <Link href={'/projects'}>
              <button className="group border-2 border-red-500 text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
             </Link>
            </div>
            </BoxReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-red-500" />
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group hover:scale-105 transition-transform duration-300 ${staggeredFadeIn('stats', index * 200)}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl mb-4 group-hover:shadow-lg transition-shadow">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  
                  <NumberTicker  value={stat.number}/>+
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${fadeInUp('services')}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text ">
              <SparklesText>Our Premium Services</SparklesText>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive creative solutions delivered by industry experts with years of experience
            </p>
          </div>


<DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
  <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
    If it’s your first step into digital — make it powerful.
  </p>

  {ourServices.map((item, index) => (
    <DraggableCardBody key={index} className={item.className}>
      <img
        src={item.src}
        alt={item.name}
        className="pointer-events-none relative z-10 h-80 w-80 object-cover"
      />
      <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
        {item.name}
      </h3>
      <p className="mt-1 text-center text-sm text-neutral-500 dark:text-neutral-400 max-w-xs px-2">
        {item.description}
      </p>
    </DraggableCardBody>
  ))}
</DraggableCardContainer>


        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${fadeInUp('portfolio')}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-red-600">Award-Winning</span> Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing successful projects that have generated millions of views and driven exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Animation Video Ad",
                video: "https://www.youtube.com/embed/lddkJN67GjE",
                views: "2.3M views",
                category: "Animation"
              },
              {
                title: "Hing Product Ad",
                video: "https://www.youtube.com/embed/bx4d3Nfaa10",
                views: "1.8M views",
                category: "Product"
              },
              {
                title: "Pharmacy Ad",
                video: "https://www.youtube.com/embed/sZTkPK1lpdE",
                views: "3.1M views",
                category: "Healthcare"
              }
            ].map((project, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105 ${staggeredFadeIn('portfolio', index * 100)}`}
              >
               <Link
  href="/projects"
  className="block group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105"
>
  <div className="aspect-w-16 aspect-h-9 relative">
    <iframe
      className="w-full h-56 rounded-t-2xl"
      src={project.video + "?autoplay=0&mute=1"}
      title={project.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      frameBorder="0"
    />
      {/* <HeroVideoDialog
        className="block dark:hidden w-full h-56 rounded-t-2xl"
        animationStyle="from-center"
        videoSrc={project.video + "?autoplay=0&mute=1"}
        thumbnailAlt="Hero Video"
        title={project.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      /> */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
    <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {project.category}
    </div>
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-red-600 transition-colors">
      {project.title}
    </h3>
    <div className="flex items-center justify-between">
      <span className="text-gray-600 flex items-center space-x-2">
        <Play className="w-4 h-4" />
        <span>{project.views}</span>
      </span>
      <span className="text-red-600 font-semibold hover:text-red-700 transition-colors">
        View Project
      </span>
    </div>
  </div>
</Link>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Head Rj Mohit Mathuriya */}
       <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${fadeInUp('team')}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Meet Our <span className="text-red-600">Organizer Head</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`${fadeInUp('team')}`}>
              <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl blur opacity-20"></div>
              {/* <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"> */}
                <Image
                  src="/rjmohitmathuriya.jpg"
                  alt="RJ Mohit Mathuriya"
                  width={1280}
                  height={384} // approximate 16:9 for h-96
                  className="relative object-cover rounded-2xl shadow-2xl"
                />
              {/* </BackgroundGradient> */}
              </div>
            </div>



            

            <div className={`${fadeInUp('team')}`}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Rj Mohit Mathuriya</h3>
                  <p className="text-lg text-red-600 font-semibold mb-4">Radio Jockey & Voice Artist</p>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600">8+ Years Experience</span>
                  </div>
                </div>

                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    RJ Mohit Mathuriya, a talented voice artist from Akashvani Radio, has worked across radio, television, YouTube, and various brand ads. He has lent his voice and creativity to major brands like PhonePe, NoBroker.com, Jooyo Hotel, and Fastrack, as well as important government ads and documentaries including campaigns for PNB Bank, Corona awareness, and the Balika Kaushalya Yojana with Prime Minister Narendra Modi. His voice connects with people and brings stories to life across every platform.
                  </p>
                  <p>
                 With years of experience in the media industry, Mohit has made his mark across radio, television, YouTube, and digital platforms. He has lent his voice to popular brand ads for PhonePe, NoBroker.com, Jooyo Hotel, and Fastrack, delivering performances that connect with audiences. Mohit has also contributed to major government campaigns and documentaries, including those for PNB Bank, COVID-19 awareness, and the Balika Kaushalya Yojana featuring Prime Minister Narendra Modi. Known for his clear voice and engaging delivery, he remains a trusted name in Indian media.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {['Working for Radio', ' Television', 'Youtube','Radio Jockey','Voice Artist' ].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                <Link href={'/contact'}>
                <button className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Contact US
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${fadeInUp('team')}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Meet Our <span className="text-red-600">Expert Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`${fadeInUp('team')}`}>
              <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl blur opacity-20"></div>
              {/* <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"> */}
                <Image
                  src="/Editor.jpg"
                  alt="Dheeraj prajapati"
                  width={1280}
                  height={384} // approximate 16:9 for h-96
                  className="relative object-cover rounded-2xl shadow-2xl"
                />
              {/* </BackgroundGradient> */}
              </div>
            </div>



            

            <div className={`${fadeInUp('team')}`}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Dheeraj prajapati</h3>
                  <p className="text-lg text-red-600 font-semibold mb-4">Video Editor & Creative Writer</p>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600">8+ Years Experience</span>
                  </div>
                </div>

                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Professional video editor and creative writer with over 8 years of industry experience. 
                    Specializes in crafting compelling narratives and producing high-quality video content 
                    that engages audiences and drives results.
                  </p>
                  <p>
                    From advertisement scripts to storytelling, Dheeraj brings creativity and technical 
                    expertise to every project, ensuring your message resonates with your target audience.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {['Video Editing', 'Script Writing', 'Creative Direction', 'Post Production'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                <Link href={'/contact'}>
                <button className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Contact Dheeraj
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
          <div className={`text-center mb-6 ${fadeInUp('testimonials')}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Our <span className="text-red-600">Clients Say</span>
            </h2>
          </div>

          <div className="h-10rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="normal"
            />
          </div>

    

        </div>
      </section>


                  </div>
                );
          };
          
          export default ProfessionalWebsite;