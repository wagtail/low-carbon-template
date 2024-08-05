'use client';
import React, { useState } from 'react';
import { Switch } from '@nextui-org/react';
// import { MoonIcon } from "./Icons/MoonIcon";
// import { SunIcon } from "./Icons/SunIcon";

const Navbar = () => {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <header className="bg-[#EEEDEF] px-36 py-5 flex flex-row items-center justify-between" role="navigation">
      <div>
        <p className="text-lg font-extrabold text-[#490ED9]">ZenWeb</p>
      </div>
      <div className="flex flex-row items-center">
        <nav>
          <span className="text-base mr-10 text-black cursor-pointer">
            Home
          </span>
          <span className="text-base mr-10 text-black cursor-pointer">
            Blog
          </span>
        </nav>
        <div>
          {/* <Switch defaultSelected aria-label="Automatic updates"/> */}
          <Switch
            defaultSelected={isSelected}
            aria-label="Automatic updates"
            onChange={(e) => setIsSelected(e.target.checked)}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
