import React from "react";

import pizza from "../../assets/menu/pizza.webp";
import burger from "../../assets/menu/burger.webp";
import cake from "../../assets/menu/cake.webp";
import coffe from "../../assets/menu/coffe.webp";
import ice from "../../assets/menu/ice.webp";

function Menu() {
  return (
    <section
      className="w-full flex justify-center items-center relative lg:flex-row flex-col"
      style={{ padding: "3rem 0" }}
    >
      <div className="lg:w-20 w-16 lg:h-20 h-16 z-30 rounded-full absolute flex justify-center items-center -top-16 bg-black ">
        <p className="text-white">منو</p>
      </div>
      <div className="lg:w-1/5 w-full flex flex-col justify-center items-center menu">
        <img src={pizza} alt="" className="lg:w-52 w-32 lg:h-52 h-32 rounded-full" />
        <p className="text-slate-200 lg:text-xl text-base">پیتزا</p>
      </div>
      <div className="lg:w-1/5 w-full flex flex-col justify-center items-center menu">
        <img src={burger} alt="" className="lg:w-52 w-32 lg:h-52 h-32 rounded-full" />
        <p className="text-slate-200 lg:text-xl text-base">برگر</p>
      </div>
      <div className="lg:w-1/5 w-full flex flex-col justify-center items-center menu">
        <img src={cake} alt="" className="lg:w-52 w-32 lg:h-52 h-32 rounded-full" />
        <p className="text-slate-200 lg:text-xl text-base">کیک و دسر</p>
      </div>
      <div className="lg:w-1/5 w-full flex flex-col justify-center items-center menu">
        <img src={coffe} alt="" className="lg:w-52 w-32 lg:h-52 h-32 rounded-full" />
        <p className="text-slate-200 lg:text-xl text-base">نوشیدنی گرم</p>
      </div>{" "}
      <div className="lg:w-1/5 w-full flex flex-col justify-center items-center menu">
        <img src={ice} alt="" className="lg:w-52 w-32 lg:h-52 h-32 rounded-full" />
        <p className="text-slate-200 lg:text-xl text-base">نوشیدنی سرد</p>
      </div>
    </section>
  );
}

export default Menu;
