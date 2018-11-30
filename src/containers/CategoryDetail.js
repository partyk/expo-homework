// @flow
import React from "react"
import { Text, FlatList } from "react-native"

// components
import { SafeAreaView, Section } from "../components"
// data
import { getCategoryId, getAds } from "../Api";

export default class CategoryDetail extends React.PureComponent<Props> {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: params ? params.name : 'Detail',
            headerStyle: {
                backgroundColor: "#F00",
            },
            headerTintColor: "#fff",
        };
    };

  state = {
    listAds: [],
  }

  componentDidMount () {
    //this._getTitle();
    this._getData();
  }

  // smazat
  _getTitle = () => {
    this.props.navigation.setParams({ headerTitle: this.props.navigation.getParam("name", "") });
  }

  _getData = () => {
    getCategoryId(this.props.navigation.getParam("id", 0)).then(result => {
      console.log(result);
    });
    getAds(this.props.navigation.getParam("id", 0)).then(result => {
      this.setState({
        listAds: result.data
      })
      console.log(result);
    });
  }

  _keyExtractor = (item) => item.id;

  render() {
    const { listAds } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <Section>
          <Text>ID: {navigation.getParam("id", 0)}</Text>
          <FlatList
            data={listAds}
            keyExtractor={this._keyExtractor}
            renderItem={({item}) => {
              return (
                <Text>{item.title}</Text>
              )
            }}
          />
        </Section>
      </SafeAreaView>
    )
  }
};