// @flow
import React from "react"
import { FlatList, StyleSheet } from "react-native"

// components
import { SafeAreaView, Button } from "../components"

// style
import {Section as StyleSection} from "../themes"

// data
import { getCategories } from "../Api"

const styles = StyleSheet.create({
  section: StyleSection.primary
});

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
        <FlatList
          data={listCategories}
          style={styles.section}
          renderItem={({ item }) => <Button onPress={() => {
            console.log(item);
            navigation.navigate("CategoryDetail", {
              categoryId: item.id,
              name: item.name
            });
          }}
          theme={{}}
          >{item.name}</Button>}
          // renderItem={({item}) => <Text key={item.id}>{item.name}</Text>}
          keyExtractor={this._keyExtractor}
        />
      </SafeAreaView>
    )
  }
};