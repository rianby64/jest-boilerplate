
import * as React from "react";
import { useState } from "react";

interface CounterProps {
    v: number;
}

export function Counter(props: CounterProps) {
    const [counter, setCounter] = useState(props.v);

    function handleClick(): void {
        setCounter(counter + 1);
    }

    return (
        <div>
            <span>{counter}</span>
            <button onClick={handleClick}>Increase</button>
        </div>
    )
}
