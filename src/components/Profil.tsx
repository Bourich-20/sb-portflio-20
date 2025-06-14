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
            className="text-xl font-bold mb-3"
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

    const handleShowCvViewer = () => {
        setShowCvViewer(true);
    };

    const handleCloseCvViewer = () => {
        setShowCvViewer(false);
    };

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

    return (
        <div className={`flex flex-col lg:flex-row items-stretch justify-center w-full h-auto px-4 lg:px-8 pt-1 ${isDarkMode ? 'bg-gray-900 text-white' : 'text-black'}`}>
            {showCvViewer && <CVViewer isDarkMode={isDarkMode} t={t} onClose={handleCloseCvViewer} />}

<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className={`intro flex-1 text-center lg:ml-[50px] lg:text-left w-full lg:max-w-md flex flex-col justify-center items-center 
    ${isDarkMode 
      ? 'bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white' 
      : 'bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] text-gray-900'} 
    max-h-full sm:max-h-[480px] overflow-hidden rounded-2xl shadow-xl border border-gray-300 p-6 transition-all duration-300 hover:scale-105`}
>
  <Image
    src={bourihImage}
    alt="Profile"
    width={160}
    height={160}
    className="mb-3 rounded-full shadow-lg ring-4 ring-blue-400 dark:ring-blue-600 object-cover"
    priority
  />

  <div className="text-center py-1 px-3">
    <Typewriter text={t('welcome_text')} isFirstRender={isFirstRender} />
  </div>

  <div className="text-center mt-1 px-4">
    <p className={`text-sm leading-relaxed font-medium font-sans  ${isDarkMode ? ' text-white' : ' text-gray-800'} dark:text-gray-300`}>
      {t('short_description')}
    </p>
  </div>

  <div className="flex flex-col items-center gap-2 mt-4">
    <motion.a
    onClick={handleShowCvViewer}
    className="cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md hover:shadow-xl transition duration-300 flex items-center gap-2"
    >
    {t('view_cv')} <FaArrowCircleDown />
    </motion.a>


    <motion.a
      href="https://www.linkedin.com/in/soufiane-bourich-3a0091248/"
      rel="noopener noreferrer"
      target="_blank"
      className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md hover:shadow-xl transition duration-300 flex items-center gap-2"
    >
      {t('view_linkedin')} <GoProject />
    </motion.a>
  </div>
</motion.div>


<div className={`carousel-section flex-1 w-full lg:w-auto ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} max-h-full sm:max-h-[600px] overflow-hidden`}>
    <div className="content relative h-full">
        <Slider {...settings}>
            <div className="w-[400px] h-[450px]">  
                <Image
                    src={img2}
                    alt="Slide 1"
                    width={400}
                    height={450}
                    className="w-full h-full"
                    priority 
                />
            </div>
            <div className="w-[400px] h-[450px]">  
                <Image
                    src={img3}
                    alt="Slide 2"
                    width={400}
                    height={450}
                    className="w-full h-full"
                    priority 
                />
            </div>
        </Slider>
    </div>
</div>

        </div>
    );
};

export default Profil;
