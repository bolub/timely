import countriesWithTimezone from '@/data/countriesWithTimezone.json';

export function getCountryInfoByTimezone(timezone: string) {
  const country = countriesWithTimezone.find((country) =>
    country.timezones.includes(timezone)
  );
  return country
    ? { name: country.name, country_code: country.country_code }
    : null;
}
