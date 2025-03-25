'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Termék típus definíció
type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  technicalDetails: {
    label: string;
    value: string;
  }[];
  images: string[];
};

// Termékek adatai
const products: Product[] = [
  {
    id: 'turbojet-90-400',
    name: 'TURBOJET 90/400',
    category: 'Öntöződobok',
    description: 'Nagy teljesítményű öntöződob 90mm átmérőjű és 400m hosszú tömlővel. Ideális nagyobb területek hatékony öntözéséhez.',
    features: [
      'Automatikus visszatekerés',
      'Állítható sebesség',
      'Beépített nyomásmérő',
      'Rozsdamentes acél alkatrészek',
      'GPS vezérlési lehetőség',
      'Távoli vezérlés okostelefonról',
      'Forgózsámolyos dob elforgatás',
      'Gyors öntözési funkció (kb. 1h/100m)',
      'Állandó sebességű tömlőbevontatás',
      'Nagy teherbírású fúvott gumiköpenyek',
      'Hajtóműbe integrált vízturbina (COMET)',
      '6 bordás kardáncsonk a gépi becsévéléshez',
      'Négy fokozatú tömlőbevontatás+bypass funkció',
      'Állítható nyomtáv a vízágyú kocsin és a dobkocsin is',
      'Hidraulikus letalpaló rendszer'
    ],
    technicalDetails: [
      { label: 'Tömlő átmérő', value: '90 mm' },
      { label: 'Tömlő hossz', value: '400 m' },
      { label: 'Max. nyomás', value: '12 bar' },
      { label: 'Öntözési szélesség', value: 'max. 90 m' },
      { label: 'Vízhozam', value: '50-120 m³/h' },
      { label: 'Tömlő falvastagság', value: '9.5 mm' }
    ],
    images: ['/images/turbojet90_400.jpg', '/images/turbojet90_400.jpg']
  },
  {
    id: 'turbojet-90-350',
    name: 'TURBOJET 90/350',
    category: 'Öntöződobok',
    description: 'Nagy teljesítményű öntöződob 90mm átmérőjű és 350m hosszú tömlővel. Kiváló választás nagyobb gazdaságok számára.',
    features: [
      'Automatikus visszatekerés',
      'Állítható sebesség',
      'Beépített nyomásmérő',
      'Rozsdamentes acél alkatrészek',
      'Forgózsámolyos dob elforgatás',
      'Gyors öntözési funkció (kb. 1h/100m)',
      'Állandó sebességű tömlőbevontatás',
      'Nagy teherbírású fúvott gumiköpenyek',
      'Hajtóműbe integrált vízturbina (COMET)',
      '6 bordás kardáncsonk a gépi becsévéléshez',
      'Négy fokozatú tömlőbevontatás+bypass funkció',
      'Állítható nyomtáv a vízágyú kocsin és a dobkocsin is',
      'Hidraulikus letalpaló rendszer'
    ],
    technicalDetails: [
      { label: 'Tömlő átmérő', value: '90 mm' },
      { label: 'Tömlő hossz', value: '350 m' },
      { label: 'Max. nyomás', value: '10 bar' },
      { label: 'Öntözési szélesség', value: 'max. 120 m' },
      { label: 'Vízhozam', value: '50-120 m³/h' },
      { label: 'Tömlő falvastagság', value: '9.5 mm' }
    ],
    images: ['/images/turbojet90_350.jpg', '/images/turbojet90_350.jpg']
  },
  {
    id: 'turbojet-75-350',
    name: 'TURBOJET 75/350',
    category: 'Öntöződobok',
    description: 'Közepes méretű öntöződob 75mm átmérőjű és 350m hosszú tömlővel. Tökéletes választás közepes méretű területek öntözéséhez.',
    features: [
      'Kompakt kialakítás',
      'Egyszerű kezelhetőség',
      'Beépített nyomásmérő',
      'Állítható sebesség',
      'Automata leállítás',
      'Forgózsámolyos dob elforgatás',
      'Gyors öntözési funkció',
      'Állandó sebességű tömlőbevontatás',
      'Nagy teherbírású fúvott gumiköpenyek',
      'Hajtóműbe integrált vízturbina (COMET)',
      '6 bordás kardáncsonk a gépi becsévéléshez',
      'Extra vastag KPE tömlő'
    ],
    technicalDetails: [
      { label: 'Tömlő átmérő', value: '75 mm' },
      { label: 'Tömlő hossz', value: '350 m' },
      { label: 'Max. nyomás', value: '10 bar' },
      { label: 'Öntözési szélesség', value: 'max. 70 m' },
      { label: 'Vízhozam', value: '30-90 m³/h' },
      { label: 'Tömlő falvastagság', value: '7.5 mm' }
    ],
    images: ['/images/turbojet75_350.jpg', '/images/turbojet75_350.jpg']
  },
  {
    id: 'turbojet-75-300',
    name: 'TURBOJET 75/300',
    category: 'Öntöződobok',
    description: 'Közepes méretű öntöződob 75mm átmérőjű és 300m hosszú tömlővel. Ideális választás közepes területek öntözéséhez.',
    features: [
      'Kompakt kialakítás',
      'Egyszerű kezelhetőség',
      'Beépített nyomásmérő',
      'Állítható sebesség',
      'Automata leállítás',
      'Forgózsámolyos dob elforgatás',
      'Gyors öntözési funkció',
      'Állandó sebességű tömlőbevontatás',
      'Nagy teherbírású fúvott gumiköpenyek',
      'Hajtóműbe integrált vízturbina (COMET)',
      '6 bordás kardáncsonk a gépi becsévéléshez',
      'Extra vastag KPE tömlő'
    ],
    technicalDetails: [
      { label: 'Tömlő átmérő', value: '75 mm' },
      { label: 'Tömlő hossz', value: '300 m' },
      { label: 'Max. nyomás', value: '10 bar' },
      { label: 'Öntözési szélesség', value: 'max. 70 m' },
      { label: 'Vízhozam', value: '30-90 m³/h' },
      { label: 'Tömlő falvastagság', value: '7.5 mm' }
    ],
    images: ['/images/turbojet75_300.jpg', '/images/turbojet75_300.jpg']
  },
  {
    id: 'turbojet-63-330',
    name: 'TURBOJET 63/330',
    category: 'Öntöződobok',
    description: 'Kompakt öntöződob 63mm átmérőjű és 330m hosszú tömlővel, ideális kisebb és közepes területekhez.',
    features: [
      '3 kerekű vízágyú kocsi',
      '3 fokozatú tömlőbevontatás',
      'Bevontatás végállás kapcsoló',
      'Le-fel hajtható támasztólábak',
      'Alumínium vízturbina ház+rotor',
      'Gyors öntözés funkció',
      'Állítható magasságú letalpaló támasz',
      'Extra vastag KPE tömlő',
      'Forgózsámolyos dob elforgatás',
      '6 bordás kardáncsonk',
      'Egyenletes sebességű tömlőbevontatás'
    ],
    technicalDetails: [
      { label: 'Tömlő átmérő', value: '63 mm' },
      { label: 'Tömlő hossz', value: '330 m' },
      { label: 'Max. nyomás', value: '10 bar' },
      { label: 'Öntözési szélesség', value: 'max. 80 m' },
      { label: 'Vízhozam', value: '25-70 m³/h' },
      { label: 'Tömlő falvastagság', value: '7 mm' }
    ],
    images: ['/images/turbojet63_330.jpg', '/images/turbojet63_330.jpg']
  },
  {
    id: 'turbojet-63-300',
    name: 'TURBOJET 63/300',
    category: 'Öntöződobok',
    description: 'Kompakt öntöződob 63mm átmérőjű és 300m hosszú tömlővel, ideális kisebb területekhez.',
    features: [
      '3 kerekű vízágyú kocsi',
      '3 fokozatú tömlőbevontatás',
      'Bevontatás végállás kapcsoló',
      'Le-fel hajtható támasztólábak',
      'Alumínium vízturbina ház+rotor',
      'Gyors öntözés funkció',
      'Állítható magasságú letalpaló támasz',
      'Extra vastag KPE tömlő',
      'Forgózsámolyos dob elforgatás',
      '6 bordás kardáncsonk',
      'Egyenletes sebességű tömlőbevontatás'
    ],
    technicalDetails: [
      { label: 'Tömlő átmérő', value: '63 mm' },
      { label: 'Tömlő hossz', value: '300 m' },
      { label: 'Max. nyomás', value: '10 bar' },
      { label: 'Öntözési szélesség', value: 'max. 80 m' },
      { label: 'Vízhozam', value: '25-70 m³/h' },
      { label: 'Tömlő falvastagság', value: '7 mm' }
    ],
    images: ['/images/turbojet63_300.jpg', '/images/turbojet63_300.jpg']
  },
  {
    id: 'turbojet-50-240',
    name: 'TURBOJET 50/240',
    category: 'Öntöződobok',
    description: 'Kisméretű öntöződob 50mm átmérőjű és 240m hosszú tömlővel, tökéletes kisebb területek öntözéséhez.',
    features: [
      '3 fokozatú tömlőbevontatás',
      'Vízágyú típusa: JET szektoros',
      'Bevontatás végállás kapcsoló',
      'Alumínium vízturbina ház+rotor',
      'Gyors öntözés funkció',
      'Extra vastag KPE tömlő',
      'Alacsony üzemi nyomástól működő rendszer',
      'Forgózsámolyos dob elforgatás (opcionális)'
    ],
    technicalDetails: [
      { label: 'Tömlő átmérő', value: '50 mm' },
      { label: 'Tömlő hossz', value: '240 m' },
      { label: 'Max. nyomás', value: '10 bar' },
      { label: 'Öntözési szélesség', value: 'max. 55 m' },
      { label: 'Vízhozam', value: '15-40 m³/h' },
      { label: 'Tömlő falvastagság', value: '5 mm' }
    ],
    images: ['/images/turbojet50_240.jpg', '/images/turbojet50_240-forg.jpg']
  },
  {
    id: 'turbojet-50-200',
    name: 'TURBOJET 50/200',
    category: 'Öntöződobok',
    description: 'Kisméretű öntöződob 50mm átmérőjű és 200m hosszú tömlővel, ideális kisebb területek öntözéséhez.',
    features: [
      '3 fokozatú tömlőbevontatás',
      'Vízágyú típusa: JET szektoros',
      'Bevontatás végállás kapcsoló',
      'Alumínium vízturbina ház+rotor',
      'Gyors öntözés funkció',
      'Extra vastag KPE tömlő',
      'Alacsony üzemi nyomástól működő rendszer',
      'Forgózsámolyos dob elforgatás (opcionális)'
    ],
    technicalDetails: [
      { label: 'Tömlő átmérő', value: '50 mm' },
      { label: 'Tömlő hossz', value: '200 m' },
      { label: 'Max. nyomás', value: '10 bar' },
      { label: 'Öntözési szélesség', value: 'max. 55 m' },
      { label: 'Vízhozam', value: '15-40 m³/h' },
      { label: 'Tömlő falvastagság', value: '5 mm' }
    ],
    images: ['/images/turbojet50_200.jpg', '/images/turbojet50_200-forg.jpg']
  },
  {
    id: 'jet-65',
    name: 'JET 65',
    category: 'Vízágyúk',
    description: 'Nagy hatótávolságú vízágyú precíziós öntözéshez. Kiváló választás amikor pontos és hatékony öntözésre van szükség.',
    features: [
      'Állítható szórási szög',
      'Nagy hatótávolság',
      'Precíz vízelosztás',
      'Robusztus kialakítás',
      'Alacsony karbantartási igény',
      'Szektorálható rotoros kialakítás',
      'Többféle fúvóka méret (20-32mm)'
    ],
    technicalDetails: [
      { label: 'Átmérő', value: '65 mm' },
      { label: 'Hatótávolság', value: '45-65 m' },
      { label: 'Üzemi nyomás', value: '3-7 bar' },
      { label: 'Vízhozam', value: '28-108 m³/h' },
      { label: 'Súly', value: '9.0 kg' },
      { label: 'Csatlakozó méret', value: '2.5"' }
    ],
    images: ['/images/jet65.jpg', '/images/jet65-2.jpg']
  },
  {
    id: 'jet-40',
    name: 'JET 40',
    category: 'Vízágyúk',
    description: 'Kompakt vízágyú kisebb területekhez. Ideális választás amikor rugalmas és hatékony öntözési megoldásra van szükség.',
    features: [
      'Kompakt méret',
      'Könnyű telepíthetőség',
      'Állítható szórási szög',
      'Energiahatékony működés',
      'Többféle fúvóka méret (10-22mm)'
    ],
    technicalDetails: [
      { label: 'Átmérő', value: '40 mm' },
      { label: 'Hatótávolság', value: '25-40 m' },
      { label: 'Üzemi nyomás', value: '2-6 bar' },
      { label: 'Vízhozam', value: '7-44 m³/h' },
      { label: 'Súly', value: '6.0 kg' },
      { label: 'Csatlakozó méret', value: '2"' }
    ],
    images: ['/images/jet40.jpg', '/images/jet40-2.jpg']
  },
  {
    id: 'atom-42',
    name: 'ATOM 42',
    category: 'Vízágyúk',
    description: 'Közepes méretű vízágyú kiváló teljesítménnyel és megbízható működéssel.',
    features: [
      'Robusztus kialakítás',
      'Állítható szórási szög',
      'Többféle fúvóka opció',
      'Optimális vízelosztás',
      'Tartós anyagok'
    ],
    technicalDetails: [
      { label: 'Átmérő', value: '42 mm' },
      { label: 'Csatlakozó méret', value: '2"' },
      { label: 'Fúvókák', value: '12-22 mm' }
    ],
    images: ['/images/atom42.jpg', '/images/atom42-2.jpg']
  },
  {
    id: 'atom-28',
    name: 'ATOM 28',
    category: 'Vízágyúk',
    description: 'Kompakt vízágyú kisebb területekhez, ideális választás kertészetek és kisebb gazdaságok számára.',
    features: [
      'Kompakt kialakítás',
      'Könnyű kezelhetőség',
      'Állítható szórási szög',
      'Gazdaságos üzemeltetés'
    ],
    technicalDetails: [
      { label: 'Súly', value: '1.68 kg' },
      { label: 'Vízigény', value: '6.5-18.8 m³/h' },
      { label: 'Üzemi nyomás', value: '2-5 bar' },
      { label: 'Csatlakozó méret', value: '1.5"' },
      { label: 'Fúvókák', value: '10-14 mm' }
    ],
    images: ['/images/atom28.jpg', '/images/atom28-2.jpg']
  },
  {
    id: 'b-30',
    name: 'B 30',
    category: 'Vízágyúk',
    description: 'Sokoldalú vízágyú optimális teljesítménnyel és megbízható működéssel.',
    features: [
      'Univerzális felhasználás',
      'Állítható szórási szög',
      'Többféle fúvóka opció',
      'Megbízható működés'
    ],
    technicalDetails: [
      { label: 'Súly', value: '1.80 kg' },
      { label: 'Vízigény', value: '6-23.5 m³/h' },
      { label: 'Üzemi nyomás', value: '2-6 bar' },
      { label: 'Csatlakozó méret', value: '1.5"' },
      { label: 'Fúvókák', value: '8-14 mm' }
    ],
    images: ['/images/b30.jpg', '/images/b30-2.jpg']
  },
  {
    id: 'kpe-90',
    name: 'KPE 90/10',
    category: 'KPE Csövek',
    description: 'Nagy átmérőjű KPE cső professzionális öntözőrendszerekhez.',
    features: [
      'Extra vastag falvastagság',
      'Kiváló UV állóság',
      'Hosszú élettartam',
      'Magas nyomásállóság'
    ],
    technicalDetails: [
      { label: 'Átmérő', value: '90 mm' },
      { label: 'Falvastagság', value: '10 mm' },
      { label: 'Max. nyomás', value: '10 bar' },
      { label: 'Hossz', value: '300-500 m' },
      { label: 'Súly', value: '0.41 fm/kg' }
    ],
    images: ['/images/kpe.jpg']
  },
  {
    id: 'kpe-75',
    name: 'KPE 75/7.5',
    category: 'KPE Csövek',
    description: 'Közepes átmérőjű KPE cső sokoldalú felhasználásra.',
    features: [
      'Optimális falvastagság',
      'UV stabil',
      'Tartós kivitel',
      'Rugalmas felhasználás'
    ],
    technicalDetails: [
      { label: 'Átmérő', value: '75 mm' },
      { label: 'Falvastagság', value: '7.5 mm' },
      { label: 'Max. nyomás', value: '10 bar' },
      { label: 'Hossz', value: '200-400 m' },
      { label: 'Súly', value: '0.64 fm/kg' }
    ],
    images: ['/images/kpe.jpg']
  },
  {
    id: 'kpe-63',
    name: 'KPE 63/7',
    category: 'KPE Csövek',
    description: 'Megbízható KPE cső közepes méretű öntözőrendszerekhez.',
    features: [
      'Stabil falvastagság',
      'UV védelem',
      'Megbízható minőség',
      'Sokoldalú használat'
    ],
    technicalDetails: [
      { label: 'Átmérő', value: '63 mm' },
      { label: 'Falvastagság', value: '7 mm' },
      { label: 'Max. nyomás', value: '10 bar' },
      { label: 'Hossz', value: '300-330 m' },
      { label: 'Súly', value: '0.82 fm/kg' }
    ],
    images: ['/images/kpe.jpg']
  },
  {
    id: 'kpe-50',
    name: 'KPE 50/5',
    category: 'KPE Csövek',
    description: 'Kisméretű KPE cső kisebb öntözőrendszerekhez és háztáji felhasználásra.',
    features: [
      'Megfelelő falvastagság',
      'UV álló kivitel',
      'Tartós anyaghasználat',
      'Könnyű kezelhetőség'
    ],
    technicalDetails: [
      { label: 'Átmérő', value: '50 mm' },
      { label: 'Falvastagság', value: '5 mm' },
      { label: 'Max. nyomás', value: '10 bar' },
      { label: 'Hossz', value: '200-240 m' },
      { label: 'Súly', value: '1.45 fm/kg' }
    ],
    images: ['/images/kpe.jpg']
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  // Termékek csoportosítása kategória szerint
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  // Szűrt termékek
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const searchFilteredProducts = filteredProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Fejléc */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#4ADE8030,_transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#2DD4BF30,_transparent_70%)]"></div>
          <div className="container mx-auto px-4 py-16 sm:py-20 relative">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link 
                  href="/"
                  className="group mb-8 text-gray-600 hover:text-gray-900 flex items-center transition-all"
                >
                  <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Vissza a főoldalra
                </Link>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 mb-6"
              >
                Termékkatalógus
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 text-lg sm:text-xl max-w-2xl"
              >
                Fedezze fel professzionális öntözési megoldásainkat
              </motion.p>
            </div>
          </div>
        </div>

        {/* Szűrők */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="sticky top-0 z-30 backdrop-blur-lg bg-white/80 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              {/* Kategória választó */}
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto no-scrollbar">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all transform hover:scale-105
                    ${selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg shadow-green-500/20'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  Összes
                </button>
                {Object.keys(groupedProducts).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all transform hover:scale-105
                      ${selectedCategory === category
                        ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg shadow-green-500/20'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Keresés */}
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Keresés..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 py-12">
          {/* Termékek grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {searchFilteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onHoverStart={() => setHoveredProduct(product.id)}
                  onHoverEnd={() => setHoveredProduct(null)}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Termék kép */}
                  <div 
                    className="relative h-56 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(product.images[0])}
                  >
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm">
                        Kép megtekintése
                      </span>
                    </div>
                  </div>

                  {/* Termék információk */}
                  <div className="p-6">
                    <motion.h3 
                      className="text-xl font-semibold text-gray-900 mb-2"
                      animate={{ color: hoveredProduct === product.id ? '#059669' : '#111827' }}
                      transition={{ duration: 0.2 }}
                    >
                      {product.name}
                    </motion.h3>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-2">{product.description}</p>

                    {/* Főbb jellemzők */}
                    <div className="space-y-4 mb-6">
                      <h4 className="text-sm font-semibold text-gray-900">Főbb jellemzők</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={false}
                            animate={{ x: hoveredProduct === product.id ? 10 : 0 }}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="text-green-500 mr-2">•</span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technikai adatok */}
                    <div className="space-y-4 mb-6">
                      <h4 className="text-sm font-semibold text-gray-900">Technikai adatok</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        {product.technicalDetails.slice(0, 4).map((detail, index) => (
                          <motion.div
                            key={index}
                            initial={false}
                            animate={{ 
                              backgroundColor: hoveredProduct === product.id ? '#f0fdf4' : '#ffffff',
                              scale: hoveredProduct === product.id ? 1.02 : 1
                            }}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                            className="p-2 rounded-lg"
                          >
                            <span className="text-gray-500 block text-xs">{detail.label}</span>
                            <span className="text-gray-900 font-medium">{detail.value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Részletek gomb */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedProduct(product)}
                      className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 flex items-center justify-center group"
                    >
                      <span>Részletek</span>
                      <motion.svg 
                        className="w-5 h-5 ml-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={{ x: hoveredProduct === product.id ? 5 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Ha nincs találat */}
          {searchFilteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center py-20"
            >
              <div className="bg-gray-50 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nincs találat</h3>
              <p className="text-gray-500">Próbálkozzon más keresési feltételekkel</p>
            </motion.div>
          )}
        </div>

        {/* Kép modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-5xl h-[80vh]"
              >
                <Image
                  src={selectedImage}
                  alt="Nagyított kép"
                  fill
                  sizes="100vw"
                  priority
                  className="object-contain"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                >
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Termék részletek modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto no-scrollbar"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl max-w-3xl w-full p-8 relative"
              >
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                </button>

                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-3xl font-bold text-gray-900 mb-4"
                >
                  {selectedProduct.name}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-gray-600 mb-8"
                >
                  {selectedProduct.description}
                </motion.p>

                {/* Képek */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="grid grid-cols-2 gap-6 mb-8"
                >
                  {selectedProduct.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedImage(image)}
                    >
                      <Image
                        src={image}
                        alt={`${selectedProduct.name} ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm">
                          Nagyítás
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Jellemzők */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Jellemzők</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProduct.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        className="flex items-start bg-gray-50 rounded-xl p-4"
                      >
                        <span className="text-green-500 mr-3">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-gray-600">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Technikai adatok */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technikai adatok</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedProduct.technicalDetails.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                        className="bg-gray-50 rounded-xl p-4"
                      >
                        <span className="text-gray-500 text-sm block mb-1">{detail.label}</span>
                        <span className="text-gray-900 font-medium">{detail.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
} 