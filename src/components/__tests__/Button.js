import React from 'react';
import renderer from 'react-test-renderer';

// components
import Button from '../Button';
import {ButtonThemes} from '../../themes';

test('Button primary renders correctly', () => {
    const tree = renderer
        .create(<Button onPress={() => null} theme={ButtonThemes.primary}>Button primary</Button>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('Button secondary renders correctly', () => {
    const tree = renderer
        .create(<Button onPress={() => null} theme={{}}>Button secondary</Button>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});