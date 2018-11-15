// @flow
import React from 'react'
import { Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'

// components
import { RoundedButton } from '../components'
import { Colors } from '../themes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
})

const beers = ['aaa', 'bbb', 'ccc'];

export default class RootContainer extends React.PureComponent<null> {
  state = {
    count: 0,
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          {/*{beers.map((beer) => (*/}
              {/*<Text>{beer}</Text>*/}
          {/*))}*/}
          <Text>{this.state.count}</Text>

          <FlatList
            data={beers}
            renderItem={({item}) => <Text>{item}</Text>}
            keyExtractor={item => item}
          />

        <Text>Text!</Text>
        <RoundedButton onPress={() => {
          this.setState({
              count: this.state.count+1
          })
        }}>Button text</RoundedButton>
      </SafeAreaView>
    )
  }
}
