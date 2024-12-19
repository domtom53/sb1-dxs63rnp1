import React from 'react';
import Section from '../shared/Section';
import SectionTitle from '../shared/SectionTitle';
import MenuItem from './MenuItem';

const MenuSection = () => {
  const menuItems = {
    entrees: [
      {
        name: "Foie Gras Maison",
        description: "Foie gras mi-cuit, chutney de figues et pain brioché toasté",
        price: "28€"
      },
      {
        name: "Saint-Jacques",
        description: "Noix de Saint-Jacques snackées, purée de céleri-rave à la truffe",
        price: "32€"
      }
    ],
    plats: [
      {
        name: "Filet de Bœuf Rossini",
        description: "Filet de bœuf, escalope de foie gras poêlée, sauce Périgueux",
        price: "45€"
      },
      {
        name: "Fondu",
        description: "Fondu aux Trois Fromages",
        price: "32€"
      }
    ]
  };

  return (
    <Section id="menu" className="bg-gray-50">
      <SectionTitle>Notre Carte</SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-serif mb-6">Entrées</h3>
          {menuItems.entrees.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
        
        <div>
          <h3 className="text-2xl font-serif mb-6">Plats</h3>
          {menuItems.plats.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default MenuSection;