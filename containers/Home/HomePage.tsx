import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LocalInfo } from './components/LocalInfo';
import { TimeSlots } from './components/time-slots';

export const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingTop: 24,
          paddingHorizontal: 24,
          flex: 1,
        }}
      >
        <LocalInfo />

        <TimeSlots />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
