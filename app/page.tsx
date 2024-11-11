import BlogGrid from '@/components/section/BlogGrid';
import ConnectSection from '@/components/section/ConnectSection';
import EmailSignupSection from '@/components/section/EmailSignupSection';
import FeaturesSection from '@/components/section/FeaturesSection';
import Footer from '@/components/section/Footer';
import HeroSection from '@/components/section/HeroSection';
import ServiceSection from '@/components/section/ServiceSection';
import TestimonialCarousel from '@/components/section/TestimonialCarousel';
import React from 'react';

const page = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <FeaturesSection />
      <TestimonialCarousel />
      <ConnectSection />
      <BlogGrid />
      <EmailSignupSection />
      <Footer />
    </div>
  );
};

export default page;
