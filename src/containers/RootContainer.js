// @flow
import React from 'react'
import {Text, SafeAreaView, StyleSheet} from 'react-native'

// components
import {Button} from '../components'
import {Colors, ButtonThemes} from '../themes'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});

export default class RootContainer extends React.PureComponent<null> {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Button
                    onPress={() => null}
                    theme={ButtonThemes.primary}
                >Primary button</Button>
                <Button
                    onPress={() => null}
                    theme={{}}
                >Secondary button</Button>
            </SafeAreaView>
        )
    }
}
