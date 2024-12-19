import React from 'react';
import Section from '../shared/Section';
import SectionTitle from '../shared/SectionTitle';
import ReservationForm from './ReservationForm';

const ReservationSection = () => {
  return (
    <Section id="reservations" className="bg-white">
      <div className="max-w-2xl mx-auto">
        <SectionTitle>Réserver une table</SectionTitle>
        <ReservationForm />
      </div>
    </Section>
  );
};

export default ReservationSection;