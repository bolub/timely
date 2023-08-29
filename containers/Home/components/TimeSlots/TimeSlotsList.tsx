import { Image } from 'expo-image';
import React from 'react';
import { FlatList, Text, View, Dimensions } from 'react-native';

const dummyData = [
  {
    country: 'Finland',
    time: '15:36PM',
    flagUrl: 'https://www.worldometers.info//img/flags/small/tn_ao-flag.gif',
  },
  {
    country: 'Nigeria',
    time: '15:36PM',
    flagUrl: 'https://www.worldometers.info//img/flags/small/tn_ao-flag.gif',
  },
  {
    country: 'America',
    time: '15:36PM',
    flagUrl: 'https://www.worldometers.info//img/flags/small/tn_ao-flag.gif',
  },
  {
    country: 'America2',
    time: '15:36PM',
    flagUrl: 'https://www.worldometers.info//img/flags/small/tn_ao-flag.gif',
  },
];

const screenWidth = Dimensions.get('window').width;
const numColumns = 2;
const gap = 10;

const availableSpace = screenWidth - (numColumns - 1) * gap;
const itemSize = availableSpace / numColumns;

export const TimeSlotsList = () => {
  return (
    <FlatList
      data={dummyData}
      renderItem={({ item }) => {
        return <TimeSlotComponent {...item} />;
      }}
      numColumns={numColumns}
      ListEmptyComponent={Empty}
      contentContainerStyle={{ gap }}
      columnWrapperStyle={{ gap }}
      key={numColumns}
      style={{
        height: 600,
      }}
    />
  );
};

const TimeSlotComponent = ({
  country,
  time,
  flagUrl,
}: {
  country: string;
  time: string;
  flagUrl: string;
}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 16,
        height: 194,
        width: itemSize - 24,
        // maxWidth: 146,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={flagUrl}
        contentFit='cover'
        style={{
          width: 40,
          height: 40,
          backgroundColor: 'white',
          borderRadius: 999,
        }}
      />

      <Text
        style={{
          color: '#71717A',
          fontSize: 14,
          fontFamily: 'nunito-black',
          textTransform: 'uppercase',
          marginTop: 16,
        }}
      >
        {country}
      </Text>

      <Text
        style={{
          marginTop: 6,
          fontSize: 18,
          fontFamily: 'nunito-black',
        }}
      >
        {time}
      </Text>
    </View>
  );
};
const Empty = () => (
  <View>
    <Text
      style={{
        fontFamily: 'nunito-bold',
        fontSize: 16,
      }}
    >
      No data available
    </Text>
  </View>
);
