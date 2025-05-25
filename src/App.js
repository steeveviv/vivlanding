import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 font-serif">
      <header className="relative h-[80vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/viv-hero.jpg')" }}>
        <div className="bg-black bg-opacity-40 backdrop-blur-sm p-8 rounded-2xl text-center max-w-xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            The Future of High-Touch Living
          </h1>
          <p className="text-lg text-neutral-200 mb-6">
            Join the private beta for VIV, your global AI concierge
          </p>
          <button className="bg-white text-neutral-900 px-6 py-3 rounded-xl text-lg shadow hover:bg-neutral-200 transition">
            Request Invitation
          </button>
        </div>
      </header>

      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-light mb-4">Luxury, Anticipated</h2>
        <p className="text-lg max-w-2xl mx-auto text-neutral-600">
          VIV curates seamless experiences across travel, wellness, dining, and lifestyle. From your preferred spa temperature to surprise itineraries, it’s already waiting.
        </p>
      </section>

      <footer className="py-12 text-center border-t border-neutral-300">
        <p className="text-neutral-500">© 2025 VIV. All rights reserved.</p>
      </footer>
    </div>
  );
}
