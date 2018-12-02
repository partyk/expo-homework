import React from 'react';
import {StyleSheet, View} from 'react-native';

// styles
import {SectionThemes} from "../themes";

const styles = StyleSheet.create({
    section: SectionThemes.primary
});

export default class Section extends React.PureComponent<Props> {
    render() {
        const {children} = this.props;
        return (
            <View style={styles.section}>{children}</View>
        )
    }
};