
import * as React from 'react';

interface CounterProps {
    v: number;
}

interface CounterState {
    value: number;
}

export class Counter extends React.Component<CounterProps> {

    public state: CounterState = {
        value: this.props.v
    }

    private increaseCounter = (): void => {
        this.setState((state: CounterState): CounterState => {
            return {
                ...state,
                value: 1 + state.value
            };
        });
    }

    public render(): JSX.Element {
        return (
            <div>
                <span>{this.state.value}</span>
                <button onClick={this.increaseCounter}>Increase</button>
            </div>
        );
    }
}
