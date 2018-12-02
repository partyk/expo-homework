// @flow
import React from "react"
import {View, Text} from "react-native"

export default class HomeWork extends React.PureComponent<Props> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#F00",
    },
    headerTintColor: "#fff",
    // headerTitle: <LogoTitle />
    headerTitle: "Filtr",
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Tady bude filtr</Text>
      </View>
    );
  }
}