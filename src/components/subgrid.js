import React from "react";
import { CellContainer } from "./cellContainer";
import { View } from "react-native";

export function Subgrid(props) {
  return (
    <View
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <CellContainer subgridNumber={props.subgridNumber} cellNumber={0} />
        <CellContainer subgridNumber={props.subgridNumber} cellNumber={1} />
      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <CellContainer subgridNumber={props.subgridNumber} cellNumber={2} />
        <CellContainer subgridNumber={props.subgridNumber} cellNumber={3} />
      </View>
    </View>
  );
}
