import { View, Text, Image } from "react-native";
import ProfileStyle from "../../style/main/ProfileStyle";

const ProfileImage = { uri: 'https://st2.depositphotos.com/1036149/5381/i/450/depositphotos_53811511-stock-photo-duck-with-sunglasses.jpg' }

const Profile = () => {

    const Data = {
        name: "Pato"
    }

    return (
        <View style={ProfileStyle.base}>
            <View style={ProfileStyle.profileImageBase}>
                <Image
                    style={ProfileStyle.profileImagem}
                    source={ProfileImage}
                />
            </View>

            <View style={ProfileStyle.namebase}>
                <Text  style={ProfileStyle.name} >{Data.name}</Text>
            </View>
        </View>
    )
}

export default Profile;