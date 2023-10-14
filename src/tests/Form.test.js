import React from 'react';
import Form from '../components/Form.js';
import {mount} from 'enzyme';

test('Form appears on button click', () => {
    const component = mount(
        <Form submitForm="" />
    );

    expect(component.find('form').hasClass('hide')).toEqual(true);
    component.find('#toggle').simulate('click');
    expect(component.find('form').hasClass('hide')).toEqual(false);
});