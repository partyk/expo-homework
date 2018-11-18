// @flow
import React from 'react'

// components
import {SafeAreaView, Section, LogoTitle, Button} from '../components'
import {ButtonThemes} from '../themes'

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
                    <Button
                        onPress={() => {
                            this.props.navigation.navigate("HomeWork3")
                        }}
                        theme={{}}
                    >Home work (FlatList)</Button>
                </Section>
            </SafeAreaView>
        )
    }
}
