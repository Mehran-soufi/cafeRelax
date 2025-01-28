import React, { useState } from "react";
import LgHeader from "./LgHeader";
import SmHeadr from "./SmHeadr";

function Header() {
  const [mobile, setMobile] = useState(false);

  const handleSize = () => {
    if (window.innerWidth <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  window.addEventListener("resize", handleSize);

  return (
    <header className="w-full fixed top-0 z-[1000] flex justify-center items-center border-b text-white border-gray-800 shadow-lg shadow-gray-900 bg-black/90 backdrop:blur-lg" 
    style={{padding:".5rem 0"}}
    >
      {mobile ? <SmHeadr /> : <LgHeader />}
    </header>
  );
}

export default Header;
