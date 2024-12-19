import React from 'react';
import { OrderItem } from '../../types/takeaway';

interface OrderSummaryProps {
  items: OrderItem[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items }) => {
  const total = items.reduce((sum, item) => sum + item.total, 0);

  if (items.length === 0) return null;

  return (
    <div className="border-t border-gray-200 pt-4">
      <h3 className="text-lg font-medium mb-4">Récapitulatif de la commande</h3>
      
      <div className="space-y-2 mb-4">
        {items.map(item => (
          <div key={item.id} className="flex justify-between text-gray-600">
            <span>{item.quantity}x {item.name}</span>
            <span>{item.total}€</span>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-200 pt-4 flex justify-between font-medium">
        <span>Total</span>
        <span>{total}€</span>
      </div>
    </div>
  );
};

export default OrderSummary;