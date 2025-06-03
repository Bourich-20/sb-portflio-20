import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import codingArtIcon from '../images/codingArt.jpeg';
import hpsIcon from '../images/hps.png';
import diamotechIcon from '../images/diamonteck.jpeg';
import freelanceIcon from '../images/freelance.png';
import springIcon from '../images/icon/icons8-spring-boot-48.png';
import nestIcon from '../images/icon/nestJsLogo.png';
import angularIcon from '../images/icon/icons8-angular-48.png';
import ionicIcon from '../images/icon/icons8-ionic-48.png';
import nodejsIcon from '../images/icon/nodeJs.png';
import flutterIcon from '../images/icon/icons8-flutter-48.png';
import cityIcon from '../images/icon/local.png';
import periodIcon from '../images/icon/period.png';
import developerIcon from '../images/icon/devloper.png';
import arrowIcon from '../images/icon/arraw.png';
import dockerIcon from '../images/icon/dockerlogo.png';
import reactIcon from '../images/icon/reactJsLogo.png';
import awsIcon from "../images/icon/icons8-aws-48.png";
import kafkaIcon from "../images/icon/kafka.png";
import grafanaIcon from "../images/icon/grafana.png";
import postgreeIcon from "../images/icon/postGreeSql.png"

import { useTranslation } from 'react-i18next';
import ExperienceCertificateViewer from './ExperienceCertificateViewer'
import attestationIcon from '../images/icon/attested.png'
import Notification from './Notification';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
  }),
};

const WorkExperience: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const [showCertificateViewer, setShowCertificateViewer] = useState(false);
  const [certificatePath, setCertificatePath] = useState('');
  const [companyName, setCompanyName] = useState('');
  const pathDiamotech = "/pdf-cv/diamotech-fr.pdf";
  const pathCodingArt = "/pdf-cv/codingArt-fr.pdf";;
  const [notification, setNotification] = useState<string | null>(null); 

  const workExperienceData = [
        {
      title: t("exp5.title"),
      company: t("exp5.company"),
      city: t("exp5.city"),
      period: t("exp5.period"),
      description: {
        des1: t("exp5.description.des1"),
        des2: t("exp5.description.des2"),
        des3: t("exp5.description.des3"),
      },
      technologies: [
        { icon: springIcon, name: 'Spring Boot' },
        { icon: dockerIcon, name: 'Docker' },
        { icon: reactIcon, name: 'React + TS' },
        { icon: awsIcon, name: 'AWS' },
        { icon: kafkaIcon, name: 'Kafka' },
        { icon: grafanaIcon, name: 'Grafana' },
        { icon: postgreeIcon, name: 'Postges' },
      ],
      icon: hpsIcon,
      attesPath: "",
      isVisible : false,
      isButtonVisible : true
    },
    {
      title: t("exp1.title"),
      company: t("exp1.company"),
      city: t("exp1.city"),
      period: t("exp1.period"),
      description: {
        des1: t("exp1.description.des1"),
        des2: t("exp1.description.des2"),
        des3: t("exp1.description.des3"),
      },
      technologies: [
        { icon: springIcon, name: 'Spring Boot' },
        { icon: nestIcon, name: 'NestJS' }
      ],
      icon: codingArtIcon,
      attesPath: pathCodingArt,
      isVisible : true,
       isButtonVisible : true
    },
    {
      title: t("exp2.title"),
      company: t("exp2.company"),
      city: t("exp2.city"),
      period: t("exp2.period"),
      description: {
        des1: t("exp2.description.des1"),
        des2: t("exp2.description.des2"),
      },
      technologies: [
        { icon: ionicIcon, name: 'Ionic' },
        { icon: angularIcon, name: 'Angular' },
        { icon: nodejsIcon, name: 'Node.js' }
      ],
      icon: diamotechIcon,
      attesPath: pathDiamotech,
      isVisible : true,
      isButtonVisible : true

    },
    {
      title: t("exp3.title"),
      company: t("exp3.company"),
      city: t("exp3.city"),
      period: t("exp3.period"),
      description: {
        des1: t("exp3.description.des1"),
        des2: t("exp3.description.des2"),
        des3: t("exp3.description.des3"),
      },
      technologies: [
        { icon: flutterIcon, name: 'Flutter' },
        { icon: nodejsIcon, name: 'Node.js' }
      ],
      icon: freelanceIcon,
      isVisible : false,
       isButtonVisible : false
    },
    {
      title: t("exp4.title"),
      company: t("exp4.company"),
      city: t("exp4.city"),
      period: t("exp4.period"),
      description: {
        des1: t("exp4.description.des1"),
        des2: t("exp4.description.des2"),
        des3: t("exp4.description.des3"),
      },
      technologies: [
        { icon: flutterIcon, name: 'Flutter' },
        { icon: nodejsIcon, name: 'Node.js' }
      ],
      icon: freelanceIcon,
      isVisible : false,
       isButtonVisible : false
    },
  ];
  const handleViewCertificate = (path: string, company: string, isVisible: boolean) => {
    if (isVisible) {
      setCertificatePath(path);
      setCompanyName(company);
      setShowCertificateViewer(true);
    } else {
      setNotification(t('encoreStage')); 
    }
  };

  const closeCertificateViewer = () => {
    setShowCertificateViewer(false);
  };
return (
  <div className={`flex flex-col items-center p-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen`}>
    <h2 className={`text-4xl font-extrabold mb-16 text-center transition-transform duration-300 hover:scale-105 ${isDarkMode ? 'text-pink-300' : 'text-pink-600'}`}>
      {t('exp_title')}
    </h2>

    <div className="w-full max-w-6xl space-y-16">
      {workExperienceData.map((exp, index) => (
        <motion.div
          key={index}
          className={`relative flex flex-col lg:flex-row gap-10 items-start p-8 rounded-xl shadow-md transition-shadow duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}
        >
          {/* Left section: logo + info */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3 gap-4">
            <Image src={exp.icon} alt={exp.company} width={130} className="rounded-full shadow-lg border-2 border-gray-300" priority />
            <p className={`text-3xl font-bold ${isDarkMode ? 'text-yellow-400' : 'text-blue-800'}`}>
              {exp.company}
            </p>

            <div className="flex items-center text-base">
              <Image src={cityIcon} alt="Ville" width={24} height={24} className="mr-2" />
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>{exp.city}</span>
            </div>

            <div className="flex items-center text-base">
              <Image src={periodIcon} alt="Période" width={20} height={20} className="mr-2" />
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>{exp.period}</span>
            </div>

            {exp.isButtonVisible && (
              <button
                onClick={() => handleViewCertificate(exp.attesPath!, exp.company, exp.isVisible!)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                <div className="flex items-center">
                  <Image src={attestationIcon} alt="Attestation" width={20} height={20} className="mr-2" />
                  {t("view_attestation")}
                </div>
              </button>
            )}
          </div>

          {/* Right section: title + desc + techs */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>{exp.title}</h3>

            <ul className={`text-base leading-relaxed space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {Object.values(exp.description).map((desc, i) => (
                <li key={i} className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-lg before:text-blue-500">
                  {desc}
                </li>
              ))}
            </ul>

            <div className="flex items-center flex-wrap gap-4 mt-2">
              <Image src={developerIcon} alt="Tech Icon" width={40} height={40} priority />
              <Image src={arrowIcon} alt="Arrow Icon" width={30} height={30} priority />
              {exp.technologies.map((tech, i) => (
                <div key={i} className="relative group p-2 border border-gray-300 rounded-md hover:shadow-md">
                  <Image src={tech.icon} alt={tech.name} width={40} height={40} priority />
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-1 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Viewer */}
    {showCertificateViewer && (
      <ExperienceCertificateViewer
        t={t}
        isDarkMode={isDarkMode}
        certificatePath={certificatePath}
        companyName={companyName}
        onClose={closeCertificateViewer}
      />
    )}

    {/* Notification */}
    {notification && (
      <Notification message={notification} type='error' onClose={() => setNotification(null)} />
    )}
  </div>
);

};

export default WorkExperience;