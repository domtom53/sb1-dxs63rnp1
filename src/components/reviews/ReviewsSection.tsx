import React from 'react';
import Section from '../shared/Section';
import SectionTitle from '../shared/SectionTitle';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    name: "Sophie Martin",
    date: "15 Mars 2024",
    rating: 5,
    comment: "Une expérience gastronomique exceptionnelle ! La fondue aux trois fromages était divine, et le service impeccable. L'ambiance chaleureuse en fait l'endroit parfait pour une soirée mémorable."
  },
  {
    name: "Jean-Pierre Dubois",
    date: "10 Mars 2024",
    rating: 5,
    comment: "Le filet de bœuf Rossini était tout simplement parfait. La cuisson précise et la sauce délicate ont créé une harmonie de saveurs inoubliable. Je recommande vivement !"
  },
  {
    name: "Marie Laurent",
    date: "5 Mars 2024",
    rating: 5,
    comment: "Quelle découverte ! Le foie gras maison est exceptionnel, et le service attentionné. L'ambiance est élégante tout en restant décontractée. Nous reviendrons sans hésiter."
  }
];

const ReviewsSection = () => {
  return (
    <Section id="reviews" className="bg-gray-50">
      <SectionTitle>Avis de nos clients</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </Section>
  );
};

export default ReviewsSection;