import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import codingArtIcon from '../images/codingArt.jpeg'; 
import diamotechIcon from '../images/diamonteck.jpeg'; 
import freelanceIcon from '../images/freelance.png'; 
import springIcon from '../images/icon/icons8-spring-boot-48.png'; 
import nestIcon from '../images/icon/nestJsLogo.png';  
import angularIcon from '../images/icon/icons8-angular-48.png'; 
import ionicIcon from '../images/icon/icons8-ionic-48.png'; 
import nodejsIcon from  '../images/icon/nodeJs.png'
import flutterIcon from '../images/icon/icons8-flutter-48.png'; 
import cityIcon from '../images/icon/local.png';
import periodIcon from '../images/icon/period.png'; 
import developerIcon from '../images/icon/devloper.png'; 
import arrowIcon from '../images/icon/arraw.png';

const workExperienceData = [
  {
    title: "Internship : Backend",
    company: "CodingArt",
    city: "Agadir",
    period: "September 1, 2024 - October 1, 2024",
    description: [
      "Worked on backend development using Spring Boot, implementing Spring Security with JWT, Spring Data, and JPA.",
      "Utilized Docker and Kubernetes for containerization and deployment.",
      "Worked on microservices architecture with Spring Boot and NestJS.",
    ],
    technologies: [
      { icon: springIcon, name: 'Spring Boot' },
      { icon: nestIcon, name: 'NestJS' }
    ],
    icon: codingArtIcon,
  },
  {
    title: "Internship: Full Stack Developer",
    company: "Diamotech",
    city: "Casablanca",
    period: "July 17, 2023 - September 3, 2023",
    description: [
      "Developed a task management mobile app using Ionic, Angular, and Node.js.",
      "Contributed to innovation within the company by delivering a full-stack solution.",
    ],
    technologies: [
      { icon: ionicIcon, name: 'Ionic' },
      { icon: angularIcon, name: 'Angular' },
      { icon: nodejsIcon, name: 'Node.js' }
    ],
    icon: diamotechIcon,
  },
  {
    title: "Freelance: Mobile Application",
    company: "Freelance",
    city: "Remote",
    period: "April 10, 2024 - May 1, 2024",
    description: [
      "Developed a mobile application for biomedical engineering students using Flutter, Arduino, and Bluetooth.",
      "Collected and displayed EMG data in real-time with Firebase integration.",
      "Created a doctor space to manage patients and send reports.",
    ],
    technologies: [
      { icon: flutterIcon, name: 'Flutter' },
      { icon: nodejsIcon, name: 'Node.js' }
    ],
    icon: freelanceIcon,
  },
  {
    title: "Freelance: Mobile Application",
    company: "Freelance",
    city: "Remote",
    period: "May 1, 2024 - May 15, 2024",
    description: [
      "Developed a mobile app for embedded systems engineering students using Flutter, Arduino with Wi-Fi, and GPS.",
      "Collected data and transferred it to the server to visualize trucks and bins in real-time on a map.",
      "Optimized routes via server communication.",
    ],
    technologies: [
      { icon: flutterIcon, name: 'Flutter' },
      { icon: nodejsIcon, name: 'Node.js' }
    ],
    icon: freelanceIcon,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
  }),
};

const WorkExperience: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <div  className={`flex flex-col items-center p-8  ${isDarkMode ? 'bg-gray-900'  : 'bg-gray-100'} min-h-screen`}>
<h2 
className={`text-4xl font-extrabold mb-16 text-center transition-transform duration-300 hover:scale-105 ${isDarkMode ? 'text-pink -300' : 'text-pink -600'}`}>
  Work Experience
</h2>
      <div className="w-full max-w-6xl space-y-12">
        {workExperienceData.map((exp, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col lg:flex-row items-center lg:items-start p-8 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-blue-90 border border-gray-300'}`}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}
          >
            <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3 mb-6 lg:mb-0">
        <Image src={exp.icon} alt={exp.company} width={80} height={80}  className="rounded-full mb-4 shadow-lg border-2 border-gray-300" 
 />
  
  <p className={`text-4xl font-extrabold ${isDarkMode ? 'text-yellow-400' : 'text-blue-800'} mb-2`}>
    {exp.company}
  </p>
  
  <div className="flex items-center mt-2 ">
    <Image src={cityIcon} alt="City Icon" width={30} height={30} className="mr-2" />
    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-semibold`}>
      {exp.city}
    </p>
  </div>
  
  <div className="flex items-center mt-1">
    <Image src={periodIcon} alt="Period Icon" width={20} height={20} className="mr-2" />
    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-semibold`}>
      {exp.period}
    </p>
  </div>
</div>


            <div className="flex-1 p-4">
              <h3 className={`text-3xl font-semibold mb-4 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>{exp.title}</h3>
              <ul className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-semibold leading-relaxed`}>
  {exp.description.map((desc, i) => (
    <li key={i} className="mb-3 list-item pl-4">
      <span className="inline-block w-4 text-center">•</span> {desc}
    </li>
  ))}
</ul>

              <div className="flex flex-wrap mt-6 ml-auto"> 
              <div className="flex flex-wrap mt-6 ml-auto justify-end">
                <Image src={developerIcon} alt="Technology" width={40} height={40} className="mr-4 mb-4" />
                <Image src={arrowIcon} alt="Technology" width={30} height={30} className="mr-4 mb-4" />
                {exp.technologies.map((tech, i) => (
       <div className="relative group mr-4 mb-4 p-2 border-2 border-gray-300 rounded-md">
       <Image key={i} src={tech.icon} alt={tech.name} width={40} height={40} />
       <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white text-sm rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
         {tech.name}
       </span>
    </div>
  ))}
</div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default WorkExperience;
