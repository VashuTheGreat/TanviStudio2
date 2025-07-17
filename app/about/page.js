"use client"

import React, { useEffect, useState } from 'react';
import { Award, Users, Lightbulb, Mic, PenTool, Video, Star } from 'lucide-react';
import Image from 'next/image';
import { WordRotate } from '@/components/magicui/word-rotate';
import { SparklesText } from '@/components/magicui/sparkles-text';



const slides = [
  {
    title: "Ad run on Facebook / Instagram",
    description:
      "We specialize in crafting engaging video advertisements optimized for Facebook and Instagram audiences. From animated explainers to product showcases, our team delivers high-impact visuals that convert."
  },
  {
    title: "Video Editing Service",
    description:
      "Professional video editing tailored to your brand identity. Whether it is for YouTube, ads, or presentations – we ensure visual excellence."
  },
  {
    title: "Graphic Design",
    description:
      "Eye-catching visuals for digital and print platforms. We design logos, banners, social media creatives, and more."
  }
];




const services = [
  {
    image: "adrun.jpg",
    title: "Ad run on Facebook / Instagram",
    description:
      "We specialize in crafting engaging video advertisements optimized for Facebook and Instagram audiences. From animated explainers to product showcases, our team delivers high-impact visuals that convert.",
  },
  {
    image: "videoEdit.jpg",
    title: "Video Editing Service",
    description:
      "Professional video editing tailored to your brand identity. Whether it is for YouTube, ads, or presentations – we ensure visual excellence.",
  },
  {
    image: "logo.png",
    title: "Logo Design",
    description:
      "Eye-catching visuals for digital and print platforms. We design logos, banners, social media creatives, and more.",
  },
 
  {
    image: "Pumphletdesign.jpg",
    title: "Pamphlet Design",
    description:
      "Eye-catching visuals for digital and print platforms. We design logos, banners, social media creatives, and more.",
  },
  {
    image: "webapp.avif",
    title: "Website Design and Development",
    description:
      "Eye-catching visuals for digital and print platforms. We design logos, banners, social media creatives, and more.",
  },
  {
    image: "seo.avif",
    title: "Search Engine Marketing",
    description:
      "Enhance your website visibility with SEO services to attract more website clicks and business inquiries from potential customers. ",
  },
  {
    image: "Cvp.jpg",
    title: "Corporate Video Production",
    description:
      "At a very low cost, you may create stunning videos of your products, services, or client testimonials, explainer & green screen videos.",
  },
  {
    image: "socialmedia.jpg",
    title: "Social Media Marketing",
    description:
      "We offer social media marketing services at a very reasonable cost. Everything is taken care of by us, from graphic design to content management.",
  },
    {
    image: "Graphicdesign.jpg",
    title: "Graphic Design",
    description:
      "Eye-catching visuals for digital and print platforms. We design logos, banners, social media creatives, and more.",
  },
];



const AboutPage = () => {
  const [isVisible, setIsVisible] = useState({});

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



    const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const fadeInUp = (id) => 
    `transform transition-all duration-1000 ease-out ${
      isVisible[id] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-red-50 text-gray-900 font-sans">

      {/* About Hero Section */}
      <section id="about-hero" className="py-24 px-6 text-center">
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
          About Us
        </h1>
        <p className="text-xl mt-4 max-w-3xl mx-auto text-gray-600">
          We are a passionate team of creatives, voiceover artists, and digital experts dedicated to transforming your brand through powerful storytelling and cutting-edge technology.
        </p>
      </section>

                  {/* What We Do */}
      <section id="services-about" className=" py-20 bg-gradient-to-br from-red-50 via-pink-100 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-1xl font-bold mb-10 text-gray-900"><SparklesText className='text-4xl'>What We Do</SparklesText></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Voiceovers', icon: <Mic className="w-8 h-8" />, text: 'High-quality studio voice recordings in multiple languages.' },
              { title: 'Creative Scripting', icon: <PenTool className="w-8 h-8" />, text: 'Powerful scripts that drive emotion and conversions.' },
              { title: 'Video Production', icon: <Video className="w-8 h-8" />, text: 'Engaging videos with seamless edits and sound sync.' }
            ].map((service, i) => (
              <div key={i} id={`services-${i}`} className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition ${fadeInUp('services-'+i)}`}>
                <div className="text-red-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    {/* Image Section */}
   <section className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center ">

            <div  className="flex flex-col md:flex-row gap-10 items-center">
              {/* Image */}
            

              {/* Text Content */}
              <div className="text-center md:text-left max-w-md">
                <WordRotate  className="text-4xl font-bold text-red-600 mb-4" words={ [
  "Ad run on Facebook / Instagram",
  "Video Editing Service",
  "Graphic Design",
]} />
                <WordRotate  className="text-gray-700 text-l" words={[
  "We specialize in crafting engaging video advertisements optimized for Facebook and Instagram audiences. From animated explainers to product showcases, our team delivers high-impact visuals that convert.",
  "Professional video editing tailored to your brand identity. Whether it is for YouTube, ads, or presentations – we ensure visual excellence.",
  "Eye-catching visuals for digital and print platforms. We design logos, banners, social media creatives, and more.",
]} />
                {/* <h2 className="text-4xl font-bold text-red-600 mb-4">{slide.description}</h2>
                <p className="text-gray-700 text-lg">{slide.description}</p> */}
              </div>
               
            </div>

         <div className="flex justify-center md:justify-start">
             <Image
  src="/marketing.gif"
  alt="Marketing GIF"
  width={400}
  height={300}
  className="rounded-2xl shadow-xl max-w-full h-auto"
  role="img"
  priority
/>

              </div>
      </div>
    </section>




    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid gap-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Left: Image */}
            <div className="flex justify-center">
              <Image
                src={"/" + service.image}
                alt={service.title}
                className="rounded-2xl shadow-xl w-full max-w-[500px] h-auto"
                width={500} 
  height={300} 
              />
            </div>

            {/* Right: Text */}
            <div className="text-center md:text-left max-w-md">
              <h2 className="text-4xl font-bold text-red-600 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700 text-lg">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>


      {/* Our Mission */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60"
            className="w-full rounded-2xl shadow-xl"
            alt="Our Mission"
            width={800}
      height={500}
          />
          <div className={fadeInUp('mission')}>
            <h2 className="text-4xl font-bold mb-4 text-gray-900"><SparklesText>Our Mission</SparklesText></h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower individuals and businesses with captivating audio-visual content that resonates, inspires, and converts. Whether it is a short ad, an audiobook, or a complete branding overhaul — we deliver impact, fast.
            </p>
          </div>
        </div>
      </section>

    <section className="py-20 bg-gradient-to-br from-red-50 via-pink-100 to-white text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        <div>
        {/* 2. Agency Mission */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-7 my-7 rounded-xl text-center text-5xl shadow ">
          <h2 className="text-4xl font-bold">
            We are your one-stop marketing agency for all your needs!
          </h2>
        </div>

        {/* 3. Services List */}
        
          <h2 className="text-5xl font-bold mb-4 p-4 text-center"><SparklesText>Our Services</SparklesText></h2>
          <div className="grid grid-cols-2 font-bold md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
            {[
              "Social Media Marketing",
              "SEO",
              "Google Ads",
              "Website",
              "WhatsApp Marketing",
              "Instagram Optimization",
              "Facebook Optimization",
              "YouTube Optimization",
              "Thumbnails",
              "Logo Design",
              "Voiceover",
              "Script Writing",
              "E-learning",
              "Dubbing",
              "IVR",
              "Advertisement",
              "Documentaries",
              "Radio Show",
              "Transcription",
              "Translation",
              "Male/Female Voiceovers",
              "All Language Voiceovers",
            ].map((service, index) => (
              <span
                key={index}
                className="bg-white px-3 py-2 rounded shadow text-center hover:bg-blue-50 transition"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
     
        

       

       </div>

    </section>


      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-900"><SparklesText>Why too Choose </SparklesText></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
           {[
  { label: "7+ Years Experience", icon: <Star className="w-8 h-8" /> },
  { label: "500+ Projects Done", icon: <Award className="w-8 h-8" /> },
  { label: "24-48hr Delivery", icon: <Lightbulb className="w-8 h-8" /> },
  { label: "200+ Happy Clients", icon: <Users className="w-8 h-8" /> },
].map((item, i) => (
  <div
    key={i}
    id={`why-${i}`} 
    className={`bg-gradient-to-br from-red-500 to-pink-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition ${fadeInUp('why-' + i)}`}
  >
    <div className="mb-4">{item.icon}</div>
    <h4 className="text-xl font-semibold">{item.label}</h4>
  </div>
))}

          </div>
        </div>
      </section>



    </div>
  );
};

export default AboutPage;
