import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/hero/hero.jpg";
import heroAfter from "../../assets/hero/afterHero.png";
import { easeIn } from "framer-motion/dom";

function Hero() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 400, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity }}
        exit={{
          opacity: 0,
          transition: {
            duration: 2,
            ease: easeIn,
          },
        }}
        className="w-full h-[95%] hero relative bg-no-repeat bg-cover z-10"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="w-full h-full flex justify-center items-center flex-col sm:flex-row">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 2,
                ease: easeIn,
              },
            }}
            className="sm:w-1/2 sm:h-full w-full h-1/2 flex sm:justify-center justify-end items-center flex-col gap-8 z-50"
            style={{ marginBottom: "1rem" }}
          >
            <h1
              className="lg:text-5xl sm:text-4xl text-2xl font-bold bg-gradient-to-r from-orange-600 via-yellow-500 to-white text-transparent bg-clip-text"
              style={{ padding: ".5rem 0" }}
            >
              کافه رستوران ریلکس
            </h1>
            <p className="text-slate-100 lg:text-2xl sm:text-lg text-base" style={{paddingRight:".5rem"}}>
              محیطی آرام و جذاب برای شما هموطن خوش ذوق
            </p>
          </motion.div>
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 2,
                ease: easeIn,
              },
            }}
            className="sm:w-1/2 sm:h-full w-full h-1/2 flex justify-center sm:items-end items-center z-50"
          >
            <img
              src={heroAfter}
              alt=""
              className="lg:w-80 sm:w-56 w-36 image-hero"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
