
import * as React from 'react';
import { render } from 'react-dom';

import { Summ } from './Summ';

render(
    <Summ str="1">
        <Summ str="2">
            <Summ str="3"></Summ>
        </Summ>
        <Summ str="4"></Summ>
        <Summ str="5"></Summ>
    </Summ>,
    document.getElementById("root")
);
