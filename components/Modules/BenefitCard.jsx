import React from 'react';

const BenefitCard = ({ imgSrc, title, heading, listItems = [] }) => {
  return (
    <div className="w-full max-w-[262px]">
      <section className="relative w-full h-[261px] rounded-lg overflow-hidden shadow-lg group">
        {/* Background Image */}
        <div className="w-full h-full relative">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
          <h1 className="absolute bottom-3 left-2 text-black text-sm font-bold bg-opacity-80 px-2 py-1 bg-white rounded">
            {title}
          </h1>
        </div>

        {/* Hover Overlay with Custom Gradient */}
        <div
          className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
          style={{
            background:
              'linear-gradient(90deg, rgba(251, 92, 24, 1) 5%, rgba(251, 87, 23, 1) 37%, rgba(247, 166, 14, 1) 100%)',
          }}
        >
          <h2 className="text-lg font-bold text-white mb-2">{heading}</h2>
          <ul className="space-y-1 text-white text-[12px] leading-snug">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start space-x-1">
                <img
                  src="/star.png"
                  alt="star"
                  className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BenefitCard;
