// @flow
import React from 'react'
import { Text, Button, SafeAreaView, StyleSheet } from 'react-native'

// components
import { Header } from '../components'
import { Colors } from '../themes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default class RootContainer extends React.PureComponent<null> {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    name: 'iDNES.cz',
                    logo: 'https://1gr.cz/m/o/logo-idnes-white.png',
                    backgroundColor: '#F00'
                },
                {
                    name: 'Lidovky.cz',
                    logo: 'https://1gr.cz/o/lidovky_ln5/m/ln-logo173.png',
                    backgroundColor: '#FFF'
                }

            ],
            website: 0
        };
    }

    _getData() {
        return this.website ? this.logoLidovky : this.logoIdnes;
    }

    _changeHeader() {
        console.log(this.state);
        alert('xxx');
        /*this.setState({
            website: !this.state.website
        });*/
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header logo='https://1gr.cz/m/o/logo-idnes-white.png' />
                <Button
                    title={`Přepni záhlaví na ${this.state.website ? "iDnes.cz" : "Lidovky.cz"} `}
                    onPress={this._changeHeader}
                />
                <Text>Show header: {this.state.website ? "Lidovky.cz" : "iDnes.cz"}</Text>
            </SafeAreaView>
        )
    }
}
