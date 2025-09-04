import React from "react";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div
      className="relative 
                 text-white bg-slate-800 rounded-2xl shadow-md 
                 transition-all duration-300 ease-in-out 
                 transform hover:scale-101 cursor-pointer overflow-hidden
                 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.25)]"
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
