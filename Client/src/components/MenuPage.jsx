import { useState } from "react";
import { MenuCategories } from './MenuCategories';
import { MenuSection } from './MenuSection';

export const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedCategoryId, setSelectedCategoryId] = useState(null); 
    const [activeCategoryDescription, setActiveCategoryDescription] = useState('Our full menu');
  
    return (
      <div>
        <MenuCategories 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setSelectedCategoryId={setSelectedCategoryId}
          setActiveCategoryDescription={setActiveCategoryDescription}
        />
        <MenuSection 
          activeCategory={activeCategory}
          selectedCategoryId={selectedCategoryId}
          activeCategoryDescription={activeCategoryDescription}
        />
      </div>
    );
  };