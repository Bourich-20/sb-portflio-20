import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import angularIcon from "../images/icon/icons8-angular-48.png";
import awsIcon from "../images/icon/icons8-aws-48.png";
import cssIcon from "../images/icon/icons8-css-48.png";
import flutterIcon from "../images/icon/icons8-flutter-48.png";
import htmlIcon from "../images/icon/icons8-html-48.png";
import javaIcon from "../images/icon/javaLogo.png";
import laravelIcon from "../images/icon/icons8-laravel-64.png";
import linuxIcon from "../images/icon/linuxLogo.png";
import phpIcon from "../images/icon/phpLogo.png";
import swiftIcon from "../images/icon/icons8-swift-48.png";
import mysqlIcon from "../images/icon/icons8-my-sql-48.png";
import jsIcon from "../images/icon/jsLogo.png";
import typescriptIcon from "../images/icon/icons8-typescript-48.png";
import mongodbIcon from "../images/icon/icons8-mongo-db-48.png";
import springBootIcon from "../images/icon/icons8-spring-boot-48.png";
import ionicIcon from "../images/icon/icons8-ionic-48.png";
import nodeJsIcon from '../images/icon/nodeJs.png';
import reactIcon from '../images/icon/reactJsLogo.png';
import nestIcon from '../images/icon/nestJsLogo.png';
import dockerIcon from '../images/icon/dockerlogo.png';
import gitIcon from '../images/icon/gitlogo.png';
import vscodeIcon from '../images/icon/visualStudio-.png';

const frontendTechs = [
  { name: 'Angular', icon: angularIcon },
  { name: 'React', icon: reactIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'Flutter', icon: flutterIcon },
  { name: 'Ionic', icon: ionicIcon },
];

const backendTechs = [
  { name: 'Node.js', icon: nodeJsIcon },
  { name: 'NestJS', icon: nestIcon },
  { name: 'Java', icon: javaIcon },
  { name: 'PHP', icon: phpIcon },
  { name: 'Laravel', icon: laravelIcon },
  { name: 'Spring Boot', icon: springBootIcon },
];

const databaseTechs = [
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'MongoDB', icon: mongodbIcon },
  { name: 'AWS', icon: awsIcon },
  { name: 'Linux', icon: linuxIcon },
];

const tools = [
  { name: 'Docker', icon: dockerIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'VS Code', icon: vscodeIcon },
];

const TechnologiesDisplay: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <div className={`p-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen`}>
      <h2 className={`text-5xl font-bold text-center mb-12 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
        Technologies Used
      </h2>

      {[
        { title: 'Frontend', techs: frontendTechs },
        { title: 'Backend', techs: backendTechs },
        { title: 'Databases', techs: databaseTechs },
        { title: 'Tools', techs: tools },
      ].map(({ title, techs }) => (
        <div key={title}>
          <h3 className={`text-3xl font-semibold mb-4 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>{title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {techs.map((tech) => (
              <motion.div
                key={tech.name}
                className={`relative flex items-center justify-center p-4 rounded-lg shadow-lg transition-transform duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                whileHover={{ scale: 1.1 }}
              >
                <Image src={tech.icon} alt={tech.name} width={48} height={48} />
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full ${isDarkMode ? 'text-blue-300' : 'text-blue-600'} text-sm rounded-md p-1`}>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesDisplay;
