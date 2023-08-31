import { borderRadius, colors } from '@/theme/theme';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getTimeData } from '@/api/timezone';
import { utcToZonedTime, format } from 'date-fns-tz';
import { itemSize } from '@/containers/home/components/time-slots/TimeSlotsList';
import { getFlagUrl } from '@/utils';
import { Feather } from '@expo/vector-icons';
import { getData, storeData } from '@/api/data';
import { queryClient } from '@/app/_layout';

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
  const currentCountryTime = zonedDate
    ? format(zonedDate, 'HH:mm a', { timeZone })
    : '';

  const handleRemoveTimeSlot = async () => {
    const allTimeSlots =
      ((await getData({ key: 'slots' })) as {
        id: string;
        country: string;
        country_code: string;
        timeZone: string;
      }[]) || [];

    const newTimeSlots = allTimeSlots.filter((slot) => {
      return slot.id !== id;
    });

    await storeData({
      key: 'slots',
      value: newTimeSlots,
    });

    queryClient.invalidateQueries(['slots']);
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: borderRadius.large,
        height: 194,
        width: itemSize - 24,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: 10,
      }}
    >
      <Pressable
        onPress={handleRemoveTimeSlot}
        style={{
          position: 'absolute',
          right: 10,
          top: 10,
          borderRadius: borderRadius.small,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Feather name='x-circle' size={16} color={colors.gray.main} />
      </Pressable>

      <Image
        source={getFlagUrl(country_code)}
        contentFit='cover'
        style={{
          width: 48,
          height: 48,
          backgroundColor: 'white',
        }}
      />

      <Text
        style={{
          color: colors.gray.main,
          fontSize: 12,
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
          fontSize: 16,
          fontFamily: 'nunito-black',
          textAlign: 'center',
        }}
      >
        {currentCountryTime}
        &nbsp;
      </Text>
    </View>
  );
};
