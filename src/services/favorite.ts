import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAVORITE_IDS_KEY } from '../utils/constants';

export async function checkIfFavoriteId(id: number): Promise<boolean>  {
  try {
    //This is temporary, late i'll be using sqlite.
    // const response = await AsyncStorage.getItem(FAVORITE_IDS_KEY);
    // const data = JSON.parse(response);
    const data = await getFavoriteIds();
    // const data = 
    const wasFound = data.find(iter => iter === id) !== undefined;

    return wasFound;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export async function getFavoriteIds(): Promise<number[]>  {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_IDS_KEY);

    return response !== null ? JSON.parse(response) : [];
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export async function saveFavoriteId (id: number) {
  try {
    const storedIds = await getFavoriteIds() || []; 
    const wasFound = storedIds.find(storedId => storedId === id) !== undefined;

    if (!wasFound) {
      storedIds.push(id);

      await AsyncStorage.setItem(FAVORITE_IDS_KEY, JSON.stringify(storedIds));
    }
    
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export async function removeFavoriteId(id: number) {
  try {
    const data = await getFavoriteIds();
    const dataUpdated = data.filter(iter => iter !== id);

    if (data.length > dataUpdated.length) {
      await AsyncStorage.setItem(FAVORITE_IDS_KEY, JSON.stringify(dataUpdated));  
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export async function removeFavoriteIds() {
  try {
    // const data = await getFavoriteIds();
    // const dataUpdated = data.filter(iter => iter !== id);

    // if (data.length > dataUpdated.length) {
    await AsyncStorage.setItem(FAVORITE_IDS_KEY, JSON.stringify([]));  
    // }
  } catch (e) {
    console.error(e);
    throw e;
  }
};