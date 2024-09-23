import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import bourihImage from '../images/Bourich.png';
import img2 from '../images/web1.png';
import img3 from '../images/mobile1.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowCircleDown } from 'react-icons/fa';
import { GoProject } from 'react-icons/go';
import { useTranslation } from 'react-i18next';
import CVViewer from './CVViewer'; 

const Typewriter: React.FC<{ text: string; isFirstRender: boolean }> = ({ text, isFirstRender }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isFirstRender) {
      setDisplayText('');
      setIndex(0);

      const timeout = setTimeout(() => {
        if (index < text.length) {
          setDisplayText(prev => prev + text[index]);
          setIndex(index + 1);
        }
      }, 50);
      
      return () => clearTimeout(timeout);
    } else {
      setDisplayText(text);
    }
  }, [text, index, isFirstRender]);

  return (
    <motion.div
      className="text-2xl font-bold mb-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayText}
    </motion.div>
  );
};

const Profil: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [showCvViewer, setShowCvViewer] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  const handleShowCvViewer = () => {
    setShowCvViewer(true);
  };

  const handleCloseCvViewer = () => {
    setShowCvViewer(false);
  };
  return (
    <div className={`flex flex-col lg:flex-row items-stretch justify-center w-full h-auto px-4 lg:px-8 pt-7  ${isDarkMode ? 'bg-gray-900 text-white' : ' text-black '}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`intro flex-1 text-center lg:ml-[50px] lg:text-left w-full lg:max-w-md mb-0 flex flex-col justify-center items-center 
        ${isDarkMode ? 'bg-gradient-to-r from-blue-800 to-pink-800 text-white' : 'bg-gradient-to-r from-pink-200 to-blue-300 text-black'} max-h-[590px] overflow-hidden`}
      >
        <Image
          src={bourihImage}
          alt="Profile"
          width={300}
          height={300}
          className="profileImage mb-4 rounded-full shadow-lg object-cover"
        />

        <Typewriter text={t('welcome_text')} isFirstRender={isFirstRender} />

        <div className="text-center mb-0">
          <p className="text-base leading-5">{t('short_description')}</p>
        </div>

        <div className="flex flex-col items-center gap-4 pt-10">
      <motion.a
        onClick={handleShowCvViewer}
        className={`bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg flex items-center gap-2 hover:shadow-2xl 
        ${isDarkMode ? 'hover:from-purple-700' : 'hover:from-purple-500'} transition-colors duration-300 cursor-pointer`}
      >
        {t('view_cv')} <FaArrowCircleDown />
      </motion.a>

      {showCvViewer && <CVViewer isDarkMode={isDarkMode} t={t} onClose={handleCloseCvViewer} />}

      <motion.a
        href="https://www.linkedin.com/in/soufiane-bourich-3a0091248"
        rel="noopener noreferrer"
        target="_blank"
        className={`bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg flex items-center gap-2 hover:shadow-2xl 
        ${isDarkMode ? 'hover:from-purple-700' : 'hover:from-purple-500'} transition-colors duration-300`}
      >
        {t('view_linkedin')} <GoProject />
      </motion.a>
    </div>
      </motion.div>

      <div className={`carousel-section flex-1 w-full lg:w-auto ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} max-h-[600px] overflow-hidden`}>
        <div className="content relative h-full">
          <Slider {...settings}>
            <div className="w-[600px] h-[600px]">
              <Image
                src={img2}
                alt="Slide 1"
                width={600}
                height={600}
                className="w-full h-full"
              />
            </div>
            <div className="w-[600px] h-[600px]">
              <Image
                src={img3}
                alt="Slide 2"
                width={600}
                height={600}
                className="w-full h-full"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Profil;
