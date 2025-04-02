import React from 'react';

const getCategoryTitle = (activeCategory) => {
  switch(activeCategory) {
    case 'food':
      return 'FOOD SPECIALTIES';
    case 'drinks':
      return 'BRUNCH COCKTAILS';
    case 'brunch':
      return 'BRUNCH SPECIALS';
    default:
      return 'MENU';
  }
};

export const MenuSection = ({ activeCategory, menuData }) => {
  return (
    <div className="relative w-full px-4">
      <div className="border border-white py-8 relative bg-black/70 backdrop-blur-sm mx-auto" style={{ maxWidth: '900px' }}>
        <div className="absolute -top-20 -left-22 hidden lg:block">
          <img
            src="/src/assets/drink2.png"
            alt="Cocktail"
            width={110}
            height={150}
            className="object-contain"
          />
        </div>
        <div className="absolute -bottom-5 -right-12 hidden lg:block">
          <img
            src="/src/assets/drink1.png"
            alt="Cocktail"
            width={110}
            height={150}
            className="object-contain"
          />
        </div>
        <h2 className="text-center text-2xl font-bold mb-8 relative">
          <span className="bg-black px-4">{getCategoryTitle(activeCategory)}</span>
          <div className="absolute w-full h-px bg-white top-1/2 left-0 -z-10"></div>
        </h2>

        <div className="space-y-8 m-6">
          {menuData[activeCategory].map((item, index) => (
            <div key={index} className="flex justify-between items-start border-b border-white pb-4">
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold">{item.name}</h3>
                  <div className="flex items-center">
                    <div className="border-b border-dotted border-white flex-1 mx-2"></div>
                    <span className="font-bold">{item.price}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};