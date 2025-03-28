'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Ellenőrizzük, hogy a termékek oldalon vagyunk-e
  const isProductPage = pathname === '/termekek';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Aktív szekció követése csak a főoldalon
      if (pathname === '/') {
        const sections = ['home', 'products', 'about', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Amikor a mobil menü nyitva van, letiltjuk a görgetést
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    {
      id: 'home',
      href: pathname === '/termekek' ? '/' : '#home',
      title: 'Kezdőlap'
    },
    {
      id: 'products',
      href: '/termekek',
      title: 'Termékek'
    },
    {
      id: 'about',
      href: pathname === '/termekek' ? '/#about' : '#about',
      title: 'Rólunk'
    },
    {
      id: 'contact',
      href: pathname === '/termekek' ? '/#contact' : '#contact',
      title: 'Kapcsolat'
    }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      x: -50,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isProductPage
          ? 'bg-white shadow-lg py-4'
          : isScrolled || isMobileMenuOpen
            ? 'py-4 bg-white shadow-lg' 
            : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <span className={`text-2xl font-bold ${
                isProductPage || isScrolled
                  ? 'bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent'
                  : 'text-white'
              }`}>
                HAROFLEX
              </span>
            </Link>
          </motion.div>

          {/* Hamburger menü gomb */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none z-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke={isMobileMenuOpen ? "#22c55e" : "currentColor"}
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>

          {/* Desktop menü */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isProductPage || isScrolled
                    ? activeSection === item.id
                      ? 'text-green-600'
                      : 'text-gray-600 hover:text-green-600'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobil menü */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 z-50 bg-white md:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="text-xl font-medium text-gray-800 hover:text-green-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
} 