const projectList = [
  {
    title: "Projekt A",
    description: "Min kalkylator – byggd med React och css.",
    link: "https://calculator-page.vercel.app/",
  },
  { title: "Projekt B", description: "Beskrivning av Projekt B." },
  { title: "Projekt C", description: "Beskrivning av Projekt C." },
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
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-2">{proj.title}</h3>
            <p className="mb-4">{proj.description}</p>
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
          </div>
        ))}
      </div>
    </section>
  );
}
