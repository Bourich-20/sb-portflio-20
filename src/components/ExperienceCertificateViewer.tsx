import React from 'react';

const ExperienceCertificateViewer: React.FC<{ 
    isDarkMode: boolean; 
    t: (key: string) => string; 
    onClose: () => void; 
    certificatePath: string; 
    companyName: string;
}> = ({ isDarkMode, t, onClose, certificatePath, companyName }) => {

    const closeModal = () => {
        onClose();
    };

    return (
        <div className={`flex flex-col items-center justify-center mt-36 mx-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className={`relative w-11/12 md:w-3/4 lg:w-2/3 h-5/6 p-4 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <button onClick={closeModal} className="absolute top-2 right-2 text-red-600 font-bold">
                        X
                    </button>
                    <h2 className={`text-2xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {t('certificate_title')}  {companyName} 
                    </h2>
                    <div className={`h-[590px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <iframe
                            src={certificatePath} 
                            className={`w-full h-full border-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                            title="Experience Certificate"
                           // sandbox="allow-same-origin allow-scripts" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCertificateViewer;
