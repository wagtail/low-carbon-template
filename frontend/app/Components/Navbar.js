'use client';
import React, { useState } from 'react';
import { Switch } from '@nextui-org/react';
// import { MoonIcon } from "./Icons/MoonIcon";
// import { SunIcon } from "./Icons/SunIcon";

const Navbar = () => {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <div className="bg-lavendar_gray px-36 py-5 flex flex-row items-center justify-between">
      <div>
        <p className="text-lg font-extrabold text-blue_violet">ZenWeb</p>
      </div>
      <div className="flex flex-row items-center">
        <span className="text-base mr-10 text-black cursor-pointer">Home</span>
        <span className="text-base mr-10 text-black cursor-pointer">Blog</span>
        <div>
          {/* <Switch defaultSelected aria-label="Automatic updates"/> */}
          <Switch
            defaultSelected={isSelected}
            aria-label="Automatic updates"
            onChange={(e) => setIsSelected(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
