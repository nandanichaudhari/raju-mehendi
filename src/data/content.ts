import { PortfolioItem, ServicePackage, Testimonial, FAQItem } from '../types';

export const ARTIST_INFO = {
  name: "RAJU MEHENDI",
  title: "Master Bridal & Celebrity Mehendi Artist",
  location: "Bhopal, Madhya Pradesh, India",
  coverage: "Bhopal • Indore • Udaipur • Jaipur • Goa • International Destinations",
  experienceYears: "15+",
  bridesStyled: "1,200+",
  destinationWeddings: "180+",
  organicPromise: "100% Pure Organic Sojat Henna • Zero Chemicals • Guarantee Deep Mahogany Stain",
  phone: "+91 98260 12345",
  whatsapp: "+919826012345",
  email: "concierge@rajumehendi.com",
  instagram: "@rajumehendi_official",
  studioAddress: "Luxury Suite 402, Arera Colony, Bhopal, MP 462016, India",
  heroTagline: "Timeless mehendi artistry crafted for royal celebrations, celebrity weddings, and unforgettable bridal stories worldwide.",
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "royal-udaipur-bride",
    title: "The City Palace Royal Story",
    category: "royal-bridal",
    categoryLabel: "Royal Bridal",
    image: "images/9.png",
    location: "City Palace, Udaipur",
    description: "Full-arm bespoke bridal layout weaving the couple's initial meet at Lake Pichola, intricate elephant procession (Hathi Baraat), and traditional Doli motifs.",
    detailMotifs: ["Peacock Sanctuary Palms", "Royal Doli & Shehnai", "Personalized Couple Portraits", "Micro Floral Mesh"],
    tag: "Celebrity Favorite",
    featured: true,
  },
  {
    id: "jehan-numa-palace-bridal",
    title: "Heritage Nawabi Intricacy",
    category: "royal-bridal",
    categoryLabel: "Royal Bridal",
    image: "images/1.png",
    location: "Jehan Numa Palace, Bhopal",
    description: "Classic Nawabi arches and jali craftsmanship created with ultra-fine 0.3mm cone application for flawless symmetrical geometry.",
    detailMotifs: ["Architectural Jali Arches", "Lotus Cascade", "Heavy Elbow Framing", "Full Feet Anklet Lace"],
    tag: "Signature Style",
    featured: true,
  },
  {
    id: "contemporary-minimalist",
    title: "Modern Botanical Elegance",
    category: "modern-minimal",
    categoryLabel: "Modern Minimalist",
    image: "images/2.png",
    location: "Fairmont, Jaipur",
    description: "Designed for the modern bride seeking breathable negative space, delicate glove-inspired finger lace, and refined vine symmetry.",
    detailMotifs: ["Negative Space Bands", "Ethereal Fingertip Rings", "Floating Lotus Buds", "Clean Wrist Cuffs"],
    featured: true,
  },
  {
    id: "arabic-indo-fusion",
    title: "Dubai Skyline & Persian Lattice",
    category: "arabic-indo",
    categoryLabel: "Arabic & Indo-Western",
    image: "images/3.png",
    location: "Jumeirah Zabeel Saray, Dubai",
    description: "Bold Arabic shaded florals seamlessly blended with dense Indian filler motifs, crafted for an international destination bride.",
    detailMotifs: ["Bold Shaded Rose Trails", "Persian Geometric Lattice", "Gold-Accented Borders", "Finger Tips Ombre"],
  },
  {
    id: "portrait-bride-groom",
    title: "Radha Krishna & Varmala Portraits",
    category: "portrait-motifs",
    categoryLabel: "Portrait Details",
    image: "images/4.png",
    location: "The Leela Palace, Bengaluru",
    description: "High-precision portrait art embedded into both palms, capturing the groom’s exact likeness and a sacred Varmala ceremony scene.",
    detailMotifs: ["Realistic Portrait Engraving", "Varmala Scene", "Hashtag & Date Calligraphy", "Royal Canopy Arches"],
    featured: true,
  },
  {
    id: "sangeet-guest-couture",
    title: "Sangeet Soirée Family Suite",
    category: "sangeet-guest",
    categoryLabel: "Sangeet & Guest Art",
    image: "images/5.png",
    location: "W Hotel, Goa",
    description: "Expeditious luxury mehendi service for 40+ VIP wedding guests and bridesmaids, featuring stylish mandalas and wrist cuff bands.",
    detailMotifs: ["Speed Mandala Medallions", "Boho Cuff Bands", "Quick-Dry Organic Paste", "Chic Palm Mandalas"],
  },
  {
    id: "rajasthani-royal-feet",
    title: "Imperial Royal Feet Paduka",
    category: "royal-bridal",
    categoryLabel: "Royal Bridal",
    image: "images/6.png",
    location: "Rambagh Palace, Jaipur",
    description: "Traditional Rajasthani feet mehendi up to knees, featuring royal anklet bands, traditional peacock toes, and intricate central lotus mandala.",
    detailMotifs: ["Ornate Payal Anklets", "Knee-Length Lattice", "Intricate Toe Rings", "Royal Peacock Crests"],
  },
  {
    id: "marwari-heavy-bridal",
    title: "Marwari Heritage Full Arm Suite",
    category: "royal-bridal",
    categoryLabel: "Royal Bridal",
    image: "images/7.png",
    location: "Umaid Bhawan Palace, Jodhpur",
    description: "Ultra-dense traditional Marwari craftsmanship spanning from fingertips to biceps, weaving sacred shloka inscriptions and royal durbar scenes.",
    detailMotifs: ["Royal Durbar Scenes", "Sanskrit Shloka Calligraphy", "Dense Micro Jali", "Heavy Bicep Cuffs"],
    featured: true,
  },
  {
    id: "lotus-mandala-palms",
    title: "Sacred Lotus Centerpiece Palms",
    category: "modern-minimal",
    categoryLabel: "Modern Minimalist",
    image: "images/8.png",
    location: "Taj Lake Palace, Udaipur",
    description: "Symmetrical central lotus mandala framed by clean geometric concentric circles and delicate fingertip lace.",
    detailMotifs: ["Concentric Lotus Rings", "Geometry Wrist Cuffs", "Clean Negative Spacing", "Delicate Fingertips"],
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "royal-signature-bridal",
    name: "The Royal Maharani Bridal",
    tagline: "Our flagship full-length bridal masterpiece, tailored entirely around your wedding narrative.",
    description: "Includes bespoke story-based motifs (couple portraits, love story milestones, doli & baraat procession, holy mantras, custom dates/hashtags). Full coverage on both arms up to elbows or biceps, and legs up to knees.",
    priceStartingFrom: "₹35,000",
    durationHours: "5 - 7 Hours",
    idealFor: "Brides seeking grand royal heritage artistry and deep personalized storytelling.",
    features: [
      "Customized Storyboard Consultation",
      "Full Arm Coverage (Elbow to Fingertips, Both Sides)",
      "Leg Coverage (Knee to Toes)",
      "Couple Portrait & Varmala Motif Included",
      "100% Pure Organic Triple-Filtered Henna Cone",
      "Complimentary Aftercare Oil & Lemon-Sugar Sealing Service",
      "Guaranteed Dark Mahogany Stain"
    ],
    image: "images/1.png",
    popular: true,
  },
  {
    id: "modern-couture-bridal",
    name: "Contemporary Minimalist Bridal",
    tagline: "Modern sophistication with breathable symmetry and ethereal lace motifs.",
    description: "Refined geometric mesh, floating lotus blooms, negative space wrist bands, and elegant glove fingers. Includes mid-forearm arms coverage and mid-calf feet coverage.",
    priceStartingFrom: "₹24,000",
    durationHours: "3.5 - 5 Hours",
    idealFor: "Modern brides, destination resort weddings, and minimalist aesthetic lovers.",
    features: [
      "Negative Space & Geometric Lace Design",
      "Mid-Forearm Arm Coverage",
      "Mid-Calf Leg Coverage",
      "Organic Fresh Eucalyptus Infused Henna",
      "Speed Application Technique (Comfortable Sitting)",
      "Personalized Date & Monogram Calligraphy",
      "Aftercare Kit Included"
    ],
    image: "images/2.png",
  },
  {
    id: "destination-wedding-suite",
    name: "Worldwide Destination Bridal + Family Suite",
    tagline: "Comprehensive bridal & VIP family coverage for luxury destination weddings across India & internationally.",
    description: "Raju Mehendi and 2 Senior Assistant Artists travel directly to your destination venue. Includes full Royal Bridal for the Bride plus dedicated coverage for Mother of the Bride, Sister of the Bride, and Sangeet VIPs.",
    priceStartingFrom: "₹75,000",
    durationHours: "Full Event Days",
    idealFor: "Destination weddings in Udaipur, Jaipur, Goa, Dubai, Bali, & Europe.",
    features: [
      "Master Raju Mehendi + 2 Senior Assistant Artists",
      "Full Royal Maharani Bridal Package",
      "Up to 25 Close Family / Bridesmaid Palm Designs Included",
      "On-Site Touch-Up & Oxidation Monitoring",
      "Travel & On-Location Setup Included",
      "Emergency Backup Henna Cones & Sealants",
      "Dedicated Event Coordinator Support"
    ],
    image: "images/3.png",
    popular: false,
  },
  {
    id: "sangeet-guest-package",
    name: "Sangeet & Mehendi Night Soirée",
    tagline: "High-speed, artistically exquisite guest mehendi station for your pre-wedding celebrations.",
    description: "A team of skilled artists setup a chic mehendi bar at your Sangeet or Mehendi function, applying beautiful fast-dry designs for all guests.",
    priceStartingFrom: "₹18,000",
    durationHours: "4 Hours Station",
    idealFor: "Sangeet functions, Mehendi parties, and pre-wedding gatherings (30 to 80+ guests).",
    features: [
      "Team of 3-5 Senior Mehendi Artists",
      "Fast 3-5 Minute Per Hand Design Application",
      "Chic Floral, Mandala, & Cuff Design Catalog",
      "Stain-Safe Organic Henna Cones",
      "Custom Styled Artist Setup Bar",
      "Hourly Extension Available"
    ],
    image: "images/4.png",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    brideName: "Ananya Sharma",
    groomName: "Rohan Kapoor",
    weddingDate: "December 2025",
    venueLocation: "The Oberoi Udaivilas, Udaipur",
    quote: "Raju Ji created magic on my hands! The story of how Rohan and I met in Bhopal was woven so beautifully into the palm motifs. The color became the darkest mahogany stain I’ve ever seen—everyone at the wedding couldn't stop praising it!",
    fullStory: "I was very particular about having 100% organic henna because I have sensitive skin. Raju Ji prepared fresh paste with natural lavender oil right in front of us. He sat patiently for 6 hours, maintaining incredible precision. Hands down the best decision for my wedding!",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    featuredMotif: "Lake Pichola Sunset & Doli"
  },
  {
    id: "review-2",
    brideName: "Dr. Radhika Sen",
    groomName: "Vikramaditya Rao",
    weddingDate: "November 2025",
    venueLocation: "Jehan Numa Palace, Bhopal",
    quote: "Raju Mehendi is true celebrity-tier royalty. The fine 0.3mm cone work is unlike anything else in Central India. The symmetry on both arms was 100% identical—like a piece of heirloom art.",
    fullStory: "Our wedding hosted guests from London and New York, and everyone was mesmerized by Raju Ji's speed and artistry. His assistant team managed 50+ guests at our Sangeet without a single compromise in quality.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    featuredMotif: "Nawabi Jali Arches"
  },
  {
    id: "review-3",
    brideName: "Priya Singhania",
    groomName: "Devansh Mehta",
    weddingDate: "January 2026",
    venueLocation: "Fairmont, Jaipur",
    quote: "I wanted a modern negative space bridal layout that looked understated yet deeply regal. Raju Ji brought my Pinterest vision to life even better than the reference photos!",
    fullStory: "From the very first phone call to the aftercare oil application, the experience felt so luxurious and stress-free. The stain reached its absolute peak richness right on my Pheras day!",
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    featuredMotif: "Botanical Finger Rings"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How far in advance should I book Raju Mehendi for my wedding?",
    answer: "Because we limit bookings to ensure master-level individual attention for each bride, key wedding dates in the Indian bridal season (October to March) get booked 4 to 8 months in advance. We recommend reaching out as soon as your wedding venue is finalized.",
    category: "booking"
  },
  {
    question: "Is the henna paste 100% organic and safe for sensitive bridal skin?",
    answer: "Yes, absolutely. We hand-mix our henna paste using 100% pure triple-filtered Sojat Lawsonia inermis leaf powder, pure eucalyptus oil, therapeutic lavender oil, and lemon juice. We NEVER use chemicals, black henna, or PPD additives. It is completely safe and soothing.",
    category: "organic-henna"
  },
  {
    question: "How do I achieve the darkest mahogany stain for my wedding day?",
    answer: "We recommend applying bridal mehendi 48 hours prior to your main wedding ceremony. Follow our 4-step ritual: keep paste on hands for 6-8 hours, seal with warm lemon-sugar syrup, scrape off gently without using water for 12 hours, and apply our signature aftercare clove clove-smoke & essential oil treatment.",
    category: "stain-care"
  },
  {
    question: "Do you travel for destination weddings outside Bhopal?",
    answer: "Yes! Raju Mehendi regularly travels for destination weddings across Rajasthan (Udaipur, Jaipur, Jodhpur), Goa, Mumbai, Delhi, Gujarat, and international locations including Dubai, Thailand, and Europe. Travel and lodging arrangements are customized during booking.",
    category: "destination"
  },
  {
    question: "Can we include personalized stories, portraits, or dates in the design?",
    answer: "Yes, personalized storytelling is our specialty! During your consultation, you can share elements like your groom's initials, wedding date, proposal city, favorite pets, or couple portraits. Master Raju Ji seamlessly integrates these into your royal layout.",
    category: "booking"
  }
];
