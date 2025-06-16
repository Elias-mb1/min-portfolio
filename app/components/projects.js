import { motion } from "framer-motion";

// Lista över projekt med titel, beskrivning, länk och bild
const projectList = [
  {
    title: "Kalkylator",
    description: "Min kalkylator – byggd med React.",
    link: "https://calculator-page.vercel.app/",
    image: "/calculator.png",
  },
  {
    title: "Flight Search App",
    description: "En flight search-app som hjälper dig hitta flyg.",
    link: "https://flight-search-app-two.vercel.app/",
    image: "/flight.jpg",
  },
  {
    title: "Banksida",
    description: "Banksida utvecklad med frontend och backend.",
    link: "https://banksida.vercel.app/",
    image: "/bank.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Tidigare Projekt
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Projektbild */}
            {proj.image && (
              <img
                src={proj.image}
                alt={proj.title}
                className="mb-4 rounded-lg w-full h-40 object-cover"
              />
            )}

            {/* Projektets titel */}
            <h3 className="font-semibold text-lg mb-2">{proj.title}</h3>

            {/* Projektbeskrivning */}
            <p className="mb-4">{proj.description}</p>

            {/* Länk till projektet */}
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
