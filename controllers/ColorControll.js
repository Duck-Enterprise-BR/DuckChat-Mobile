import React from "react";

const ColorControll = () => {
    const [accentColor, changeAccentColor] = React.useState("");
    
    function AccentColor(){
        return accentColor;
    }

    function ChangeAccentColor(color){
        changeAccentColor(color);
    }   
}

export default ColorControll;