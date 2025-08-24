import React from "react";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="text-white bg-slate-800 rounded-2xl shadow hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover" // ✅ keeps fixed height, crops neatly
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
