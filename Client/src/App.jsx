import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import MenuTabs from './components/MenuTabs';
import { Typography } from '@material-tailwind/react';

const App = () => {
  const [activeTab, setActiveTab] = useState('brunch');

  // Sample menu data
  const brunchCocktails = [
    {
      title: 'CINNAMON TOAST CRUNCH',
      price: '$16',
      description: 'Sirevoltall peanut butter whiskey, vanilla extract, Amaretto, halleys, egg white, cinnamon'
    },
    {
      title: 'BAR 42 MARY',
      price: '$14',
      description: 'Thus, tomato juice, worsenkerabirze, cokery salt, black pepper tabasco, fully loaded'
    },
    {
      title: 'MOET SPRITZ',
      price: '$20',
      description: 'Aperol, St Germain, botanical liquor; fresh lime juice, mint brut Khati Copper'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 md:px-8 lg:px-12 py-8">
        <Typography variant="h1" className="font-serif text-4xl font-bold text-primary mb-4">
          MENU
        </Typography>
        
        <Typography className="text-gray-600 mb-8 max-w-3xl">
          Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
        </Typography>
        
        <MenuTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {activeTab === 'brunch' && (
          <MenuSection title="BRUNCH COCKTAILS" items={brunchCocktails} />
        )}
        
        {/* Add other sections for food and drinks */}
        
        <div className="mt-8 flex justify-center">
          <button className="bg-secondary hover:bg-secondary-light text-white font-semibold py-3 px-8 rounded-md transition duration-300">
            ORDER ONLINE
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;