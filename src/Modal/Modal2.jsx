// Modal.js
import React from 'react';

const Modal = ({ data, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Modal Content</h2>
        <p>{data.column1}</p>
        <p>{data.column2}</p>
        {/* Add more data fields as needed */}
      </div>
    </div>
  );
};

export default Modal;
