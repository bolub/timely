import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LocalInfo } from '@/containers/home/components/LocalInfo';
import { TimeSlots } from '@/containers/home/components/time-slots';

export const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          paddingTop: 24,
          paddingHorizontal: 24,
        }}
      >
        <LocalInfo />

        <TimeSlots />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
