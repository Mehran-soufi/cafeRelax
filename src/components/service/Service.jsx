import React, { useEffect, useState, useRef } from "react";
import { easeInOut, motion } from "framer-motion";
import serviceImg from "../../assets/service/service.jpg";
import birthday from "../../assets/service/birthday.jpg";
import game from "../../assets/service/game.jpg";
import book from "../../assets/service/book.jpg";
import movie from "../../assets/service/movie.jpg";

function Service() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{
        duration: 1.5,
        ease: easeInOut,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 2,
          ease: easeInOut,
        },
      }}
      className="w-full h-screen bg-no-repeat bg-cover object-top z-10 relative"
      style={{
        backgroundImage: `url(${serviceImg})`,
        backgroundSize: "100% 100vh",
      }}
    >
      <div
        className="w-full h-full z-50 absolute top-0 left-0 bg-gradient-to-b from-black/30 via-black/80 to-black flex justify-center flex-col"
        style={{ padding: "2rem 0" }}
      >
        <div className="w-full h-[20%] flex flex-col gap-4">
            <h2 className="text-amber-500 text-3xl w-full flex justify-center items-center">خدمات ما</h2>
          <p className="w-full flex justify-center items-center text-slate-200 text-xl">در کافه ما، تجربهای متفاوت و بهیادماندنی را برای شما فراهم کردهایم. خدمات ویژه ما شامل:
          </p>
        </div>
        <div className="w-ull flex justify-around items-end h-[80%]">
          <div
            className="w-1/6 h-[70vh] mx-auto rounded-ss-full rounded-se-full border-amber-500 shadow-lg shadow-amber-600 bg-gradient-to-b from-black/40 to-black flex justify-between items-center  flex-col"
            style={{ padding: "1rem 0" }}
          >
            <div className="w-11/12 h-1/2 rounded-full flex justify-center items-center">
              <img
                src={birthday}
                alt="birthday"
                className="opacity-100 w-full h-full rounded-ss-full rounded-se-full"
              />
            </div>
            <div className="w-11/12 mx-auto h-1/2 flex justify-around items-center flex-col">
            <p className="text-slate-300 text-lg">جشن تولد</p>
              <p className="text-slate-100 text-justify">
              جشن تولد خود را در محیطی دلنشین و دوستانه برگزار کنید. ما با دکوراسیون زیبا و کیکهای خوشمزه، لحظات شادی را برای شما و عزیزانتان رقم میزنیم.
              </p>
            </div>
          </div>
          <div
            className="w-1/6 h-[70vh] mx-auto rounded-ss-full rounded-se-full border-amber-500 shadow-lg shadow-amber-600 bg-gradient-to-b from-black/40 to-black flex justify-between items-center  flex-col"
            style={{ padding: "1rem 0" }}
          >
            <div className="w-11/12 h-1/2 rounded-full flex justify-center items-center">
              <img
                src={game}
                alt="birthday"
                className="opacity-100 w-full h-full rounded-ss-full rounded-se-full"
              />
            </div>
            <div className="w-11/12 mx-auto h-1/2 flex justify-around items-center flex-col">
            <p className="text-slate-300 text-lg">بازی</p>
              <p className="text-slate-100 text-justify">
              از بازیهای متنوع و جذاب ما لذت ببرید. چه بازیهای رومیزی و چه بازیهای ویدئویی، ما فضایی مناسب برای سرگرمی و رقابت دوستانه فراهم کردهایم.
              </p>
            </div>
          </div>
          <div
            className="w-1/6 h-[70vh] mx-auto rounded-ss-full rounded-se-full border-amber-500 shadow-lg shadow-amber-600 bg-gradient-to-b from-black/40 to-black flex justify-between items-center  flex-col"
            style={{ padding: "1rem 0" }}
          >
            <div className="w-11/12 h-1/2 rounded-full flex justify-center items-center">
              <img
                src={book}
                alt="birthday"
                className="opacity-100 w-full h-full rounded-ss-full rounded-se-full"
              />
            </div>
            <div className="w-11/12 mx-auto h-1/2 flex justify-around items-center flex-col">
            <p className="text-slate-300 text-lg">کتاب</p>
              <p className="text-slate-100 text-justify">
              عاشقان کتاب میتوانند از کتابخانه کافه ما استفاده کنند. با یک فنجان قهوه داغ و کتابی جذاب، لحظاتی آرام و دلپذیر را تجربه کنید.              </p>
            </div>
          </div>
          <div
            className="w-1/6 h-[70vh] mx-auto rounded-ss-full rounded-se-full border-amber-500 shadow-lg shadow-amber-600 bg-gradient-to-b from-black/40 to-black flex justify-between items-center  flex-col"
            style={{ padding: "1rem 0" }}
          >
            <div className="w-11/12 h-1/2 rounded-full flex justify-center items-center">
              <img
                src={movie}
                alt="birthday"
                className="opacity-100 w-full h-full rounded-ss-full rounded-se-full"
              />
            </div>
            <div className="w-11/12 mx-auto h-1/2 flex justify-around items-center flex-col">
            <p className="text-slate-300 text-lg">فیلم</p>
              <p className="text-slate-100 text-justify">
              شبهای فیلم ما را از دست ندهید! با نمایش فیلمهای محبوب و کلاسیک، فضایی گرم و صمیمی برای تماشای فیلم با دوستان و خانواده فراهم کردهایم.              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Service;
