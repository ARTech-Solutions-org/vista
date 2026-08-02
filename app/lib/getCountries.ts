type EgyptLocation = {
  value: string;
  label: string;
  flag: string;
  latLang: [number, number];
  region: string;
  subRegion: string;
  imageUrl: string;
};

const egyptLocations: EgyptLocation[] = [
  {
    value: 'cairo',
    label: 'Cairo',
    flag: '🇪🇬',
    latLang: [30.0444, 31.2357],
    region: 'Egypt',
    subRegion: 'Greater Cairo',
    imageUrl:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'giza',
    label: 'Giza',
    flag: '🇪🇬',
    latLang: [29.987, 31.2118],
    region: 'Egypt',
    subRegion: 'Greater Cairo',
    imageUrl:
      'https://images.unsplash.com/photo-1517017807115-8d0d3a2f1be0?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'alexandria',
    label: 'Alexandria',
    flag: '🇪🇬',
    latLang: [31.2001, 29.9187],
    region: 'Egypt',
    subRegion: 'Mediterranean Coast',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'luxor',
    label: 'Luxor',
    flag: '🇪🇬',
    latLang: [25.6872, 32.6396],
    region: 'Egypt',
    subRegion: 'Upper Egypt',
    imageUrl:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'aswan',
    label: 'Aswan',
    flag: '🇪🇬',
    latLang: [24.0889, 32.8998],
    region: 'Egypt',
    subRegion: 'Upper Egypt',
    imageUrl:
      'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'hurghada',
    label: 'Hurghada',
    flag: '🇪🇬',
    latLang: [27.2579, 33.8116],
    region: 'Egypt',
    subRegion: 'Red Sea',
    imageUrl:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'sharm-el-sheikh',
    label: 'Sharm El Sheikh',
    flag: '🇪🇬',
    latLang: [27.9158, 34.3307],
    region: 'Egypt',
    subRegion: 'South Sinai',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'dahab',
    label: 'Dahab',
    flag: '🇪🇬',
    latLang: [28.4917, 34.5133],
    region: 'Egypt',
    subRegion: 'South Sinai',
    imageUrl:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'siwa',
    label: 'Siwa Oasis',
    flag: '🇪🇬',
    latLang: [29.2041, 25.5191],
    region: 'Egypt',
    subRegion: 'Western Desert',
    imageUrl:
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'port-said',
    label: 'Port Said',
    flag: '🇪🇬',
    latLang: [31.2653, 32.3019],
    region: 'Egypt',
    subRegion: 'Canal Cities',
    imageUrl:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'fayoum',
    label: 'Fayoum',
    flag: '🇪🇬',
    latLang: [29.3084, 30.8428],
    region: 'Egypt',
    subRegion: 'Western Desert',
    imageUrl:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'el-gouna',
    label: 'El Gouna',
    flag: '🇪🇬',
    latLang: [27.3956, 33.6785],
    region: 'Egypt',
    subRegion: 'Red Sea',
    imageUrl:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'ain-sokhna',
    label: 'Ain Sokhna',
    flag: '🇪🇬',
    latLang: [29.6000, 32.3333],
    region: 'Egypt',
    subRegion: 'Red Sea',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'marsa-matruh',
    label: 'Marsa Matruh',
    flag: '🇪🇬',
    latLang: [31.3543, 27.2373],
    region: 'Egypt',
    subRegion: 'North Coast',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'new-alamein',
    label: 'New Alamein',
    flag: '🇪🇬',
    latLang: [30.8173, 28.9556],
    region: 'Egypt',
    subRegion: 'North Coast',
    imageUrl:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'ras-sudr',
    label: 'Ras Sudr',
    flag: '🇪🇬',
    latLang: [29.5418, 32.7177],
    region: 'Egypt',
    subRegion: 'South Sinai',
    imageUrl:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'taba',
    label: 'Taba',
    flag: '🇪🇬',
    latLang: [29.4921, 34.8957],
    region: 'Egypt',
    subRegion: 'South Sinai',
    imageUrl:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'marsa-alam',
    label: 'Marsa Alam',
    flag: '🇪🇬',
    latLang: [25.0676, 34.8786],
    region: 'Egypt',
    subRegion: 'Red Sea',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'sahl-hasheesh',
    label: 'Sahl Hasheesh',
    flag: '🇪🇬',
    latLang: [27.0970, 33.8520],
    region: 'Egypt',
    subRegion: 'Red Sea',
    imageUrl:
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'maadi',
    label: 'Maadi',
    flag: '🇪🇬',
    latLang: [29.9602, 31.2569],
    region: 'Egypt',
    subRegion: 'Greater Cairo',
    imageUrl:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'zamalek',
    label: 'Zamalek',
    flag: '🇪🇬',
    latLang: [30.0646, 31.2236],
    region: 'Egypt',
    subRegion: 'Greater Cairo',
    imageUrl:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'downtown-cairo',
    label: 'Downtown Cairo',
    flag: '🇪🇬',
    latLang: [30.0444, 31.2357],
    region: 'Egypt',
    subRegion: 'Central Cairo',
    imageUrl:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'sheikh-zayed',
    label: 'Sheikh Zayed',
    flag: '🇪🇬',
    latLang: [30.0540, 30.9720],
    region: 'Egypt',
    subRegion: 'Greater Cairo',
    imageUrl:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: '6th-of-october',
    label: '6th of October',
    flag: '🇪🇬',
    latLang: [29.9380, 30.9120],
    region: 'Egypt',
    subRegion: 'Greater Cairo',
    imageUrl:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'mansoura',
    label: 'Mansoura',
    flag: '🇪🇬',
    latLang: [31.0409, 31.3785],
    region: 'Egypt',
    subRegion: 'Delta',
    imageUrl:
      'https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'tanta',
    label: 'Tanta',
    flag: '🇪🇬',
    latLang: [30.7865, 31.0004],
    region: 'Egypt',
    subRegion: 'Delta',
    imageUrl:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'asyut',
    label: 'Asyut',
    flag: '🇪🇬',
    latLang: [27.1800, 31.1837],
    region: 'Egypt',
    subRegion: 'Upper Egypt',
    imageUrl:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'qena',
    label: 'Qena',
    flag: '🇪🇬',
    latLang: [26.1551, 32.7160],
    region: 'Egypt',
    subRegion: 'Upper Egypt',
    imageUrl:
      'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'beni-suef',
    label: 'Beni Suef',
    flag: '🇪🇬',
    latLang: [29.0661, 31.0994],
    region: 'Egypt',
    subRegion: 'Middle Egypt',
    imageUrl:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'minya',
    label: 'Minya',
    flag: '🇪🇬',
    latLang: [28.1099, 30.7503],
    region: 'Egypt',
    subRegion: 'Middle Egypt',
    imageUrl:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'kafr-el-sheikh',
    label: 'Kafr El Sheikh',
    flag: '🇪🇬',
    latLang: [31.1118, 30.9396],
    region: 'Egypt',
    subRegion: 'Delta',
    imageUrl:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
  },
  {
    value: 'suez',
    label: 'Suez',
    flag: '🇪🇬',
    latLang: [29.9668, 32.5498],
    region: 'Egypt',
    subRegion: 'Canal Cities',
    imageUrl:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
  },
];

export const useCountries = () => {
  const getAllCountries = () => egyptLocations;

  const getCountryByValue = (countryValue: string) => {
    return egyptLocations.find(
      (countryFind) => countryFind.value === countryValue
    ) ?? egyptLocations[0];
  };
  return { getAllCountries, getCountryByValue };
};
