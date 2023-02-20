import { View, Text, Image } from "react-native";
import ProfileStyle from "../../styles/main/ProfileStyle";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DataKeys from "../../keys/DataKeys";
import Api from "../../api/Api";
import axios from "axios";
import React from "react";
import { useFonts } from 'expo-font';

const ProfileImage = { uri: 'https://img.olhardigital.com.br/wp-content/uploads/2021/05/Dwayne-The-Rock.png' }

const Profile = () => {
    const [userData, changeUserData] = React.useState(Object);
    const [fontsLoaded] = useFonts({
        RobotoMedium: require("../../assets/fonts/roboto-mono/RobotoMono-Medium.ttf")
    });

    useEffect(() => {
        GetData();
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    function GetPass(response) {
        changeUserData(response.data);
    }

    function GetError(error) {
        console.log("GET ERROR: " + error.response);
    }

    async function GetData() {
        try {
            const value = await AsyncStorage.getItem(DataKeys.USER_LOCAL_DATA);
            const data = JSON.parse(value);
            const user_data = JSON.parse(data);
            const token = user_data.accessToken;

            const config = axios.create = {
                method: 'get',
                url: '/user/my-profile',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }

            await Api(config)
                .then((response) => { GetPass(response) })
                .catch((error) => { console.log(error) })
        }
        catch (error) {
            console.log("Get Data error: " + error);
        }
    }

/*     const Data = {
        name: userData.name,
        username: "@" + userData.username,
        email: userData.email,
        avatar: userData.avatar,
        id: userData.id
    } */

    const Data = {
        name: "Name test",
        username: "@" + "User test",
        email: 'email@gmail.com',
        avatar: null,
        id: "aaa"
    }

    return (
        <View style={ProfileStyle.base}>
            <View style={ProfileStyle.header}>
                <Image
                    style={ProfileStyle.profileImagem}
                    source={ProfileImage}
                />
                <View>
                    <Text style={ProfileStyle.name}>
                        {Data.name}
                    </Text>
                    <Text style={ProfileStyle.username}>
                        {Data.username}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Profile;