import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const CustomSelect = ({
  value,
  setValue,
  options,
  placeholder,
}: {
  placeholder: string;
  value: string;
  setValue: (value: React.SetStateAction<string>) => void;
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
        onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
        style={{
          fontFamily: 'nunito-bold',
        }}
      >
        {options.map((option) => {
          return (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
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
