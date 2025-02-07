import { motion } from "framer-motion";
import teddies from '../assets/teddies2.png';

export default function TeddyBearHug() {
  const hearts = ["❤️", "💖", "💗", "💕", "💞"];

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Teddy Bears Image */}
      <div className="relative">
        <img
          src={teddies} // Replace with your teddy bear image
          alt="Teddy Bears Hugging"
          className="w-20 md:w-28"
        />
      </div>

      {/* Floating Love Emojis */}
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="absolute text-3xl md:text-5xl"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-20, -100, -200],
            scale: [0.8, 1, 1.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        >
          {heart}
        </motion.div>
      ))}
    </div>
  );
}
