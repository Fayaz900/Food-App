import React from 'react';

export const MenuBanner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-black/70 z-0 w-full"
          style={{
            backgroundImage: "url('https://i.imghippo.com/files/ars6555ZQ.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "400px"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 z-0"></div>
      </div>

      <div className="relative z-10 container mx-auto min-h-[400px] flex flex-col justify-center items-center px-4">
        <h1 className="font-oswald text-shadow-burgundy font-semibold text-[45px] md:text-[70px] leading-none tracking-[0.03em] uppercase mb-4">
          MENU
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-sm text-center">
          Please take a look at our menu for food, drinks, and brunch. If you'd like to place an order, click the
          "Order Online" button located below the menu.
        </p>
      </div>
    </div>
  );
};