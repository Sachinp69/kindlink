import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  image?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, image }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-slate-900 rounded-2xl shadow-xl w-full max-w-lg p-6 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ❌
        </button>

        {/* Image */}
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
        )}

        {/* Title + Description */}
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        {description && <p className="text-gray-300 mb-6">{description}</p>}

        {/* Footer buttons */}
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg transition"
          >
            Report
          </button>
          <a
            href="/donate"
            className="px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded-lg transition"
          >
            Donate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
