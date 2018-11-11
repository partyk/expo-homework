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
    },
    logo: {
        width:100,
        height:23
    }
});

export default class Header extends React.PureComponent<Props> {

    state = {
        isShowingText: true
    }

    _onPressLogo() {
        alert('iDNES.cz – s námi víte víc');
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <TouchableHighlight onPress={this._onPressLogo}>
                    <Image source={{ uri: this.props.logo }} style={styles.logo} />
                </TouchableHighlight>
            </View>
        )
    }
}
