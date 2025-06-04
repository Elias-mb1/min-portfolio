'use client';

import { useState } from "react";

export default function ContactForm() {
  // State som håller koll på om formuläret har skickats
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Hanterar formulärskick
  const handleSubmit = (e) => {
    e.preventDefault(); // Förhindrar att sidan laddas om vid submit, vilket gör att vi kan hantera det dynamiskt
    setIsSubmitted(true); // Uppdaterar state för att visa en bekräftelse utan att ladda om sidan
    e.target.submit(); // Skickar formuläret till formsubmit.co som vanligt (extern tjänst)
  };

  return (
    <>
      {/* Dynamisk visning av bekräftelsemeddelande baserat på användarens interaktion */}
      {isSubmitted && (
        <p className="text-green-600 font-semibold mb-4 text-center">
          Tack! Ditt meddelande har skickats.
        </p>
      )}

      <form
        action="https://formsubmit.co/eliasburhan0@gmail.com"
        method="POST"
        className="max-w-md mx-auto space-y-4"
        onSubmit={handleSubmit} // Kopplar på egen submit-hanterare för dynamisk hantering
      >
        {/* Skickar inte spam via formsubmit.co */}
        <input type="hidden" name="_captcha" value="false" />

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
    </>
  );
}
