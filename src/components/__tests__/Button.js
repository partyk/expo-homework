import React from 'react';
import renderer from 'react-test-renderer';

// components
import Button from '../Button';

test('Button secondary renders correctly', () => {
    const tree = renderer
        .create(<Button onPress={() => null} theme={{}}>Button secondary</Button>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});