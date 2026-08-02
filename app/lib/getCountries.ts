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
