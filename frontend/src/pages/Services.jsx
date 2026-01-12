import { motion } from "framer-motion";
import { memo } from "react";

/* 🔹 Images */
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpg";
import Img4 from "../assets/4.jpg";
import Img5 from "../assets/DSC_0140.jpg";
import Img6 from "../assets/6.jpg";
import Img7 from "../assets/7.jpg";
import Img8 from "../assets/8.jpg";
import Img9 from "../assets/9.jpg";
import Img10 from "../assets/DSC_0624.jpg";
import Img11 from "../assets/6920.jpg";
import Img12 from "../assets/DSC_0001.jpg";
import Img13 from "../assets/DSC_0019.jpg";
import Img14 from "../assets/DSC_0070.jpg";
import Img15 from "../assets/DSC_0085.jpg";
import Img16 from "../assets/DSC_0095.jpg";
import Img17 from "../assets/DSC_0107.jpg";
import Img18 from "../assets/DSC_0111.jpg";
import Img19 from "../assets/DSC_0112.jpg";
import Img20 from "../assets/DSC_0113.jpg";
import Img21 from "../assets/DSC_0114.jpg";
import Img22 from "../assets/DSC_0115.jpg";

/* 🔹 Data */
const services = [
  { title: "Light Makeup", price: "₹2,999", img: Img1 },
  { title: "Party Makeup", price: "₹3,999", img: Img2 },
  { title: "Exclusive Party Makeup", price: "₹5,999 onwards", img: Img3 },
  { title: "Exclusive Airbrush Party Makeup", price: "₹9,499 onwards", img: Img4 },
  { title: "Natural Glam Engagement Makeup", price: "₹8,999 onwards", img: Img5 },
  { title: "Sparkling Engagement Makeup", price: "₹11,999 onwards", img: Img6 },
  { title: "Urban Engagement Makeup", price: "₹14,999 onwards", img: Img7 },
  { title: "Opulent Engagement Makeup", price: "₹19,999 onwards", img: Img8 },
  { title: "Natural Glam Reception Makeup", price: "₹9,999", img: Img9 },
  { title: "Sparkling Reception Makeup", price: "₹13,999", img: Img10 },
  { title: "Urban Reception Makeup", price: "₹19,999", img: Img11 },
  { title: "Opulent Reception Makeup", price: "₹21,999", img: Img12 },
  { title: "Classic Cream Makeup", price: "₹9,999", img: Img13 },
  { title: "Classic Cream HD Makeup", price: "₹12,999", img: Img14 },
  { title: "Classic Ultra HD Makeup", price: "₹14,999", img: Img15 },
  { title: "Liquid Glam Airbrush Look", price: "₹16,999", img: Img16 },
  { title: "Matte Wedding Look", price: "₹19,999", img: Img17 },
  { title: "Traditional Wedding Look", price: "₹22,999", img: Img18 },
  { title: "Dazzling Diva Wedding Look", price: "₹25,999", img: Img19 },
  { title: "Dazzling Diva Airbrush Wedding Look", price: "₹28,999", img: Img20 },
  { title: "Urban Wedding Look", price: "₹32,999", img: Img21 },
  { title: "Urban Wedding Airbrush Look", price: "₹34,999", img: Img22 },
];

/* 🔹 Card */
const Card = memo(function Card({ title, price, img, priority }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      initial={false}
      className="
        bg-[#fffaf3]
        rounded-2xl
        shadow-lg
        overflow-hidden
        border-l-8
        border-yellow-500
        will-change-transform
        grid
        grid-cols-1
        md:grid-cols-12
        items-center
      "
    >
      {/* Image */}
      <div className="md:col-span-4 bg-gray-200">
        <img
          src={img}
          alt={title}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="w-full h-64 md:h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="md:col-span-5 px-6 py-6">
        <h3 className="text-2xl font-serif text-yellow-700 mb-2">
          {title}
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Professional premium makeup service designed to enhance your natural
          beauty with long-lasting, flawless results suitable for every occasion.
        </p>
      </div>

      {/* Price + CTA */}
      <div className="md:col-span-3 px-6 py-6 text-left md:text-right">
        <p className="text-2xl font-bold text-black mb-4">
          {price}
        </p>

        <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition">
          Book Now
        </button>
      </div>
    </motion.div>
  );
});

/* 🔹 Main Component */
export default function MakeupServices() {
  return (
    <div className="bg-gradient-to-b from-yellow-500 to-yellow-600 min-h-screen py-20">
      <h1 className="text-4xl md:text-5xl font-serif text-white text-center mb-14">
        Makeup Services
      </h1>

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
        {services.map((service, index) => (
          <Card
            key={index}
            {...service}
            priority={index < 2}
          />
        ))}
      </div>
    </div>
  );
}
