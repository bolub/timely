import { borderRadius, colors } from '@/theme/theme';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { CustomSelect } from '@/components/ui/CustomSelect';
import { CustomLabel } from '@/components/ui/CustomLabel';
import countriesWithTimezone from '@/data/countriesWithTimezone.json';
import uuid from 'react-native-uuid';
import { getData, storeData } from '@/api/data';
import { queryClient } from '@/app/_layout';

export const NewTimeSlot = ({ onCancel }: { onCancel: () => void }) => {
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

    queryClient.invalidateQueries(['slots']);
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
          <Pressable
            onPress={addSlotHandler}
            style={{
              justifyContent: 'center',
              borderRadius: borderRadius['extra-small'],
              backgroundColor: countryTimezone
                ? colors.primary.main
                : 'rgba(16, 185, 129, 0.4)',
              padding: 14,
              height: 46,
              marginTop: 32,
            }}
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
          </Pressable>

          <Pressable
            onPress={onCancel}
            style={{
              justifyContent: 'center',
              borderRadius: borderRadius['extra-small'],
              backgroundColor: 'white',
              padding: 14,
              height: 46,
              marginTop: 6,
              borderWidth: 1,
              borderColor: colors.primary.main,
            }}
          >
            <Text
              style={{
                color: colors.primary.main,
                fontFamily: 'nunito-extrabold',
                textAlign: 'center',
                fontSize: 14,
              }}
            >
              Cancel
            </Text>
          </Pressable>
        </View>
      </>
    </>
  );
};
