// @flow
import React from 'react'

// components
import {SafeAreaView, Section, Button} from '../components'
import {ButtonThemes} from '../themes'

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
            <SafeAreaView>
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