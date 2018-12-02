// @flow
import React from "react"
import { FlatList, Text } from "react-native"
// redux
import { connect } from "react-redux"
import { onToggleFavorite } from "../redux/CategoryDetailRedux";

// components
import { Button, SafeAreaView, Section } from "../components"

// data
import { getAds } from "../Api"

class CategoryDetail extends React.PureComponent<Props> {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state

    return {
      title: params ? params.name : "Detail",
      headerStyle: {
        backgroundColor: "#F00",
      },
      headerTintColor: "#fff",
    }
  }

  state = {
    listAds: [],
  }

  componentDidMount() {
    this._getData()
  }

  _getData = () => {
    getAds(this.props.navigation.getParam("categoryId", 0)).then(result => {
      this.setState({
        listAds: result.data,
      })
      // console.log(result)
    })
  }

  _keyExtractor = (item) => item.id

  render() {
    const { listAds } = this.state
    const { navigation, onToggleFavorite, isMovieFavorite } = this.props
    const { categoryId } = navigation.state.params;
    return (
      <SafeAreaView>
        <Section>
          <Text>ID: {categoryId}</Text>
          <Button
            onPress={() => {
              onToggleFavorite(categoryId);
            }}
            theme={{}}
          >
            {isMovieFavorite ? "Odebrat z oblíbených" : "Přidat do oblíbených"}
          </Button>
        </Section>
        <FlatList
          data={listAds}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => {
            return (
              <Text>{item.title}</Text>
            )
          }}
        />
      </SafeAreaView>
    )
  }
};

const mapDispatchToProps = {
  onToggleFavorite,
}

const mapStateToProps = (state, props) => {
  const { categoryId } = props.navigation.state.params
  return {
    isMovieFavorite: state.categoryDetail.favorites.indexOf(categoryId) > -1,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryDetail);