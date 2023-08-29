import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import { borderRadius, colors } from '@/theme/theme';
import { useQuery } from '@tanstack/react-query';
import { getLocalData } from '@/api/timezone';

export const LocalInfo = () => {
  const { data } = useQuery({
    queryKey: ['localData'],
    queryFn: getLocalData,
  });

  return (
    <View
      style={{
        backgroundColor: colors.primary.main,
        height: 158,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: borderRadius.large,
        padding: 30,
      }}
    >
      <Image
        source='https://www.worldometers.info//img/flags/small/tn_ao-flag.gif'
        contentFit='cover'
        style={{
          width: 36,
          height: 36,
          backgroundColor: 'white',
          borderRadius: borderRadius.rounded,
        }}
      />

      <Text
        style={{
          marginTop: 16,
          textTransform: 'uppercase',
          fontFamily: 'nunito-extrabold',
          fontSize: 12,
          color: 'white',
        }}
      >
        Local ({data?.timezone && data?.timezone?.replace('/', ', ')})
      </Text>

      <Text
        style={{
          marginTop: 6,
          textTransform: 'uppercase',
          fontFamily: 'nunito-extrabold',
          fontSize: 18,
          color: 'white',
        }}
      >
        {data?.datetime && new Date(data?.datetime).toLocaleTimeString()}
      </Text>
    </View>
  );
};
