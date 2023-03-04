import axios from "axios";

const Api = axios.create({
    baseURL: "http://192.168.1.3:3000"
});

function Get(){

}

export const Post = () => {
    const data = {
        name: "name test",
        token: "token test",
        username: "usernametest",
        email: "emailtest"
    }
    
    return data;
}