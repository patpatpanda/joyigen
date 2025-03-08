
"use client";
import React, { useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Automatisk stängning efter 3 sekunder
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast">
      {message}
    </div>
  );
};

export default Toast;
