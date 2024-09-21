import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaGithub, FaLink, FaApple, FaGooglePlay, FaMobileAlt, FaDesktop, FaGlobe } from 'react-icons/fa';
import Notification from './Notification';

type CardType = 'web' | 'desktop' | 'mobile';

interface ProjectCardProps {
  images: StaticImageData[];
  projectName: string;
  periodMonths: number;
  cardType: CardType;
  githubLink: string | null;
  appLink?: string | null;
  techIcons: { src: StaticImageData; name: string }[];
  onClick: () => void;
  isDarkMode: boolean; // New prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  images,
  projectName,
  periodMonths,
  cardType,
  githubLink,
  appLink,
  techIcons,
  onClick,
  isDarkMode, // Use the new prop
}) => {
  const [notification, setNotification] = useState<string | null>(null);
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('error');
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleGithubClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!githubLink) {
      e.preventDefault();
      setNotificationType('error');
      setNotification('This project is private on GitHub');
    }
  };

  const handleAppLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!appLink) {
      e.preventDefault();
      setNotificationType('error');
      setNotification('Application link is private or not available');
    }
  };

  const getCardTypeIcon = (cardType: CardType) => {
    switch (cardType) {
      case 'mobile':
        return <FaMobileAlt size={24} className="text-blue-500" />;
      case 'desktop':
        return <FaDesktop size={24} className="text-green-500" />;
      case 'web':
        return <FaGlobe size={24} className="text-orange-500" />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className={`rounded-lg shadow-md overflow-hidden w-full max-w-xs h-100 flex flex-col ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <Image
          src={images[0]}
          alt={projectName}
          width={400}
          height={200}
          className="w-full h-48 object-cover cursor-pointer"
          onClick={onClick}
        />
        <div className="p-4 flex-grow">
          <h2 className="text-xl font-semibold mb-2">{projectName}</h2>
          <p className="text-gray-500 text-sm">Duration: {periodMonths} months</p>
          <div className="flex items-center gap-2 mt-2">
            {getCardTypeIcon(cardType)}
            <span className="text-gray-600 capitalize">{cardType} application</span>
          </div>

          <div className="flex flex-col mt-2">
            <a
              href={githubLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleGithubClick}
              className="flex items-center gap-2 hover:text-black"
            >
              <FaGithub size={24} />
              <span>View on GitHub</span>
            </a>

            <a
              href={appLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleAppLinkClick}
              className="flex items-center gap-2 hover:text-black"
            >
              <FaLink size={24} />
              <span>View Application</span>
            </a>

            {appLink && appLink.includes('play.google.com') && <FaGooglePlay size={24} className="ml-2" />}
            {appLink && appLink.includes('apps.apple.com') && <FaApple size={24} className="ml-2" />}
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mt-4 mb-4">
  {techIcons.map((icon, index) => (
    <div
      key={index}
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHoveredIcon(icon.name)}
      onMouseLeave={() => setHoveredIcon(null)}
    >
      <Image
        src={icon.src}
        alt="Technology Icon"
        width={32}
        height={32}
        className="w-12 h-12 transition-transform duration-300 hover:scale-110"
        onClick={onClick} 
      />
      {hoveredIcon === icon.name && (
        <div className="absolute -top-10 bg-gray-700 text-white text-xs p-1 rounded">
          {icon.name}
        </div>
      )}
    </div>
  ))}
</div>

      </div>

      {notification && (
        <Notification
          message={notification}
          type={notificationType}
          onClose={() => setNotification(null)}
        />
      )}
    </>
  );
};

export default ProjectCard;
