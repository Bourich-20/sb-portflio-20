import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import angularIcon from "../images/icon/icons8-angular-48.png";
import awsIcon from "../images/icon/icons8-aws-48.png";
import flutterIcon from "../images/icon/icons8-flutter-48.png";
import javaIcon from "../images/icon/javaLogo.png";
import linuxIcon from "../images/icon/linuxLogo.png";
import swiftIcon from "../images/icon/icons8-swift-48.png";
import mysqlIcon from "../images/icon/icons8-my-sql-48.png";
import jsIcon from "../images/icon/jsLogo.png";
import typescriptIcon from "../images/icon/icons8-typescript-48.png";
import springBootIcon from "../images/icon/icons8-spring-boot-48.png";
import ionicIcon from "../images/icon/icons8-ionic-48.png";
import nodeJsIcon from '../images/icon/nodeJs.png'
import reactIcon from '../images/icon/reactJsLogo.png'
import nestIcon from '../images/icon/nestJsLogo.png'; 
import nextIcon from "../images/icon/nextLogo.png";
import postgreeIcon from "../images/icon/postGreeSql.png"

interface Icon {
  src: StaticImageData;
  name: string;
}

const icons: Icon[] = [
  { src: angularIcon, name: "Angular" },
  { src: awsIcon, name: "AWS" },
  { src: flutterIcon, name: "Flutter" },
  { src: javaIcon, name: "Java" },
  { src: linuxIcon, name: "Linux" },
  { src: swiftIcon, name: "Swift" },
  { src: mysqlIcon, name: "MySQL" },
  { src: jsIcon, name: "JavaScript" },
  { src: typescriptIcon, name: "TypeScript" },
  { src: springBootIcon, name: "Spring Boot" },
  { src: ionicIcon, name: "Ionic" },
  {src : nodeJsIcon,name :"Node Js"},
  {src : reactIcon,name :"React Js"},
  {src : nestIcon,name :"Nest Js"},
  {src : nextIcon,name :"Next Js"},
  {src : postgreeIcon,name :"PostgreSQL"},



];

const Technologie: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          x: {
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          },
        },
      });
    };

    if (!isHovered) {
      startAnimation();
    } else {
      controls.stop();
    }
  }, [controls, isHovered]);

  return (
    <div
      className={`relative w-full ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} p-0 overflow-x-auto`}
      style={{ overflowY: 'hidden' }}
    >
      <div
        className={`absolute top-0 left-0 right-0 p-4 ${isDarkMode ? 'bg-pink-800 text-white' : "bg-pink-100 text-black"} rounded-b-lg`}
      >
      </div>
      <motion.div
        className="flex items-center mt-0"
        animate={controls}
        initial={{ x: "0%" }}
        style={{ whiteSpace: 'nowrap' }}
      >
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center mx-4 cursor-pointer ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={icon.src}
              alt={icon.name}
              width={64}
              height={64}
            />
            <span className="text-sm mt-2">{icon.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologie;
