import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import MenuItem from './MenuItem';
import OrderSummary from './OrderSummary';
import { MenuItemType, OrderItem } from '../../types/takeaway';

const MENU_ITEMS: MenuItemType[] = [
  { id: 1, name: "Foie Gras Maison", price: 28 },
  { id: 2, name: "Saint-Jacques", price: 32 },
  { id: 3, name: "Filet de Bœuf Rossini", price: 45 },
  { id: 4, name: "Fondue aux Trois Fromages", price: 32 }
];

const TakeawayForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: ''
  });

  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleQuantityChange = (itemId: number, quantity: number) => {
    if (quantity === 0) {
      setOrderItems(prev => prev.filter(item => item.id !== itemId));
      return;
    }

    const menuItem = MENU_ITEMS.find(item => item.id === itemId);
    if (!menuItem) return;

    setOrderItems(prev => {
      const existingItem = prev.find(item => item.id === itemId);
      if (existingItem) {
        return prev.map(item =>
          item.id === itemId
            ? { ...item, quantity, total: menuItem.price * quantity }
            : item
        );
      }
      return [...prev, {
        id: itemId,
        name: menuItem.name,
        price: menuItem.price,
        quantity,
        total: menuItem.price * quantity
      }];
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderItems.length === 0) return;

    // Here you could send the order to your backend
    console.log('Order submitted:', {
      customer: formData,
      items: orderItems,
      total: orderItems.reduce((sum, item) => sum + item.total, 0)
    });

    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      setFormData({ firstName: '', lastName: '', phone: '' });
      setOrderItems([]);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Nom
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
        />
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-medium mb-4">Sélectionnez vos plats</h3>
        <div className="space-y-4">
          {MENU_ITEMS.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              quantity={orderItems.find(i => i.id === item.id)?.quantity || 0}
              onQuantityChange={(quantity) => handleQuantityChange(item.id, quantity)}
            />
          ))}
        </div>
      </div>

      <OrderSummary items={orderItems} />

      <button
        type="submit"
        disabled={orderItems.length === 0}
        className="w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        <ShoppingCart className="inline-block w-5 h-5 mr-2" />
        Commander
      </button>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 text-center">
            <p className="text-lg font-medium text-green-600 mb-2">
              Votre commande a été enregistrée !
            </p>
            <p className="text-gray-600">
              Nous vous contacterons bientôt pour confirmer votre commande.
            </p>
          </div>
        </div>
      )}
    </form>
  );
};

export default TakeawayForm;