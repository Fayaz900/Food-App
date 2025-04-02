import React, { useState } from 'react';
import { MenuCategories } from './MenuCategories';
import { MenuSection } from './MenuSection';

export const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <div>
      <MenuCategories 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setSelectedCategoryId={setSelectedCategoryId}
      />
      <MenuSection 
        activeCategory={activeCategory}
        selectedCategoryId={selectedCategoryId}
      />
    </div>
  );
};