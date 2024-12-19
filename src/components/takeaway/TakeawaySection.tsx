import React from 'react';
import Section from '../shared/Section';
import SectionTitle from '../shared/SectionTitle';
import TakeawayForm from './TakeawayForm';

const TakeawaySection = () => {
  return (
    <Section id="takeaway" className="bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <SectionTitle>Commande à emporter</SectionTitle>
        <TakeawayForm />
      </div>
    </Section>
  );
};

export default TakeawaySection;