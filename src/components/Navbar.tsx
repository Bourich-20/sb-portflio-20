'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import iconEn from '../images/en.png'; 
import iconFrance from '../images/fr.png'; 
import { FaCaretDown } from 'react-icons/fa';
import i18n from '../app/lang/i18n';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

export default function Navbar({ toggleDarkMode, isDarkMode }: NavbarProps) {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState<string>('profil');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState<string>('en'); 
  const [isLangMenuOpen, setIsLangMenuOpen] = useState<boolean>(false);
  const langMenuRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const changeLanguage = (lang: string) => {
    setSelectedLang(lang);
    setIsLangMenuOpen(false);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedLang);
  }, [selectedLang]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`p-5 fixed top-0 w-full z-50 shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-400 to-purple-600'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/#profil" className="flex items-center space-x-2 text-white">
          <Image src={logo} alt="Logo" className="w-20 h-14" />
          <span className="text-2xl font-bold">SOUFIANE BOURICH</span>
        </Link>
  
        <div className="lg:hidden flex items-center">
          <button 
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
  
        <div className={`lg:flex lg:items-center lg:space-x-4 ${isMenuOpen ? 'absolute top-16 left-0 right-0 bg-gradient-to-r from-blue-400 to-purple-600 p-5' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-4">
            {['profil', 'technologies', 'projects', 'education', 'Experience', 'contact'].map((item) => (
              <li className="mb-2 lg:mb-0 lg:mr-4 relative group" key={item}>
                <Link
                  className={`block px-4 py-2 text-white text-base font-medium transition-all duration-300 ${
                    activeLink === item ? 'underline-active' : 'group-hover:text-white'
                  }`}
                  href={`/#${item}`}
                  onClick={() => handleClick(item)}
                >
                  {t(item)}
                  <span 
  className={`absolute left-0 bottom-0 h-1 w-full transform scale-x-0 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-pink-500' :'bg-orange-400' } transition-transform duration-500 ease-in-out group-hover:scale-x-100 ${activeLink === item ? 'scale-x-100' : ''}`}
></span>

                </Link>
              </li>
            ))}
          </ul>
  
          <div className="relative flex items-center" ref={langMenuRef}>
            <button 
              className="bg-none flex items-center text-white focus:outline-none" 
              onClick={toggleLangMenu}
              aria-label="Change Language"
            >
              {selectedLang === 'fr' ? (
                <Image src={iconFrance} alt="Drapeau français" className="w-7 h-7" />
              ) : (
                <Image src={iconEn} alt="Drapeau anglais" className="w-7 h-7" />
              )}
              <FaCaretDown className="ml-1 w-4 h-4 text-white" />
            </button>
  
            {isLangMenuOpen && (
              <div className={`absolute left-0 top-full mt-2 rounded-md shadow-lg z-10 w-48 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h4 className={`capitalize font-medium text-sm px-6 py-1 text-start ${isDarkMode ? 'text-white' : 'text-app-blue'}`}>{t('language')}</h4>
                <button 
                  className={`flex items-center gap-4 font-medium text-sm px-6 rounded-sm py-1 w-full hover:bg-app-teal ${selectedLang === 'fr' ? (isDarkMode ? 'bg-gray-700' : 'bg-gray-200') : ''}`}
                  onClick={() => changeLanguage('fr')}
                >
                  <Image src={iconFrance} alt="Drapeau français" className="w-5 h-5" /> {t('french')}
                </button>
                <button 
                  className={`flex items-center gap-4 font-medium text-sm px-6 rounded-sm py-1 w-full hover:bg-app-teal ${selectedLang === 'en' ? (isDarkMode ? 'bg-gray-700' : 'bg-gray-200') : ''}`}
                  onClick={() => changeLanguage('en')}
                >
                  <Image src={iconEn} alt="Drapeau anglais" className="w-5 h-5" /> {t('english')}
                </button>
              </div>
            )}
          </div>
        </div>
  
        <button 
          className="text-white ml-4 lg:ml-0"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <MoonIcon className="w-6 h-6" />
          ) : (
            <SunIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
  
}
