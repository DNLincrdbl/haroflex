'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

export default function Products() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  
  const products = [
    {
      id: 'turbojet',
      name: 'TURBOJET',
      subtitle: 'Öntöződobok',
      description: 'Professzionális öntözőrendszer nagy területekhez, precíz vízelosztással és automatizált vezérléssel.',
      image: '/images/loadImg1.png',
      features: ['Automatizált vezérlés', 'Nagy hatótávolság', 'Precíz vízelosztás'],
      color: '#4ADE80'
    },
    {
      id: 'jet',
      name: 'JET',
      subtitle: 'Vízágyúk',
      description: 'Nagy teljesítményű vízágyúk különböző méretekben, optimális vízsugár szabályozással.',
      image: '/images/products/jet.jpg',
      features: ['Állítható vízsugár', 'Strapabíró kivitel', 'Könnyű kezelhetőség'],
      color: '#2DD4BF'
    }
  ];

  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section 
      id="products" 
      ref={containerRef}
      className="relative py-22 sm:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Háttér dekoráció */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#4ADE8020,_transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#2DD4BF20,_transparent_70%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
              Fedezze fel termékeinket
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl lg:max-w-none mx-auto mb-12 sm:mb-16">
              Innovatív öntözési megoldásaink között biztosan megtalálja az Ön igényeinek megfelelőt
            </p>

            <Link
              href="/termekek"
              className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-medium text-white bg-gradient-to-r from-green-600 to-teal-600 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-green-500 hover:to-teal-500"
            >
              Teljes termékkatalógus
              <motion.svg 
                className="w-6 h-6 sm:w-7 sm:h-7 ml-3"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/loadImg1.png"
                alt="Öntözőrendszer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">{products[0].name}</h3>
                <p className="text-lg text-gray-200 mb-4">{products[0].subtitle}</p>
                <ul className="flex flex-wrap gap-2 mb-6">
                  {products[0].features.map((feature, i) => (
                    <li key={i} className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                      <svg className="w-4 h-4 mr-1.5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/termekek#${products[0].id}`}
                  className="inline-flex items-center text-sm font-medium hover:underline"
                >
                  Részletek
                  <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Dekoratív elem */}
            <div 
              className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${products[0].color}40, ${products[0].color}20)`,
                filter: 'blur(25px)'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 