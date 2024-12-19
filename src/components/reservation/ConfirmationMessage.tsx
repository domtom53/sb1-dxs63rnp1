import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ConfirmationMessageProps {
  onClose: () => void;
}

const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-serif mb-4">Réservation Confirmée</h3>
        <p className="text-gray-600 mb-6">
          Votre réservation a bien été enregistrée. Un email de confirmation vous sera envoyé prochainement.
        </p>
        <button
          onClick={onClose}
          className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Retour au menu
        </button>
      </div>
    </div>
  );
}

export default ConfirmationMessage;