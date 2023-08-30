import { StyleSheet, TextInput } from 'react-native';
import { TextInputProps } from 'react-native';

export const CustomTextInput = (props: TextInputProps) => {
  return <TextInput {...props} style={[styles.input, props.style]} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(113, 113, 122, 0.30)',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 14,
    fontSize: 14,
    fontFamily: 'nunito-bold',
    // height: 46,
  },
});
