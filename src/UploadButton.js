import React from 'react';
import './UploadButton.css';

const UploadButton = () => {
  const handleUpload = () => {
    alert('Image is being uploaded...');
  };

  return (
    <button onClick={handleUpload} className="upload-button">
      Upload Image
    </button>
  );
};

export default UploadButton;