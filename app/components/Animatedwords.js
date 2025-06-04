'use client';

import { motion } from 'framer-motion';

// Komponent som animerar in varje ord i en given text
export default function AnimatedWords({ text }) {
  // Dela upp texten i en array av ord
  const words = text.split(' ');

  return (
    // Wrapper-span för att hålla orden inline och centrera texten
    <span className="inline-block text-center">
      {words.map((word, index) => (
        // Varje ord får en separat motion.span för individuell animation
        <motion.span
          key={index}
          initial={{ x: -40, opacity: 0 }}    // Startar lite till vänster och osynligt
          animate={{ x: 0, opacity: 1 }}      // Animerar till ursprunglig position och fullt synligt
          transition={{ delay: index * 0.2, duration: 0.4 }} // Fördröjning ökar för varje ord (stair-step effekt)
          className="inline-block mr-2"        // Marginal till höger för lite avstånd mellan orden
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
