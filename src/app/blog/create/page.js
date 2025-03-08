"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from '../../../components/Modal/Modal';
import Toast from '../../../components/Toast/Toast';
import './create.css';

const CreatePost = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [postPassword, setPostPassword] = useState('');

  const handleSubmit = async (password) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('password', password);
    if (image) {
      formData.append('image', image);
    }

    try {
      const res = await fetch('https://blogapijoy1.azurewebsites.net/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setTitle('');
        setContent('');
        setPostPassword('');
        setImage(null);
        setError(null);
        setToastMessage('Post created successfully!');
        router.push('/blog'); // Återvänd till bloggsidan
      } else {
        const errorMessage = await res.text();
        setError(`Failed to create post: ${errorMessage}`);
      }
    } catch (err) {
      setError(`An error occurred: ${err.message}`);
    }
  };

  return (
    <div className="container">
      <h1 className="pageTitle">Skapa Nytt Inlägg</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowModal(true); // Öppna modalen för att be om lösenord
        }}
      >
        <div className="formGroup">
          <label>
            Titel:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Innehåll:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows="5"
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Bild:
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
        </div>
        {error && <p className="errorMessage">{error}</p>}
        <button type="submit" className="button">Create Post</button>
      </form>

      {/* Modal för lösenordsinmatning */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit} // Skickar lösenordet till handleSubmit
      />

      {/* Toast-meddelande vid framgångsrik skapelse */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage('')} />
      )}
    </div>
  );
};

export default CreatePost;
