"use client";

import React from 'react';

const AboutPage = () => {
  const images = [
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080", // Technology image
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080", // Office image
    "https://images.unsplash.com/photo-1492724441997-5dc865305da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080", // Teamwork image
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
 
      <h1 className="text-4xl font-bold mt-12 mb-8">Om IM-linjen</h1>
      <p className="text-lg text-gray-700 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. 
        In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna 
        diam porttitor mauris, quis sollicitudin sapien justo in libero.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        IM-linjen ble til gjennom et behov for å samle og utdanne fremtidige eksperter innen informasjonsbehandling og moderne teknologi. 
        Fra sitt utspring, har den tiltrukket studenter fra hele landet som ønsker å utvikle sine ferdigheter innen informasjonshåndtering, 
        utvikling og teknologi.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, 
        ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, 
        elit erat euismod orci, ac placerat dolor lectus quis orci. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, 
        nec luctus magna felis sollicitudin mauris.
      </p>


      <div className="w-full mt-10 overflow-hidden">
        <div className="animate-scroll flex space-x-16">
          {images.concat(images).map((image, index) => (
            <div key={index} className="w-1/3 flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          display: inline-flex;
          white-space: nowrap;
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
