import React from "react"       ;
import { TextInput } from "react-native";
import { View } from "react-native";

export function MyCell({ digit, row, col, dispatch }) {
    return (
        <View style={{
            flex: 1, flexDirection: "column", borderStyle: "solid",borderWidth:10,
            justifyContent: "center", borderColor: "#000000"
        }}>
    <TextInput
                style={{ flex: 1, fontSize:40,  width: 50, height: 50, justifyContent: "center" }}
                
                onChange={data => {
                    console.log(data.nativeEvent.text)
                    dispatch({
                        type:   "UPDATE_CELL_DIGIT",
                        digit: data.nativeEvent.text,
                        cellRow: row,
                        cellCol: col
                    })
                }}></TextInput>
            </View>
  );
}
