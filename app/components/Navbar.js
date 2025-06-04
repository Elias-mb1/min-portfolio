'use client';
import { useState } from 'react';

export default function Navbar() {
  // State för att hålla koll på om mobilmenyn är öppen eller stängd
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      {/* Flex container för navbarens innehåll: logga och menyknapp */}
      <div className="flex justify-between items-center">
        {/* Webbplatsens titel/logotyp */}
        <h1 className="text-xl font-bold"> Elias Portfolio</h1>

        {/* Desktopmeny: visas endast på medium och större skärmar (md och uppåt) */}
        <ul className="hidden md:flex space-x-6">
          {/* Varje länk scrollar till olika sektioner på sidan via id */}
          <li><a href="#home" className="hover:underline">Hem</a></li>
          <li><a href="#about" className="hover:underline">Om mig</a></li>
          <li><a href="#projects" className="hover:underline">Projekt</a></li>
          <li><a href="#contact" className="hover:underline">Kontakt</a></li>
        </ul>

        {/* Mobilmeny-knapp (hamburgermeny) visas bara på mindre skärmar */}
        <button
          onClick={() => setOpen(!open)} // Växlar mellan öppen/stängd mobilmeny vid klick
          className="md:hidden focus:outline-none"
        >
          ☰ {/* Symbol för hamburgermeny */}
        </button>
      </div>

      {/* Mobilmeny: visas endast när 'open' är true och på mindre skärmar */}
      {open && (
        <ul className="mt-4 flex flex-col space-y-2 md:hidden">
          {/* Samma länkar som i desktopmenyn */}
          <li><a href="#home" className="hover:underline">Hem</a></li>
          <li><a href="#about" className="hover:underline">Om mig</a></li>
          <li><a href="#projects" className="hover:underline">Projekt</a></li>
          <li><a href="#contact" className="hover:underline">Kontakt</a></li>
        </ul>
      )}
    </nav>
  );
}
