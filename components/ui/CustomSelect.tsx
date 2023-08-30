import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const CustomSelect = ({
  value,
  onValueChange,
  options,
  placeholder,
}: {
  placeholder: string;
  value: string;
  onValueChange: ((itemValue: string, itemIndex: number) => void) | undefined;
  options: { label: string; value: string }[];
}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: 'rgba(113, 113, 122, 0.30)',
        borderRadius: 8,
      }}
    >
      <Picker
        placeholder={placeholder}
        selectedValue={value}
        onValueChange={onValueChange}
        style={{
          fontFamily: 'nunito-bold',
        }}
      >
        {options?.map((option) => {
          return (
            <Picker.Item
              key={option?.value}
              label={option?.label}
              value={option?.value}
              fontFamily='nunito-bold'
              style={{
                fontFamily: 'nunito-bold',
              }}
            />
          );
        })}
      </Picker>
    </View>
  );
};
