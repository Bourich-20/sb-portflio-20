import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import fstsIcon from '../images/fsts.png';  
import fpoIcon from '../images/fpo.png';    
import diplomaIcon from '../images/diplome.png'; 
import inProgressIcon from '../images/clock.png'; 
import { useTranslation } from 'react-i18next';



const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
  }),
};

const EducationPath: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [key, setKey] = useState(0);
  const { t } = useTranslation(); 
  const educationData = [
    {
      title: t('education1.cycle_title'),
      institution:t('education1.fsts'),
      period: "2022 -present",
      icon: fstsIcon,
      diplom: inProgressIcon,
    },
    {
      title: t('education1.deug_title'),
      institution: t('education1.fpo'),
      period: "2020 - 2022",
      icon: fpoIcon,
      diplom: diplomaIcon,
    },
    {
      title: t('education1.bac_title'),
      institution: t('education1.high_school'),
      period: "2019 - 2020",
      icon: null,
      diplom: diplomaIcon,
    },
  ];
  const resetAnimation = () => {
    setKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    const interval = setInterval(resetAnimation, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex flex-col items-center p-8  ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen`}>
      <h2   className={`text-4xl font-extrabold mb-16 text-center transition-transform duration-300 hover:scale-105 ${isDarkMode ? 'text-blue -300' : 'text-blue -600'}`}
>
        {t('education1.title')}
      </h2>
      <div className="relative w-full max-w-[1000px] mx-auto">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-pink-100"></div>
        {educationData.map((edu, index) => (
          <motion.div
            key={`${key}-${index}`} 
            className="relative mb-12 flex items-start"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex flex-col items-center mr-4">
              <div className={`p-2 rounded-lg mb-2 w-full max-w-xs ${isDarkMode ? 'bg-blue-700' : 'bg-blue-200'}`}>
                <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} font-semibold `}>
                  {edu.period}
                </p>
              </div>
              <Image
                src={edu.diplom}
                alt="Diplôme"
                width={120}
                height={120}
              />
              {index < educationData.length - 1 && (
                <div className="h-full w-1 bg-blue-300"></div>
              )}
            </div>
            <div className="flex items-center w-full max-w-[1000px]">
              <div className={`flex-1 p-6 shadow-lg rounded-lg transition-transform transform group-hover:scale-105 group-hover:shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <h3 className={`text-2xl text-center font-semibold ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>{edu.title}</h3>
                <p className={`text-gray-400 text-center ${isDarkMode ? 'dark:text-gray-400' : 'text-gray-700'}`}>{edu.institution}</p>
              </div>
              <div className="flex-shrink-0 w-28 h-28">
                {edu.icon != null && (
                  <Image
                    src={edu.icon}
                    alt={`${edu.institution} logo`}
                    width={150}
                    height={120}
                  />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
  
};

export default EducationPath;
