import React from 'react';

export const MenuCategories = ({ activeCategory, setActiveCategory }) => {
  const getButtonClass = (category) => {
    return `px-8 py-2 ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-black border border-gray-800'} hover:bg-gray-900 transition`;
  };

  return (
    <div className="flex justify-center mb-12 mt-8">
      <div className="inline-flex">
        <button 
          onClick={() => setActiveCategory('food')}
          className={getButtonClass('food')}
        >
          FOOD
        </button>
        <button 
          onClick={() => setActiveCategory('drinks')}
          className={getButtonClass('drinks')}
        >
          DRINKS
        </button>
        <button 
          onClick={() => setActiveCategory('brunch')}
          className={getButtonClass('brunch')}
        >
          BRUNCH
        </button>
      </div>
    </div>
  );
};