import { View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const TimeSlotsHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'nunito-bold',
        }}
      >
        Time slots
      </Text>

      <Pressable
        style={{
          backgroundColor: 'rgba(16, 185, 129, 0.10)',
          padding: 10,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Feather
          name='plus'
          size={16}
          color='#10B981'
          style={{ marginRight: 6 }}
        />

        <Text
          style={{
            color: '#10B981',
            fontFamily: 'nunito-black',
            fontSize: 14,
          }}
        >
          New slot
        </Text>
      </Pressable>
    </View>
  );
};
