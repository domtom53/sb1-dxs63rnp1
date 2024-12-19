import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Restaurant from './components/Restaurant';
import MenuSection from './components/menu/MenuSection';
import ReviewsSection from './components/reviews/ReviewsSection';
import ReservationSection from './components/reservation/ReservationSection';
import TakeawaySection from './components/takeaway/TakeawaySection';
import ContactSection from './components/contact/ContactSection';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Restaurant />
      <MenuSection />
      <ReviewsSection />
      <ReservationSection />
      <TakeawaySection />
      <ContactSection />
    </div>
  );
}

export default App;