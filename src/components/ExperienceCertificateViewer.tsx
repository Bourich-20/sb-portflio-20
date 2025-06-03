import React, { useEffect } from 'react';

const ExperienceCertificateViewer: React.FC<{ 
    isDarkMode: boolean; 
    t: (key: string) => string; 
    onClose: () => void; 
    certificatePath: string; 
    companyName: string;
}> = ({ isDarkMode, t, onClose, certificatePath, companyName }) => {

    useEffect(() => {
        // Bloquer scroll sur body
        document.body.style.overflow = 'hidden';

        // Nettoyer à la fermeture (remettre scroll)
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const closeModal = () => {
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className={`relative w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] p-4 rounded-lg shadow-lg flex flex-col
                ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                
                <button onClick={closeModal} className="absolute top-2 right-2 text-red-600 font-bold text-xl z-50">
                    X
                </button>

                <h2 className={`text-2xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    {t('certificate_title')} {companyName}
                </h2>

                <div className={`flex-grow ${isDarkMode ? 'bg-gray-800' : 'bg-white'} overflow-auto`}>
                    <iframe
                        src={certificatePath}
                        title="Experience Certificate"
                        className={`w-full h-full border-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                        style={{ minHeight: '400px' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ExperienceCertificateViewer;
