'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'Turbojet öntöződobok',
      emoji: '💧',
      description: 'Professzionális öntözési megoldások'
    },
    {
      title: 'Ipari festékek eladása',
      emoji: '🎨',
      description: 'Minőségi festékek minden felületre'
    },
    {
      title: 'Mezőgazdasági gépek gyártása',
      emoji: '🚜',
      description: 'Modern és hatékony gépek'
    },
    {
      title: 'Gépalkatrészek gyártása- és kereskedelme',
      emoji: '⚙️',
      description: 'Megbízható alkatrészek'
    },
    {
      title: 'Egyedi gépgyártás acélszerkezetek gyártása',
      emoji: '🏗️',
      description: 'Testreszabott megoldások'
    },
    {
      title: 'Vízszivattyúk széles választéka',
      emoji: '🌊',
      description: '(Kardános, Elektromos, Robbanómotoros)'
    }
  ];

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-white">
      {/* Háttér effekt */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -right-48 top-0 bg-green-100/10 rounded-full blur-3xl" />
        <div className="absolute w-[500px] h-[500px] -left-48 bottom-0 bg-teal-100/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Fejléc */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
            Rólunk
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Több mint 10 éves tapasztalattal rendelkezünk a mezőgazdasági gépgyártás területén
          </p>
        </motion.div>

        {/* Szolgáltatások grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{service.emoji}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-gray-600">
                  {service.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Fejlesztési képek */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/fejl2017.jpg"
              alt="Fejlesztés 2017"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/fejl2019.jpg"
              alt="Fejlesztés 2019"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 