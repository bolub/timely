import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async ({
  key,
  value,
}: {
  key: string;
  value: any;
}) => {
  try {
    if (typeof value !== 'string') {
      return await AsyncStorage.setItem(key, JSON.stringify(value));
    } else {
      return await AsyncStorage.setItem(key, value);
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getData = async ({ key }: { key: string }) => {
  try {
    const data = await AsyncStorage.getItem(key);

    if (data !== null) {
      return JSON.parse(data);
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};
