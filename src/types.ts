export interface AudienceCard {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  quote: string;
  recommendedActivities: string[];
  idealDuration: string;
  seasonTip: string;
}

export interface FeaturedExperience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  thrillLevel: 'Mild' | 'Moderate' | 'High-Thrill' | 'Extreme';
  duration: string;
  location: string;
  image: string;
  highlights: string[];
  priceFrom?: string;
  priceUnit?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  location: string;
  review: string;
  tripType: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ThrillExperience {
  id: string;
  title: string;
  tag: string;
  subtitle: string;
  description: string;
  image: string;
  rapidsGrade?: string;
  duration: string;
  difficulty: string;
  badge: string;
}

export interface NatureSpot {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  image: string;
  bestTime: string;
  highlight: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  author: string;
  sections: {
    heading: string;
    body: string;
  }[];
}

export interface PlanTripTopic {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  summary: string;
  details: string[];
  ctaLabel?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Adventure' | 'River & Water' | 'Jungle & Nature' | 'Happy Customers' | 'Stays';
  image: string;
  location: string;
  caption?: string;
}

export interface TourPackageItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  tag: string;
  duration: string;
  priceFrom: string;
  priceUnit: string;
  description: string;
  highlights: string[];
}

export interface RoomStayItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tag: string;
  capacity?: string;
  priceFrom?: string;
  priceUnit?: string;
  description: string;
  highlights: string[];
}
