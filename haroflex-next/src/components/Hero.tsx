'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Háttér videó */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/images/background.mp4" type="video/mp4" />
      </video>

      {/* Sötétítő overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Tartalom */}
      <div className="relative z-10 h-full flex flex-col items-center text-white text-center px-4">
        {/* Központi tartalom */}
        <div className="w-full max-w-4xl mx-auto md:mt-28 flex md:block flex-1 flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            TURBOJET
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 animate-fade-in-delay px-4 leading-relaxed">
            Cégünk által tervezett, fejlesztett, és gyártott TURBOJET márkanév alatt futó öntöződobok, amelyekkel igyekszünk ügyfeleink számára a legkézenfekvőbb megoldásokat nyújtani a mezőgazdasági öntözésben.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-12">
            <Link
              href="/termekek"
              className="group inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-green-600 to-teal-600 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:from-green-500 hover:to-teal-500"
            >
              Öntözéstechnika
              <motion.span
                className="ml-2 text-base"
                initial={{ y: 0 }}
                animate={{ y: [-2, 2, -2] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                💧
              </motion.span>
            </Link>

            <a
              href="https://mobilhazpont.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-green-600 to-teal-600 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:from-green-500 hover:to-teal-500"
            >
              Mobilházak
              <motion.span
                className="ml-2 text-base"
                initial={{ y: 0 }}
                animate={{ y: [-2, 2, -2] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🏠
              </motion.span>
            </a>
          </div>

          {/* Értesítés */}
          <div className="animate-fade-in-delay-3">
            <div className="mx-auto w-full max-w-lg bg-gradient-to-r from-black/60 to-black/50 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl shadow-lg border border-white/10">
              <div className="flex items-center justify-center mb-1.5">
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/80 animate-bell" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <div className="absolute -top-1 -right-1 h-1.5 w-1.5 bg-white/50 rounded-full animate-ping" />
                </div>
              </div>
              <h2 className="text-sm md:text-base font-semibold text-white/90 mb-1">TISZTELT ÉRDEKLŐDŐK!</h2>
              <p className="text-xs md:text-sm text-white/70">
                A kialakult gazdasági helyzetre való tekintettel árajánlatot kizárólag telefonos egyeztetést követően állítunk ki, jelen árszabási rend visszavonásig érvényes!
              </p>
            </div>
          </div>
        </div>

        {/* Alsó rész */}
        <div className="absolute bottom-0 left-0 right-0 w-full space-y-6 pb-16">
          {/* Széchenyi logók */}
          <div className="flex justify-center items-center animate-fade-in-delay-2">
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 w-fit mx-auto bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-md p-2 md:p-4 rounded-xl md:rounded-2xl border border-white/20">
              <div className="group relative w-24 h-14 sm:w-28 sm:h-16 md:w-32 md:h-18 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-white rounded-lg md:rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl">
                  <Image
                    src="/images/fejl2017.jpg"
                    alt="Széchenyi 2017"
                    fill
                    className="object-contain p-1.5 md:p-2"
                    sizes="(max-width: 640px) 25vw, (max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
                  />
                </div>
              </div>
              <div className="group relative w-24 h-14 sm:w-28 sm:h-16 md:w-32 md:h-18 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-white rounded-lg md:rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl">
                  <Image
                    src="/images/fejl2018.jpg"
                    alt="Széchenyi 2018"
                    fill
                    className="object-contain p-1.5 md:p-2"
                    sizes="(max-width: 640px) 25vw, (max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
                  />
                </div>
              </div>
              <div className="group relative w-24 h-14 sm:w-28 sm:h-16 md:w-32 md:h-18 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-white rounded-lg md:rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl">
                  <Image
                    src="/images/fejl2019.jpg"
                    alt="Széchenyi 2019"
                    fill
                    className="object-contain p-1.5 md:p-2"
                    sizes="(max-width: 640px) 25vw, (max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
} 