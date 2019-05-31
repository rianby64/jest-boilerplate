
import * as React from 'react';
import { shallow } from 'enzyme';
import { Concat } from './Concat';

test('Concat exists', (): void => {
    const el = (<Concat str=""></Concat>);
    const sh = shallow(el);
    expect(sh).toMatchSnapshot();
});

test('Concat accepts one parameter', (): void => {
    const str = '2';
    const el = (<Concat str={str}></Concat>);
    const sh = shallow(el);
    expect(sh.text()).toBe(str);
});
