import React from 'react';
import { Typography } from '@material-tailwind/react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="mb-8 md:mb-0">
            <Typography variant="h4" className="font-serif font-bold mb-4">
              DEEP NET SOFT
            </Typography>
          </div>
          
          <div>
            <Typography variant="h5" className="font-serif font-bold mb-4">
              CONNECT WITH US
            </Typography>
            <Typography className="mb-2">+91 9507843940</Typography>
            <Typography>info@deepnetsoft.com</Typography>
          </div>
          
          <div>
            <Typography variant="h5" className="font-serif font-bold mb-4">
              FIND US
            </Typography>
            <Typography>
              First floor, fast iniquark,<br />
              iniquark EXPY, bakkanal
            </Typography>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Typography>
              © 2024 DeepnetSoft Solutions. All rights reserved.
            </Typography>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Typography as="a" href="#" className="hover:underline">
                Terms & Conditions
              </Typography>
              <Typography as="a" href="#" className="hover:underline">
                Privacy Policy
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;