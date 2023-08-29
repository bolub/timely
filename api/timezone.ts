import axios from 'axios';

export const getLocalData = async () => {
  const response = await axios.get('http://worldtimeapi.org/api/ip');

  return response.data as {
    timezone: string;
    datetime: Date;
  };
};
