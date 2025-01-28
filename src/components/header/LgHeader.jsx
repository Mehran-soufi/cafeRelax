import React from "react";

import logo from "../../assets/logo/logo.webp";
import { FaSmileWink } from "react-icons/fa";

function LgHeader() {
  return (
    <nav className="w-11/12 mx-auto flex justify-between items-center">
      <div className="w-1/3 flex items-center justify-start header-menu">
        <ul className="w-full flex items-center gap-8">
          <li>صفحه اصلی</li>
          <li>منو</li>
          <li>خدمات</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </div>
      <div className="w-1/3 flex items-center justify-center">
        <img src={logo} alt="Logo" className="w-20 h-20 cursor-pointer" />
      </div>
      <div className="w-1/3 flex items-center justify-end">
        <p className="flex items-center gap-1">همه روزه از ساعت 9 الی 23 پذیرای گرم شماهستیم <FaSmileWink className="text-[#f39c12] text-lg" />
        </p>
      </div>
    </nav>
  );
}

export default LgHeader;
