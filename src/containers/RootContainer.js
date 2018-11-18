// @flow
import React from 'react'
import {Image, StyleSheet} from 'react-native'

// components
import {SafeAreaView, Section, LogoTitle, Button} from '../components'
import {Colors, ButtonThemes} from '../themes'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});

export default class RootContainer extends React.PureComponent<Props> {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#F00',
        },
        headerTintColor: '#fff',
        // headerTitle: <LogoTitle />
        headerTitle: 'Home',
    };

    render() {
        return (
            <SafeAreaView>
                <Section>
                    <Button
                        onPress={() => {
                            this.props.navigation.navigate("StyleGuide")
                        }}
                        theme={ButtonThemes.primary}
                    >Style guide</Button>
                </Section>
            </SafeAreaView>
        )
    }
}
