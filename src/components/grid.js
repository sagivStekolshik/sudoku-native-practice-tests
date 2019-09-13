import React from "react";
import { Subgrid } from "./subgrid";
import { View } from "react-native";

export default function Grid() {
  return (
    <View
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Subgrid subgridNumber={0} />
        <Subgrid subgridNumber={1} />
      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Subgrid subgridNumber={2} />
        <Subgrid subgridNumber={3} />
      </View>
    </View>
  );
}
