import React from "react";

export default function BackgroundImage({ src="", opacity = "opacity-40", blur = "blur-md" }) {
  return (
    <div className="absolute inset-0 -z-10">
      <img
        src={src}
        alt="Background"
        className={`w-full h-full object-cover ${opacity} ${blur}`}
      />
    </div>
  );
}
