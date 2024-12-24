'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';

import githubLight from '../images/github.png';
import githubDark from '../images/gitHub-nuit.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitterx.png';
import instagram from '../images/instagram.png';
import gmail from '../images/gmail.png';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();

  const iconList = [
    { component: githubLight, darkComponent: githubDark, name: 'GitHub', href: 'https://github.com/Bourich-20' },
    { component: linkedin, darkComponent: linkedin, name: 'LinkedIn', href: 'https://www.linkedin.com/in/soufiane-bourich-3a0091248' },
    { component: twitter, darkComponent: twitter, name: 'Twitter', href: '#' },
    { component: instagram, darkComponent: instagram, name: 'Instagram', href: 'https://www.instagram.com/soufiane_bourich_2' },
    { component: gmail, darkComponent: gmail, name: 'Email', href: 'mailto:soufianbourich20@gmail.com' },
  ];

  return (
    <footer className={`py-5 ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-400 to-purple-600'} text-white`}>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-5">
        
        <div className="flex flex-col items-start mb-6 lg:mb-0">
        <Image src={logo} alt="Logo" className="w-48 h-46 mb-2"  priority />
          <div>
            <h1 className="text-3xl font-bold mb-1">SOUFIANE BOURICH</h1>
            <p className="text-sm text-gray-300">{t('footer.tagline')}</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 mb-6 lg:mb-0">
          <nav className="flex flex-col lg:flex-row lg:space-x-10 mb-4 items-center justify-center">
            {['profil', 'technologies', 'projects', 'education', 'experience', 'contact'].map((item) => (
              <Link 
                key={item} 
                href={`/#${item}`} 
                className="text-gray-300 hover:text-white py-1"
              >
                {t(`${item}`)} 
              </Link>
            ))}
          </nav>

          <div className="flex justify-center space-x-6 mb-4">
            {iconList.map((icon) => (
              <Link key={icon.name} href={icon.href} target="_blank" className="text-gray-300 hover:text-white">
                <Image src={isDarkMode ? icon.darkComponent : icon.component} alt={icon.name} width={24} height={24} priority  />
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="mb-2">{t('footer.description')}</p>
            <p className="text-sm">{t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
