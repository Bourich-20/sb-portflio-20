import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import contactImage from '../images/contact.png'; 
import Image from 'next/image';
import emailjs from 'emailjs-com';
import Notification from './Notification'; 

const Typewriter: React.FC<{ text: string; isFirstRender: boolean }> = ({ text, isFirstRender }) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (isFirstRender) {
            setDisplayText('');
            setIndex(0);
            const timeout = setTimeout(() => {
                if (index < text.length) {
                    setDisplayText(prev => prev + text[index]);
                    setIndex(index + 1);
                }
            }, 50);
            return () => clearTimeout(timeout);
        } else {
            setDisplayText(text);
        }
    }, [text, index, isFirstRender]);

    return (
        <motion.div
            className="text-2xl font-bold mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {displayText}
        </motion.div>
    );
};

const Contact: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const { t } = useTranslation();
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null);
    const [isSending, setIsSending] = useState(false); 

    useEffect(() => {
        setIsFirstRender(false);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!validateEmail(formData.email)) {
            setNotification({ message: t('invalid_email'), type: 'error' });
            return;
        }
    
        setIsSending(true);
    
        const templateParams = {
            from_name: formData.name,
            to_name: 'Soufian Bourich',
            from_email: formData.email,
            message: formData.message,
        };
    
        emailjs.send('service_39t7fjh', 'template_j75bwwe', templateParams, 'tgyQKOpjs_YYd6H9X')
            .then((response) => {
                console.log('Email sent successfully:', response); 
                setNotification({ message: t('message_sent'), type: 'success' });
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
                setNotification({ message: t('message_failed'), type: 'error' });
            })
            .finally(() => {
                setIsSending(false);
            });
    };
    

    return (
        <div className={`flex flex-col items-center justify-center w-full min-h-[700px] px-4 pt-7 rounded-t-lg border border-gray-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-purple-400 text-black'}`}>
            {notification && ( 
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)} 
                />
            )}
            <div className="flex flex-col lg:flex-row w-full max-w-5xl">
                <div className="flex justify-center mt-6 lg:mt-0 w-full lg:w-1/2 lg:justify-start lg:pr-40 pt-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', delay: 2 }}
                    >
                        <Image src={contactImage} alt="Contact" className="w-150 h-150 object-cover rounded-lg shadow-md" />
                    </motion.div>
                </div>
                <motion.form
                    onSubmit={handleSubmit}
                    className={`bg-purple-300 rounded-lg shadow-lg p-6 w-full lg:w-1/2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Typewriter text={t('contact_us')} isFirstRender={isFirstRender} />
                    <div className="mb-4">
                        <label className="block text-gray-700">{t('name')}</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">{t('email')}</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">{t('message')}</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={4}
                            required
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <motion.button
                            type="submit"
                            className={`bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg flex items-center hover:shadow-2xl transition-colors duration-300`}
                            whileHover={{ scale: 1.05 }}
                        >
                            {t('send_message')}
                        </motion.button>

                        {isSending && (
                            <motion.div
                                className="h-8 w-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        )}
                    </div>
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;
