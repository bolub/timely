import { borderRadius } from '@/theme/theme';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getTimeData } from '@/api/timezone';
import { utcToZonedTime, format } from 'date-fns-tz';
import { itemSize } from '@/containers/home/components/time-slots/TimeSlotsList';

export const TimeSlotComponent = ({
  id,
  timeZone,
  country,
  country_code,
}: {
  id: string;
  country: string;
  country_code: string;
  timeZone: string;
}) => {
  const { data } = useQuery({
    queryKey: [`${id}${timeZone}`],
    queryFn: () => {
      return getTimeData(timeZone);
    },
  });

  const zonedDate = data?.datetime
    ? utcToZonedTime(data?.datetime, timeZone)
    : '';
  const output = zonedDate
    ? format(zonedDate, 'HH:mm a', { timeZone: 'Europe/Berlin' })
    : '';

  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: borderRadius.large,
        height: 194,
        width: itemSize - 24,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={`https://flagsapi.com/${country_code}/flat/48.png`}
        contentFit='cover'
        style={{
          width: 48,
          height: 48,
          backgroundColor: 'white',
        }}
      />

      <Text
        style={{
          color: '#71717A',
          fontSize: 14,
          fontFamily: 'nunito-black',
          textTransform: 'uppercase',
          marginTop: 16,
          textAlign: 'center',
        }}
      >
        {country}
      </Text>

      <Text
        style={{
          marginTop: 6,
          fontSize: 18,
          fontFamily: 'nunito-black',
          textAlign: 'center',
        }}
      >
        {output} &nbsp;
      </Text>
    </View>
  );
};
