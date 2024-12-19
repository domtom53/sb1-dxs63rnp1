import React from 'react';

const Restaurant = () => {
  return (
    <section id="restaurant" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6">Notre Restaurant YouYou Casa</h2>
            <p className="text-gray-600 mb-6">
              Au cœur de notre établissement, nous célébrons l'art culinaire français et suisse
              dans toute sa splendeur. Notre Chef étoilé (au ski =:)et son équipe passionnée
              créent des plats d'exception qui marient tradition et innovation.
            </p>
            <p className="text-gray-600">
              Chaque assiette est une œuvre d'art, préparée avec les meilleurs
              produits locaux et de saison. Notre cave à vin soigneusement
              sélectionnée complète parfaitement cette expérience gastronomique. On oublie pas non plus nos bières sélectionnées pression Chouf ou pas!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Plat gastronomique"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Intérieur du restaurant"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;