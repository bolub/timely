import axios from 'axios';
import { storeErrors } from './errors';

export const getTimeData = async (timezone: string) => {
  try {
    const response = await axios.get(
      `https://worldtimeapi.org/api/timezone/${timezone}`
    );

    return response.data as {
      timezone: string;
      datetime: Date;
      utc_datetime: string;
    };
  } catch (error) {
    await storeErrors({
      timezone,
      error,
    });
    throw error;
  }
};
