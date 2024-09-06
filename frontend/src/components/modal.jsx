import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-[90%] max-w-md mx-auto">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-red-500">
            &times;
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
