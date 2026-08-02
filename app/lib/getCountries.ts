type EgyptLocation = {
  value: string;
  label: string;
  flag: string;
  latLang: [number, number];
  region: string;
  subRegion: string;
};

const egyptLocations: EgyptLocation[] = [
  {
    value: 'cairo',
    label: 'Cairo',
    flag: '🇪🇬',
    latLang: [30.0444, 31.2357],
    region: 'Egypt',
    subRegion: 'Greater Cairo',
  },
  {
    value: 'giza',
    label: 'Giza',
    flag: '🇪🇬',
    latLang: [29.987, 31.2118],
    region: 'Egypt',
    subRegion: 'Greater Cairo',
  },
  {
    value: 'alexandria',
    label: 'Alexandria',
    flag: '🇪🇬',
    latLang: [31.2001, 29.9187],
    region: 'Egypt',
    subRegion: 'Mediterranean Coast',
  },
  {
    value: 'luxor',
    label: 'Luxor',
    flag: '🇪🇬',
    latLang: [25.6872, 32.6396],
    region: 'Egypt',
    subRegion: 'Upper Egypt',
  },
  {
    value: 'aswan',
    label: 'Aswan',
    flag: '🇪🇬',
    latLang: [24.0889, 32.8998],
    region: 'Egypt',
    subRegion: 'Upper Egypt',
  },
  {
    value: 'hurghada',
    label: 'Hurghada',
    flag: '🇪🇬',
    latLang: [27.2579, 33.8116],
    region: 'Egypt',
    subRegion: 'Red Sea',
  },
  {
    value: 'sharm-el-sheikh',
    label: 'Sharm El Sheikh',
    flag: '🇪🇬',
    latLang: [27.9158, 34.3307],
    region: 'Egypt',
    subRegion: 'South Sinai',
  },
  {
    value: 'dahab',
    label: 'Dahab',
    flag: '🇪🇬',
    latLang: [28.4917, 34.5133],
    region: 'Egypt',
    subRegion: 'South Sinai',
  },
  {
    value: 'siwa',
    label: 'Siwa Oasis',
    flag: '🇪🇬',
    latLang: [29.2041, 25.5191],
    region: 'Egypt',
    subRegion: 'Western Desert',
  },
  {
    value: 'port-said',
    label: 'Port Said',
    flag: '🇪🇬',
    latLang: [31.2653, 32.3019],
    region: 'Egypt',
    subRegion: 'Canal Cities',
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
