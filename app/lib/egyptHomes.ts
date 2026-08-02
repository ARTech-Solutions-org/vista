export type EgyptHome = {
  id: string;
  title: string;
  description: string;
  guests: string;
  bedrooms: string;
  bathrooms: string;
  country: string;
  photo: string;
  price: number;
  categoryName: string;
};

export const egyptHomes: EgyptHome[] = [
  {
    id: 'egypt-home-cairo-zamalek',
    title: 'Nile View Apartment in Zamalek',
    description:
      'Bright riverside stay with a balcony, calm interiors, and quick access to cafes and galleries.',
    guests: '4',
    bedrooms: '2',
    bathrooms: '2',
    country: 'cairo',
    photo:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    price: 3200,
    categoryName: 'nileView',
  },
  {
    id: 'egypt-home-cairo-old-city',
    title: 'Historic Flat Near Old Cairo',
    description:
      'Character-filled home close to mosques, markets, and the oldest streets in the city.',
    guests: '3',
    bedrooms: '1',
    bathrooms: '1',
    country: 'cairo',
    photo:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    price: 2100,
    categoryName: 'historic',
  },
  {
    id: 'egypt-home-alexandria-sea-breeze',
    title: 'Sea Breeze Villa in Alexandria',
    description:
      'Large airy villa with Mediterranean energy and sunset walks along the corniche.',
    guests: '6',
    bedrooms: '3',
    bathrooms: '3',
    country: 'alexandria',
    photo:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    price: 4100,
    categoryName: 'seaBreeze',
  },
  {
    id: 'egypt-home-siwa-desert-escape',
    title: 'Desert Escape in Siwa Oasis',
    description:
      'Minimal retreat with palm views, quiet nights, and a natural spring atmosphere.',
    guests: '2',
    bedrooms: '1',
    bathrooms: '1',
    country: 'siwa',
    photo:
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=80',
    price: 1800,
    categoryName: 'desertEscape',
  },
  {
    id: 'egypt-home-el-gouna-pool',
    title: 'Luxury Pool Stay in El Gouna',
    description:
      'Designer villa with private pool, lagoon calm, and a premium Red Sea setting.',
    guests: '8',
    bedrooms: '4',
    bathrooms: '4',
    country: 'el-gouna',
    photo:
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=1200&q=80',
    price: 8500,
    categoryName: 'pool',
  },
  {
    id: 'egypt-home-dahab-loft',
    title: 'Dahab Beach Loft',
    description:
      'Relaxed loft for divers and remote workers with a laid-back South Sinai mood.',
    guests: '3',
    bedrooms: '1',
    bathrooms: '1',
    country: 'dahab',
    photo:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    price: 2600,
    categoryName: 'redSea',
  },
  {
    id: 'egypt-home-hurghada-sunset',
    title: 'Sunset Apartment in Hurghada',
    description:
      'Affordable seaside apartment with wide-open views and easy beach access.',
    guests: '5',
    bedrooms: '2',
    bathrooms: '2',
    country: 'hurghada',
    photo:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    price: 2400,
    categoryName: 'sunset',
  },
  {
    id: 'egypt-home-luxor-heritage',
    title: 'Heritage House in Luxor',
    description:
      'Warm heritage home close to temples, with a classic Upper Egypt feel.',
    guests: '4',
    bedrooms: '2',
    bathrooms: '2',
    country: 'luxor',
    photo:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    price: 1950,
    categoryName: 'heritage',
  },
  {
    id: 'egypt-home-new-cairo-design',
    title: 'Design Stay in New Cairo',
    description:
      'Modern minimalist apartment with a polished layout and strong city access.',
    guests: '2',
    bedrooms: '1',
    bathrooms: '1',
    country: 'cairo',
    photo:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    price: 3000,
    categoryName: 'design',
  },
  {
    id: 'egypt-home-fayoum-oasis',
    title: 'Oasis Cabin in Fayoum',
    description:
      'Rustic cabin with desert calm, palm trees, and a slow-travel weekend vibe.',
    guests: '3',
    bedrooms: '1',
    bathrooms: '1',
    country: 'fayoum',
    photo:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    price: 1700,
    categoryName: 'oasis',
  },
  {
    id: 'egypt-home-ain-sokhna-retreat',
    title: 'Ain Sokhna Weekend Retreat',
    description:
      'Easy escape for short stays on the coast with a spacious terrace and relaxed layout.',
    guests: '6',
    bedrooms: '3',
    bathrooms: '2',
    country: 'ain-sokhna',
    photo:
      'https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?auto=format&fit=crop&w=1200&q=80',
    price: 3800,
    categoryName: 'luxe',
  },
  {
    id: 'egypt-home-port-said-compact',
    title: 'Port Said Compact Apartment',
    description:
      'Compact city apartment near the canal city center, markets, and the waterfront.',
    guests: '2',
    bedrooms: '1',
    bathrooms: '1',
    country: 'port-said',
    photo:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    price: 1600,
    categoryName: 'tiny',
  },
  {
    id: 'egypt-home-marsa-matruh-coast',
    title: 'North Coast Apartment in Marsa Matruh',
    description:
      'Bright coastal stay with soft sand beaches and a relaxed Mediterranean rhythm.',
    guests: '4',
    bedrooms: '2',
    bathrooms: '1',
    country: 'marsa-matruh',
    photo:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    price: 2900,
    categoryName: 'sunset',
  },
  {
    id: 'egypt-home-new-alamein-luxe',
    title: 'New Alamein Luxury Suite',
    description:
      'Polished north coast suite with modern interiors and a premium summer feel.',
    guests: '5',
    bedrooms: '2',
    bathrooms: '2',
    country: 'new-alamein',
    photo:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    price: 4700,
    categoryName: 'luxe',
  },
  {
    id: 'egypt-home-ras-sudr-sea',
    title: 'Ras Sudr Surf Cabin',
    description:
      'Easy beach cabin for kite surfers and weekend road trips on the Sinai coast.',
    guests: '3',
    bedrooms: '1',
    bathrooms: '1',
    country: 'ras-sudr',
    photo:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    price: 2200,
    categoryName: 'redSea',
  },
  {
    id: 'egypt-home-taba-lagoon',
    title: 'Taba Lagoon Villa',
    description:
      'Quiet lagoon-side villa with long sea views and a laid-back south Sinai setting.',
    guests: '6',
    bedrooms: '3',
    bathrooms: '2',
    country: 'taba',
    photo:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
    price: 3600,
    categoryName: 'seaBreeze',
  },
  {
    id: 'egypt-home-marsa-alam-dive',
    title: 'Marsa Alam Diver Studio',
    description:
      'Compact studio close to coral reefs, diving centers, and open water adventures.',
    guests: '2',
    bedrooms: '1',
    bathrooms: '1',
    country: 'marsa-alam',
    photo:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    price: 2600,
    categoryName: 'redSea',
  },
  {
    id: 'egypt-home-sahl-hasheesh-pool',
    title: 'Sahl Hasheesh Pool Villa',
    description:
      'Upscale beach villa with private pool and a clean luxury resort vibe.',
    guests: '8',
    bedrooms: '4',
    bathrooms: '4',
    country: 'sahl-hasheesh',
    photo:
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=1200&q=80',
    price: 9200,
    categoryName: 'pool',
  },
  {
    id: 'egypt-home-sharm-waterfront',
    title: 'Sharm El Sheikh Waterfront Flat',
    description:
      'Modern flat near the marina with easy access to beaches and nightlife.',
    guests: '4',
    bedrooms: '2',
    bathrooms: '2',
    country: 'sharm-el-sheikh',
    photo:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    price: 5100,
    categoryName: 'sunset',
  },
  {
    id: 'egypt-home-maadi-family',
    title: 'Family Apartment in Maadi',
    description:
      'Quiet green neighborhood apartment with a local feel and strong school access.',
    guests: '5',
    bedrooms: '3',
    bathrooms: '2',
    country: 'cairo',
    photo:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    price: 3400,
    categoryName: 'design',
  },
  {
    id: 'egypt-home-zamalek-heritage',
    title: 'Zamalek Heritage Residence',
    description:
      'Classic Cairo residence with old charm, high ceilings, and a central island location.',
    guests: '4',
    bedrooms: '2',
    bathrooms: '2',
    country: 'cairo',
    photo:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    price: 4100,
    categoryName: 'heritage',
  },
  {
    id: 'egypt-home-giza-pyramids-view',
    title: 'Pyramids View Home in Giza',
    description:
      'Top-floor stay with open views toward the plateau and quick access to the monuments.',
    guests: '4',
    bedrooms: '2',
    bathrooms: '2',
    country: 'giza',
    photo:
      'https://images.unsplash.com/photo-1517017807115-8d0d3a2f1be0?auto=format&fit=crop&w=1200&q=80',
    price: 3300,
    categoryName: 'historic',
  },
  {
    id: 'egypt-home-new-cairo-pool',
    title: 'New Cairo Pool House',
    description:
      'Bright suburban home with a private pool and a spacious entertaining area.',
    guests: '7',
    bedrooms: '4',
    bathrooms: '3',
    country: 'cairo',
    photo:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    price: 6200,
    categoryName: 'pool',
  },
  {
    id: 'egypt-home-sheikh-zayed-modern',
    title: 'Sheikh Zayed Modern Loft',
    description:
      'Fresh loft apartment with minimal lines and a calm western Cairo lifestyle.',
    guests: '3',
    bedrooms: '1',
    bathrooms: '1',
    country: 'sheikh-zayed',
    photo:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    price: 2800,
    categoryName: 'design',
  },
  {
    id: 'egypt-home-6th-october-family',
    title: '6th of October Family Duplex',
    description:
      'Practical duplex for longer stays with generous rooms and a suburban layout.',
    guests: '6',
    bedrooms: '3',
    bathrooms: '2',
    country: '6th-of-october',
    photo:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    price: 3100,
    categoryName: 'tiny',
  },
  {
    id: 'egypt-home-downtown-cairo-flat',
    title: 'Downtown Cairo City Flat',
    description:
      'Central city flat for travelers who want museums, metro, and nightlife nearby.',
    guests: '2',
    bedrooms: '1',
    bathrooms: '1',
    country: 'cairo',
    photo:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    price: 2400,
    categoryName: 'tiny',
  },
  {
    id: 'egypt-home-mansoura-river',
    title: 'Mansoura River Apartment',
    description:
      'Comfortable family stay with a calm Delta feel and generous natural light.',
    guests: '4',
    bedrooms: '2',
    bathrooms: '2',
    country: 'mansoura',
    photo:
      'https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?auto=format&fit=crop&w=1200&q=80',
    price: 1700,
    categoryName: 'sunset',
  },
  {
    id: 'egypt-home-tanta-central',
    title: 'Tanta Central Apartment',
    description:
      'Simple central apartment for short stays, business trips, or regional travel.',
    guests: '3',
    bedrooms: '1',
    bathrooms: '1',
    country: 'tanta',
    photo:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    price: 1450,
    categoryName: 'tiny',
  },
  {
    id: 'egypt-home-asyut-river',
    title: 'Asyut Riverside Home',
    description:
      'Quiet Upper Egypt stay with a simple layout and a peaceful family atmosphere.',
    guests: '4',
    bedrooms: '2',
    bathrooms: '1',
    country: 'asyut',
    photo:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    price: 1300,
    categoryName: 'heritage',
  },
  {
    id: 'egypt-home-qena-travel-home',
    title: 'Qena Travel Home',
    description:
      'Practical home base for temple trips and long regional stays in Upper Egypt.',
    guests: '3',
    bedrooms: '1',
    bathrooms: '1',
    country: 'qena',
    photo:
      'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1200&q=80',
    price: 1250,
    categoryName: 'historic',
  },
  {
    id: 'egypt-home-beni-suef-family',
    title: 'Beni Suef Family Stay',
    description:
      'Modest family apartment with easy road access and a calm local neighborhood.',
    guests: '5',
    bedrooms: '2',
    bathrooms: '1',
    country: 'beni-suef',
    photo:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    price: 1100,
    categoryName: 'tiny',
  },
  {
    id: 'egypt-home-minya-desert-view',
    title: 'Minya Desert View Home',
    description:
      'Quiet stay with scenic views, good for travelers exploring the Nile Valley.',
    guests: '4',
    bedrooms: '2',
    bathrooms: '2',
    country: 'minya',
    photo:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    price: 1350,
    categoryName: 'sunset',
  },
  {
    id: 'egypt-home-ras-sudr-kite-lodge',
    title: 'Ras Sudr Kite Lodge',
    description:
      'Wind-friendly lodge for adventure travelers and group beach weekends.',
    guests: '6',
    bedrooms: '3',
    bathrooms: '2',
    country: 'ras-sudr',
    photo:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    price: 2500,
    categoryName: 'redSea',
  },
  {
    id: 'egypt-home-nuweiba-tranquil',
    title: 'Nuweiba Tranquil Cabin',
    description:
      'Secluded cabin with a low-key beach atmosphere and a quiet Sinai escape.',
    guests: '2',
    bedrooms: '1',
    bathrooms: '1',
    country: 'nuweiba',
    photo:
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=80',
    price: 2100,
    categoryName: 'desertEscape',
  },
  {
    id: 'egypt-home-kafr-el-sheikh-farm',
    title: 'Kafr El Sheikh Farm House',
    description:
      'Open farm stay for relaxed weekends and small group gatherings in the Delta.',
    guests: '6',
    bedrooms: '3',
    bathrooms: '2',
    country: 'kafr-el-sheikh',
    photo:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    price: 1500,
    categoryName: 'oasis',
  },
  {
    id: 'egypt-home-suez-modern',
    title: 'Suez Modern Apartment',
    description:
      'Clean practical apartment for business visits and transit stays along the canal.',
    guests: '2',
    bedrooms: '1',
    bathrooms: '1',
    country: 'suez',
    photo:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    price: 1800,
    categoryName: 'design',
  },
];

export const getEgyptHomeById = (id: string) =>
  egyptHomes.find((home) => home.id === id);