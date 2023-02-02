import AsyncStorage from "@react-native-async-storage/async-storage";

const StoreData = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, data);
    } catch (error) {
        console.log("Store Data error: " + error);
    }
}


export default StoreData;