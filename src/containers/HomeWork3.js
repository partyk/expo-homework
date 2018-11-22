// @flow
import React from 'react'
import {Text, FlatList} from "react-native";
import {loadMovies} from '../model/Api';

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
        movies: []
    };

    componentDidMount() {
        loadMovies().then(response => {
            this.setState({
                movies: response.data.results
            })
        })
    }


    _keyExtractor = (item, index) => item.id;

    render() {
        const {movies} = this.state;
        return (
            <SafeAreaView>
                <Section>
                    <FlatList
                        data={movies}
                        renderItem={({item}) => <Text key={item.id}>{item.title}</Text>}
                        keyExtractor={this._keyExtractor}
                    />
                </Section>
            </SafeAreaView>
        )
    }
};