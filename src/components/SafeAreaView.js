// @flow
import React from 'react';
import {SafeAreaView as SafeAreaContainer, StyleSheet} from 'react-native';
import {Colors} from '../themes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});

export default class SafeAreaView extends React.PureComponent<Props> {
    render() {
        return (
            <SafeAreaContainer style={styles.container}>
                {this.props.children}
            </SafeAreaContainer>
        )
    }
};