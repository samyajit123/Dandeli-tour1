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
import { BookingModal } from './components/BookingModal';
import { TripPlannerModal } from './components/TripPlannerModal';
import { AudienceModal } from './components/AudienceModal';
import { ExperienceModal } from './components/ExperienceModal';
import { GalleryModal } from './components/GalleryModal';
import { FEATURED_EXPERIENCES } from './data/dandeliData';
import { AudienceCard, FeaturedExperience, GalleryItem, RoomStayItem, TourPackageItem } from './types';

export default function App() {
  // Modal state management
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedBooking, setPreselectedBooking] = useState<string>('');
  const [isTripPlannerOpen, setIsTripPlannerOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // Detail modals
  const [selectedAudience, setSelectedAudience] = useState<AudienceCard | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<FeaturedExperience | null>(null);

  const handleOpenBookingWithActivity = (activityTitle?: string) => {
    setPreselectedBooking(activityTitle || 'White Water Rafting (9.5 KM)');
    setIsBookingOpen(true);
  };

  const handleSelectExperienceByTitle = (title: string) => {
    const found = FEATURED_EXPERIENCES.find(
      (e) => e.title.toLowerCase() === title.toLowerCase()
    );
    if (found) {
      setSelectedExperience(found);
    } else {
      handleOpenBookingWithActivity(title);
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
        onOpenBooking={() => handleOpenBookingWithActivity()}
        onOpenTripPlanner={() => setIsTripPlannerOpen(true)}
      />

      {/* Main Long-Form Storytelling Canvas */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 1. HERO */}
        <HeroSection
          onExplorePackages={() => handleScrollToSection('packages')}
          onOpenTripPlanner={() => setIsTripPlannerOpen(true)}
        />

        {/* 2. PACKAGES (Horizontal carousel on mobile) */}
        <PackagesSection
          onSelectPackage={(pkg: TourPackageItem) => handleOpenBookingWithActivity(pkg.title)}
          onBookPackage={(title: string) => handleOpenBookingWithActivity(title)}
        />

        {/* 3. ACTIVITIES (Horizontal carousel on mobile) */}
        <AdventuresPricingSection
          onSelectExperience={(exp) => setSelectedExperience(exp)}
          onBookExperience={(exp) => handleOpenBookingWithActivity(exp.title)}
          onViewAllPackages={() => handleScrollToSection('packages')}
          onCustomizeWithUs={() => setIsTripPlannerOpen(true)}
        />

        {/* 4. WHY CHOOSE US */}
        <WhyChooseUsSection
          onExploreAll={() => handleScrollToSection('activities')}
          onCheckAvailability={() => handleOpenBookingWithActivity()}
          onSelectExperienceTitle={handleSelectExperienceByTitle}
        />

        {/* 5. ROOMS / STAYS (Horizontal carousel on mobile) */}
        <RoomsStaysSection
          onSelectRoom={(room: RoomStayItem) => handleOpenBookingWithActivity(room.title)}
          onBookRoom={(title: string) => handleOpenBookingWithActivity(title)}
          onExploreAllStays={() => handleOpenBookingWithActivity('Deluxe Cottage / Stays')}
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
      <Footer onOpenBooking={() => handleOpenBookingWithActivity()} />

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />

      {/* MODALS */}
      {/* Booking Desk Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedActivity={preselectedBooking}
      />

      {/* Trip Planner Modal */}
      <TripPlannerModal
        isOpen={isTripPlannerOpen}
        onClose={() => setIsTripPlannerOpen(false)}
        onBookCustomPlan={(summary) => {
          handleOpenBookingWithActivity(`Custom Plan: ${summary}`);
        }}
      />

      {/* Audience Itinerary Drawer Modal */}
      <AudienceModal
        card={selectedAudience}
        onClose={() => setSelectedAudience(null)}
        onBookNow={(pkgTitle) => handleOpenBookingWithActivity(pkgTitle)}
      />

      {/* Experience Detail Modal */}
      <ExperienceModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
        onBookNow={(title) => handleOpenBookingWithActivity(title)}
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
