import { FlatList, Text, View, Dimensions } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getSlots } from '@/api/slots';
import { TimeSlotComponent } from './TimeSlotComponent';

const screenWidth = Dimensions.get('window').width;
const numColumns = 2;
const gap = 10;

const availableSpace = screenWidth - (numColumns - 1) * gap;
export const itemSize = availableSpace / numColumns;

export const TimeSlotsList = () => {
  const { data } = useQuery({
    queryKey: ['slots'],
    queryFn: getSlots,
  });

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return <TimeSlotComponent {...item} />;
      }}
      numColumns={numColumns}
      ListEmptyComponent={Empty}
      contentContainerStyle={{ gap }}
      columnWrapperStyle={{ gap }}
      key={numColumns}
      style={
        {
          // height: 600,
        }
      }
    />
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
