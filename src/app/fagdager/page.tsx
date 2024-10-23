"use client";

import React from 'react';

const Fagdager = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="relative overflow-hidden h-[400px] flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 dark:from-purple-700 dark:to-blue-800">
        <h1 className="text-6xl font-bold text-white animate-fade-in">Fagdager</h1>
        <div className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-no-repeat bg-cover opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508921233501-6caib8dd89e1')" }}>
        </div>
      </div>


      <section className="my-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Om Fagdagene</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu.
          </p>
        </div>
      </section>


      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto my-10">
        <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4">Tema 1</h3>
          <p className="text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non diam felis. Curabitur tempus euismod tortor, sit amet lacinia urna.</p>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-0 group-hover:opacity-25 transition-opacity rounded-lg"></div>
        </div>

        <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4">Tema 2</h3>
          <p className="text-gray-700 dark:text-gray-300">Phasellus non odio vel eros vehicula dictum et eu nisi. Nulla non orci a dolor aliquet venenatis. Ut pretium nisi ac massa fermentum placerat.</p>
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-25 transition-opacity rounded-lg"></div>
        </div>

    
        <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4">Tema 3</h3>
          <p className="text-gray-700 dark:text-gray-300">Vestibulum ac mi facilisis, fringilla dui a, pulvinar neque. Duis faucibus risus eget justo sollicitudin, in fermentum nulla volutpat.</p>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 group-hover:opacity-25 transition-opacity rounded-lg"></div>
        </div>
      </section>

    
      <section className="text-center my-16">
        <h2 className="text-3xl font-bold mb-6">Bli med på fagdagene!</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies mi id orci efficitur, ac efficitur metus congue.
          Fusce nec vestibulum erat. Nulla facilisi. Suspendisse ac scelerisque ligula.
        </p>
        <button className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105">
          Meld deg på nå!
        </button>
      </section>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Fagdager;
