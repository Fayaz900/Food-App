import React, { useState } from 'react';
import { Tabs, TabsHeader, Tab } from '@material-tailwind/react';

const MenuTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { label: 'FOOD', value: 'food' },
    { label: 'DRINKS', value: 'drinks' },
    { label: 'BRUNCH', value: 'brunch' },
  ];

  return (
    <div className="my-8">
      <Tabs value={activeTab}>
        <TabsHeader className="bg-transparent" indicatorProps={{ className: 'bg-secondary shadow-none' }}>
          {tabs.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`font-sans font-semibold ${activeTab === value ? 'text-white' : 'text-gray-600'}`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
    </div>
  );
};

export default MenuTabs;
