import React from 'react';
import { useReservationForm } from './useReservationForm';
import ConfirmationMessage from './ConfirmationMessage';

const ReservationForm = () => {
  const {
    formData,
    isSubmitting,
    showConfirmation,
    handleSubmit,
    handleChange,
    handleConfirmationClose
  } = useReservationForm();

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Heure
            </label>
            <input
              type="time"
              name="time"
              id="time"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
            Nombre de convives
          </label>
          <select
            name="guests"
            id="guests"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            value={formData.guests}
            onChange={handleChange}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
            ))}
          </select>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom complet
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Téléphone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Confirmer la réservation'}
        </button>
      </form>

      {showConfirmation && (
        <ConfirmationMessage onClose={handleConfirmationClose} />
      )}
    </>
  );
};

export default ReservationForm;