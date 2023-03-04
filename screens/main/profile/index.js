import { View, Text, Image } from "react-native";
import ProfileStyle from "./style/style";
import { useEffect } from "react";
import React from "react";

const ProfileImage = { uri: 'https://img.olhardigital.com.br/wp-content/uploads/2021/05/Dwayne-The-Rock.png' }

const Profile = () => {
    const [userData, changeUserData] = React.useState(Object);

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