import { getData } from '@/api/data';

export const getSlots = async () => {
  return (await getData({ key: 'slots' })) as {
    id: string;
    timeZone: string;
    country: string;
    country_code: string;
  }[];
};
