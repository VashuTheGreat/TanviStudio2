"use client";

import React, { useState, useEffect,useRef } from "react";
import Image from 'next/image';
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Globe } from "@/components/magicui/globe";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipText } from "@/components/magicui/flip-text";
import { SparklesText } from "@/components/magicui/sparkles-text";

const projectVideos = [
  {
    id: "lddkJN67GjE",
    title: "Ad done - Piles Doctor",
  },
  {
    id: "bx4d3Nfaa10",
    title: "Ad done - Hing Product",
  },
  {
    id: "sZTkPK1lpdE",
    title: "Ad done - Pharmacy",
  },
  {
    id: "04uSz8t7eJM",
    title: "Ad done - Digital Marketing",
  },
  {
    id: "KiGdA4-aZuA",
    title: "Ad done - JOOYOO HOTEL",
  },
 
];

const voiceOverVideos = [
  {
    id: "EGE_MoUsmRU",
    title: "Telecomm Ad",
  },
  {
    id: "kZfgmeisXog",
    title: "Buddha Story",
  },
  {
    id: "5Hopxv_27CE",
    title: "Cartoon Story",
  },
  {
    id: "vjZwU5DCk-4",
    title: "Comedy Story Sample",
  },
  {
    id: "y03yc1ibYzY",
    title: "Bihar Corona Ad",
  },
   {
    id: "EGE_MoUsmRU",
    title: "Telecomm Ad",
  },
 
 
];

const driveVideos = [
  {
    id: '1fn9RLG72CEOZR_idYmcMaiHgK1hIva4_',
    title: 'YouTube Sample 1'
  },
  {
    id: '1fqXVk1CBttkW9b52LplKlZc99wzHu4s5',
    title: 'YouTube Sample 3'
  },
  {
    id: '1fv-vgYzr1MmCVE_URUj14GtdkcncsDTc',
    title: 'YouTube Sample 4'
  },
  {
    id: '1fqFBZEU2YvKtabBVh0AR0bnKfGWsmYuN',
    title: 'YouTube Story 2'
  }
];

const otherVo = [
  {
    name: "skyrider e rikshaw",
    src: "https://drive.google.com/file/d/1akJFpOaLWgrJWsi2RhObo0f2LDhHWdfg/preview",
  },
  {
    name: "phone pay ad",
    src: "https://drive.google.com/file/d/1bCyOd6pFTv4r5ZKqqf67EMrM6GYVCjNX/preview",
  },
  {
    name: "govrnment Bank fraud ad",
    src: "https://drive.google.com/file/d/1bB2KLnb8bpH2j5sKZDWIcnJBqySGb2s5/preview",
  },
  {
    name: "fraud call",
    src: "https://drive.google.com/file/d/1bH37CmICeiIx-_jMO5P1BwknUtT_YKV5/preview",
  },
  {
    name: "fastrack company",
    src: "https://drive.google.com/file/d/1azmzivY_Z3G7X1cG2kBvnLjEywKeHCub/preview",
  },
  {
    name: "Buddha & The Beggar – Voice Narration",
    src: "https://drive.google.com/file/d/1b6FQPwaeParU-PAZbcKPsyNxmPa2ysXr/preview",
  },
];

const ProjectPage = () => {

  const [activeVideo, setActiveVideo] = useState(null);
  const [activeVideo2, setActiveVideo2] = useState(null);


const canvasRef = useRef(null);

useEffect(() => {
  if (canvasRef.current) {
    canvasRef.current.enable(); // if enable is a valid method
  }
}, []);



  return (
    
<div className="bg-white text-gray-900">
<BackgroundBeamsWithCollision>
  <BackgroundLines className="w-full flex flex-col items-center justify-center px-4">
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-20">

      {/* Globe Background Centered */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] max-w-[500px] aspect-square animate-spin-slow opacity-30">
          <Globe />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-pink-500/10 to-purple-500/10 z-0" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <h1 className="text-[15vw] m-4 font-extrabold bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-none">
          <TypingAnimation className="text-7xl">Our Services</TypingAnimation>
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-bold text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Comprehensive digital solutions to elevate your business and enhance your online presence.
          From branding to conversion-optimized campaigns, we create digital experiences that truly grow your brand.
        </p>
      </div>

    </section>
  </BackgroundLines>
</BackgroundBeamsWithCollision>


      {/* Video Gallery */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {projectVideos.map((video, index) => (
          <div
            key={index}
            className="relative group border rounded-xl overflow-hidden shadow-md"
          >
            {activeVideo === index ? (
              <iframe
                className="w-full h-64"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                className="cursor-pointer relative w-full h-64"
                onClick={() => setActiveVideo(index)}
              >
               <Image
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                width={480} 
                height={270}
                className="w-full h-full object-cover"
              />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition">
                  <svg
                    className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
            </div>
          </div>
        ))}
      </section>


      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
          <SparklesText className="text-6xl">Our Voice Over</SparklesText>
        </h2>
        <div className="flex space-x-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide justify-center">
          {voiceOverVideos.map((video, index) => (
            <div
              key={index}
              className="min-w-[250px] max-w-[250px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg border bg-white"
            >
              {activeVideo2 === index ? (
                <iframe
                  className="w-full h-[444px]"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  className="cursor-pointer relative w-full h-[444px]"
                  onClick={() => setActiveVideo2(index)}
                >
                 <Image
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  width={480}         // You can adjust this
                  height={270}        // Thumbnail ratio is 16:9 (480x270)
                  className="w-full h-full object-cover"
                />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/60 transition">
                    <svg
                      className="w-16 h-16 text-white opacity-90 hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>



     <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
          <SparklesText className="text-5xl">Some of Our Voiceovers Have Millions of Views</SparklesText>
        </h2>
        <div className="flex space-x-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide justify-center">
          {driveVideos.map((video, index) => (
            <div
              key={index}
              className="min-w-[250px] max-w-[250px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg border bg-white"
            >
              <iframe
                src={`https://drive.google.com/file/d/${video.id}/preview`}
                title={video.title}
                className="w-full h-[444px]"
                allow="autoplay; fullscreen"
                allowFullScreen
                frameBorder="0"
              ></iframe>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Some Other Voiceovers */}
<section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 rounded-3xl shadow-xl max-w-3xl mx-auto mt-16 text-center">
  <h2 className="text-3xl font-extrabold text-gray-800 mb-8 tracking-tight text-red-600">
    <SparklesText className="text-4xl">🎙️ Explore More of Mohit&apos;s Voice Magic</SparklesText>
  </h2>
  <p className="text-gray-600 mb-10 text-sm sm:text-base max-w-xl mx-auto">
    Dive into a selection of diverse voice-over samples delivered with precision, emotion, and clarity. Whether it&apos;s storytelling, explainer, or commercial — Mohit adapts seamlessly to every tone.
  </p>

  <div className="space-y-8">
     
<div className="bg-white border border-gray-200 p-5 rounded-xl shadow-inner">
  <p className="text-yellow-600 text-3xl font-bold mb-3">✨ Featured Sample</p>
</div>


    {/* Other Voice Samples */}
    <div className="grid sm:grid-cols-2 gap-6">
      {otherVo.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-left">
          <p className="text-sm font-semibold mb-2 text-orange-700">🎧 {item.name}</p>
          <iframe
            src={item.src}
            width="100%"
            height="50"
            allow="autoplay"
            className="w-full rounded"
          ></iframe>
        </div>
      ))}
    </div>
  </div>
</section>







      {/* CTA */}
      <section className=" bg-gradient-to-r from-red-600 to-pink-600 text-white text-center p-20 max-w-6xl my-25 m-auto px-4 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-6">
          Let&apos; discuss how our comprehensive digital services can help you achieve your business goals
        </p>
        <Link href={'/contact'}>
        
        <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
          Get Started Today
        </button>
        
        </Link>
      </section>
    </div>
  );
};

export default ProjectPage;
