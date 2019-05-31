
import * as React from 'react';
import { mount } from 'enzyme';
import { Summ } from './Summ';

test('Summ exists', (): void => {
    const el = (<Summ str=""></Summ>);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('Summ accepts one parameter', (): void => {
    const str = '2';
    const el = (<Summ str={str}></Summ>);
    const sh = mount(el);
    expect(sh.text()).toBe(str);
    expect(sh).toMatchSnapshot();
});

test('Summ the parent with its soley child', (): void => {
    const str1 = '2';
    const str2 = '6';
    const expected = (Number(str1) + Number(str2)).toString();
    const el = (
        <Summ str={str1}>
            <Summ str={str2}></Summ>
        </Summ>
    );
    const sh = mount(el);
    expect(sh.text()).toBe(expected);
    expect(sh).toMatchSnapshot();
});

test('Summ te parent with its two nested children', (): void => {
    const str1 = '2';
    const str2 = '6';
    const str3 = '3';
    const expected = (Number(str1) + Number(str2) + Number(str3)).toString();
    const el = (
        <Summ str={str1}>
            <Summ str={str2}>
                <Summ str={str3}></Summ>
            </Summ>
        </Summ>
    );
    const sh = mount(el);
    expect(sh.text()).toBe(expected);
    expect(sh).toMatchSnapshot();
});

test('Summ the parent with its two children separately', (): void => {
    const str1 = '1';
    const str2 = '2';
    const str3 = '3';
    const expected = '34';
    const el = (
        <Summ str={str1}>
            <Summ str={str2}></Summ>
            <Summ str={str3}></Summ>
        </Summ>
    );
    const sh = mount(el);
    expect(sh.text()).toBe(expected);
    expect(sh).toMatchSnapshot();
});

test('Summ the parent with a complex tree of children', (): void => {
    const str1 = '1';
    const str2 = '2';
    const str3 = '3';
    const str4 = '4';
    const str5 = '5';
    const expected = '656';
    const el = (
        <Summ str={str1}>
            <Summ str={str2}>
                <Summ str={str3}></Summ>
            </Summ>
            <Summ str={str4}></Summ>
            <Summ str={str5}></Summ>
        </Summ>
    );
    const sh = mount(el);
    expect(sh.text()).toBe(expected);
    expect(sh).toMatchSnapshot();
});
