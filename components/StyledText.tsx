import { Text } from 'react-native';

export function StyledText(props: any) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'nunito-regular' }]} />
  );
}
