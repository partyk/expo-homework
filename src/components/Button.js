// @flow
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ButtonThemes from '../themes/ButtonThemes';

const styles = StyleSheet.create({
    // default button is secondary
    button: ButtonThemes.secondary.button,
    text: ButtonThemes.secondary.text
});

type Props = {|
    +onPress: () => void,
    +children: string,
    +theme: string,
|}

export default class Button extends React.PureComponent<Props> {
    render() {
        const { children, onPress, theme } = this.props;
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[styles.button, theme.button]}
            >
                <Text style={[styles.text, theme.text]}>{children}</Text>
            </TouchableOpacity>
        )
    }
}