import { View, Text, Pressable } from 'react-native';
import { TimeSlotsHeader } from './TimeSlotsHeader';
import { TimeSlotsList } from './TimeSlotsList';

export const TimeSlots = () => {
  return (
    <View
      style={{
        marginTop: 46,
      }}
    >
      <TimeSlotsHeader />

      <View
        style={{
          marginTop: 26,
        }}
      >
        <TimeSlotsList />
      </View>
    </View>
  );
};
