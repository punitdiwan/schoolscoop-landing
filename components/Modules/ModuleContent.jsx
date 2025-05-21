// components/ModuleContext.jsx

import React from 'react';

const ModuleContent = ({
  imageSrc,
  imagePosition = 'left', // 'left' or 'right'
  backgroundColor = '#ffffff',
  heading,
  subheading,
  paragraphs = [],
}) => {
  const isImageRight = imagePosition === 'right';

  return (
    <div
      className={`flex flex-col ${isImageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center overflow-hidden`}
      style={{ backgroundColor }}
    >
      {/* Image Section */}
      <div className="w-full lg:w-5/12 flex justify-center p-6">
        <img
          src={imageSrc}
          alt={heading}
          className="w-3/4 md:w-2/3 lg:w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-7/12 space-y-4 text-center lg:text-left px-4 py-8 lg:px-12 lg:py-16">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">{heading}</h1>
        <h2 className="text-lg md:text-2xl font-semibold text-gray-700">{subheading}</h2>
        {paragraphs.map((para, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ModuleContent;
