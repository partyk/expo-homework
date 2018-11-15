// @flow
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

// theme
import { Colors, Metrics } from '../themes';

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        alignItems: 'center',
        paddingTop: 35,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 15,
        backgroundColor:'#F00'
    }
});

export default class Header extends React.PureComponent<Props> {

    constructor(props) {
        super(props);

        this.state = {
            data : [
                {
                    name: 'iDNES.cz',
                    logo: 'https://1gr.cz/m/o/logo-idnes-white.png',
                    style: {
                        backgroundColor: '#F00',
                        width: 100,
                        height: 23
                    },
                },
                {
                    name: 'Lidovky.cz',
                    logo: 'https://1gr.cz/o/lidovky_ln5/m/ln-logo173.png',
                    style: {
                        width: 137,
                        height: 23
                    }
                }
            ]
        };
    }

    _onPressLogo = () => {
        alert(`${this.state.data[this.props.idnes ? 0 : 1].name} – s námi víte víc`);
    };

    _styleHeader = () => {
        return styles.wrapper;
    };

    render() {
        return (
            <View style={[styles.wrapper,{backgroundColor:"red"}]}>
                <TouchableHighlight onPress={this._onPressLogo}>
                    <Image
                        source={{ uri: this.state.data[this.props.idnes ? 0 : 1].logo }}
                        style={this.state.data[this.props.idnes ? 0 : 1].style}
                    />
                </TouchableHighlight>
            </View>
        )
    }
}
