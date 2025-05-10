
import React from 'react';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Transformation from '@/components/Transformation';
import Audience from '@/components/Audience';
import Authority from '@/components/Authority';
import Offer from '@/components/Offer';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Problem />
      <Solution />
      <Transformation />
      <Audience />
      <Authority />
      <Offer />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Index;
