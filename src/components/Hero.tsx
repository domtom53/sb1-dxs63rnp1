import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6">
            Une Expérience Gastronomique Unique
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Découvrez une cuisine raffinée dans un cadre chaleureux
          </p>
          <a
            href="#reservations"
            className="inline-block bg-white text-gray-900 px-8 py-3 text-lg font-medium rounded-md hover:bg-gray-100 transition-colors"
          >
            Réserver une table
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;