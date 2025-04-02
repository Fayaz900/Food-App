import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

export const MenuCategories = ({
  activeCategory,
  setActiveCategory,
  setSelectedCategoryId,
  setActiveCategoryDescription
}) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showScrollIndicators, setShowScrollIndicators] = useState(false);
  const scrollContainerRef = useRef(null);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/getAllcategories');
      setCategories(response.data);
  
      // Set "All" as default
      setActiveCategory('all');
      setSelectedCategoryId(null);
      setActiveCategoryDescription('Our full menu');
      
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

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowScrollIndicators(scrollWidth > clientWidth);
      }
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, [categories]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category.name.toLowerCase());
    setSelectedCategoryId(category._id);
    setActiveCategoryDescription(category.description);
  };

  const getButtonClass = (category) => {
    return `px-8 py-2 font-oswald font-extrabold text-shadow-burgundy-lite ${
      activeCategory === category.name.toLowerCase()
        ? 'bg-blue-600 text-white'
        : 'bg-black border border-gray-800'
    } hover:bg-gray-900 transition whitespace-nowrap`;
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? 200 : -200,
        behavior: 'smooth'
      });
    }
  };

  if (isLoading) {
    return <div className="flex justify-center mb-12 mt-8">Loading categories...</div>;
  }

  if (error) {
    return <div className="flex justify-center mb-12 mt-8 text-red-500">{error}</div>;
  }

  return (
    <div className="mb-12 mt-8 relative">
    {/* Scroll indicators */}
    {showScrollIndicators && (
      <>
        <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 p-2 rounded-full text-white hover:text-blue-500 transition-colors">
          <FiChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 p-2 rounded-full text-white hover:text-blue-500 transition-colors">
          <FiChevronRight className="h-5 w-5" />
        </button>
      </>
    )}

    <div className="flex justify-center">
      <div className="relative max-w-full overflow-hidden">
        <div ref={scrollContainerRef} className="overflow-x-auto hide-scrollbar py-2">
          <div className="inline-flex gap-2 mx-auto">
            {/* Add All button first */}
            <button
              onClick={() => {
                setActiveCategory('all');
                setSelectedCategoryId(null);
                setActiveCategoryDescription('Our full menu');
              }}
              className={`px-8 py-2 font-oswald font-extrabold text-shadow-burgundy-lite ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-black border border-gray-800'
              } hover:bg-gray-900 transition whitespace-nowrap`}
            >
              ALL
            </button>
            
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => handleCategoryClick(category)}
                className={`flex-shrink-0 ${getButtonClass(category)}`}
              >
                {category.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};