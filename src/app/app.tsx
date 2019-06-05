
import * as React from 'react';
import { render } from 'react-dom';

import { Summ } from './Summ';
import { Counter } from './Counter';

render(
    <div>
        <Summ v={1}>
            <Summ v={2}>
                <Summ v={3}></Summ>
            </Summ>
            <Summ v={4}></Summ>
            <Summ v={5}></Summ>
        </Summ>
        <Counter v={8} />
    </div>,
    document.getElementById("root")
);
