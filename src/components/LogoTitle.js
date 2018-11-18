import React from 'react';
import { Image } from 'react-native';

export default class LogoTitle extends React.PureComponent<Props> {
    render() {
        return (
            <Image
                source={require('../../assets/logo-idnes-white.png')}
                style={{width: 105, height: 24}}
            />
        );
    }
}