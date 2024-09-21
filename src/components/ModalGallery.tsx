import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ModalGalleryProps {
  images: StaticImageData[];
  onClose: () => void;
  isDarkMode: boolean | null;
}

const ModalGallery: React.FC<ModalGalleryProps> = ({ images, onClose, isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className={`relative p-4 max-w-3xl w-full h-[500px] rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <button className="absolute top-4 right-4 text-red-500 text-4xl z-10" onClick={onClose}>
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
          <FaArrowLeft className="text-green-500 text-5xl" />
        </button>
        <button onClick={goToNext} className="absolute inset-y-0 right-0 flex items-center justify-center">
          <FaArrowRight className="text-green-500 text-5xl" />
        </button>

        <div className="text-center mt-4 text-gray-700">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ModalGallery;
