import Display from "./Display";
import renderer from 'react-test-renderer'
import React from 'react';


test('display custom text', () => {
    let component = renderer.create(
        <Display displayText={'test'}></Display>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});