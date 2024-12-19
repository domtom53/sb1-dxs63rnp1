import React from 'react';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="text-lg font-medium">{name}</h3>
        <span className="text-gray-600 ml-4">{price}</span>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default MenuItem;