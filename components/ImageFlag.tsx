// import { getFlagUrl } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Image } from 'expo-image';
import SkeletonLoader from '@/components/SkeletonLoader';

export const getFlagUrl = async (country_code: string) => {
  const response = await axios.get(
    `https://flagsapi.com/${country_code}/flat/48.png`
  );

  return response.data;
};

// TODO: This is a hack I'm not comfortable with, FIX PLS
export const ImageFlag = ({ country_code }: { country_code: string }) => {
  const { isLoading, data } = useQuery({
    queryKey: [`${country_code}flag`],
    queryFn: () => {
      return getFlagUrl(country_code);
    },
  });

  if (isLoading || !data) return <SkeletonLoader width={48} height={48} />;

  return (
    <Image
      source={`https://flagsapi.com/${country_code}/flat/48.png`}
      contentFit='cover'
      style={{
        width: 48,
        height: 36,
        backgroundColor: 'white',
      }}
    />
  );
};
