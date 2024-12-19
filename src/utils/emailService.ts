import emailjs from 'emailjs-com';
import { EMAIL_CONFIG } from '../config/emailjs.config';
import { ReservationData } from '../types/reservation';

emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

export const sendReservationEmail = async (formData: ReservationData) => {
  try {
    const templateParams = {
      to_name: 'Restaurant Manager',
      from_name: formData.name,
      guest_email: formData.email,
      guest_phone: formData.phone,
      reservation_date: formData.date,
      reservation_time: formData.time,
      guests: formData.guests,
      message: `Nouvelle réservation pour ${formData.guests} personne(s) le ${formData.date} à ${formData.time}`
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams
    );

    return response.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};