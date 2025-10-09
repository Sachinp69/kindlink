import React from "react";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative 
                 text-white bg-slate-800 rounded-2xl shadow-md 
                 transition-all duration-200 ease-in-out 
                 transform hover:scale-102 cursor-pointer overflow-hidden
                 hover:shadow-[0_0_25px_5px_rgba(252,255,255,0.15)]"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
        {description && (
          <p className="text-sm text-gray-300 mt-1">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
