
import * as React from 'react';

type SummType = React.ReactElement<SummProps>

interface SummProps {
    children?: SummType | SummType[];
    v: number;
}

export const Summ =
(props: SummProps): SummType => {
    const k = props.v;

    if (Array.isArray(props.children)) {
        return (
            <div>
                { props.children.map((child: SummType, key: number): SummType =>
                    <Summ key={key.toString()} v={k + child.props.v}>
                        { child.props.children }
                    </Summ>)}
            </div>
        );
    }
    const i = k + (props.children ? props.children.props.v : 0);
    return (
        <div>
            {props.children ?
                <Summ v={i}>
                    { props.children.props.children }
                </Summ>
                : k}
        </div>
    );
}
