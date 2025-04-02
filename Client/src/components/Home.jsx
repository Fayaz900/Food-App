import { useState } from "react";
import { Header } from "./Header";
import { MenuBanner } from "./MenuBanner";
import { Footer } from "./Footer";
import { MenuPage } from "./MenuPage";

export const Home = () => {
  
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
                backgroundImage: "url('https://i.imghippo.com/files/SCJ8190pV.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="absolute inset-0 bg-black/90 z-0"></div>
          </div>
          
          <div className="relative z-10">
            <MenuPage/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};