import React, { Component } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./src/reducers";
import MyApp from "./src/components/myApp";

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View   style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
      < MyApp/>
      </View>
    </Provider>
  );
}
