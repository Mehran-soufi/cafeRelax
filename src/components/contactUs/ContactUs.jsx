import React, { useRef, useEffect } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import {
  FaInstagram,
  FaPinterestP,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const ContactUs = () => {
  const mapRef = useRef();

  useEffect(() => {
    new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [5730000, 3830000],
        zoom: 5,
      }),
    });
  }, []);

  return (
    <section
      className="w-full h-screen flex justify-start items-end overflow-hidden"
      style={{ marginBottom: "2rem" }}
    >
      <div className="lg:w-4/5 w-11/12 lg:h-[75vh] h-[85vh] rounded-se-full lg:rounded-ss-none rounded-ss-full lg:rounded-ee-full lg:bg-gradient-to-r bg-gradient-to-b from-[#fbc531b5] to-transparent flex lg:flex-row flex-col-reverse justify-between items-center">
        <div
          className="lg:w-1/2 w-full lg:h-full h-1/2 flex justify-center lg:items-start items-center flex-col gap-8"
          style={{ padding: "1rem" }}
        >
          <p className="text-white">
            آدرس : تهران - سعادت آباد - خیابان اول - کوچه دوم - پلاک 3
          </p>
          <p className="text-white flex items-center gap-4">
            شبکه های اجتماعی:
            <FaInstagram className="cursor-pointer lg:text-2xl text-xl" />
            <FaWhatsapp className="cursor-pointer lg:text-2xl text-xl" />
            <FaTelegramPlane className="cursor-pointer lg:text-2xl text-xl" />
            <FaPinterestP className="cursor-pointer lg:text-2xl text-xl" />
          </p>
          <p className="text-white">شماره تماس : 111213-021</p>
          <div
            className="lg:w-4/5 w-full bg-transparent border-dashed border border-slate-400 rounded-md flex lg:flex-row flex-col justify-between items-center"
            style={{ padding: ".5rem", marginBottom: "1rem" }}
          >
            <input
              type="email"
              className="lg:w-3/5 w-full lg:h-full  h-auto outline-none border-none text-white lg:text-lg text-base"
              placeholder="در خبرنامه عضو شوید..."
              style={{ padding: ".5rem .3rem" }}
            />
            <button
              className="lg:w-2/5 w-full lg:h-full h-auto  outline-none border-none bg-[#fbc531b5] text-white rounded-md lg:text-lg text-base cursor-pointer transition duration-200 hover:bg-amber-600"
              style={{ padding: ".5rem .3rem" }}
            >
              عضویت در خبرنامه
            </button>
          </div>
        </div>
        <div
          className="lg:w-1/2 w-full lg:h-full h-1/2 overflow-hidden rounded-se-full lg:rounded-ss-none rounded-ss-full lg:rounded-ee-full flex justify-center items-center"
          style={{ padding: "1rem" }}
        >
          <div
            ref={mapRef}
            style={{
              borderRadius: "inherit",
            }}
            className="lg:w-[90%] w-[80%] h-[90%] overflow-hidden"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
