import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAVORITE_IDS_KEY } from '../utils/constants';

export async function getFavoriteIds(): Promise<number[] | null>  {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_IDS_KEY);

    return response !== null ? JSON.parse(response) : null;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export async function saveFavoriteId (id: number) {
  try {
    // // Obtener el nombre del archivo de la imagen
    // const fileName = object.image.split('/').pop();
    // // Obtener la ruta del directorio de documentos
    // const dirPath = RNFS.DocumentDirectoryPath;
    // // Construir la ruta completa del archivo de la imagen
    // const filePath = `${dirPath}/${fileName}`;
    // // Descargar la imagen desde la url y guardarla en el archivo
    // await RNFS.downloadFile({ fromUrl: object.image, toFile: filePath }).promise;
    // // Actualizar el campo de imagen del objeto con la ruta del archivo
    // object.image = filePath;


    // Obtener el arreglo de objetos guardados previamente o crear uno vacío
    // const storedIds = JSON.parse(await AsyncStorage.getItem('FAVORITE_IDS')) || [];
    // Añadir el nuevo objeto al arreglo
    const storedIds = await getFavoriteIds() || []; 
    const wasFound = storedIds.find(storedId => storedId === id) !== undefined;

    // console.log("storedIds: ", storedIds);
    if (!wasFound) {
      storedIds.push(id);
      // console.log("storedIds: ", storedIds);
      

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