import React from 'react';
import { Navbar as MTNavbar, Typography, Button } from '@material-tailwind/react';

const Navbar = () => {
  return (
    <MTNavbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-primary">
      <div className="flex items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-serif text-xl font-bold"
        >
          DEEP NET SOFT
        </Typography>
        <div className="flex items-center gap-4">
          <Typography as="a" href="#" className="font-sans font-normal">
            HOME
          </Typography>
          <Typography as="a" href="#" className="font-sans font-normal">
            MENU
          </Typography>
          <Typography as="a" href="#" className="font-sans font-normal">
            MAKE A RESERVATION
          </Typography>
          <Typography as="a" href="#" className="font-sans font-normal">
            CONTACT US
          </Typography>
        </div>
      </div>
    </MTNavbar>
  );
};

export default Navbar;