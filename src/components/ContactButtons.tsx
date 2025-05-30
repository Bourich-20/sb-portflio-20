"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; 
import githubLight from '../images/github.png';
import githubDark from '../images/gitHub-nuit.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitterx.png';
import instagram from '../images/instagram.png';
import gmail from '../images/gmail.png';
import phoneGif from '../images/phone.png'; 
import closeIcon from '../images/close.png'; 

interface ContactButtonsProps {
  isDarkMode: boolean; 
}

const iconList = [
  { component: githubLight, darkComponent: githubDark, name: 'GitHub', href: 'https://github.com/Bourich-20' },
  { component: linkedin, darkComponent: linkedin, name: 'LinkedIn', href: 'https://www.linkedin.com/in/soufiane-bourich-3a0091248' },
  { component: twitter, darkComponent: twitter, name: 'Twitter', href: '#' },
  { component: instagram, darkComponent: instagram, name: 'Instagram', href: 'https://www.instagram.com/soufiane_bourich_2' },
  { component: gmail, darkComponent: gmail, name: 'Email', href: 'mailto:soufianbourich20@gmail.com' },
];

export default function ContactButtons({ isDarkMode }: ContactButtonsProps) {
  const [showIcons, setShowIcons] = useState(true); 

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      <button
        onClick={toggleIcons}
        className=" text-white  rounded-full mb-4 hover:bg-blue-700 focus:outline-none"
      >
        <Image
          src={showIcons ? closeIcon : phoneGif} 
          alt={showIcons ? 'Close' : 'Phone'}
          width={showIcons ? 40 : 70} 
          height={showIcons ? 40 : 70} 
          unoptimized 
          priority 
        />
      </button>
      
      {showIcons && (
        <div className="flex flex-col gap-4">
          {iconList.map((val, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="relative flex items-center cursor-pointer group"
              onClick={() => window.open(val.href, '_blank')}
            >
              <Image 
                src={isDarkMode ? val.darkComponent : val.component} 
                alt={val.name} 
                width={40} 
                height={40} 
                className="transition-transform duration-300" 
                priority 
              />
              <span className="absolute left-14 bg-blue-600 text-white py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap transform group-hover:translate-x-2">
                {val.name}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
