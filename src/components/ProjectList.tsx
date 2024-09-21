import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import sampleImage from '../images/mobile1.png';
import siteArqaam from '../images/arqaam.png';
import todolist from '../images/todolist.jpg';
import emg1 from '../images/emg.jpg';
import emg2 from '../images/emg2.jpg';
import emg3 from '../images/emg3.jpg';
import flutterIcon from "../images/icon/icons8-flutter-48.png";
import nodeJsIcon from '../images/node.png'
import camion1 from '../images/camion1.jpg'
import camion2 from '../images/camion2.jpg'
import camion3 from '../images/camion3.jpg'
import camion4 from '../images/camion4.jpg'
import camion5 from '../images/camion5.jpg'
import webFr1 from '../images/webFr1.jpg'
import webFr2 from '../images/webFr2.jpg'
import webFr3 from '../images/webFr3.jpg'
import webFr4 from '../images/webFr4.jpg'
import reactIcon from '../images/reactIcon.jpeg'
import ionicIcon from "../images/icon/icons8-ionic-48.png";
import htmlIcon from "../images/icon/icons8-html-48.png";
import vol1 from '../images/vol1.png'
import vol2 from '../images/vol2.png'
import vol3 from '../images/vol3.png'
import vol4 from '../images/vol4.png'
import call1 from '../images/call1.jpg'
import call2 from '../images/call2.jpg'
import call3 from '../images/call3.jpg'
import { useTranslation } from 'react-i18next';




import springBootIcon from '../images/icon/icons8-spring-boot-48.png';
import angularIcon from '../images/icon/icons8-angular-48.png';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import ModalGallery from './ModalGallery';
import jsIcon from "../images/icon/icons8-java-script-100.png";

type CardType = 'web' | 'desktop' | 'mobile';


const ProjectList: React.FC <{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<'entreprise' | 'freelance' | 'etudes'>('etudes');
  const [selectedImages, setSelectedImages] = useState<StaticImageData[] | null>(null); // État pour les images sélectionnées
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour ouvrir/fermer la modale
  const { t } = useTranslation(); 
  const projects = {
    entreprise: [
      {
        imageSrc: [todolist],
        projectName: t('projectName1'),  // Translation corrected
        periodMonths: 3,
        cardType: 'mobile' as CardType,
        githubLink: null,
        appLink: null,
        techIcons: [
          { src: ionicIcon, name: 'Ionic Angular' },
          { src: springBootIcon, name: 'Spring Boot' },
        ],
      },
      {
        imageSrc: [siteArqaam],
        projectName: t('projectName2'),
        periodMonths: 3,
        cardType: 'web' as CardType,
        githubLink: null,
        appLink: 'https://arqaam.be/',
        techIcons: [
          { src: angularIcon, name: 'Angular' },
          { src: springBootIcon, name: 'Spring Boot' },
        ],
      },
    ],
    freelance: [
      {
        imageSrc: [emg1, emg2, emg3],
        projectName: t('projectName3'),
        periodMonths: 1,
        cardType: 'mobile' as CardType,
        githubLink: 'https://github.com/Bourich-20/emg',
        appLink: null,
        techIcons: [
          { src: flutterIcon, name: 'Flutter' },
          { src: nodeJsIcon, name: 'Node Js' },
        ],
      },
      {
        imageSrc: [camion1, camion2, camion3, camion4, camion5],
        projectName: t('projectName4'),
        periodMonths: 1,
        cardType: 'mobile' as CardType,
        githubLink: 'https://github.com/Bourich-20/Camio_Poubelle',
        appLink: null,
        techIcons: [
          { src: flutterIcon, name: 'Ionic' },
          { src: nodeJsIcon, name: 'Node Js' },
        ],
      },
      {
        imageSrc: [webFr1, webFr2, webFr3, webFr4],
        projectName: t('projectName5'),
        periodMonths: 2,
        cardType: 'web' as CardType,
        githubLink: null,
        appLink: null,
        techIcons: [
          { src: reactIcon, name: 'React Js' },
          { src: nodeJsIcon, name: 'Node Js' },
        ],
      },
    ],
    etudes: [
      {
        imageSrc: [sampleImage],
        projectName: t('projectName6'),
        periodMonths: 4,
        cardType: 'mobile' as CardType,
        githubLink: 'https://github.com/Bourich-20/springBoot-ionicAngular-appMobile-SYNDICAT',
        appLink: null,
        techIcons: [
          { src: springBootIcon, name: 'Spring Boot' },
          { src: angularIcon, name: 'Angular' },
        ],
      },
      {
        imageSrc: [call1, call2, call3],
        projectName: t('projectName7'),
        periodMonths: 5,
        cardType: 'mobile' as CardType,
        githubLink: null,
        appLink: null,
        techIcons: [
          { src: springBootIcon, name: 'Spring Boot' },
          { src: angularIcon, name: 'Angular' },
        ],
      },
      {
        imageSrc: [vol1, vol2, vol3, vol4],
        projectName: t('projectName8'),
        periodMonths: 3,
        cardType: 'web' as CardType,
        githubLink: 'https://github.com/Bourich-20/GestionVols',
        appLink: null,
        techIcons: [
          { src: springBootIcon, name: 'Spring Boot' },
          { src: jsIcon, name: 'JavaScript' },
          { src: htmlIcon, name: 'Html' },
        ],
      },
      {
        imageSrc: [sampleImage],
        projectName: t('projectName9'),
        periodMonths: 9,
        cardType: 'desktop' as CardType,
        githubLink: 'https://github.com/etudes-desktop-app',
        appLink: null,
        techIcons: [
          { src: springBootIcon, name: 'Spring Boot' },
          { src: angularIcon, name: 'Angular' },
        ],
      },
    ],
  };
  const breadcrumbVariants = {
    hover: {
      scale: 1.2,
      color: '#ff6600',
      transition: { duration: 0.3 },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const handlecloseModal = () => {
    setIsModalOpen(false);
    setSelectedImages(null); // Réinitialiser les images
  };
  
  const categoryStyles = 'text-gray-600 text-lg cursor-pointer hover:text-orange-500 transition duration-300';
  const activeCategoryStyles = 'text-orange-500 font-bold'; // Styles pour le bouton actif

  const handleCardClick = (images: StaticImageData[]) => {
    setSelectedImages(images); // Définir les images sélectionnées
    setIsModalOpen(true);   
   

  };

  return (
    <div className="p-6">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t('Projects')}
      </motion.h1>

      <motion.div className="flex justify-center items-center space-x-4 mb-8">
        {['entreprise', 'freelance', 'etudes'].map((category, index) => (
          <motion.span
            key={index}
            variants={breadcrumbVariants}
            whileHover="hover"
            className={`${categoryStyles} ${selectedCategory === category ? activeCategoryStyles : ''}`}
            onClick={() => setSelectedCategory(category as 'entreprise' | 'freelance' | 'etudes')}
          >
            {t(`${category}`)} {/* Modifié ici */}
            {index < 2 && <span className="mx-2">/</span>}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="relative mb-8 p-4 border-4 rounded-lg shadow-lg"
        initial="hidden"
        animate="visible"
        variants={cardContainerVariants}
      >
        <div className="absolute inset-0 rounded-lg border-2 opacity-50 animate-pulse bg-purple-200"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4">
          {selectedCategory === 'entreprise' && t('projectTitles.entreprise')}
          {selectedCategory === 'freelance' && t('projectTitles.freelance')}
          {selectedCategory === 'etudes' && t('projectTitles.etudes')}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {projects[selectedCategory].map((project, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <ProjectCard
                  images={project.imageSrc}
                  projectName={project.projectName}
                  periodMonths={project.periodMonths}
                  cardType={project.cardType}
                  githubLink={project.githubLink}
                  appLink={project.appLink}
                  techIcons={project.techIcons}
                  onClick={() => handleCardClick(project.imageSrc)} 
                  isDarkMode={isDarkMode} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modale Galerie */}
      {
isModalOpen && selectedImages && (
        <ModalGallery images={selectedImages} onClose={()=> handlecloseModal()} isDarkMode={isDarkMode}  />
      )}
    </div>
  );
};

export default ProjectList;
