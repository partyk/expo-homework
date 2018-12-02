import React from 'react';
import {StyleSheet, View} from 'react-native';

// styles
import {Section as StyleSection} from "../themes";

const styles = StyleSheet.create({
    section: StyleSection.primary
});

export default class Section extends React.PureComponent<Props> {
    render() {
        const {children} = this.props;
        return (
            <View style={styles.section}>{children}</View>
        )
    }
};