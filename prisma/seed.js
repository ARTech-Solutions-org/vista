const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const demoHost = {
  id: 'demo-host',
  email: 'host@vista.example',
  firstName: 'Vista',
  lastName: 'Host',
  profileImage:
    'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg',
};

const homes = [
  {
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
    addedCategory: true,
    addedDescription: true,
    addedLocation: true,
  },
  {
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
    addedCategory: true,
    addedDescription: true,
    addedLocation: true,
  },
  {
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
    addedCategory: true,
    addedDescription: true,
    addedLocation: true,
  },
  {
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
    addedCategory: true,
    addedDescription: true,
    addedLocation: true,
  },
  {
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
    addedCategory: true,
    addedDescription: true,
    addedLocation: true,
  },
  {
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
    addedCategory: true,
    addedDescription: true,
    addedLocation: true,
  },
  {
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
    addedCategory: true,
    addedDescription: true,
    addedLocation: true,
  },
  {
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
    addedCategory: true,
    addedDescription: true,
    addedLocation: true,
  },
  {
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
    addedCategory: true,
    addedDescription: true,
    addedLocation: true,
  },
  {
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
    addedCategory: true,
    addedDescription: true,
    addedLocation: true,
  },
  {
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
    addedCategory: true,
    addedDescription: true,
    addedLocation: true,
  },
  {
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
    addedCategory: true,
    addedDescription: true,
    addedLocation: true,
  },
];

async function main() {
  await prisma.favourite.deleteMany();
  await prisma.reservation.deleteMany();
  await prisma.home.deleteMany();
  await prisma.user.deleteMany();

  const host = await prisma.user.create({ data: demoHost });

  await prisma.home.createMany({
    data: homes.map((home) => ({
      ...home,
      userId: host.id,
    })),
  });

  console.log(`Seeded ${homes.length} Egyptian stays.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });