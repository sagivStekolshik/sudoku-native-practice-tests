import React from "react"       ;
import { TextInput } from "react-native";
import { View } from "react-native";

export function MyCell({ digit, row, col, dispatch }) {
    return (
        <View style={{
            flex: 1, flexDirection: "column", borderStyle: "solid",borderWidth:10,
            justifyContent: "center", borderColor: "#000000"
        }}>
    <TextInput  testID={row+':'+col} value={digit}
                style={{ flex: 1, fontSize:40,  width: 50, height: 50, justifyContent: "center" }}
                
                onChangeText={data => {
                    dispatch({
                        type:   "UPDATE_CELL_DIGIT",
                        digit: data,
                        cellRow: row,
                        cellCol: col
                    })
                }}></TextInput>
            </View>
  );
}
