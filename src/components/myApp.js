import React from "react";
import Grid from "./grid";
import { DigitSelectionContainer } from "./digitSelectionContainer";
import { Table, Row, Cell } from "react-native-table-component";
import { View } from "react-native";

export default function MyApp() {
  return (
    <View
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <View style={{ flex: 3 }}>
        <Grid />
      </View>
      <View style={{ flex: 1 }}>
        <DigitSelectionContainer />
      </View>
      <View style={{ flex: 2 }} />
    </View>
  );
}
