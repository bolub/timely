import { Text, View } from 'react-native';
import { Image } from 'expo-image';

export const LocalInfo = () => {
  return (
    <View
      style={{
        backgroundColor: '#10B981',
        height: 158,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
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
          borderRadius: 999,
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
        Local (Turku, Finland)
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
        12:00PM
      </Text>
    </View>
  );
};
