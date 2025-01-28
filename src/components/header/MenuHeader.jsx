import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../../assets/logo/logo.webp";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200, 
      delay: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    x: "100vw",
    transition: { ease: "easeInOut", duration: 0.3 }, 
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: "100vw" },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100vw" }, 
};


function MenuHeader({ setMenuActive }) {
  return (
    <AnimatePresence>
      <motion.div
        className="w-full h-screen absolute top-0 right-0 bg-amber-600 rounded-ee-[15rem]"
        style={{ paddingLeft: "1rem" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit" 
        key="menuHeader" 
      >
        <motion.div
          className="w-full h-full bg-yellow-900 rounded-ee-[15rem]"
          style={{ paddingLeft: "1rem" }}
          variants={containerVariants}
        >
          <motion.div
            className="w-full h-full bg-slate-950 rounded-ee-[15rem] flex flex-col justify-around"
            style={{ paddingLeft: "1rem" }}
            variants={containerVariants}
          >
            <motion.div
              className="w-full flex items-center"
              style={{ padding: "1rem" }}
              variants={containerVariants}
            >
              <button
                className="outline-none text-slate-300 text-2xl"
                onClick={() => setMenuActive(false)}
              >
                <FaArrowRightLong />
              </button>
            </motion.div>
            <motion.div className="w-full" variants={itemVariants}>
              <ul className="w-full flex flex-col items-center gap-8">
                <motion.li
                  className="shadow shadow-amber-400 w-11/12 flex justify-center items-center"
                  style={{ padding: ".5rem 0" }}
                  variants={itemVariants}
                >
                  صفحه اصلی
                </motion.li>
                <motion.li
                  className="shadow shadow-amber-400 w-11/12 flex justify-center items-center"
                  style={{ padding: ".5rem 0" }}
                  variants={itemVariants}
                >
                  منو
                </motion.li>
                <motion.li
                  className="shadow shadow-amber-400 w-11/12 flex justify-center items-center"
                  style={{ padding: ".5rem 0" }}
                  variants={itemVariants}
                >
                  خدمات
                </motion.li>
                <motion.li
                  className="shadow shadow-amber-400 w-11/12 flex justify-center items-center"
                  style={{ padding: ".5rem 0" }}
                  variants={itemVariants}
                >
                  درباره ما
                </motion.li>
                <motion.li
                  className="shadow shadow-amber-400 w-11/12 flex justify-center items-center"
                  style={{ padding: ".5rem 0" }}
                  variants={itemVariants}
                >
                  تماس با ما
                </motion.li>
              </ul>
            </motion.div>
            <motion.div
              className="w-full flex justify-center items-center"
              variants={itemVariants}
            >
              <img src={logo} alt="Logo" className="w-16 h-16 cursor-pointer" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default MenuHeader;
