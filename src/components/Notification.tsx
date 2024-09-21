import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface NotificationProps {
  message: string;
  type: 'success' | 'error'; 
  onClose: () => void; 
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  const bgColor = type === 'error' ? 'bg-red-100 border-red-400 text-red-700' : 'bg-green-100 border-green-400 text-green-700';

  return (
    <div className={`fixed bottom-4 right-4 p-4 border rounded shadow-lg ${bgColor} border`}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Notification;
