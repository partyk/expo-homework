// @flow
import React from "react"

// components
import { SafeAreaView, Section, Button } from "../components"
// data
import { getCategories } from "../Api"

export default class HomeWork extends React.PureComponent<Props> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#F00",
    },
    headerTintColor: "#fff",
    // headerTitle: <LogoTitle />
    headerTitle: "Home work",
  }

  state = {
    listCategories: [],
  }

  componentDidMount(): void {
    this._getCategories()
  }

  _getCategories = ()=> {
    getCategories().then((result => {
      this.setState({
        listCategories: result.data
      });
    }));
  }

  render() {
    const { listCategories } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <Section>
          <Button
            onPress={() => {
              navigation.navigate("CategoriesList")
            }}
            theme={{}}
          >Home work</Button>
        </Section>
      </SafeAreaView>
    )
  }
};