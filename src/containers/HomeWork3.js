// @flow
import React from 'react'
import { Text, FlatList } from "react-native";

// components
import {SafeAreaView, Section, Button} from '../components';

export default class HomeWork3 extends React.PureComponent<Props> {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#F00',
        },
        headerTintColor: '#fff',
        // headerTitle: <LogoTitle />
        headerTitle: 'Home work FlatList',
    };

    render() {
        return (
            <SafeAreaView>
                <Section>
                    <FlatList
                        data={[{key: 'a'}, {key: 'b'}]}
                        renderItem={({item}) => <Text>{item.key}</Text>}
                    />
                </Section>
            </SafeAreaView>
        )
    }
};