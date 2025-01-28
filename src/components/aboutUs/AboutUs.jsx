import React from "react";
import about from "../../assets/about/about.jpg";

const AboutUs = () => {
  return (
    <section
      className="relative w-full h-screen bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${about})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center p-8 gap-8">
        <h2 className="md:text-4xl text-3xl font-bold mb-4">درباره ما</h2>
        <p
          className="md:text-lg text-base max-w-2xl"
          style={{ padding: "0 .5rem" }}
        >
          به کافه ریلکس خوش آمدید! کافه ای که برای شما فضایی آرام و دلنشین فراهم
          کرده است. در کافه ریلکس میتوانید جشن تولد خود را برگزار کنید و از
          تفریحات متنوعی مانند بازی های مافیا، کارتی و کنسولی لذت ببرید. همچنین،
          ما یک کتابخانه مجهز و یک محل مناسب برای دیدن فیلم داریم تا شما بتوانید
          لحظات خوشی را در کنار دوستان و خانواده خود سپری کنید.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
