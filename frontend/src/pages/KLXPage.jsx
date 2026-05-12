import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Divider from '../components/Divider';
import Feature from '../components/Feature';
import SecondaryHero from '../components/SecondaryHero';
import SpecsView from '../components/SpecsView';
import Accessories from '../components/Accessories';
import UpgradedFeatures from '../components/UpgradedFeatures';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

const KLXPage = () => {
  return (
    <motion.div
      className="app"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ overflowX: 'hidden' }}
    >
      {/* Hero – Full viewport, KLX110R */}
      <Hero />

      {/* Green gradient divider */}
      <Divider />

      {/* Perfect Fit – image left */}
      <Feature
        id="perfect-fit-section"
        bgTextLine1="PERFECT FIT"
        tagline="Sized for Every Rider. Built for Family Fun."
        description="Lightweight KLX®110R off-road motorcycles are fun for the whole family to enjoy. The KLX110R features a 26.8-inch seat height and low center of gravity, well-suited for young riders. For taller riders, the KLX®110R L boasts a 28.7-inch seat height and higher ground clearance."
        imageLeft={true}
        imageSrc="/assets/perfect-fit-section.png"
        ctaText="View Spec's Details"
      />

      {/* Electric Start – image right */}
      <Feature
        id="electric-start-section"
        bgTextLine1="ELECTRIC START"
        tagline="The KLX®110R makes getting started simple—so the fun never has to wait."
        description="KLX®110R motorcycles feature electric start for quick, hassle-free ignition. With dual-sport versatility, they're built to conquer trails and streets alike—perfect for riders of all levels."
        imageLeft={false}
        imageSrc="/assets/electric-start-section.png"
        price={{ label: 'Starts At', amount: '₹ 1.99 LAKHs' }}
        ctaText="View Spec's Details"
      />

      {/* Off-Road Capability – image left */}
      <Feature
        id="off-road-section"
        bgTextLine1="OFF-ROAD"
        bgTextLine2="CAPABILITY"
        tagline="Off-Road Ready. Adventure Approved."
        description="Whether it's a friendly bike for beginners or mini moto machine for more experienced riders, the KLX®110R and the slightly larger KLX®110R L off-road motorcycles are up for the task. Experience off-road riding like never before with the KLX110R line."
        imageLeft={true}
        imageSrc="/assets/off-road-section.png"
        ctaText="View Spec's Details"
      />

      {/* Secure Your Adventure banner */}
      <SecondaryHero />

      {/* Specs section */}
      <SpecsView />

      {/* Recommended Accessories */}
      <Accessories />

      {/* Upgraded Features */}
      <UpgradedFeatures />

      {/* Pre-Booking Form */}
      <BookingForm />

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default KLXPage;
