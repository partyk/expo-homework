// @flow
import React from "react"
import { FlatList } from "react-native"

// components
import { SafeAreaView, Section, Button } from "../components"
// data
import { getCategories } from "../Api"

export default class CategoriesList extends React.PureComponent<Props> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#F00",
    },
    headerTintColor: "#fff",
    // headerTitle: <LogoTitle />
    headerTitle: "Výpis kategorie",
  }

  state = {
    listCategories: [],
  }

  componentDidMount(): void {
    this._getCategories()
  }

  _getCategories = () => {
    getCategories().then((result => {
      this.setState({
        listCategories: result.data
      });
    }));
  }

  _keyExtractor = (item) => item.id

  render() {
    const { listCategories } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <Section>
          <FlatList
            data={listCategories}
            renderItem={({ item }) => <Button onPress={() => {
              console.log(item);
              navigation.navigate("CategoryDetail", {
                id: item.id,
                name: item.name
              });
            }} theme={{}}>{item.name}</Button>}
            // renderItem={({item}) => <Text key={item.id}>{item.name}</Text>}
            keyExtractor={this._keyExtractor}
          />
        </Section>
      </SafeAreaView>
    )
  }
};