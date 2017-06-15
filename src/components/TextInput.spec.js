import React from 'react';
import {shallow} from 'enzyme';
import TextInput from './TextInput';

describe('<TextInput/>', () => {
  it('should be an input element', () => {
    const props = {
      name: 'anything',
      onChange: jest.fn(),
      placeholder: 'Type Here',
      value: 333
    };
    const thing = (<TextInput {...props}/>);

    const wrapper = shallow(thing);

    const actual = wrapper.type();
    const expected = 'input';

    expect(actual).toEqual(expected);
  });
});
