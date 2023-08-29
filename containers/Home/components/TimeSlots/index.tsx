import { View } from 'react-native';
import { TimeSlotsHeader } from '@/containers/Home/components/TimeSlots/TimeSlotsHeader';
import { TimeSlotsList } from '@/containers/Home/components/TimeSlots/TimeSlotsList';

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
