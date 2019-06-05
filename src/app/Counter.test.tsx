
import * as React from 'react';
import { mount } from 'enzyme';
import { Counter } from './Counter';

test('Counter exists', (): void => {
    const el = (<Counter v={0} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('Counter has a button to increase the counter', (): void => {
    const el = (<Counter v={0} />);
    const sh = mount(el);
    expect(sh.find('button').text()).toBe('Increase');
});

test('Counter has an span to show the counter', (): void => {
    const el = (<Counter v={0} />);
    const sh = mount(el);
    expect(sh.find('span').text()).toBe('0');
});

test('If click on button then counter increases in one', (): void => {
    const el = (<Counter v={0} />);
    const sh = mount(el);
    sh.find('button').simulate('click');
    expect(sh.find('span').text()).toBe('1');
});

test('If click on button then counter increases in one begining from given value', (): void => {
    const el = (<Counter v={10} />);
    const sh = mount(el);
    sh.find('button').simulate('click');
    expect(sh.find('span').text()).toBe('11');
});
