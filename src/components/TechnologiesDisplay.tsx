import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import angularIcon from "../images/icon/icons8-angular-48.png";
import awsIcon from "../images/icon/icons8-aws-48.png";
import flutterIcon from "../images/icon/icons8-flutter-48.png";
import htmlIcon from "../images/icon/icons8-html-48.png";
import javaIcon from "../images/icon/javaLogo.png";
import laravelIcon from "../images/icon/icons8-laravel-64.png";
import linuxIcon from "../images/icon/linuxLogo.png";
import phpIcon from "../images/icon/phpLogo.png";
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
import nextIcon from "../images/icon/nextLogo.png";
import postgreeIcon from "../images/icon/postGreeSql.png"
import oracleIcon from "../images/icon/oracle.png"
import tailwindIcon from "../images/icon/tailwindcss.png"
import ciCdIcon from "../images/icon/CICD.png"
import intillijIcon from "../images/icon/intelli.png"
import anduidStudioIcon from "../images/icon/android-studio.png"
import figmaIcon from "../images/icon/figma.png"
import cassandraIcon  from "../images/icon/cassandra.png"
import redisIcon from "../images/icon/redis.png"
import fireBaseIcon from "../images/icon/fireBase.png"
import pythonIcon from "../images/icon/python.png"
import { useTranslation } from 'react-i18next';
const frontendTechs = [
  { name: 'Angular', icon: angularIcon },
  { name: 'React Js', icon: reactIcon },
  {  name :"Next Js", icon : nextIcon},
  { name: 'JavaScript', icon: jsIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'HTML', icon: htmlIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'Flutter', icon: flutterIcon },
  { name: 'Ionic', icon: ionicIcon },

];

const backendTechs = [
  { name: 'Spring Boot', icon: springBootIcon },
  { name: 'Node.js', icon: nodeJsIcon },
  { name: 'NestJS', icon: nestIcon },
  { name: 'PHP', icon: phpIcon },
  { name: 'Laravel', icon: laravelIcon },
  { name: 'Java', icon: javaIcon },
  {name :" Python" ,icon : pythonIcon}

];

const databaseTechs = [
    { name: 'PostgreSQL', icon: postgreeIcon },
      { name: 'Oracle Database', icon: oracleIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'MongoDB', icon: mongodbIcon },
  { name: 'Redis', icon: redisIcon },
  {name :" Cassandra" ,icon : cassandraIcon},
  {name :" FireBase" ,icon : fireBaseIcon}


];

const tools = [
  { name: 'Docker', icon: dockerIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'VS Code', icon: vscodeIcon },
  { name: 'AWS', icon: awsIcon },
  { name: 'Linux', icon: linuxIcon },
  { name: 'CI-CD', icon: ciCdIcon },
  {name:"IntelliJ",icon : intillijIcon},
  {name : "Android Studio",icon : anduidStudioIcon},
  {name : "Figma",icon : figmaIcon}


];

const TechnologiesDisplay: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const { t } = useTranslation();

  return (
    <div
      className={`p-8 min-h-screen ${ !isDarkMode ? "bg-gray-100" : "" }`} 
    >
      <h2
        className={`text-5xl font-bold text-center mb-12 ${
          isDarkMode ? "text-gray-100" : "text-gray-800"
        }`}
      >
        {t('tech_use')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {[
          { title: "Frontend", techs: frontendTechs },
          { title: "Backend", techs: backendTechs },
          { title: t('bd'), techs: databaseTechs },
          { title:t('tools'), techs: tools },
        ].map(({ title, techs }) => (
          <div
            key={title}
            className={`border-4 rounded-lg p-6  ${
              isDarkMode ? "border-blue-300" : "border-blue-600  bg-purple-200"
            }`}
          >
            <h3
              className={`text-3xl font-semibold mb-4 text-center ${
                isDarkMode ? "text-blue-300" : "text-blue-600"
              }`}
            >
              {title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3  gap-6">
              {techs.map((tech) => (
                <motion.div
                  key={tech.name}
                  className={`relative flex flex-col items-center justify-center p-4 my-4 rounded-lg shadow-lg transition-transform duration-300 ${
                    isDarkMode ? "bg-gray-800" : "bg-blue-100"
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  <Image src={tech.icon} alt={tech.name} width={48} height={48} priority />
                  <span
                    className={`mt-4 text-lg font-semibold ${
                      isDarkMode ? "text-blue-300" : "text-blue-600"
                    }`}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesDisplay;
