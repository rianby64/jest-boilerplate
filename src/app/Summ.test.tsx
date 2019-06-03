
import * as React from 'react';
import { mount } from 'enzyme';
import { Summ } from './Summ';

test('Summ exists', (): void => {
    const el = (<Summ v={0}></Summ>);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('Summ accepts one parameter', (): void => {
    const v = 2;
    const el = (<Summ v={v}></Summ>);
    const sh = mount(el);
    expect(sh.text()).toBe(v.toString());
    expect(sh).toMatchSnapshot();
});

test('Summ the parent with its soley child', (): void => {
    const v1 = 2;
    const v2 = 6;
    const expected = v1 + Number(v2);
    const el = (
        <Summ v={v1}>
            <Summ v={v2}></Summ>
        </Summ>
    );
    const sh = mount(el);
    expect(sh.text()).toBe(expected.toString());
    expect(sh).toMatchSnapshot();
});

test('Summ te parent with its two nested children', (): void => {
    const v1 = 2;
    const v2 = 6;
    const v3 = 3;
    const expected = Number(v1) + Number(v2) + Number(v3);
    const el = (
        <Summ v={v1}>
            <Summ v={v2}>
                <Summ v={v3}></Summ>
            </Summ>
        </Summ>
    );
    const sh = mount(el);
    expect(sh.text()).toBe(expected.toString());
    expect(sh).toMatchSnapshot();
});

test('Summ the parent with its two children separately', (): void => {
    const v1 = 1;
    const v2 = 2;
    const v3 = 3;
    const expected = 34;
    const el = (
        <Summ v={v1}>
            <Summ v={v2}></Summ>
            <Summ v={v3}></Summ>
        </Summ>
    );
    const sh = mount(el);
    expect(sh.text()).toBe(expected.toString());
    expect(sh).toMatchSnapshot();
});

test('Summ the parent with a complex tree of children', (): void => {
    const v1 = 1;
    const v2 = 2;
    const v3 = 3;
    const v4 = 4;
    const v5 = 5;
    const expected = 656;
    const el = (
        <Summ v={v1}>
            <Summ v={v2}>
                <Summ v={v3}></Summ>
            </Summ>
            <Summ v={v4}></Summ>
            <Summ v={v5}></Summ>
        </Summ>
    );
    const sh = mount(el);
    expect(sh.text()).toBe(expected.toString());
    expect(sh).toMatchSnapshot();
});
