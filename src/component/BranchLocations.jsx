import React from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

const branches = [
  { name: "Mattannur", phone: "9446355258" },
  { name: "Payyanur", phone: "9562800247" },
  { name: "Kanjaghad", phone: "8848334836" },
  { name: "Mangalapuram", phone: "9741296412" },
  { name: "Nadapuram", phone: "7558075591" },
  { name: "Vatakara", phone: "7034531321" },
  { name: "Mukkam", phone: "9446568313" },
  { name: "Kozhikode", phone: "9496631074" },
  { name: "Malappuram", phone: "8075662647" },
  { name: "Manjeri", phone: "9037742589" },
  { name: "Ponnani karma road", phone: "9778203961" },
  { name: "Tirur", phone: "8137036120" },
  { name: "Changaramkulam", phone: "7558081772" },
  { name: "Thrissur", phone: "9995818588" },
  { name: "Oho beach thripayar", phone: "9605401892" },
  { name: "Chavakkad", phone: "9544394587" },
  { name: "Pazhyangadi", phone: "9710218095" },
  { name: "Edapally", phone: "9744675760" },
  { name: "Kakkanad", phone: "7306193034" },
  { name: "Oberon Mall", phone: "9895568967" },
  { name: "Alappuzha", phone: "7736614462" },
  { name: "Kottiyam Dream Mall", phone: "9061714596" },
  { name: "Punalur", phone: "7592034132" },
  { name: "Kazhakkoota TVM", phone: "9895948430" },
  { name: "Kuravankonam TVM", phone: "9400902224" },
  { name: "Mannarkkad", phone: "9446568313" },
  { name: "Pattambi", phone: "9809256252" },
  { name: "Madiwala", phone: "9074213681" },
  { name: "Jalahalli Bangalore", phone: "9946248323" },
  { name: "Wilson Road Bangalore", phone: "9742335015" },
];

const Branches = () => {
  return (
    <div className="w-screen px-5 lg:px-20 py-10 bg-[#f9f5f2]">
      <h1 className="text-xl lg:text-2xl font-bold text-center text-pink-500 mb-10">
        📍 Our Branches
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {branches.map((branch, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center justify-between p-5 bg-white border border-pink-500 rounded-xl shadow-md transition hover:shadow-lg"
          >
            <div>
              <h2 className="text-lg font-semibold text-pink-500">
                {branch.name}
              </h2>
              <p className="text-sm text-pink-500">{branch.phone}</p>
            </div>
            <a href={`tel:${branch.phone}`} className="text-pink-500 hover:text-[#3b220d]">
              <PhoneCall size={24} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
