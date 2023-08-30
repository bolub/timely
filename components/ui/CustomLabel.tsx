import { StyleSheet } from 'react-native';
import { Text, TextProps } from 'react-native';

export const CustomLabel = (props: TextProps) => {
  return (
    <Text {...props} style={[styles.label, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'nunito-bold',
    fontSize: 14,
    marginBottom: 6,
  },
});
