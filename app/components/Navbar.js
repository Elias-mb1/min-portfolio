'use client';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Min Portfolio</h1>

        {/* Desktop meny */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:underline">Hem</a></li>
          <li><a href="#about" className="hover:underline">Om mig</a></li>
          <li><a href="#projects" className="hover:underline">Projekt</a></li>
          <li><a href="#contact" className="hover:underline">Kontakt</a></li>
        </ul>

        {/* Mobilknapp */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobil meny */}
      {open && (
        <ul className="mt-4 flex flex-col space-y-2 md:hidden">
          <li><a href="#home" className="hover:underline">Hem</a></li>
          <li><a href="#about" className="hover:underline">Om mig</a></li>
          <li><a href="#projects" className="hover:underline">Projekt</a></li>
          <li><a href="#contact" className="hover:underline">Kontakt</a></li>
        </ul>
      )}
    </nav>
  );
}
