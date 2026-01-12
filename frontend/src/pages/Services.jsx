import { motion } from "framer-motion";
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";

const services = [
  { title: "Light Makeup", price: "₹2,999" },
  { title: "Party Makeup", price: "₹3,999" },
  { title: "Exclusive Party Makeup", price: "₹5,999 onwards" },
  { title: "Exclusive Airbrush Party Makeup", price: "₹9,499 onwards" },
  { title: "Natural Glam Engagement Makeup", price: "₹8,999 onwards" },
  { title: "Sparkling Engagement Makeup", price: "₹11,999 onwards" },
  { title: "Urban Engagement Makeup", price: "₹14,999 onwards" },
  { title: "Opulent Engagement Makeup", price: "₹19,999 onwards" },
  { title: "Natural Glam Reception Makeup", price: "₹9,999" },
  { title: "Sparkling Reception Makeup", price: "₹13,999" },
  { title: "Urban Reception Makeup", price: "₹19,999" },
  { title: "Opulent Reception Makeup", price: "₹21,999" },
];

const bridalServices = [
  { title: "Classic Cream Makeup", price: "₹9,999" },
  { title: "Classic Cream HD Makeup", price: "₹12,999" },
  { title: "Classic Ultra HD Makeup", price: "₹14,999" },
  { title: "Liquid Glam Airbrush Look", price: "₹16,999" },
  { title: "Matte Wedding Look", price: "₹19,999" },
  { title: "Traditional Wedding Look", price: "₹22,999" },
  { title: "Dazzling Diva Wedding Look", price: "₹25,999" },
  { title: "Dazzling Diva Airbrush Wedding Look", price: "₹28,999" },
  { title: "Urban Wedding Look", price: "₹32,999" },
  { title: "Urban Wedding Airbrush Look", price: "₹34,999" },
];

function Card({ title, price }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-[#fffaf3] rounded-2xl shadow-xl border-l-8 border-yellow-500 p-6"
    >
      <h3 className="text-2xl font-serif text-yellow-700 mb-2">{title}</h3>
      <p className="text-gray-700 text-base mb-4">Professional premium makeup service</p>
      <p className="text-xl font-bold text-black">{price}</p>
    </motion.div>
  );
}

export default function MakeupServices() {
  return (
    <div className="bg-gradient-to-b from-yellow-500 to-yellow-600 min-h-screen">
      {/* <Navbar /> */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-serif text-white text-center mb-12">
          Makeup Services
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Card key={i} {...s} />
          ))}
        </div>

        <h2 className="text-4xl font-serif text-white text-center mt-20 mb-12">
          Bridal Makeup
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bridalServices.map((s, i) => (
            <Card key={i} {...s} />
          ))}
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
