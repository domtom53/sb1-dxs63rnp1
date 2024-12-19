import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { MenuItemType } from '../../types/takeaway';

interface MenuItemProps {
  item: MenuItemType;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, quantity, onQuantityChange }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
      <div>
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-gray-600">{item.price}€</p>
      </div>
      
      <div className="flex items-center space-x-3">
        <button
          type="button"
          onClick={() => onQuantityChange(Math.max(0, quantity - 1))}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Minus className="w-5 h-5" />
        </button>
        
        <span className="w-8 text-center">{quantity}</span>
        
        <button
          type="button"
          onClick={() => onQuantityChange(quantity + 1)}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MenuItem;