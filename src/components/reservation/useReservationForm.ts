import { useState } from 'react';
import { ReservationData } from '../../types/reservation';
import { sendReservationEmail } from '../../utils/emailService';
import { exportToCSV } from '../../utils/csvExport';

const initialFormData: ReservationData = {
  date: '',
  time: '',
  guests: '2',
  name: '',
  email: '',
  phone: ''
};

export const useReservationForm = () => {
  const [formData, setFormData] = useState<ReservationData>(initialFormData);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      exportToCSV(formData);
      const emailSent = await sendReservationEmail(formData);
      
      if (!emailSent) {
        throw new Error('Failed to send email');
      }
      
      setShowConfirmation(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error processing reservation:', error);
      alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    formData,
    isSubmitting,
    showConfirmation,
    handleSubmit,
    handleChange,
    handleConfirmationClose
  };
};