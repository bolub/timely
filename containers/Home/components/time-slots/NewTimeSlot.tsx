import { borderRadius, colors } from '@/theme/theme';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { CustomSelect } from '@/components/ui/CustomSelect';
import { CustomLabel } from '@/components/ui/CustomLabel';
import countriesWithTimezone from '@/data/countriesWithTimezone.json';
import uuid from 'react-native-uuid';
import { getData, storeData } from '@/api/data';
import { queryClient } from '@/app/_layout';
import useToast from '@/hooks/useToast';
import { Button } from '@gluestack-ui/themed';

export const NewTimeSlot = ({ onCancel }: { onCancel: () => void }) => {
  const toast = useToast();

  const [country, setCountry] = useState('');
  const [countryTimezone, setCountryTimezone] = useState('');

  const allCountries = countriesWithTimezone.map((ctz) => {
    return {
      label: ctz.name,
      value: ctz.name,
      code: ctz.country_code,
    };
  });

  const selectedCountryTimezones = (value?: string) => {
    const cc = value || country;

    return countriesWithTimezone
      .filter((ctz) => {
        return ctz?.name === cc;
      })[0]
      ?.timezones?.map((tz) => {
        return {
          label: tz,
          value: tz,
        };
      });
  };

  const addSlotHandler = async () => {
    const slotId = uuid.v4();

    const allTimeSlots = (await getData({ key: 'slots' })) || [];

    const updatedTimeSlots = [
      ...allTimeSlots,
      {
        id: slotId,
        country,
        country_code: countriesWithTimezone.find((ctz) => ctz.name === country)
          ?.country_code,
        timeZone: countryTimezone,
      },
    ];

    await storeData({
      key: 'slots',
      value: updatedTimeSlots,
    });

    queryClient.invalidateQueries();
    toast(`${country} time slot created successfully`);
    onCancel();
  };

  return (
    <>
      <Text
        style={{
          color: colors.primary.main,
          fontFamily: 'nunito-black',
          fontSize: 20,
        }}
      >
        New Slot
      </Text>

      <>
        <View
          style={{
            marginTop: 24,
          }}
        >
          <CustomLabel>Choose a country</CustomLabel>

          <CustomSelect
            onValueChange={(itemValue) => {
              setCountry(itemValue);
              setCountryTimezone(
                selectedCountryTimezones(itemValue)[0]?.value || ''
              );
            }}
            value={country}
            placeholder='Search countries...'
            options={allCountries}
          />
        </View>

        <View
          style={{
            marginTop: 24,
          }}
        >
          <CustomLabel>Select country timezone</CustomLabel>
          <CustomSelect
            onValueChange={(itemValue) => {
              setCountryTimezone(itemValue);
            }}
            value={countryTimezone}
            placeholder='Select country timezone'
            options={selectedCountryTimezones()}
          />
        </View>

        {/* footer */}
        <View>
          <Button
            onPress={addSlotHandler}
            borderRadius={borderRadius['extra-small']}
            bgColor={
              countryTimezone ? colors.primary.main : colors.primary.disabled
            }
            padding={14}
            height={46}
            marginTop={32}
            disabled={!countryTimezone}
          >
            <Text
              style={{
                color: 'white',
                fontFamily: 'nunito-extrabold',
                textAlign: 'center',
                fontSize: 14,
              }}
            >
              Add new slot
            </Text>
          </Button>
        </View>
      </>
    </>
  );
};
