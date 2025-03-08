
"use client";
import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(password); // Skickar lösenordet till föräldrakomponenten
    setPassword('');
    onClose(); // Stänger modalen
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Enter Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="modal-buttons">
            <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
