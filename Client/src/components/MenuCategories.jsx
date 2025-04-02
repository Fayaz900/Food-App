import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MenuCategories = ({ 
  activeCategory, 
  setActiveCategory, 
  setSelectedCategoryId,
  setActiveCategoryDescription 
}) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/getAllcategories');
      setCategories(response.data);
      
      if (!activeCategory && response.data.length > 0) {
        const drinksCategory = response.data.find(
          category => category.name.toLowerCase() === 'drinks'
        );
        const defaultCategory = drinksCategory || response.data[0];
        setActiveCategory(defaultCategory.name.toLowerCase());
        setSelectedCategoryId(defaultCategory._id);
        setActiveCategoryDescription(defaultCategory.description);
      }
      
      setError(null);
    } catch (err) {
      setError('Failed to fetch categories');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category.name.toLowerCase());
    setSelectedCategoryId(category._id);
    setActiveCategoryDescription(category.description);
  };

  const getButtonClass = (category) => {
    return `px-8 py-2 ${
      activeCategory === category.name.toLowerCase() 
        ? 'bg-blue-600 text-white' 
        : 'bg-black border border-gray-800'
    } hover:bg-gray-900 transition`;
  };

  if (isLoading) {
    return <div className="flex justify-center mb-12 mt-8">Loading categories...</div>;
  }

  if (error) {
    return <div className="flex justify-center mb-12 mt-8 text-red-500">{error}</div>;
  }

  return (
    <div className="flex justify-center mb-12 mt-8">
      <div className="inline-flex">
        {categories.map((category) => (
          <button 
            key={category._id} 
            onClick={() => handleCategoryClick(category)}
            className={getButtonClass(category)}
          >
            {category.name.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};