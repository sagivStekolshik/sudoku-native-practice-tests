// import dependencies
import React from 'react'
import { View } from "react-native";
import { render, fireEvent } from '@testing-library/react-native'
import '@testing-library/jest-dom/extend-expect'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from "../../reducers";

const store = createStore(rootReducer);

import MyApp from '../../components/MyApp'

test('can render with redux with defaults', () => {
    const { getByText} = render(
        <Provider store={store}>
        <View   style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
        < MyApp/>
        </View>
      </Provider>
    )
  
    //expect(getByText('ClickMe!')).toBeInTheDocument()
    fireEvent.press(getByText('Valid'))
    expect(getByText('Not Valid')).toBeTruthy()
})