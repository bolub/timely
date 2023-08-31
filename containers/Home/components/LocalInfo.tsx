import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import { borderRadius, colors } from '@/theme/theme';
import countriesWithTimezone from '@/data/countriesWithTimezone.json';
import { format } from 'date-fns-tz';

function getCountryInfoByTimezone(timezone: string) {
  const country = countriesWithTimezone.find((country) =>
    country.timezones.includes(timezone)
  );
  return country
    ? { name: country.name, country_code: country.country_code }
    : null;
}

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
      <Image
        source={`https://flagsapi.com/${countryData?.country_code}/flat/48.png`}
        contentFit='cover'
        style={{
          width: 48,
          height: 36,
          backgroundColor: 'white',
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
