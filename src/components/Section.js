import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    section: {
        paddingTop: 10,
        paddingHorizontal: 10
    }
});

export default class Section extends React.PureComponent<Props> {
    render() {
        const {children} = this.props;
        return (
            <View style={styles.section}>{children}</View>
        )
    }
};