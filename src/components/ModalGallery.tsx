import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface ModalGalleryProps {
  images: StaticImageData[];
  onClose: () => void;
  isDarkMode: boolean;
}

const ModalGallery: React.FC<ModalGalleryProps> = ({ images, onClose, isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
      <div className={`relative p-4 max-w-3xl w-full h-[500px] rounded-lg ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <button className={`absolute top-4 right-4 ${isDarkMode ? 'text-red-400' : 'text-red-600'} text-4xl z-10`} onClick={onClose}>
          <FaTimes />
        </button>

        <div className="relative w-full h-full flex justify-center items-center">
          {images[currentIndex] && (
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              layout="intrinsic"
              width={600}
              height={400}
              className="object-contain max-h-full max-w-full"
            />
          )}
        </div>

        <button onClick={goToPrevious} className="absolute inset-y-0 left-0 flex items-center justify-center">
          <FaArrowLeft className={`text-5xl ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
        </button>
        <button onClick={goToNext} className="absolute inset-y-0 right-0 flex items-center justify-center">
          <FaArrowRight className={`text-5xl ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
        </button>

        <div className={`absolute bottom-4 right-4 p-2 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} text-lg font-bold`}>
          {t('image')} {currentIndex + 1} {t('sur')} {images.length}
        </div>
      </div>
    </div>
  );
};

export default ModalGallery;
