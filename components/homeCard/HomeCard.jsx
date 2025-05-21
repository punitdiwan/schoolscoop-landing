import React from 'react';
import {homecardData} from "./homeCardData"
import FlipCard from '../Card/FlippingCard';

const HomeCards = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:pl-10">
      {homecardData.map((card, index) => (
        <FlipCard
          key={index}
          image={card.image}
          title={card.title}
          features={card.features}
        />
      ))}
    </div>
  );
};

export default HomeCards;
