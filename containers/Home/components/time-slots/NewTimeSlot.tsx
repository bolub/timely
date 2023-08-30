import { borderRadius, colors } from '@/theme/theme';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CustomSelect } from '@/components/ui/CustomSelect';
import { CustomLabel } from '@/components/ui/CustomLabel';
import countriesWithTimezone from '@/data/countriesWithTimezone.json';

export const NewTimeSlot = ({ onCancel }: { onCancel: () => void }) => {
  const [country, setCountry] = useState('');
  const [countryTimezone, setCountryTimezone] = useState('');

  const allCountries = countriesWithTimezone.map((ctz) => {
    return {
      label: ctz.name,
      value: ctz.name,
    };
  });

  const selectedCountryTimezones = countriesWithTimezone
    .filter((ctz) => {
      return ctz.name === country;
    })[0]
    ?.timezones?.map((tz) => {
      return {
        label: tz,
        value: tz,
      };
    });

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
            setValue={setCountry}
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
            setValue={setCountryTimezone}
            value={countryTimezone}
            placeholder='Select country timezone'
            options={selectedCountryTimezones}
          />
        </View>

        {/* footer */}
        <View>
          <Pressable
            style={{
              justifyContent: 'center',
              borderRadius: borderRadius['extra-small'],
              backgroundColor: colors.primary.main,
              padding: 14,
              height: 46,
              marginTop: 32,
            }}
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

const styles = StyleSheet.create({});
