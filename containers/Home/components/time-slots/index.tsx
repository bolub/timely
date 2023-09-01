import { View } from 'react-native';
import { TimeSlotsList } from './TimeSlotsList';
import { TimeSlotsHeader } from './TimeSlotsHeader';

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
