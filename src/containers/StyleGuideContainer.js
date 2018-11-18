// @flow
import React from 'react'
import {Text, SafeAreaView, StyleSheet} from 'react-native'

// components
import {Section, Button} from '../components'
import {Colors, ButtonThemes} from '../themes'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});

export default class StyleGuideContainer extends React.PureComponent<Props> {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#F00',
        },
        headerTintColor: '#fff',
        title: "Style guide",
    }

    onButtonPress = (text) => {
        alert(text);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Section>
                    <Button
                        theme={ButtonThemes.primary}
                        onPress={() => {
                            this.onButtonPress('Primary button')
                        }}
                    >
                        Primary button
                    </Button>
                    <Button
                        theme={{}}
                        onPress={() => {
                            this.onButtonPress('Secondary button')
                        }}
                    >
                        Secondary button
                    </Button>
                </Section>
            </SafeAreaView>
        )
    }
}