import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { borderRadius, colors } from '@/theme/theme';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSlots } from '@/api/slots';
import { NewTimeSlot } from './NewTimeSlot';
import { queryClient } from '@/app/_layout';
import useToast from '@/hooks/useToast';

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
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'nunito-black',
            textTransform: 'uppercase',
          }}
        >
          Time slots
        </Text>

        <View
          style={{
            backgroundColor: colors.primary.light,
            borderRadius: borderRadius.small,
            flexDirection: 'row',
            gap: 4,
          }}
        >
          {canAddSlot && <AddSlotButton onAdd={handlePresentModalPress} />}

          <RefreshSlotsButton />
        </View>

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
    </View>
  );
};

const AddSlotButton = ({ onAdd }: { onAdd: () => void }) => {
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRightWidth: 1,
        borderRightColor: colors.primary.disabled,
      }}
      onPress={onAdd}
    >
      <Text
        style={{
          color: colors.primary.main,
          fontFamily: 'nunito-black',
          fontSize: 13,
        }}
      >
        New slot
      </Text>
    </Pressable>
  );
};

const RefreshSlotsButton = () => {
  const toast = useToast();

  return (
    <Pressable
      style={{
        borderRadius: borderRadius.small,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 6,
      }}
      onPress={() => {
        queryClient.invalidateQueries();
        toast('Time slots updated with current time');
      }}
    >
      <Feather
        name='refresh-cw'
        size={16}
        color={colors.primary.main}
        style={{ marginRight: 4 }}
      />
    </Pressable>
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
