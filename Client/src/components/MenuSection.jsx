import React from 'react';
import { Typography } from '@material-tailwind/react';

const MenuSection = ({ title, items }) => {
  return (
    <div className="mb-12">
      <Typography variant="h2" className="mb-6 font-serif text-3xl font-bold text-primary">
        {title}
      </Typography>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <div className="flex justify-between items-start">
              <Typography variant="h3" className="menu-item-title">
                {item.title}
              </Typography>
              <Typography className="menu-item-price">
                {item.price}
              </Typography>
            </div>
            <Typography className="menu-item-description">
              {item.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
