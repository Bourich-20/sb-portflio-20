"use client";

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ContactButtons from '../components/ContactButtons';
import Profil from '../components/Profil';
import Technologie from '../components/Technologie';
import ProjectList from '@/components/ProjectList';
import EducationPath from '@/components/EducationPath';
import WorkExperience from '@/components/WorkExperience';
import TechnologiesDisplay from '@/components/TechnologiesDisplay';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const hour = new Date().getHours();
    const initialDarkMode = hour >= 20 || hour < 6;
    setIsDarkMode(initialDarkMode);
    
    document.body.classList.toggle('dark', initialDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.body.classList.toggle('dark', newMode);
  };

  return (
    <div className={`min-h-screen pt-20 mx-0 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <ContactButtons isDarkMode={isDarkMode} />
      <div id="profile"><Profil isDarkMode={isDarkMode} /></div>
      <div><Technologie isDarkMode={isDarkMode} /></div>
      <div id="Experience"><WorkExperience isDarkMode={isDarkMode} /></div>
      <div id="projects"><ProjectList isDarkMode={isDarkMode} /></div>
      <div id="technologies"><TechnologiesDisplay isDarkMode={isDarkMode} /></div>
      <div id="education"><EducationPath isDarkMode={isDarkMode} /></div>
      <div id="contact"><Contact isDarkMode={isDarkMode} /></div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
