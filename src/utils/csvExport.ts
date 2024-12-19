import { ReservationData } from '../types/reservation';

export const exportToCSV = (data: ReservationData) => {
  const timestamp = new Date().toISOString().split('T')[0];
  const fileName = `reservations_${timestamp}.csv`;
  
  const headers = ['Date', 'Heure', 'Convives', 'Nom', 'Email', 'Téléphone'];
  const row = [data.date, data.time, data.guests, data.name, data.email, data.phone];
  
  const csvContent = [
    headers.join(','),
    row.join(',')
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};