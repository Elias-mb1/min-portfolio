'use client';

import { motion } from 'framer-motion'; // Importerar framer-motion för animationer
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Ikoner för sociala medier
import Navbar from "./components/Navbar"; // Navigationskomponent
import Projects from "./components/projects"; // Projektlista komponent
import ContactForm from "./components/contactform"; // Kontaktformulär komponent
import AnimatedWords from "./components/Animatedwords"; // Animerad text komponent

export default function Home() {
  return (
    // Huvud-wrapper med fade-in animation när sidan laddas
    <motion.div
      initial={{ opacity: 0 }}        // Startar osynligt
      animate={{ opacity: 1 }}        // Animerar till fullt synligt
      transition={{ duration: 0.6 }}  // Animation tar 0.6 sekunder
      className="bg-gray-50 text-gray-900"
    >
      <Navbar /> {/* Navigationsmenyn */}

      {/* Hero-sektionen med bakgrundsbild och animerad text */}
      <section
        id="home"
        className="relative py-40 px-6 sm:px-10 md:px-16 lg:px-32 bg-cover bg-center text-center text-white"
        style={{ backgroundImage: "url('/herosection.png')" }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 flex items-center justify-center gap-3">
          {/* Animerad text som kommer in ord för ord */}
          <AnimatedWords text="Välkommen! Jag är Elias – frontendutvecklare med fokus på moderna webbapplikationer" />
          <span className="animate-wave">👋</span> {/* Emoji med våg-animation */}
        </h2>

        <p className="text-lg sm:text-xl lg:text-2xl font-medium">
          {/* Animerad text i paragraf */}
          <AnimatedWords text="Jag bygger snabba och responsiva webbapplikationer med JavaScript, TypeScript, React och Tailwind CSS." />
        </p>

        {/* Sociala länkar med fade + flyg-in animation */}
        <motion.div
          className="mt-10 flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}      // Startar osynligt och lite nedflyttad
          whileInView={{ opacity: 1, y: 0 }}  // När i viewport: fade in och flytta upp
          transition={{ duration: 0.6 }}       // Animationstid
          viewport={{ once: true }}            // Animeras bara första gången den syns
        >
          {/* LinkedIn länk med ikon */}
          <a
            href="https://www.linkedin.com/in/eliasburhan"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white text-gray-900">
              <FaLinkedinIn size={24} />
            </div>
          </a>
          {/* GitHub länk med ikon */}
          <a
            href="https://github.com/Elias-mb1"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white text-gray-900">
              <FaGithub size={24} />
            </div>
          </a>
        </motion.div>
      </section>

      {/* Projekt-sektionen */}
      <Projects />

      {/* Om mig-sektionen med fade + slide-up animation */}
      <motion.section
        id="about"
        className="py-20 px-4 sm:px-6 md:px-12 lg:px-24"
        initial={{ opacity: 0, y: 30 }}     // Startar osynligt och lite nedflyttad
        whileInView={{ opacity: 1, y: 0 }}  // Fade in och flytta upp när syns
        transition={{ duration: 0.6 }}      // Animationstid
        viewport={{ once: true }}           // Animeras bara första gången i viewport
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Om mig</h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl">
          Jag har studerat frontendutveckling med fokus på att bygga moderna och
          responsiva webbapplikationer. Under utbildningen har jag arbetat med
          JavaScript, TypeScript, React, HTML, CSS och Tailwind – vilket har gett mig
          en solid grund i både design och funktionalitet. Jag strävar alltid efter att
          skriva ren, tillgänglig och återanvändbar kod. Med ett starkt öga för
          detaljer och en passion för användarupplevelse är jag redo att ta nästa steg
          i min karriär som webbutvecklare.
        </p>
      </motion.section>

      {/* Kontakt-sektionen med kontaktformulär och animation */}
      <motion.section
        id="contact"
        className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white"
        initial={{ opacity: 0, y: 30 }}     // Startar osynligt och nedflyttad
        whileInView={{ opacity: 1, y: 0 }}  // Fade in och flytta upp när syns
        transition={{ duration: 0.6 }}      // Animationstid
        viewport={{ once: true }}           // Animeras bara första gången i viewport
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Kontakta mig
        </h2>
        <ContactForm />
      </motion.section>

      {/* Footer med enkel fade-in animation */}
      <motion.footer
        className="bg-gray-900 text-white py-6 text-center"
        initial={{ opacity: 0 }}          // Osynlig från början
        whileInView={{ opacity: 1 }}     // Fade in vid scroll
        transition={{ duration: 0.6 }}   // Animationstid
        viewport={{ once: true }}        // Animeras en gång
      >
        <p>
          &copy; {new Date().getFullYear()} Elias Portfolio.
        </p>
      </motion.footer>
    </motion.div>
  );
}
