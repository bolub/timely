import { View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { borderRadius, colors } from '@/theme/theme';

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
          backgroundColor: colors.primary.light,
          padding: 10,
          borderRadius: borderRadius.small,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Feather
          name='plus'
          size={16}
          color={colors.primary.main}
          style={{ marginRight: 6 }}
        />

        <Text
          style={{
            color: colors.primary.main,
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
