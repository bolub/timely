import axios from 'axios';

export const storeErrors = async (data: any) => {
  const response = await axios.post(
    `https:////eoco1lzbbsp7hw.m.pipedream.net`,
    data
  );
  return response.data;
};
