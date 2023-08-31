import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { borderRadius, colors } from '@/theme/theme';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef } from 'react';
import { NewTimeSlot } from '@/containers/home/components/time-slots/NewTimeSlot';
import { useQuery } from '@tanstack/react-query';
import { getSlots } from '@/api/slots';

export const TimeSlotsHeader = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['90%'], []);

  const { data } = useQuery({
    queryKey: ['slots'],
    queryFn: getSlots,
  });

  const canAddSlot = data ? data?.length < 4 : false;

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} pressBehavior='close' />
    ),
    []
  );

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

      {canAddSlot && (
        <Pressable
          onPress={handlePresentModalPress}
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
      )}

      <BottomSheetModal
        ref={bottomSheetModalRef}
        // index={1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        keyboardBehavior='interactive'
      >
        <View style={styles.contentContainer}>
          <NewTimeSlot
            onCancel={() => {
              bottomSheetModalRef.current?.close();
            }}
          />
        </View>
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
});
