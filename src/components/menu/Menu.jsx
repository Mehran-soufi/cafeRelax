import React from "react";
import { easeInOut, motion } from "framer-motion";

import pizza from "../../assets/menu/pizza.webp";
import burger from "../../assets/menu/burger.webp";
import cake from "../../assets/menu/cake.webp";
import coffe from "../../assets/menu/coffe.webp";
import ice from "../../assets/menu/ice.webp";

const menuData = [
  {
    id: 1,
    name: "پیتزا",
    img: pizza,
  },
  {
    id: 2,
    name: "برگر",
    img: burger,
  },
  {
    id: 3,
    name: "کیک و دسر",
    img: cake,
  },
  {
    id: 4,
    name: "نوشیدنی گرم",
    img: coffe,
  },
  {
    id: 1,
    name: "نوشیدنی سرد",
    img: ice,
  },
];

function Menu() {
  return (
    <section
      className="w-full flex justify-center items-center relative lg:flex-row flex-col"
      style={{ padding: "3rem 0" }}
    >
      <div className="lg:w-20 w-16 lg:h-20 h-16 z-30 rounded-full absolute flex justify-center items-center -top-16 bg-black ">
        <p className="text-white">منو</p>
      </div>
      {menuData.map((item) => (
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: easeInOut,
            },
          }}
          exit={{
            opacity: 0,
            y: -100,
            transition: {
            duration: 0.7,
            ease: easeInOut,
            },
            }}
          key={item.id}
          className="lg:w-1/5 w-full flex flex-col justify-center items-center menu"
        >
          <img
            src={item.img}
            alt=""
            className="lg:w-52 w-32 lg:h-52 h-32 rounded-full"
          />
          <p className="text-slate-200 lg:text-xl text-base">{item.name}</p>
        </motion.div>
      ))}
    </section>
  );
}

export default Menu;
