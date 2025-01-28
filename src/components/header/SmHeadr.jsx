import React, { useEffect, useState } from "react";

import logo from "../../assets/logo/logo.webp";
import { RiMenu3Fill } from "react-icons/ri";
import MenuHeader from "./MenuHeader";
import { AnimatePresence } from "framer-motion";

function SmHeadr() {
  
  const [menuActive, setMenuActive] = useState(false);
  
useEffect(() => {
  if (menuActive) {
  document.body.classList.add("no-scroll");
  } else {
  document.body.classList.remove("no-scroll");
  }
  return () => {
  document.body.classList.remove("no-scroll");
  };
  }, [menuActive]);
  return (
    <>
      <nav className="w-11/12 mx-auto flex justify-between items-center">
        <div className="w-1/2 flex justify-start">
          <button
            className="outline-none border-none text-yellow-400 text-2xl"
            onClick={() => setMenuActive(true)}
          >
            <RiMenu3Fill />
          </button>
        </div>
        <div className="w-1/2 flex justify-end">
          {" "}
          <img src={logo} alt="Logo" className="w-16 h-16 cursor-pointer" />
        </div>
      </nav>
      <AnimatePresence>
        {menuActive && (
          <MenuHeader key="menuHeader" setMenuActive={setMenuActive} />
        )}
      </AnimatePresence>
    </>
  );
}

export default SmHeadr;
