import { motion } from "framer-motion";

// Lista över projekt med titel, beskrivning och länk
const projectList = [
  {
    title: "Kalkylator",
    description: "Min kalkylator – byggd med React.",
    link: "https://calculator-page.vercel.app/",
  },
  {
    title: "Flight Search App",
    description: "En flight search-app som hjälper dig hitta flyg.",
    link: "https://flight-search-app-two.vercel.app/",
  },
  {
    title: "Banksida",
    description: "Banksida utvecklad med frontend och backend.",
    link: "https://banksida.vercel.app/",
  },
];

export default function Projects() {
  return (
    // Sektion för projekt, med padding och bakgrundsfärg
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white"
    >
      {/* Titel för projektsektionen */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Tidigare Projekt
      </h2>

      {/* Grid-layout som anpassar antal kolumner efter skärmstorlek */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((proj, index) => (
          // Animerad container för varje projektkort med framer-motion
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}          // Startposition (gömd och nedflyttad)
            whileInView={{ opacity: 1, y: 0 }}       // Animeras in till fullt synlig och på plats när syns i viewport
            transition={{ duration: 0.5, delay: index * 0.2 }} // Varje kort animeras med en liten fördröjning för fin effekt
            viewport={{ once: true }}                 // Animeras endast första gången kortet syns
          >
            {/* Projektets titel */}
            <h3 className="font-semibold text-lg mb-2">{proj.title}</h3>

            {/* Projektbeskrivning */}
            <p className="mb-4">{proj.description}</p>

            {/* Länk till projektet, öppnas i ny flik */}
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Öppna Projekt
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
