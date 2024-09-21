import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import codingArtIcon from '../images/codingArt.jpeg'; 
import diamotechIcon from '../images/diamonteck.jpeg'; 
import freelanceIcon from '../images/freelance.png'; 
import springIcon from '../images/icon/icons8-spring-boot-48.png'; 
import nestIcon from '../images/nestJs.png'; 
import angularIcon from '../images/icon/icons8-angular-48.png'; 
import ionicIcon from '../images/icon/icons8-ionic-48.png'; 
import nodejsIcon from '../images/node.png'; 
import flutterIcon from '../images/icon/icons8-flutter-48.png'; 

const workExperienceData = [
  {
    title: "Stage Backend",
    company: "CodingArt",
    city: "Casablanca",
    period: "1 Sep 2024 - 1 Oct 2024",
    description: [
      "Worked on backend development using Spring Boot, implementing Spring Security with JWT, Spring Data, and JPA.",
      "Utilized Docker and Kubernetes for containerization and deployment.",
      "Worked on microservices architecture with Spring Boot and NestJS.",
    ],
    technologies: [springIcon, nestIcon],
    icon: codingArtIcon,
  },
  {
    title: "Internship: Full Stack Developer",
    company: "Diamotech",
    city: "Marrakech",
    period: "July 17, 2023 - September 3, 2023",
    description: [
      "Developed a task management mobile app using Ionic, Angular, and Node.js.",
      "Contributed to innovation within the company by delivering a full-stack solution.",
    ],
    technologies: [ionicIcon, angularIcon, nodejsIcon],
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
    technologies: [flutterIcon, nodejsIcon],
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
    technologies: [flutterIcon, nodejsIcon],
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
    <div className={`flex flex-col items-center p-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen`}>
      <h2 className={`text-5xl font-bold mb-16 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Work Experience</h2>
      <div className="w-full max-w-6xl space-y-12">
        {workExperienceData.map((exp, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col lg:flex-row items-center lg:items-start p-8 rounded-lg shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3 mb-6 lg:mb-0">
              <Image src={exp.icon} alt={exp.company} width={80} height={80} className="rounded-full mb-4" />
              <p className={`text-xl font-semibold ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>{exp.company}</p>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{exp.city}</p>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{exp.period}</p>
            </div>

            <div className="flex-1 p-4">
              <h3 className={`text-3xl font-semibold mb-4 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>{exp.title}</h3>
              <ul className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {exp.description.map((desc, i) => (
                  <li key={i} className="mb-3">• {desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap mt-6">
                {exp.technologies.map((tech, i) => (
                  <Image key={i} src={tech} alt="Technology" width={40} height={40} className="mr-4 mb-4" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
