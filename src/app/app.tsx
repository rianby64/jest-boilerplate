
import * as React from 'react';
import { render } from 'react-dom';

import { Summ } from './Summ';

render(
    <Summ v={1}>
        <Summ v={2}>
            <Summ v={3}></Summ>
        </Summ>
        <Summ v={4}></Summ>
        <Summ v={5}></Summ>
    </Summ>,
    document.getElementById("root")
);
