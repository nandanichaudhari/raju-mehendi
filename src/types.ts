export type PortfolioCategory = 
  | 'all' 
  | 'royal-bridal' 
  | 'modern-minimal' 
  | 'arabic-indo' 
  | 'sangeet-guest' 
  | 'portrait-motifs';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  image: string;
  location: string;
  description: string;
  detailMotifs: string[];
  tag?: string;
  featured?: boolean;
}

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  description: string;
  priceStartingFrom: string;
  durationHours: string;
  idealFor: string;
  features: string[];
  image: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  brideName: string;
  groomName?: string;
  weddingDate: string;
  venueLocation: string;
  quote: string;
  fullStory: string;
  image: string;
  rating: number;
  featuredMotif?: string;
}

export interface InquiryFormData {
  brideName: string;
  email: string;
  phone: string;
  weddingDate: string;
  eventType: 'Bridal' | 'Sangeet Party' | 'Destination Wedding' | 'Celebrity Custom';
  locationCity: string;
  estimatedGuests: string;
  specialRequests: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'booking' | 'organic-henna' | 'stain-care' | 'destination';
}
