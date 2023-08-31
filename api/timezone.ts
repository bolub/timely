import axios from 'axios';

export const getTimeData = async (timezone: string) => {
  const response = await axios.get(
    `http://worldtimeapi.org/api/timezone/${timezone}`
  );

  return response.data as {
    timezone: string;
    datetime: Date;
    utc_datetime: string;
  };
};
