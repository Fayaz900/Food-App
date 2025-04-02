import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MenuSection = ({ 
  activeCategory, 
  selectedCategoryId,
  activeCategoryDescription 
}) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      setIsLoading(true);
      const url = selectedCategoryId 
        ? `http://localhost:3000/api/Getitems?category=${selectedCategoryId}`
        : 'http://localhost:3000/api/Getitems';
      
      const response = await axios.get(url);
      setItems(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch items');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [selectedCategoryId]);

  if (isLoading) {
    return (
      <div className="relative w-full px-4">
        <div className="border border-white py-8 relative bg-black/70 backdrop-blur-sm mx-auto" style={{ maxWidth: '900px' }}>
          <h2 className="text-center text-2xl font-bold mb-8 relative">
            <span className="bg-black px-4">Loading...</span>
            <div className="absolute w-full h-px bg-white top-1/2 left-0 -z-10"></div>
          </h2>
          <div className="space-y-8 m-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse flex justify-between items-start border-b border-white pb-4">
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <div className="h-6 bg-gray-700 rounded w-1/3"></div>
                    <div className="h-6 bg-gray-700 rounded w-1/4"></div>
                  </div>
                  <div className="h-4 bg-gray-800 rounded w-full mt-2"></div>
                  <div className="h-4 bg-gray-800 rounded w-2/3 mt-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative w-full px-4">
        <div className="border border-white py-8 relative bg-black/70 backdrop-blur-sm mx-auto" style={{ maxWidth: '900px' }}>
          <h2 className="text-center text-2xl font-bold mb-8 relative">
            <span className="bg-black px-4 text-red-500">{error}</span>
            <div className="absolute w-full h-px bg-white top-1/2 left-0 -z-10"></div>
          </h2>
        </div>
      </div>
    );
  }

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
        <h2 className="text-center text-2xl font-bold mb-2 relative">
          <span className="bg-black px-4 uppercase">{activeCategoryDescription}</span>
          <div className="absolute w-full h-px bg-white top-1/2 left-0 -z-10"></div>
        </h2>
        

        <div className="space-y-8 m-6">
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item._id} className="flex justify-between items-start border-b border-white pb-4">
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <h3 className="font-bold">{item.name}</h3>
                    <div className="flex items-center">
                      <div className="border-b border-dotted border-white flex-1 mx-2"></div>
                      <span className="font-bold">${item.price}</span>
                    </div>
                  </div>
                  {item.description && (
                    <p className="text-gray-400 text-sm whitespace-pre-line">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No items found in this category</p>
          )}
        </div>
      </div>
    </div>
  );
};