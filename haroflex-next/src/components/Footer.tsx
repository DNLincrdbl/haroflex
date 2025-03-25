'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50">
      {/* Dekoratív elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Fő tartalom */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Logo és leírás */}
          <div className="md:col-span-4 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/" className="inline-block">
                <span className="text-2xl font-semibold text-gray-900">
                  Haroflex
                </span>
              </Link>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                A Haroflex Kft. több mint 10 éves tapasztalattal rendelkezik a TURBOJET öntöződobok gyártásában. 
                Minőségi termékeinkkel és szolgáltatásainkkal állunk partnereink rendelkezésére.
              </p>
            </motion.div>
          </div>

          {/* Gyors linkek */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            <h3 className="text-gray-900 font-semibold mb-4">Navigáció</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#products" className="text-gray-600 hover:text-green-600 transition-colors">
                  Termékek
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-600 hover:text-green-600 transition-colors">
                  Rólunk
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-600 hover:text-green-600 transition-colors">
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Termékek */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3 space-y-4"
          >
            <h3 className="text-gray-900 font-semibold mb-4">Termékeink</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/termekek#turbojet" className="text-gray-600 hover:text-green-600 transition-colors">
                  Turbojet öntöződobok
                </Link>
              </li>
              <li>
                <Link href="/termekek#jet" className="text-gray-600 hover:text-green-600 transition-colors">
                  Jet vízágyúk
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Kapcsolat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-3 space-y-4"
          >
            <h3 className="text-gray-900 font-semibold mb-4">Elérhetőség</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <span className="text-xl mr-2">📍</span>
                Domaszék, Tanya 581, 6781
              </p>
              <p className="flex items-center text-gray-600">
                <span className="text-xl mr-2">📧</span>
                <a href="mailto:haroflexkft@gmail.com" className="hover:text-green-600 transition-colors">
                  haroflexkft@gmail.com
                </a>
              </p>
              <p className="flex items-center text-gray-600">
                <span className="text-xl mr-2">📞</span>
                <a href="tel:+36301234567" className="hover:text-green-600 transition-colors">
                  +36 30 123 4567
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Alsó sáv */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} Haroflex Kft. Minden jog fenntartva.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                Adatvédelmi irányelvek
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                ÁSZF
              </Link>
              <Link href="/cookies" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                Cookie szabályzat
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 