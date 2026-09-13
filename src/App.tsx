import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PackagesSection } from './components/PackagesSection';
import { AdventuresPricingSection } from './components/AdventuresPricingSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { RoomsStaysSection } from './components/RoomsStaysSection';
import { GuestReviewsSection } from './components/GuestReviewsSection';
import { GalleryPreviewSection } from './components/GalleryPreviewSection';
import { ContactSection } from './components/ContactSection';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PlanMyTripModal } from './components/PlanMyTripModal';
import { AudienceModal } from './components/AudienceModal';
import { ExperienceModal } from './components/ExperienceModal';
import { GalleryModal } from './components/GalleryModal';
import { FEATURED_EXPERIENCES } from './data/dandeliData';
import { AudienceCard, FeaturedExperience, GalleryItem, RoomStayItem, TourPackageItem } from './types';

export default function App() {
  // Unified Plan My Trip modal state
  const [isPlanMyTripOpen, setIsPlanMyTripOpen] = useState(false);
  const [preselectedTripActivity, setPreselectedTripActivity] = useState<string>('');

  // Gallery and Detail Modals
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [selectedAudience, setSelectedAudience] = useState<AudienceCard | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<FeaturedExperience | null>(null);

  // Single unified handler for all Plan My Trip / Booking entry points
  const handleOpenPlanMyTrip = (activityTitle?: string) => {
    setPreselectedTripActivity(activityTitle || '');
    setIsPlanMyTripOpen(true);
  };

  const handleSelectExperienceByTitle = (title: string) => {
    const found = FEATURED_EXPERIENCES.find(
      (e) => e.title.toLowerCase() === title.toLowerCase()
    );
    if (found) {
      setSelectedExperience(found);
    } else {
      handleOpenPlanMyTrip(title);
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#0c2b20] flex flex-col font-sans selection:bg-[#22c55e]/30 selection:text-[#0c2b20] relative">
      {/* Fixed Mobile-First Header */}
      <Header
        onOpenBooking={() => handleOpenPlanMyTrip()}
        onOpenTripPlanner={() => handleOpenPlanMyTrip()}
      />

      {/* Main Long-Form Storytelling Canvas */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 1. HERO */}
        <HeroSection
          onExplorePackages={() => handleScrollToSection('packages')}
          onOpenTripPlanner={() => handleOpenPlanMyTrip()}
        />

        {/* 2. PACKAGES (Horizontal carousel on mobile) */}
        <PackagesSection
          onSelectPackage={(pkg: TourPackageItem) => handleOpenPlanMyTrip(pkg.title)}
          onBookPackage={(title: string) => handleOpenPlanMyTrip(title)}
        />

        {/* 3. ACTIVITIES (Horizontal carousel on mobile) */}
        <AdventuresPricingSection
          onSelectExperience={(exp) => setSelectedExperience(exp)}
          onBookExperience={(exp) => handleOpenPlanMyTrip(exp.title)}
          onViewAllPackages={() => handleScrollToSection('packages')}
          onCustomizeWithUs={() => handleOpenPlanMyTrip()}
        />

        {/* 4. WHY CHOOSE US */}
        <WhyChooseUsSection
          onExploreAll={() => handleScrollToSection('activities')}
          onCheckAvailability={() => handleOpenPlanMyTrip()}
          onSelectExperienceTitle={handleSelectExperienceByTitle}
        />

        {/* 5. ROOMS / STAYS (Horizontal carousel on mobile) */}
        <RoomsStaysSection
          onSelectRoom={(room: RoomStayItem) => handleOpenPlanMyTrip(room.title)}
          onBookRoom={(title: string) => handleOpenPlanMyTrip(title)}
          onExploreAllStays={() => handleOpenPlanMyTrip('Deluxe Forest Cottages')}
        />

        {/* 6. REVIEWS / CUSTOMER FEEDBACK */}
        <GuestReviewsSection />

        {/* 7. GALLERY */}
        <GalleryPreviewSection
          onOpenFullGallery={() => {
            setSelectedGalleryItem(null);
            setIsGalleryModalOpen(true);
          }}
          onSelectGalleryItem={(item) => {
            setSelectedGalleryItem(item);
            setIsGalleryModalOpen(true);
          }}
        />

        {/* 8. CONTACT US */}
        <ContactSection />

        {/* 9. MAP */}
        <MapSection />
      </main>

      {/* 10. FOOTER */}
      <Footer onOpenBooking={() => handleOpenPlanMyTrip()} />

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />

      {/* UNIFIED MODAL: PLAN MY TRIP */}
      <PlanMyTripModal
        isOpen={isPlanMyTripOpen}
        onClose={() => setIsPlanMyTripOpen(false)}
        preselectedActivity={preselectedTripActivity}
      />

      {/* Audience Itinerary Drawer Modal */}
      <AudienceModal
        card={selectedAudience}
        onClose={() => setSelectedAudience(null)}
        onBookNow={(pkgTitle) => handleOpenPlanMyTrip(pkgTitle)}
      />

      {/* Experience Detail Modal */}
      <ExperienceModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
        onBookNow={(title) => handleOpenPlanMyTrip(title)}
      />

      {/* Full Photo Archive Modal */}
      <GalleryModal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        initialItem={selectedGalleryItem}
      />
    </div>
  );
}
