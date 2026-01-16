import { memo } from "react";

/* 🔹 QR + Logo */
import qrImage from "../assets/qrLatest3.jpeg";
import logo from "../assets/logo5.jpeg";

/* 🔹 Makeup Images */
import Img1 from "../assets/lightMakeup.JPG";
import Img2 from "../assets/partyMakeup.JPG";
import Img3 from "../assets/ExclusivePartyMakeup.jpg";
import Img4 from "../assets/ExclusiveAirbrushpartymakeup.JPG";
import Img5 from "../assets/naturalGlamEngagementMakeup.jpg";
import Img6 from "../assets/sparklingEngagementMakeup.jpg";
import Img7 from "../assets/UrbanEngagementMakeup.jpg";
import Img8 from "../assets/opulentEngagementMakeup.jpg";
import Img9 from "../assets/naturalGlamReceptionMakeup.jpg";
import Img10 from "../assets/SparklingReceptionMakeup.jpg";
import Img11 from "../assets/UrbanReceptionMakeup.jpg";
import Img12 from "../assets/opulentReceptionMakeup.jpg";
import Img13 from "../assets/classicCreamMakeup.jpg";
import Img14 from "../assets/ClassicCreamHDMakeup.jpg";
import Img15 from "../assets/ClassicUltraHDMakeup.jpg";
import Img16 from "../assets/liquidGlamAirbrushLook.jpg";
import Img17 from "../assets/matteWeddingLook.jpg";
import Img18 from "../assets/TraditionalWeddingLook.JPG";
import Img19 from "../assets/DazzlingDivaWeddingLook.jpg";
import Img20 from "../assets/dazzlingDivaAirbrushWeddingLook.jpg";
import Img21 from "../assets/UrbanWeddingLook.jpg";
import Img22 from "../assets/UrbanWeddingAirbrushLook.jpg";

/* 🔹 Top Salon Services */
const topServices = [
  { title: "Haircut & Styling", desc: "Professional haircut with premium wash & blow-dry styling.", price: "₹799" },
  { title: "Hair Coloring", desc: "Global color, highlights, balayage & ammonia-free shades.", price: "₹2,499+" },
  { title: "Keratin / Smoothening", desc: "Advanced hair smoothening & keratin repair treatment.", price: "₹3,999+" },
  { title: "Facial & Cleanup", desc: "Glow, anti-aging & hydration facials using luxury products.", price: "₹1,199+" },
  { title: "Manicure & Pedicure", desc: "Spa manicure & pedicure with massage & scrub therapy.", price: "₹999+" },
  { title: "Nail Art & Extensions", desc: "Gel nails, acrylic extensions, chrome & custom nail art.", price: "₹1,499+" },
  { title: "Makeup Services", desc: "Party, bridal & HD makeup by certified professionals.", price: "₹2,999+" },
];

/* 🔹 Makeup Services */
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
    <div className="bg-[#fffaf3] rounded-2xl overflow-hidden border-l-8 border-yellow-500 grid grid-cols-1 md:grid-cols-12 items-center shadow-[0_2px_10px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:scale-[1.02]">
      <div className="md:col-span-4">
        <img
          src={img}
          alt={title}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="w-full h-64 md:h-full object-cover"
        />
      </div>

      <div className="md:col-span-5 px-6 py-6">
        <h3 className="text-2xl font-serif text-yellow-700 mb-2">{title}</h3>
        <p className="text-gray-700">Professional premium makeup service with flawless finish.</p>
      </div>

      <div className="md:col-span-3 px-6 py-6 flex flex-col items-start md:items-end">
        <p className="text-2xl font-bold mb-4">{price}</p>
        <a
          href={`https://wa.me/916389121360?text=${encodeURIComponent(`Hello, I want to book: ${title}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full"
        >
          Book Now
        </a>
      </div>
    </div>
  );
});

/* 🔹 Page */
export default function ServicesPage() {
  return (
    <div className="bg-[#cdb21a] min-h-screen pt-5 pb-8">

      {/* QR + Logo */}
      <section className="flex flex-col gap-5 mb-8 px-4 md:px-6">
        <div className="w-full rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.18)]">
          <img src={qrImage} alt="QR" className="mx-auto w-48 md:w-56" />
        </div>

        <div className="w-full rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.18)] py-4">
          <img src={logo} alt="Logo" className="mx-auto h-20 md:h-24 object-contain" />
        </div>
      </section>

      <p className="text-xl md:text-2xl font-serif text-white text-center mb-10">
        A Family Salon • Luxury Beauty Experience
      </p>

      {/* Top Services */}
      <section className="max-w-5xl mx-auto px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-white text-center mb-10">
          Our Services
        </h1>

        <div className="flex flex-col gap-6">
          {topServices.map((s, i) => (
            <div key={i} className="bg-[#fffaf3] rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.18)] border-l-8 border-yellow-500">
              <h3 className="text-2xl font-serif text-yellow-700 mb-2">{s.title}</h3>
              <p className="text-gray-700">{s.desc}</p>
              <p className="font-bold mt-2">{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Makeup */}
      <section className="px-4 mb-14">
        <h2 className="text-4xl font-serif text-white text-center mb-10">
          Makeup Services
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          {services.map((s, i) => (
            <Card key={i} {...s} priority={i < 2} />
          ))}
        </div>
      </section>

      {/* 🔹 Visit Us Box */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.18)] p-6 text-center">
          <h3 className="text-3xl font-serif text-yellow-700 mb-4">
            Visit Us
          </h3>

          <p className="text-gray-800 leading-relaxed">
            <strong>360 ACADEMY</strong>, opposite SURABHI INTERNATIONAL HOTEL,<br />
            Ganpathi Nagar, Paharia,<br />
            Varanasi, Uttar Pradesh 221007
          </p>

          <p className="mt-4 text-lg font-bold">
            Contact: <a href="tel:+916389121360" className="text-yellow-600">+91 63891 21360</a>
          </p>
        </div>
      </section>

      <p className="text-sm md:text-lg text-white text-center">
        © 360 Academy • Best Ladies Beauty Parlour in Varanasi
      </p>
    </div>
  );
}
