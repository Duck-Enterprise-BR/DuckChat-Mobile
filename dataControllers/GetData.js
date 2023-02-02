import AsyncStorage from '@react-native-async-storage/async-storage';
 
async function GetData(key){
    var data = "Null";
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            console.log("GET: " + value);
            //data = value;
        }

    } catch (error) {
        console.log("Get Data error: " + error);
    }

    return data;
}

export default GetData;
