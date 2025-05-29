'use client';

import Navbar from "./components/Navbar";
import Projects from "./components/projects"; // <-- Importera komponenten

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Section 1: Hem */}
      <section
        id="home"
        className="relative py-40 px-6 sm:px-10 md:px-16 lg:px-32 bg-cover bg-center text-center text-white"
        style={{ backgroundImage: "url('/herosection.png')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg inline-block">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Hej, jag är en webbutvecklare
          </h2>
          <p className="text-base sm:text-lg">
            Jag bygger moderna webbapplikationer med Next.js och React.
          </p>
        </div>
      </section>

      {/* Section 2: Projekt */}
      <Projects />

      {/* Section 3: Om mig */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-50"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Om mig</h2>
        <p className="text-base sm:text-lg max-w-2xl">
          Jag är en passionerad frontend-utvecklare med fokus på responsiva
          användargränssnitt och modern webbutveckling. Jag älskar att skapa
          interaktiva och tillgängliga webbplatser.
        </p>
      </section>

      {/* Section 4: Kontakt */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Kontakta mig
        </h2>
        <form
          className="max-w-md mx-auto space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Meddelande skickat (demo)!");
          }}
        >
          <div>
            <label className="block mb-1 font-medium">Namn</label>
            <input
              type="text"
              name="namn"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">E-post</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Meddelande</label>
            <textarea
              name="meddelande"
              required
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Skicka
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Din Portfolio. Alla rättigheter
          förbehållna.
        </p>
      </footer>
    </div>
  );
}
