import { StyleSheet } from 'react-native';
import { StyledText } from '../components/StyledText';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StyledText style={styles.title}>Hello with nunito bitches</StyledText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
