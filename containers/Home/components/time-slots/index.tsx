import { View } from 'react-native';
import { TimeSlotsHeader } from '@/containers/home/components/time-slots/TimeSlotsHeader';
import { TimeSlotsList } from '@/containers/home/components/time-slots/TimeSlotsList';

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
