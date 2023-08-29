import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LocalInfo } from '@/containers/Home/components/LocalInfo';
import { TimeSlots } from '@/containers/Home/components/TimeSlots';

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
