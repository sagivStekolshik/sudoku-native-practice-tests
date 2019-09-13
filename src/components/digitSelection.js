import React from "react";
import {   View, Button  } from 'react-native';

function getButtonText(validity) {
    return validity? "Valid":"Not Valid"
}

export function DigitSelection({ validity, dispatch }) {
    return  <View style={{
        flex: 0.5, flexDirection: "column", 
        justifyContent: "center", borderColor: "#000000"
    }}>
        <View style={{ flex: 1 }}/>
    <Button title={getButtonText(validity)}
        style={{ width: 50, height: 50, backgroundColor: "skyblue" }}
            onPress={() => dispatch({ type: 'CHECK_VALIDITY' })} />
        <View style={{ flex: 1 }}/>
        </View>
}
