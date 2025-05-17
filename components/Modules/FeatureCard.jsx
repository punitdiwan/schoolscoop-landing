'use client';
import React from 'react';

const FeatureCard = ({ title, description, Icon, gradientClass }) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Icon - half outside the card */}
      <div className="absolute -left-[25px] top-1/2 transform -translate-y-1/2 z-10">
        <div className="w-[50px] h-[50px] flex items-center justify-center bg-white rounded-full shadow-md transition-colors duration-300 group-hover:bg-white">
          {Icon && <Icon className="text-blue-800 group-hover:text-blue-900" size={28} />}
        </div>
      </div>

      {/* Card container */}
      <div className="relative">
        <div className="relative bg-white shadow-md rounded-md overflow-hidden cursor-pointer group border border-gray-200 px-6 py-6">
          {/* Hover Gradient Overlay */}
          <div
            className={`absolute top-0 left-[-100%] w-full h-full transition-all duration-300 ease-in-out group-hover:left-0 z-0 ${gradientClass} opacity-80`}
          ></div>

          {/* Text Content */}
          <div className="relative z-10 pl-8 text-gray-800 transition-colors duration-300 group-hover:text-white">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
