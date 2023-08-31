import { Text, View } from 'react-native';
import { borderRadius, colors } from '@/theme/theme';
import { format } from 'date-fns-tz';
import { getCountryInfoByTimezone } from '@/containers/home/utils';
import { ImageFlag } from '@/components/ImageFlag';

export const LocalInfo = () => {
  const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const countryData = getCountryInfoByTimezone(localTimezone);

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
      <ImageFlag country_code={countryData?.country_code || ''} />

      <Text
        style={{
          marginTop: 16,
          textTransform: 'uppercase',
          fontFamily: 'nunito-extrabold',
          fontSize: 12,
          color: 'white',
        }}
      >
        Local ({countryData?.name})
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
        {format(new Date(), 'HH:mm a')}
      </Text>
    </View>
  );
};
