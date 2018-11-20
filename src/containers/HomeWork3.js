// @flow
import React from 'react'
import {Text, FlatList} from "react-native";
import {CategoryModel} from '../model';

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

    state = {
        listCategories : [{}]
    };

    componentWillMount() {
        const data = CategoryModel.getCategories();
        data.then((result) => {
            this.setState({
                listCategories: result.data
            });
        });
    }

    _keyExtractor = (item, index) => item.id;

    render() {
        const { listCategories } = this.state;
        return (
            <SafeAreaView>
                <Section>
                    <FlatList
                        data={listCategories}
                        renderItem={({item}) => <Button onPress={() => { alert(`Call: ${item.name}`); }} theme={{}}>{item.name}</Button>}
                        // renderItem={({item}) => <Text key={item.id}>{item.name}</Text>}
                        keyExtractor={this._keyExtractor}
                    />
                </Section>
            </SafeAreaView>
        )
    }
};