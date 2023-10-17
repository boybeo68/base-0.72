import { MMKV } from 'react-native-mmkv';

const storageMap: { [key: string]: MMKV } = {};
export const getStorage = (key = 'app', encryptionKey?: string) => {
  if (storageMap[key]) {
    return storageMap[key];
  }
  storageMap[key] = new MMKV({
    id: `${key}-storage`,
    encryptionKey: encryptionKey || process.env.ENCRYPTION_KEY,
  });
  return storageMap[key];
};

export const appStorage = getStorage();
