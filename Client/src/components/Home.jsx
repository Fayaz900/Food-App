import { useState } from "react";
import { Header } from "./Header";
import { MenuBanner } from "./MenuBanner";
import { MenuCategories } from "./MenuCategories";
import { MenuSection } from "./MenuSection";
import { Footer } from "./Footer";

export const Home = () => {
  const [activeCategory, setActiveCategory] = useState("drinks");

  const menuData = {
    food: [
      {
        name: "STEAK & EGGS",
        price: "$28",
        description: "8oz flat iron steak, two eggs any style, roasted potatoes, toast"
      },
      {
        name: "AVOCADO TOAST",
        price: "$14",
        description: "Sourdough bread, smashed avocado, cherry tomatoes, micro greens, poached egg"
      },
      {
        name: "BREAKFAST BURRITO",
        price: "$16",
        description: "Scrambled eggs, chorizo, potatoes, cheese, pico de gallo, avocado crema"
      }
    ],
    drinks: [
      {
        name: "CINNAMON TOAST CRUNCH",
        price: "$16",
        description: "Vanilla vodka, rumchata, cinnamon whisky, cream, baileys, egg white, cinnamon"
      },
      {
        name: "MOET SPRITZ",
        price: "$20",
        description: "Aperol, moet, soda, orange\nServed with Fever-Tapper"
      },
      {
        name: "BAR 42 MARY",
        price: "$14",
        description: "Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, mary fixings"
      }
    ],
    brunch: [
      {
        name: "MIMOSA FLIGHT",
        price: "$18",
        description: "Four mini mimosas with different juices: orange, grapefruit, pineapple, cranberry"
      },
      {
        name: "BELLINI",
        price: "$12",
        description: "Prosecco, peach puree, garnished with fresh peach slice"
      },
      {
        name: "BLOODY MARIA",
        price: "$15",
        description: "Tequila, bloody mary mix, lime, jalapeño, served with bacon garnish"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-1">
        <MenuBanner />
        
        <div className="w-full relative py-8">
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-black/60 z-0 w-full"
              style={{ 
                backgroundImage: "url('/src/assets/background2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="absolute inset-0 bg-black/90 z-0"></div>
          </div>
          
          <div className="relative z-10">
            <MenuCategories 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
            />
            <MenuSection 
              activeCategory={activeCategory} 
              menuData={menuData} 
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};